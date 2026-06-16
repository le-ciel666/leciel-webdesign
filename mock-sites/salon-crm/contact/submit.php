<?php
declare(strict_types=1);

/* =====================================================================
   無料デモお申し込みフォーム送信（SMTP認証方式 / WP Mail SMTP と同じ仕組み）
   ---------------------------------------------------------------------
   ・外部サービス不要。サーバーのメールアカウントで認証して送るため確実。
   ・認証情報（パスワード等）は同じ階層の _secrets.php に置く。
     _secrets.php は Git にコミットせず、サーバーへ手動アップロードする。
   ・別サーバー（クライアント）へ移す場合も、_secrets.php を差し替えるだけ。
   ---------------------------------------------------------------------
   _secrets.php が定義する定数:
     SMTP_HOST      送信SMTPサーバー（例: smtp.lolipop.jp）
     SMTP_PORT      ポート（SSLなら465 / STARTTLSなら587）
     SMTP_SECURE    'ssl' か 'tls'
     SMTP_USER      ログインするメールアドレス（作成済みの実在アカウント）
     SMTP_PASS      そのパスワード
     MAIL_FROM      送信元アドレス（通常はSMTP_USERと同じ）
     MAIL_FROM_NAME 送信元の表示名
     MAIL_TO        通知の受信先アドレス
   ===================================================================== */

mb_internal_encoding('UTF-8');

$isAjax = isset($_SERVER['HTTP_X_REQUESTED_WITH'])
    && strtolower((string)$_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';

function esc(string $s): string {
    return htmlspecialchars($s, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

/** AJAXならJSON、通常POSTなら簡易ページを返して終了 */
function respond(bool $ok, string $message): void {
    global $isAjax;
    if ($isAjax) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode(['ok' => $ok, 'message' => $message], JSON_UNESCAPED_UNICODE);
        exit;
    }
    header('Content-Type: text/html; charset=UTF-8');
    $title = $ok ? 'お申し込みを受け付けました' : '送信できませんでした';
    $color = $ok ? '#A37E36' : '#c0392b';
    echo '<!doctype html><html lang="ja"><head><meta charset="utf-8">'
       . '<meta name="viewport" content="width=device-width,initial-scale=1">'
       . '<meta name="robots" content="noindex,nofollow">'
       . '<title>' . esc($title) . '</title>'
       . '<style>body{font-family:-apple-system,BlinkMacSystemFont,"Hiragino Sans","Yu Gothic",sans-serif;'
       . 'background:#FBF9F3;color:#2C2823;display:flex;min-height:100vh;margin:0;align-items:center;'
       . 'justify-content:center;padding:24px}.box{background:#fff;max-width:520px;width:100%;'
       . 'padding:40px 32px;border-radius:14px;box-shadow:0 18px 50px rgba(120,95,40,.12);text-align:center}'
       . 'h1{font-size:20px;color:' . $color . ';margin:0 0 14px}p{font-size:14.5px;line-height:1.85;'
       . 'color:#5C554B;margin:0 0 24px}a{display:inline-block;background:linear-gradient(135deg,#C3A35F,#A37E36);'
       . 'color:#fff;text-decoration:none;padding:12px 24px;border-radius:999px;font-weight:700;font-size:14px}</style>'
       . '</head><body><div class="box"><h1>' . esc($title) . '</h1><p>' . esc($message) . '</p>'
       . '<a href="../#contact">フォームへ戻る</a></div></body></html>';
    exit;
}

/* ---- 自己完結のSMTPクライアント（認証つき送信。外部ライブラリ不要） ---- */
function smtp_send(string $subject, string $body, string $replyTo = ''): array {
    $transport = (SMTP_SECURE === 'ssl') ? 'ssl://' . SMTP_HOST : SMTP_HOST;
    $ctx = stream_context_create(['ssl' => ['verify_peer' => true, 'verify_peer_name' => true]]);
    $errno = 0; $errstr = '';
    $fp = @stream_socket_client($transport . ':' . SMTP_PORT, $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $ctx);
    if (!$fp) return [false, "SMTP接続に失敗しました（{$errstr}）"];
    stream_set_timeout($fp, 15);

    $read = static function () use ($fp): string {
        $data = '';
        while (($line = fgets($fp, 1024)) !== false) {
            $data .= $line;
            if (strlen($line) < 4 || $line[3] === ' ') break; // マルチライン応答の最終行
        }
        return $data;
    };
    $send = static function (string $c) use ($fp): void { fwrite($fp, $c . "\r\n"); };
    $code = static fn(string $r): string => substr($r, 0, 3);
    $ehloHost = preg_replace('/[^a-zA-Z0-9.\-]/', '', (string)(MAIL_FROM)); // 形式的なEHLO名

    if ($code($read()) !== '220') { fclose($fp); return [false, 'SMTP応答エラー（接続時）']; }
    $send('EHLO ' . $ehloHost); $read();

    if (SMTP_SECURE === 'tls') {
        $send('STARTTLS');
        if ($code($read()) !== '220') { fclose($fp); return [false, 'STARTTLS失敗']; }
        if (!stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT | STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT)) {
            fclose($fp); return [false, 'TLS開始に失敗しました'];
        }
        $send('EHLO ' . $ehloHost); $read();
    }

    $send('AUTH LOGIN');
    if ($code($read()) !== '334') { fclose($fp); return [false, 'AUTH非対応の応答']; }
    $send(base64_encode(SMTP_USER));
    if ($code($read()) !== '334') { fclose($fp); return [false, 'ユーザー名応答エラー']; }
    $send(base64_encode(SMTP_PASS));
    if ($code($read()) !== '235') { fclose($fp); return [false, 'SMTP認証に失敗（メールアドレス／パスワードをご確認ください）']; }

    $send('MAIL FROM:<' . MAIL_FROM . '>');
    if ($code($read()) !== '250') { fclose($fp); return [false, 'MAIL FROM拒否（送信元アドレスをご確認ください）']; }
    $send('RCPT TO:<' . MAIL_TO . '>');
    $rcpt = $code($read());
    if ($rcpt !== '250' && $rcpt !== '251') { fclose($fp); return [false, 'RCPT TO拒否（受信先アドレスをご確認ください）']; }
    $send('DATA');
    if ($code($read()) !== '354') { fclose($fp); return [false, 'DATA拒否']; }

    $headers = [
        'From: ' . mb_encode_mimeheader((string)MAIL_FROM_NAME, 'UTF-8', 'B') . ' <' . MAIL_FROM . '>',
        'To: <' . MAIL_TO . '>',
        'Subject: ' . mb_encode_mimeheader($subject, 'UTF-8', 'B'),
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        'Date: ' . date('r'),
    ];
    if ($replyTo !== '') {
        $headers[] = 'Reply-To: ' . $replyTo;
    }
    $message = implode("\r\n", $headers) . "\r\n\r\n" . chunk_split(base64_encode($body));
    $message = preg_replace('/^\./m', '..', $message); // ドットスタッフィング
    $send($message . "\r\n.");
    if ($code($read()) !== '250') { fclose($fp); return [false, '送信が拒否されました']; }
    $send('QUIT');
    fclose($fp);
    return [true, 'ok'];
}

/* ===== ここから本処理 ===== */
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    respond(false, '不正なアクセスです。');
}

