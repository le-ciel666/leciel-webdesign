<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /');
    exit;
}

function to_jis($str) {
    return mb_convert_encoding($str, 'ISO-2022-JP', 'UTF-8');
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

$to = 'aikawa@leciel-webdesign.com';

$subject = '=?ISO-2022-JP?B?' . base64_encode(to_jis('【ルシエルウェブデザイン】お問い合わせ')) . '?=';

$body  = "お名前：{$name}\n";
$body .= "メールアドレス：{$email}\n";
$body .= "業種・業態：{$type}\n";
$body .= "\nご相談内容：\n{$message}\n";
if (!empty($url)) {
    $body .= "\n参考URL：{$url}\n";
}
$body .= "\n---\nLE CIEL WEB DESIGN - Contact Form\nhttps://leciel-webdesign.com/\n";

$body = to_jis($body);

$headers  = "From: noreply@leciel-webdesign.com\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=ISO-2022-JP\r\n";
$headers .= "Content-Transfer-Encoding: 7bit\r\n";

$result = mail($to, $subject, $body, $headers);

header('Location: ' . ($result ? '/thanks.html' : '/#contact'));
exit;
