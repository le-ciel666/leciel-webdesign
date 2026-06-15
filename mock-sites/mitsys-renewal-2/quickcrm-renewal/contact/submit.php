<?php
declare(strict_types=1);

/* =====================================================================
   お問い合わせフォーム送信処理（PHP mail() / 外部サービス・APIキー不要）
   ---------------------------------------------------------------------
   ★納品時に必ず確認・変更する設定（下記 4 つ）
     TO_EMAIL   : 問い合わせの通知先（クライアントの受信用メールアドレス）
     FROM_EMAIL : 送信元アドレス。このサイトと「同じドメイン」の実在アドレス推奨。
                  別ドメインや無効アドレスにすると迷惑メール判定・不達の原因に。
     FROM_NAME  : 送信元の表示名
     SITE_URL   : サイトURL（メール署名に使用）
   ---------------------------------------------------------------------
   設置条件: PHP が動作するサーバーに index.html と同じ階層へ置くだけ。
   ===================================================================== */
const TO_EMAIL   = 'aikawa@leciel-webdesign.com';  // 通知の受信先（一旦こちら。納品時にクライアントの受信先へ変更）
const FROM_EMAIL = 'noreply@mitsys.co.jp';     // ★送信元（自ドメインの実在アドレス）
const FROM_NAME  = 'QuickCRM お問い合わせ';
const SITE_NAME  = 'QuickCRM';
const SITE_URL   = 'https://www.mitsys.co.jp/';

mb_language('Japanese');
mb_internal_encoding('UTF-8');

