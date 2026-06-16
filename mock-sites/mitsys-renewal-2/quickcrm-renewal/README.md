# QuickCRM サイトリニューアル — Codex 引き渡しパッケージ

## ファイル構成

```
quickcrm-site/
├── index.html              ← メインのトップページ（Tweaks付き：開発・確認用）
├── index-no-tweaks.html    ← Tweaksパネル無しの同等版（本番公開用の出発点）
├── styles.css              ← 全スタイル（CSS変数でテーマ管理）
├── app.js                  ← ナビ／ドロワー／FAQ／reveal 等のスクリプト
├── tweaks-panel.jsx        ← Tweaksパネルの汎用コンポーネント
├── tweaks.jsx              ← QuickCRM 用 Tweaks 定義（Palette/Mood/Dark）
└── assets/
    ├── quickcrm-logo.png         ← ロゴ（通常）
    ├── quickcrm-logo-dark.png    ← ロゴ（ダークモード用 / 白抜き）
    ├── mit-system-logo.png       ← MITシステム研究所ロゴ
    └── mit-system-logo-dark.png  ← MITシステム研究所ロゴ（白抜き）
```

## 技術メモ

- **ブランドカラー**: `#63a538`（緑）。`styles.css` 冒頭の `:root` で
  `--brand` / `--brand-2` / `--brand-3` / `--brand-soft` / `--accent` を一括管理。
- **モバイルファースト**: 1カラム → タブレット → PC で段階的にグリッド展開。
  ブレークポイントは 520 / 680 / 920 / 1080 / 1280 / 1400px。
- **SEO**:
  - JSON-LD: Organization / SoftwareApplication / FAQPage / BreadcrumbList
  - OG / Twitter カードメタ
  - セマンティックHTML（`header / main / section / article / footer`）
  - 見出し階層 h1→h2→h3 を保持
  - 画像はすべて `width / height` 指定で CLS 対策
- **アクセシビリティ**:
  - スキップリンク `.sr` あり
  - 全てのアイコンは `aria-hidden` または `aria-label` 付与
  - `prefers-reduced-motion` 対応
- **依存**:
  - 外部CDN: Google Fonts（Inter / Noto Sans JP）
  - React / Babel: Tweaksパネルのみで使用。本番公開時は
    `index-no-tweaks.html` を使うか、`index.html` の末尾にある
    Tweaks関連の `<script>` をすべて削除すれば不要。

## 本番公開時の TODO（Codex 側で）

1. `meta` の `canonical` / `og:url` / 構造化データの URL を本番ドメインに更新
2. `og:image` を実画像（OG 用 1200×630）に差し替え
3. 導入事例セクション (`#stories`) の SVG プレースホルダーを実写真に置換
   （`.story-media` の中の `<svg>` を `<picture>` に）
4. お問い合わせフォーム (`#contact`) の実装（現状はアンカーのみ）
5. 必要に応じて GA4 / GTM タグの差し込み
6. ホスティング: 静的ホスティングで OK（Vercel / Netlify / Cloudflare Pages 等）
7. 画像最適化: 実写真投入時は WebP 化 + `srcset` で対応推奨

## Tweaksパネルについて

開発時の方向性確認用です。本番では使わないので、`index-no-tweaks.html` を
基点にするか、`index.html` 末尾の以下を削除してください:

```html
<div id="tweaks-root"></div>
<script src="https://unpkg.com/react@18.3.1/..."></script>
<script src="https://unpkg.com/react-dom@18.3.1/..."></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/..."></script>
<script type="text/babel" src="tweaks-panel.jsx"></script>
<script type="text/babel" src="tweaks.jsx"></script>
```