/* 設定ファイル（認証情報）の読み込み */
$secretsPath = __DIR__ . '/_secrets.php';
if (!is_file($secretsPath)) {
    error_log('salon-crm contact: _secrets.php not found');
    http_response_code(500);
    respond(false, 'サーバーの送信設定が未完了です。（管理者へご連絡ください）');
}
require $secretsPath;
foreach (['SMTP_HOST','SMTP_PORT','SMTP_SECURE','SMTP_USER','SMTP_PASS','MAIL_FROM','MAIL_FROM_NAME','MAIL_TO'] as $c) {
    if (!defined($c)) {
        error_log("salon-crm contact: missing const $c in _secrets.php");
        http_response_code(500);
        respond(false, 'サーバーの送信設定が不足しています。（管理者へご連絡ください）');
    }
}

/* ハニーポット（bot対策）：人間は空。値があれば成功を装って破棄 */
if (trim((string)($_POST['website'] ?? '')) !== '') {
    respond(true, 'お申し込みを受け付けました。');
}

$name    = trim((string)($_POST['name']    ?? ''));
$company = trim((string)($_POST['company'] ?? ''));
$email   = trim((string)($_POST['email']   ?? ''));
$tel     = trim((string)($_POST['tel']     ?? ''));

$missing = [];
if ($name === '')    $missing[] = 'お名前';
if ($company === '') $missing[] = 'サロン名・会社名';
if ($email === '')   $missing[] = 'メールアドレス';
if ($missing) {
    http_response_code(422);
    respond(false, '次の項目をご確認ください：' . implode('、', $missing));
}
if (!preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/', $email)) {
    http_response_code(422);
    respond(false, 'メールアドレスの形式が正しくありません。');
}
if (mb_strlen($name) > 100 || mb_strlen($company) > 200 || mb_strlen($email) > 200 || mb_strlen($tel) > 50) {
    http_response_code(422);
    respond(false, '入力内容が長すぎます。');
}

/* ヘッダーインジェクション対策（Reply-Toに使う値の改行除去） */
$replyTo = str_replace(["\r", "\n"], '', $email);
$now = (new DateTime('now', new DateTimeZone('Asia/Tokyo')))->format('Y/m/d H:i:s');

$subject = '【QuickCRM（サロン）】無料デモのお申し込み（' . $name . '様）';
$body = implode("\n", [
    'サロン向けQuickCRMサイトの「無料デモのお申し込み」フォームから送信がありました。',
    '受信日時: ' . $now,
    '',
    '■お名前',          $name, '',
    '■サロン名・会社名', $company, '',
    '■メールアドレス',   $email, '',
    '■お電話番号',       ($tel !== '' ? $tel : '（未入力）'), '',
    '------------------------------',
    'IPアドレス: ' . ($_SERVER['REMOTE_ADDR'] ?? '-'),
]);

[$ok, $detail] = smtp_send($subject, $body, $replyTo);

if (!$ok) {
    error_log('salon-crm contact smtp failed: ' . $detail);
    http_response_code(502);
    respond(false, '送信に失敗しました。お手数ですが、時間をおいて再度お試しください。');
}

respond(true, 'お申し込みを受け付けました。担当より2営業日以内にご連絡いたします。');