$isAjax = isset($_SERVER['HTTP_X_REQUESTED_WITH'])
    && strtolower((string)$_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';

function esc(string $s): string {
    return htmlspecialchars($s, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

/** AJAX なら JSON、通常POSTなら簡易な完了/エラーページを返して終了 */
function respond(bool $ok, string $message): void {
    global $isAjax;
    if ($isAjax) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode(['ok' => $ok, 'message' => $message], JSON_UNESCAPED_UNICODE);
        exit;
    }
    header('Content-Type: text/html; charset=UTF-8');
    $title = $ok ? 'お問い合わせを受け付けました' : '送信できませんでした';
    $color = $ok ? '#2f8a50' : '#c0392b';
    echo '<!doctype html><html lang="ja"><head><meta charset="utf-8">'
       . '<meta name="viewport" content="width=device-width,initial-scale=1">'
       . '<meta name="robots" content="noindex,nofollow">'
       . '<title>' . esc($title) . '｜' . esc(SITE_NAME) . '</title>'
       . '<style>body{font-family:-apple-system,BlinkMacSystemFont,"Hiragino Sans","Yu Gothic",sans-serif;'
       . 'background:#f4f7f4;color:#222;display:flex;min-height:100vh;margin:0;align-items:center;'
       . 'justify-content:center;padding:24px}.box{background:#fff;max-width:520px;width:100%;'
       . 'padding:40px 32px;border-radius:14px;box-shadow:0 18px 50px rgba(0,0,0,.08);text-align:center}'
       . 'h1{font-size:20px;color:' . $color . ';margin:0 0 14px}p{font-size:14.5px;line-height:1.85;'
       . 'color:#444;margin:0 0 24px}a{display:inline-block;background:#2f8a50;color:#fff;'
       . 'text-decoration:none;padding:12px 24px;border-radius:999px;font-weight:700;font-size:14px}</style>'
       . '</head><body><div class="box"><h1>' . esc($title) . '</h1><p>' . esc($message) . '</p>'
       . '<a href="./">フォームへ戻る</a></div></body></html>';
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    respond(false, '不正なアクセスです。');
}

/* ハニーポット（bot対策）：人間は空のまま。値が入っていれば成功を装って破棄する */
if (trim((string)($_POST['website'] ?? '')) !== '') {
    respond(true, 'お問い合わせを受け付けました。');
}

$company = trim((string)($_POST['company'] ?? ''));
$name    = trim((string)($_POST['name']    ?? ''));
$email   = trim((string)($_POST['email']   ?? ''));
$tel     = trim((string)($_POST['tel']     ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$agree   = (string)($_POST['agree'] ?? '');

/* 必須チェック（クライアント側JSとは別に、サーバー側でも必ず検証する） */
$missing = [];
if ($company === '') $missing[] = '会社名';
if ($name === '')    $missing[] = 'お名前';
if ($email === '')   $missing[] = 'メールアドレス';
if ($tel === '')     $missing[] = '電話番号';
if ($message === '') $missing[] = 'お問い合わせ内容';
if ($agree === '')   $missing[] = '個人情報の取り扱いへの同意';
if ($missing) {
    http_response_code(422);
    respond(false, '次の項目をご確認ください：' . implode('、', $missing));
}
if (!preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/', $email)) {
    http_response_code(422);
    respond(false, 'メールアドレスの形式が正しくありません。');
}
if (mb_strlen($company) > 200 || mb_strlen($name) > 100 || mb_strlen($email) > 200
    || mb_strlen($tel) > 50 || mb_strlen($message) > 5000) {
    http_response_code(422);
    respond(false, '入力内容が長すぎます。');
}

/* メールヘッダーインジェクション対策：ヘッダーに使う値から改行を除去 */
$noNl = static fn(string $v): string => str_replace(["\r", "\n"], '', $v);
$emailHdr = $noNl($email);
$nameHdr  = $noNl($name);

$now = (new DateTime('now', new DateTimeZone('Asia/Tokyo')))->format('Y/m/d H:i:s');

/* ---- ① 管理者通知メール（必須） ---- */
$adminSubject = '【' . SITE_NAME . '】お問い合わせがありました（' . $name . '様）';
$adminBody = implode("\n", [
    SITE_NAME . ' サイトのお問い合わせフォームから送信がありました。',
    '受信日時: ' . $now,
    '',
    '■会社名',
    $company,
    '',
    '■お名前',
    $name,
    '',
    '■メールアドレス',
    $email,
    '',
    '■電話番号',
    $tel,
    '',
    '■お問い合わせ内容',
    $message,
    '',
    '------------------------------',
    'IPアドレス: ' . ($_SERVER['REMOTE_ADDR'] ?? '-'),
    SITE_URL,
]);
$adminHeaders = 'From: ' . mb_encode_mimeheader(FROM_NAME) . ' <' . FROM_EMAIL . '>' . "\r\n"
    . 'Reply-To: ' . mb_encode_mimeheader($nameHdr) . ' <' . $emailHdr . '>';

/* 第5引数 -f は Return-Path 指定（到達率向上）。host が許可しない場合は外す */
$sent = mb_send_mail(TO_EMAIL, $adminSubject, $adminBody, $adminHeaders, '-f' . FROM_EMAIL);

if (!$sent) {
    error_log('quickcrm contact submit.php: admin mail() failed');
    http_response_code(502);
    respond(false, '送信に失敗しました。お手数ですが、時間をおいて再度お試しください。');
}

/* ---- ② 自動返信メール（任意・失敗しても処理は継続） ---- */
$userSubject = '【' . SITE_NAME . '】お問い合わせを承りました';
$userBody = implode("\n", [
    $name . ' 様',
    '',
    'このたびは ' . SITE_NAME . ' へお問い合わせいただき、誠にありがとうございます。',
    '以下の内容で承りました。担当より2営業日以内にご連絡いたします。',
    '',
    '■会社名: ' . $company,
    '■お名前: ' . $name,
    '■メールアドレス: ' . $email,
    '■電話番号: ' . $tel,
    '■お問い合わせ内容:',
    $message,
    '',
    '※本メールはシステムからの自動返信です。ご返信での内容変更は承れません。',
    '',
    '------------------------------',
    SITE_NAME,
    SITE_URL,
]);
$userHeaders = 'From: ' . mb_encode_mimeheader(FROM_NAME) . ' <' . FROM_EMAIL . '>' . "\r\n"
    . 'Reply-To: ' . FROM_EMAIL;
@mb_send_mail($emailHdr, $userSubject, $userBody, $userHeaders, '-f' . FROM_EMAIL);

respond(true, 'お問い合わせを受け付けました。担当より2営業日以内にご連絡いたします。');
