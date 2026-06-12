# あずさ会計事務所 — WordPress モック

東京・渋谷の税理士事務所を想定したコーポレートサイトの WordPress 版モック。
ネイビー×ゴールドの上質なゴシックデザインを、固定ページ構成のカスタムテーマ `azusa` で再現している。

## 起動

```bash
colima start          # Docker エンジン（停止していれば）
./setup.sh            # コンテナ起動 → WP インストール → テーマ有効化 → 固定ページ生成
```

- 公開URL : http://localhost:8082/
- 管理画面 : http://localhost:8082/wp-admin/  （admin / admin12345）

停止 / 削除:

```bash
docker compose down          # 停止（データは残る）
docker compose down -v       # 完全削除（DB・WPコアごと）
```

## 構成

| ページ | スラッグ | テンプレート |
|--------|----------|--------------|
| TOP | `home`（フロントページ） | `front-page.php` |
| 事業内容 | `services` | `page-services.php` |
| 会社概要 | `company` | `page-company.php` |
| 代表挨拶 | `greeting` | `page-greeting.php` |
| お問い合わせ | `contact` | `page-contact.php` |

固定ページとフロントページ設定は、テーマ有効化時に `inc/seed.php` が自動生成する
（管理画面 → ツール → 「あずさ 初期データ」から再生成も可能）。

## 管理画面から更新できるもの（外観 → カスタマイズ）

- **事務所情報**: TEL / FAX / 郵便番号 / 住所 / 営業時間 / 受付時間表記 / 地図の検索キーワード
- **写真**: TOPメインビジュアル・代表ポートレート（TOP/代表挨拶）・オフィス外観・事業内容4枚
  - 未設定の間はテーマ同梱の生成写真を表示。管理画面から任意の写真へ差し替え可能
- アクセスの地図は Google マップ埋め込み（APIキー不要）

## 注意 / 未対応

- お問い合わせフォームはフロント側のバリデーション＋完了表示まで。**送信バックエンド（メール送信）は未接続**。
  本番化する際は Resend 等を PHP（`admin-post` / REST）で実装する。
- Web フォント（Zen Kaku Gothic New / Jost）を読み込んでいる。デザイン優先のため採用しているが、
  PageSpeed を詰める場合は和文フォントの扱いを要検討（`DESIGN.md` / 既存メモ参照）。
- 添付の `support.js`（dc-runtime）/ `image-slot.js` は Claude デザインキャンバス専用ランタイムのため
  本テーマでは不使用。写真は上記カスタマイザー方式に置き換えている。
