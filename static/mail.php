<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');

mb_language('ja');
mb_internal_encoding('UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$name     = htmlspecialchars(trim($_POST['name']     ?? ''), ENT_QUOTES, 'UTF-8');
$email    = htmlspecialchars(trim($_POST['email']    ?? ''), ENT_QUOTES, 'UTF-8');
$message  = htmlspecialchars(trim($_POST['message']  ?? ''), ENT_QUOTES, 'UTF-8');
$business = htmlspecialchars(trim($_POST['business'] ?? ''), ENT_QUOTES, 'UTF-8');
$siteType = htmlspecialchars(trim($_POST['siteType'] ?? ''), ENT_QUOTES, 'UTF-8');
$budget   = htmlspecialchars(trim($_POST['budget']   ?? ''), ENT_QUOTES, 'UTF-8');
$deadline = htmlspecialchars(trim($_POST['deadline'] ?? ''), ENT_QUOTES, 'UTF-8');

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => '必須項目が未入力です']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'メールアドレスが正しくありません']);
    exit;
}

$fromAddress = 'no-reply@leciel-webdesign.com';
$fromName    = 'LE CIEL WEB DESIGN';

// 管理者宛メール
$adminTo      = 'noriyoshi.aikawa@gmail.com';
$adminSubject = mb_encode_mimeheader('【LE CIEL WEB DESIGN】お問い合わせ：' . $name . '様', 'UTF-8', 'B');
$adminBody    = "お名前: {$name}\nメールアドレス: {$email}\n事業内容: {$business}\n作りたいサイト: {$siteType}\nご予算: {$budget}\n希望納期: {$deadline}\n\n相談内容:\n{$message}";
$adminHeaders = implode("\r\n", [
    "From: {$fromName} <{$fromAddress}>",
    "Reply-To: {$email}",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
]);
mail($adminTo, $adminSubject, chunk_split(base64_encode($adminBody)), $adminHeaders, "-f{$fromAddress}");

// 自動返信メール（お客様宛）
$replySubject = mb_encode_mimeheader('【LE CIEL WEB DESIGN】お問い合わせを承りました', 'UTF-8', 'B');
$replyBody    = <<<EOT
{$name} 様

この度はLE CIEL WEB DESIGNへお問い合わせいただき、誠にありがとうございます。
以下の内容でお問い合わせを受け付けました。

2〜3営業日以内にご連絡いたしますので、今しばらくお待ちください。

──────────────────────────
■ お名前
{$name}

■ メールアドレス
{$email}

■ 事業内容
{$business}

■ 作りたいサイト
{$siteType}

■ ご予算
{$budget}

■ 希望納期
{$deadline}

■ 相談内容
{$message}
──────────────────────────

※このメールは自動送信です。返信はできませんのでご了承ください。

LE CIEL WEB DESIGN
https://leciel-webdesign.com
EOT;

$replyHeaders = implode("\r\n", [
    "From: {$fromName} <{$fromAddress}>",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
]);
$replyResult = mail($email, $replySubject, chunk_split(base64_encode($replyBody)), $replyHeaders, "-f{$fromAddress}");

if ($replyResult) {
    echo json_encode(['success' => true, 'message' => 'お問い合わせを受け付けました。確認メールをお送りしましたのでご確認ください。']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => '送信に失敗しました。直接メール（noriyoshi.aikawa@gmail.com）にてご連絡ください。']);
}
