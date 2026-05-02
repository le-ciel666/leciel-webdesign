<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /');
    exit;
}

function to_jis($str) {
    return mb_convert_encoding($str, 'ISO-2022-JP', 'UTF-8');
}
function mime_subject($str) {
    return '=?ISO-2022-JP?B?' . base64_encode(to_jis($str)) . '?=';
}

$name    = trim($_POST['お名前'] ?? '');
$email   = trim($_POST['メールアドレス'] ?? '');
$type    = trim($_POST['業種・業態'] ?? '');
$message = trim($_POST['ご相談内容'] ?? '');
$url     = trim($_POST['参考URL'] ?? '');

if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: /#contact');
    exit;
}

// ── 1. 管理者へ通知メール ──────────────────────────
$admin_to      = 'aikawa@leciel-webdesign.com';
$admin_subject = mime_subject('【ルシエルウェブデザイン】お問い合わせ');

$admin_body  = "お名前：{$name}\n";
$admin_body .= "メールアドレス：{$email}\n";
$admin_body .= "業種・業態：{$type}\n";
$admin_body .= "\nご相談内容：\n{$message}\n";
if (!empty($url)) {
    $admin_body .= "\n参考URL：{$url}\n";
}
$admin_body .= "\n---\nLE CIEL WEB DESIGN\nhttps://leciel-webdesign.com/\n";

$admin_headers  = "From: noreply@leciel-webdesign.com\r\n";
$admin_headers .= "Reply-To: {$email}\r\n";
$admin_headers .= "Content-Type: text/plain; charset=ISO-2022-JP\r\n";
$admin_headers .= "Content-Transfer-Encoding: 7bit\r\n";

$result = mail($admin_to, $admin_subject, to_jis($admin_body), $admin_headers);

// ── 2. お客様へ自動確認メール ──────────────────────
$auto_subject = mime_subject('【LE CIEL WEB DESIGN】お問い合わせを受け付けました');

$auto_body  = "{$name} 様\n\n";
$auto_body .= "この度はルシエルウェブデザインへのお問い合わせ、\n";
$auto_body .= "誠にありがとうございます。\n\n";
$auto_body .= "以下の内容でお問い合わせを受け付けました。\n";
$auto_body .= "内容を確認のうえ、2営業日以内にご連絡いたします。\n";
$auto_body .= "しばらくお待ちくださいませ。\n\n";
$auto_body .= "────────────────────\n";
$auto_body .= "【お問い合わせ内容】\n";
$auto_body .= "お名前：{$name}\n";
$auto_body .= "業種・業態：{$type}\n";
$auto_body .= "\nご相談内容：\n{$message}\n";
if (!empty($url)) {
    $auto_body .= "\n参考URL：{$url}\n";
}
$auto_body .= "────────────────────\n\n";
$auto_body .= "※ このメールは自動送信です。このメールへの返信はできません。\n";
$auto_body .= "   ご不明な点は aikawa@leciel-webdesign.com までご連絡ください。\n\n";
$auto_body .= "---\nLE CIEL WEB DESIGN\nhttps://leciel-webdesign.com/\n";

$auto_headers  = "From: LE CIEL WEB DESIGN <noreply@leciel-webdesign.com>\r\n";
$auto_headers .= "Content-Type: text/plain; charset=ISO-2022-JP\r\n";
$auto_headers .= "Content-Transfer-Encoding: 7bit\r\n";

mail($email, $auto_subject, to_jis($auto_body), $auto_headers);

header('Location: ' . ($result ? '/thanks.html' : '/#contact'));
exit;
