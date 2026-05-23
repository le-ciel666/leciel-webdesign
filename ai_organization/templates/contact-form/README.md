# お問い合わせフォーム テンプレート（PHP + Resend）

ロリポップ等のPHPホスティングで動く、Resend REST API経由のお問い合わせフォーム一式。
**クライアント案件ごとに独立したResendアカウントで運用する前提**。

本家 [leciel-webdesign.com](https://leciel-webdesign.com/) と同じ仕組み。

---

## ファイル構成

```
contact-form/
├── README.md                     ← このファイル
├── contact.php                   ← サーバー側処理（クライアントリポジトリにコピー、定数だけ書き換え）
├── _secrets.example.php          ← APIキー雛形（_secrets.php として複製しFTPアップロード）
├── .gitignore-snippet            ← クライアントリポジトリの .gitignore に追記する内容
├── deploy-exclude-snippet.yml    ← GitHub Actions deploy.yml の exclude に追記する内容
└── form-snippet.html             ← フォームHTML+CSS+JS（クライアントの index.html に貼り付け）
```

---

## クライアント案件のセットアップ手順

### 1. Resendアカウント作成・ドメイン認証

1. https://resend.com/ で **クライアント案件用に新規アカウント** を作成
   - クライアントのメールアドレス、または自分の `+クライアント名` エイリアス（例: `noriyoshi.aikawa+client-name@gmail.com`）で登録
   - 契約終了時に譲渡しやすいよう、最初からクライアント所有を前提に作るのもアリ
2. Domains > Add Domain でクライアントの独自ドメインを追加（例: `client-shop.com`）
3. 表示されたDNSレコード（SPF / DKIM）を **ムームードメイン** or **ロリポップ** のDNS管理画面で設定
4. Verify を押して認証完了を待つ（通常数分〜数十分）
5. API Keys > Create API Key で新規発行 → **キーを安全な場所に控える**（再表示不可）

### 2. クライアントリポジトリにファイル配置

```bash
# クライアントリポジトリのルートにコピー
cp contact.php /path/to/client-repo/
cp _secrets.example.php /path/to/client-repo/
```

### 3. `contact.php` の定数を書き換え

ファイル冒頭の4定数を編集:

```php
const TO_EMAIL    = 'owner@client-shop.com';                    // 受信先
const FROM_EMAIL  = 'CLIENT SHOP <no-reply@client-shop.com>';   // 送信元
const SITE_NAME   = 'CLIENT SHOP';                              // サイト名
const SITE_URL    = 'https://client-shop.com/';                 // サイトURL
```

### 4. `.gitignore` に追記

`.gitignore-snippet` の内容（`_secrets.php` の1行）を、クライアントリポジトリの `.gitignore` に追記。

### 5. GitHub Actions の FTPデプロイ exclude に追記

`deploy-exclude-snippet.yml` の内容（`_secrets.php` と `_secrets.example.php` の2行）を、`.github/workflows/deploy.yml` の FTPデプロイステップの `exclude:` に追加。

これをやらないと、次回デプロイ時に **サーバー上の `_secrets.php` が消える** ので超重要。

### 6. フォームを HTML に組み込み

`form-snippet.html` の3パート（CSS / HTML / JS）を、クライアントサイトの `index.html` の適切な場所に貼り付け。
デザイン（色、フォント、角丸など）はクライアントサイトのテーマに合わせて調整する。

`mailto:` の `CHANGE-ME@example.com` も忘れずクライアントの受信先メールに書き換え。

### 7. デプロイして本番反映

通常通り Push → GitHub Actions の Deploy で `contact.php` と `index.html` がサーバーに上がる。

### 8. `_secrets.php` を手動でFTPアップロード

ローカルで `_secrets.example.php` を `_secrets.php` にコピーし、`RESEND_API_KEY` に **手順1で発行した実キー** をセット:

```php
<?php
define('RESEND_API_KEY', 're_実際のキー');
```

このファイルをFTPで **`contact.php` と同じ階層** にアップロード（ロリポップのFTP管理画面 or FileZilla等）。

> サブドメインで動かす場合（例: ドキュメントルートが `/sub/`）、その階層に `_secrets.php` を配置すればOK。

### 9. 動作確認

```bash
curl -X POST https://client-shop.com/contact.php \
  -H "Content-Type: application/json" \
  -d '{"name":"テスト","email":"自分のメール","message":"テスト送信"}'
```

`{"ok":true}` が返り、`TO_EMAIL` と入力した自分のメール宛に2通届けば成功。

---

## トラブルシューティング

| 症状 | 原因と対処 |
|---|---|
| `{"ok":false,"error":"Server is not configured."}` | `_secrets.php` がサーバーにない、または `RESEND_API_KEY` が空。FTPで再配置 |
| `{"ok":false,"error":"メール送信に失敗しました。"}` | Resend側で拒否。原因はサーバーログ（`error_log`）を確認。多くは「ドメイン未認証」「APIキー無効」「Free枠の日次上限」 |
| 404 で contact.php に到達しない | デプロイ漏れ、またはサブディレクトリ設定。フォームの `fetch('/contact.php')` のパスを実際の配置に合わせる |
| 自動返信メールが届かない | 受信者のメールアドレスが正しいか、Resend Dashboard の Logs で送信ステータスを確認 |

---

## Resend枠の目安

- Free: 3,000通/月、100通/日 → 1問い合わせ=2通なので **約1,500件/月** さばける
- Pro ($20/月): 50,000通/月 → 約25,000件/月
- **クライアントごとに別アカウントを作っているので、枠は完全独立**

---

## 引き渡し時の注意

- Resendアカウント譲渡時は、ダッシュボード上で Owner を移管する
- APIキーは **新オーナーが作り直す** のが安全（旧キーをRevoke）
- `_secrets.php` の更新（新キーへの書き換え→再アップロード）を案内する
- ドメイン認証のDNS設定はそのままでOK（DNSはドメイン所有者側）
