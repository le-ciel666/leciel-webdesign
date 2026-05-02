<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /');
    exit;
}

mb_language('Japanese');
mb_internal_encoding('UTF-8');

$name    = trim($_POST['お名前'] ?? '');
$email   = trim($_POST['メールアドレス'] ?? '');
$type    = trim($_POST['業種・業態'] ?? '');
$message = trim($_POST['ご相談内容'] ?? '');
$url     = trim($_POST['参考URL'] ?? '');

if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: /#contact');
    exit;
}

$to      = 'aikawa@leciel-webdesign.com';
$subject = '【ルシエルウェブデザイン】お問い合わせ';

$body  = "お名前：{$name}\n";
$body .= "メールアドレス：{$email}\n";
$body .= "業種・業態：{$type}\n";
$body .= "\nご相談内容：\n{$message}\n";
if (!empty($url)) {
    $body .= "\n参考URL：{$url}\n";
}
$body .= "\n---\nルシエルウェブデザイン お問い合わせフォーム\nhttps://leciel-webdesign.com/\n";

$headers  = "From: noreply@leciel-webdesign.com\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$result = mb_send_mail($to, $subject, $body, $headers);

if ($result) {
    header('Location: /thanks.html');
} else {
    header('Location: /#contact?error=1');
}
exit;
