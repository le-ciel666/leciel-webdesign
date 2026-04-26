<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$name    = htmlspecialchars(trim($_POST['name'] ?? ''), ENT_QUOTES, 'UTF-8');
$email   = htmlspecialchars(trim($_POST['email'] ?? ''), ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8');

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

$to      = 'noriyoshi.aikawa@gmail.com';
$subject = mb_encode_mimeheader('【LE CIEL WEB DESIGN】お問い合わせ：' . $name . '様', 'UTF-8', 'B');
$body    = "お名前: {$name}\nメールアドレス: {$email}\n\n相談内容:\n{$message}";
$headers = implode("\r\n", [
    'From: LE CIEL WEB DESIGN <no-reply@leciel-webdesign.com>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
]);

$result = mail($to, $subject, base64_encode($body), $headers);

if ($result) {
    echo json_encode(['success' => true, 'message' => 'お問い合わせを受け付けました。2〜3営業日以内にご連絡いたします。']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => '送信に失敗しました。直接メール（noriyoshi.aikawa@gmail.com）にてご連絡ください。']);
}
