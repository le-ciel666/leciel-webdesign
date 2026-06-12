# あずさ会計事務所 — ロリポップ（WordPress）公開手順

公開先: **https://leciel-webdesign.com/mock-sites/azusa/**
（他の静的モックと同じ「既存ドメインのサブディレクトリ」配置。ただし中身は WordPress）

> ⚠️ 重要：これは WordPress なので、静的サイト用の GitHub Actions「Deploy to Lolipop」では公開しない。
> その同期に乗せるとサーバー側の WP 本体が上書き・削除される。
> → `deploy.yml` の除外に `mock-sites/azusa/**` を追加済み（blueport / prime-networks と同じ扱い）。

---

## 全体の流れ

1. ロリポップに WordPress を「簡単インストール」（DB・WP本体・管理者ができる）
2. テーマ ZIP（`dist/azusa-theme.zip`）を管理画面からアップロード＆有効化（→ 固定ページ自動生成）
3. パーマリンクを設定
4. 表示確認

ローカルの Docker は開発・確認用。サーバーには **テーマ ZIP だけ**を持っていく。

---

## 1. WordPress を簡単インストール

ロリポップ・ユーザー専用ページ → **サイト作成ツール → WordPress 簡単インストール**

| 項目 | 設定 |
|------|------|
| サイトURL | `leciel-webdesign.com` ＋ サブディレクトリ `mock-sites/azusa` |
| 利用データベース | 新規自動作成（または空きDBを選択） |
| サイトのタイトル | あずさ会計事務所 |
| ユーザー名 / パスワード | 任意（控えておく） |
| メールアドレス | 自分の連絡先 |
| 検索エンジン除外（noindex） | **デモなら ON 推奨**（実公開なら OFF） |

> WordPress 簡単インストールは **ライトプラン以上**が必要。表示速度を詰めるなら**ハイスピード**が望ましい。
> インストール先 `mock-sites/azusa` は、leciel-webdesign.com の公開フォルダ（サーバーの `/leciel/`）配下になる。

インストール後、`https://leciel-webdesign.com/mock-sites/azusa/wp-admin/` でログインできることを確認。

## 2. テーマをアップロード＆有効化

1. ローカルでZIPを最新化（テーマを更新したとき）:
   ```bash
   cd mock-sites/azusa && cd wp-content/themes && \
   rm -f ../../dist/azusa-theme.zip && zip -rq ../../dist/azusa-theme.zip azusa -x '*.DS_Store'
   ```
2. 管理画面 → **外観 → テーマ → 新規追加 → テーマのアップロード** → `dist/azusa-theme.zip` を選択 → インストール
3. **有効化**

> 有効化した瞬間に `inc/seed.php` が動き、固定ページ（事業内容・会社概要・代表挨拶・お問い合わせ）と
> フロントページ設定、ナビ、画像（テーマ同梱WebP）まで自動でセットされる。手作業の投稿作成は不要。
> うまく出ない場合は **ツール → 「あずさ 初期データ」→ 再生成** を押す。

## 3. パーマリンク

**設定 → パーマリンク → 「投稿名」（/%postname%/）→ 変更を保存**
（ページが 404 になる場合はここを保存し直すと直る）

## 4. 表示確認

- トップ: https://leciel-webdesign.com/mock-sites/azusa/
- 事業内容 / 会社概要 / 代表挨拶 / お問い合わせ の各ページ
- 画像・地図（Google マップ埋め込み）・スマホ表示・問い合わせフォームの完了表示

---

## 公開後の編集（クライアント運用）

- **外観 → カスタマイズ → 「あずさ｜事務所情報 / 写真」** で TEL・住所・営業時間・地図キーワード・写真を変更
- 文章・固定ページは通常どおり管理画面から編集可能

## 注意 / 未対応

- **お問い合わせフォームの送信（メール）は未接続**。本番運用するなら Contact Form 7 等のプラグイン、
  または本リポジトリの `ai_organization/templates/contact-form/`（Resend）方式を組み込む。
- GA4 はテーマに leciel の測定ID（G-VEMHY2G58C）が埋め込まれている。
  実クライアント公開時は `header.php` のIDを差し替える。
- テーマ内の `<script>`（GA4）は **ZIPアップロード**で入るので問題なし。
  ただし管理画面の「テーマエディター」から `<script>` を保存しようとすると
  ロリポップWAFに 403 でブロックされることがある（編集はFTP/ZIP差し替えで行う）。
- 画像はすべて WebP（テーマ同梱）。差し替え時も WebP 推奨。

## 更新のたびにやること（テーマを直したら）

1. ローカルで直す → 上記コマンドで ZIP 再作成
2. 管理画面から ZIP を上書きアップロード（「テーマを更新」）
   - もしくは FTP で `/leciel/mock-sites/azusa/wp-content/themes/azusa/` を直接差し替え
3. GitHub の `Deploy to Lolipop` は **この WP には触れない**（除外済み）ので実行してOK
