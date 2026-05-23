# 開発チーム（LE CIEL Webデザイン）

## チームミッション

美しいデザインを「動く・速い・見つかる」サイトに変換する。技術力でSEOと表示速度を最大化し、クライアントのWebサイトが長期的に集客し続ける仕組みを作る。

## 専門領域

- HTML/CSS/JavaScript の本番実装
- SEO技術実装（構造化データ・Core Web Vitals最適化）
- Webパフォーマンス最適化
- フォーム・予約システム連携
- Google各種サービス連携（Analytics・Search Console・Maps・Business Profile）
- ドメイン・サーバー設定（ロリポップ・エックスサーバー対応）
- CMSセットアップ（WordPress・microCMS）

## 技術スタック

### フロントエンド（標準構成）
```
HTML5（セマンティック）
CSS3（カスタムプロパティ・Flexbox・Grid）
JavaScript（Vanilla JS / 必要時のみライブラリ）
```

### 依存ライブラリ選定基準
- jQuery：極力使用しない（表示速度への影響）
- アニメーション：CSS transitionを優先。複雑な場合のみGSAP
- スライダー：Swiper.js（CDNではなくnpm/直接ホスト）
- フォーム：Netlify Forms / Google Forms / formrun

### ホスティング対応
| サービス | 対応状況 | 備考 |
|---------|---------|------|
| ロリポップ | ◎ 標準対応 | FTP納品・GitHub Actions連携 |
| エックスサーバー | ◎ 標準対応 | FTP納品 |
| Vercel | ◎ 標準対応 | 静的サイト向け |
| Netlify | ◎ 標準対応 | フォーム機能使用時 |
| WordPress | ○ オプション対応 | 追加費用あり |

## SEO技術実装（標準搭載）

### 必須実装リスト
```html
<!-- title & description -->
<title>【地域名】業種 | 店舗名</title>
<meta name="description" content="...120文字以内...">

<!-- OGP（SNSシェア対応）-->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...ogp.jpg">
<meta property="og:url" content="https://...">

<!-- canonical -->
<link rel="canonical" href="https://...">

<!-- 構造化データ（LocalBusiness）-->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "店舗名",
  "address": {...},
  "telephone": "...",
  "openingHours": [...]
}
</script>
```

### Core Web Vitals 最適化チェックリスト
- [ ] LCP（最大コンテンツの描画）< 2.5秒
  - ヒーロー画像のpreload設定
  - 画像の width/height 明示
- [ ] FID/INP（インタラクションの応答性）< 200ms
  - JavaScriptの遅延読み込み（defer/async）
  - レンダーブロッキングCSS排除
- [ ] CLS（累積レイアウトシフト）< 0.1
  - フォント読み込みの font-display: swap
  - 画像にアスペクト比指定

### GA4 + Google Search Console 設定（標準）

```html
<!-- GA4タグ（head直後に必ず挿入）-->
<!-- ※ルシエルWebデザイン自社サイト: G-VEMHY2G58C -->
<!-- ※クライアントサイトは個別のGA4 IDを使用 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
</script>
```

## パフォーマンス最適化手順

### 画像最適化
```bash
# WebP変換（sharp使用）
npx sharp -i input.jpg -o output.webp --webp
# または Squoosh CLIを使用
```

### HTML/CSS/JS圧縮
- 納品前にminify処理を行う
- コメントは本番環境から除去
- 未使用CSSはPurgeCSS等で削除

## フォーム・外部連携仕様

### 問い合わせフォーム実装パターン
| パターン | コスト | 機能 | 推奨シーン |
|---------|--------|------|-----------|
| Google Forms埋め込み | 無料 | 基本 | シンプルな問い合わせ |
| formrun | 無料〜 | 中 | 見た目を合わせたい場合 |
| Netlify Forms | 無料（月100件） | 高 | Netlifyホスティング時 |
| MicroCMS + Next.js | 別途見積 | 最高 | 記事更新が必要な場合 |

### Googleマップ埋め込み（店舗系必須）
- Google Maps Embed API（無料枠で対応）
- クライアントのGoogleビジネスプロフィールから直接埋め込み

## トラブルシューティング

**表示速度が遅い場合**
1. PageSpeed Insightsで原因を特定
2. 未最適化画像 → WebP変換
3. 大きいJSファイル → 遅延読み込みor削除
4. Google Fonts → `font-display: swap` + preconnect

**モバイルで崩れる場合**
1. viewportメタタグ確認（`<meta name="viewport" content="width=device-width, initial-scale=1">`）
2. 固定px指定をvw/em/remに変更
3. メディアクエリの確認（768px / 1024px ブレイクポイント）

## 他チームとの連携事項

- **制作チーム**：デザインカンプを受け取り、技術的な実装可否を早期にフィードバック
- **マーケティングチーム**：SEOキーワードを受け取り、構造化データ・h1・URL構造に反映
- **営業チーム**：クライアントの技術要件（更新頻度・CMS希望など）を事前確認
