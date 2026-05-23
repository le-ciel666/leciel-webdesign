<?php
declare(strict_types=1);

// =====================================================================
// 【新規クライアント案件で必ず書き換える定数】
// =====================================================================
// TO_EMAIL    : 管理者通知の受信先（クライアントの担当者メール）
// FROM_EMAIL  : 送信元（Resendで認証済みドメインの no-reply@ など）
// SITE_NAME   : サイト名（メール件名・本文に使用）
// SITE_URL    : サイトURL（メール署名に使用）
// =====================================================================
const TO_EMAIL    = 'owner@example.com';
const FROM_EMAIL  = 'EXAMPLE SHOP <no-reply@example.com>';
const SITE_NAME   = 'EXAMPLE SHOP';
const SITE_URL    = 'https://example.com/';

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

function esc(string $s): string {
    return htmlspecialchars($s, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

function nl2br_esc(string $s): string {
    return nl2br(esc($s));
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Method Not Allowed']);
}

$secretsPath = __DIR__ . '/_secrets.php';
if (!is_file($secretsPath)) {
    error_log('contact.php: _secrets.php not found');
    respond(500, ['ok' => false, 'error' => 'Server is not configured.']);
}
require $secretsPath;

if (!defined('RESEND_API_KEY') || RESEND_API_KEY === '') {
    error_log('contact.php: RESEND_API_KEY is empty');
    respond(500, ['ok' => false, 'error' => 'Server is not configured.']);
}

$raw = file_get_contents('php://input') ?: '';
$body = json_decode($raw, true);
if (!is_array($body)) {
    $body = $_POST;
}

$name          = trim((string)($body['name']          ?? ''));
$email         = trim((string)($body['email']         ?? ''));
$businessType  = trim((string)($body['businessType']  ?? ''));
$message       = trim((string)($body['message']       ?? ''));
$referenceUrl  = trim((string)($body['referenceUrl']  ?? ''));

if ($name === '' || $email === '' || $message === '') {
    respond(400, ['ok' => false, 'error' => '必須項目が入力されていません。']);
}
if (!preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/', $email)) {
    respond(400, ['ok' => false, 'error' => 'メールアドレスの形式が正しくありません。']);
}
if (mb_strlen($name) > 200 || mb_strlen($email) > 200 || mb_strlen($message) > 5000 || mb_strlen($referenceUrl) > 500) {
    respond(400, ['ok' => false, 'error' => '入力内容が長すぎます。']);
}

$now = (new DateTime('now', new DateTimeZone('Asia/Tokyo')))->format('Y/m/d H:i:s');

$adminSubject = '【' . SITE_NAME . '】お問い合わせ：' . $name;
$adminHtml = '
<div style="font-family: -apple-system, BlinkMacSystemFont, \'Hiragino Sans\', \'Yu Gothic\', sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; color: #222;">
  <h2 style="border-bottom: 2px solid #333; padding-bottom: 10px; font-size: 18px;">' . esc(SITE_NAME) . '｜お問い合わせ受信</h2>
  <p style="font-size: 13px; color: #666;">受信日時: ' . esc($now) . '</p>
  <table style="width:100%; border-collapse: collapse; font-size: 14px; margin-top: 16px;">
    <tr><th align="left" style="padding:10px; background:#f5f5f5; width: 32%; border:1px solid #ddd;">お名前 / 会社名</th><td style="padding:10px; border:1px solid #ddd;">' . esc($name) . '</td></tr>
    <tr><th align="left" style="padding:10px; background:#f5f5f5; border:1px solid #ddd;">メールアドレス</th><td style="padding:10px; border:1px solid #ddd;">' . esc($email) . '</td></tr>
    <tr><th align="left" style="padding:10px; background:#f5f5f5; border:1px solid #ddd;">業種・業態</th><td style="padding:10px; border:1px solid #ddd;">' . esc($businessType !== '' ? $businessType : '未入力') . '</td></tr>
    <tr><th align="left" style="padding:10px; background:#f5f5f5; border:1px solid #ddd; vertical-align: top;">ご相談内容</th><td style="padding:10px; border:1px solid #ddd;">' . nl2br_esc($message) . '</td></tr>
    <tr><th align="left" style="padding:10px; background:#f5f5f5; border:1px solid #ddd;">参考サイトURL</th><td style="padding:10px; border:1px solid #ddd;">' . esc($referenceUrl !== '' ? $referenceUrl : '未入力') . '</td></tr>
  </table>
  <p style="margin-top: 24px; font-size: 12px; color: #888;">このメールは ' . esc(SITE_URL) . ' のお問い合わせフォームから自動送信されました。</p>
</div>';

$adminText = implode("\n", [
    SITE_NAME . '｜お問い合わせ受信',
    '受信日時: ' . $now,
    '',
    'お名前 / 会社名: ' . $name,
    'メールアドレス: ' . $email,
    '業種・業態: ' . ($businessType !== '' ? $businessType : '未入力'),
    '参考サイトURL: ' . ($referenceUrl !== '' ? $referenceUrl : '未入力'),
    '',
    '【ご相談内容】',
    $message,
]);

$userSubject = '【' . SITE_NAME . '】お問い合わせを承りました';
$userHtml = '
<div style="font-family: -apple-system, BlinkMacSystemFont, \'Hiragino Sans\', \'Yu Gothic\', sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; color: #222; line-height: 1.8;">
  <div style="text-align:center; padding: 8px 0 20px; border-bottom: 1px solid #ddd;">
    <div style="font-family: Georgia, serif; letter-spacing: 0.24em; color: #333; font-size: 14px;">' . esc(SITE_NAME) . '</div>
  </div>
  <p style="margin-top: 24px;">' . esc($name) . ' 様</p>
  <p>このたびは ' . esc(SITE_NAME) . ' へ<br />お問い合わせいただき、誠にありがとうございます。</p>
  <p>以下の内容でお問い合わせを承りました。<br />内容を確認のうえ、担当より2営業日以内にご連絡差し上げます。<br />今しばらくお待ちくださいませ。</p>

  <div style="background:#f8f8f8; border:1px solid #ddd; padding: 18px 20px; margin: 24px 0; border-radius: 4px;">
    <p style="margin: 0 0 12px; font-weight: bold; color: #333; font-size: 13px; letter-spacing: 0.1em;">▼ お問い合わせ内容</p>
    <table style="width:100%; border-collapse: collapse; font-size: 13.5px;">
      <tr><td style="padding:6px 0; width: 36%; color: #666;">お名前 / 会社名</td><td style="padding:6px 0;">' . esc($name) . '</td></tr>
      <tr><td style="padding:6px 0; color: #666;">メールアドレス</td><td style="padding:6px 0;">' . esc($email) . '</td></tr>
      <tr><td style="padding:6px 0; color: #666;">業種・業態</td><td style="padding:6px 0;">' . esc($businessType !== '' ? $businessType : '未入力') . '</td></tr>
      <tr><td style="padding:6px 0; color: #666; vertical-align: top;">ご相談内容</td><td style="padding:6px 0;">' . nl2br_esc($message) . '</td></tr>
      <tr><td style="padding:6px 0; color: #666;">参考サイトURL</td><td style="padding:6px 0;">' . esc($referenceUrl !== '' ? $referenceUrl : '未入力') . '</td></tr>
    </table>
  </div>

  <p>なお、本メールはシステムからの自動返信です。<br />このメールへの返信ではお問い合わせの追加・修正はできませんので、<br />ご了承くださいませ。</p>

  <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #888; line-height: 1.7;">
    <div style="font-family: Georgia, serif; letter-spacing: 0.2em; color: #333; font-size: 12px; margin-bottom: 6px;">' . esc(SITE_NAME) . '</div>
    <div>Web: <a href="' . esc(SITE_URL) . '" style="color:#333; text-decoration:none;">' . esc(SITE_URL) . '</a></div>
    <div>Mail: <a href="mailto:' . esc(TO_EMAIL) . '" style="color:#333; text-decoration:none;">' . esc(TO_EMAIL) . '</a></div>
  </div>
</div>';

$userText = implode("\n", [
    $name . ' 様',
    '',
    'このたびは ' . SITE_NAME . ' へ',
    'お問い合わせいただき、誠にありがとうございます。',
    '',
    '以下の内容でお問い合わせを承りました。',
    '内容を確認のうえ、担当より2営業日以内にご連絡差し上げます。',
    '今しばらくお待ちくださいませ。',
    '',
    '▼ お問い合わせ内容',
    'お名前 / 会社名: ' . $name,
    'メールアドレス: ' . $email,
    '業種・業態: ' . ($businessType !== '' ? $businessType : '未入力'),
    'ご相談内容:',
    $message,
    '参考サイトURL: ' . ($referenceUrl !== '' ? $referenceUrl : '未入力'),
    '',
    '※ 本メールはシステムからの自動返信です。',
    '',
    '------------------------------',
    SITE_NAME,
    SITE_URL,
    TO_EMAIL,
]);

function send_via_resend(array $payload): array {
    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_HTTPHEADER     => [
            'Authorization: Bearer ' . RESEND_API_KEY,
            'Content-Type: application/json',
        ],
        CURLOPT_POSTFIELDS     => json_encode($payload, JSON_UNESCAPED_UNICODE),
        CURLOPT_TIMEOUT        => 15,
    ]);
    $response = curl_exec($ch);
    $httpCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $err      = curl_error($ch);
    curl_close($ch);
    return ['code' => $httpCode, 'body' => $response, 'err' => $err];
}

$adminResult = send_via_resend([
    'from'     => FROM_EMAIL,
    'to'       => [TO_EMAIL],
    'reply_to' => $email,
    'subject'  => $adminSubject,
    'html'     => $adminHtml,
    'text'     => $adminText,
]);

if ($adminResult['code'] < 200 || $adminResult['code'] >= 300) {
    error_log('contact.php admin send failed: ' . $adminResult['code'] . ' ' . $adminResult['body'] . ' ' . $adminResult['err']);
    respond(502, ['ok' => false, 'error' => 'メール送信に失敗しました。']);
}

$userResult = send_via_resend([
    'from'     => FROM_EMAIL,
    'to'       => [$email],
    'reply_to' => TO_EMAIL,
    'subject'  => $userSubject,
    'html'     => $userHtml,
    'text'     => $userText,
]);

if ($userResult['code'] < 200 || $userResult['code'] >= 300) {
    error_log('contact.php user send failed: ' . $userResult['code'] . ' ' . $userResult['body'] . ' ' . $userResult['err']);
}

respond(200, ['ok' => true]);
