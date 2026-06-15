<?php
/* =====================================================================
   お問い合わせフォームの送信設定（SMTP認証）
   ---------------------------------------------------------------------
   ・このファイルは「雛形」です。中身を埋めて _secrets.php という名前で
     サーバーの同じフォルダ（…/quickcrm-renewal/contact/）に置いてください。
   ・_secrets.php は .gitignore 済み＝Gitにもデプロイにも載りません（安全）。
   ・別サーバー（クライアント）へ移す場合は、この値をそのサーバーの
     メールアカウント情報に差し替えるだけです。
   ---------------------------------------------------------------------
   ロリポップの場合の例（メール設定画面の値を入れてください）:
     SMTP_HOST = smtp.lolipop.jp
     SMTP_PORT = 465 / SMTP_SECURE = 'ssl'   （または 587 / 'tls'）
     SMTP_USER = 送信に使う実在メールアドレス（作成済みのもの）
     SMTP_PASS = そのメールアドレスのパスワード
   ===================================================================== */

define('SMTP_HOST',      'smtp.lolipop.jp');
define('SMTP_PORT',      465);
define('SMTP_SECURE',    'ssl');                       // 'ssl'(465) か 'tls'(587)
define('SMTP_USER',      'aikawa@leciel-webdesign.com'); // ログインするメールアドレス
define('SMTP_PASS',      'ここにパスワードを入力');        // ★そのアドレスのパスワード
define('MAIL_FROM',      'aikawa@leciel-webdesign.com'); // 送信元（通常はSMTP_USERと同じ）
define('MAIL_FROM_NAME', 'QuickCRM お問い合わせ');         // 送信元の表示名
define('MAIL_TO',        'aikawa@leciel-webdesign.com'); // 通知の受信先
