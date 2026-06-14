# LE CIEL WEB DESIGN ブログ運用プラン（SEO）

`leciel-webdesign.com` のSEO強化用ブログの運用ルールとネタ帳。記事を追加するときはこのファイルを更新する。

## 基本方針
- 量産より「1キーワード＝1記事」で検索意図に答える質を優先。薄い記事の乱造は逆効果。
- 全記事に必須：結論を冒頭 / 目次 / 内部リンク / 末尾CTA（無料相談）/ 構造化データ（Article・Breadcrumb・FAQ）/ GA4タグ。
- 公開ペースの目安：月2〜4本。「最優先」群から着手。

## キーワード優先リスト

### 最優先（受注直結）
- [ ] ホームページ制作 費用 相場 → ✅ 公開済み `hp-seisaku-hiyou-souba/`
- [ ] ホームページ制作 安い
- [x] 個人事業主 ホームページ 必要か → ✅ 公開済み `kojin-jigyonushi-hp-hitsuyou/`
- [ ] ホームページ 制作 個人 依頼
- [ ] ホームページ 制作 期間（最短5営業日が強み）

### 業種特化（競合少・デモと相性◎）
- [x] 美容室 ホームページ 作り方 → ✅ 公開済み `biyoushitsu-homepage-tsukurikata/`
- [ ] 整体院 ホームページ 集客（demo: seitai）
- [ ] カフェ ホームページ 必要（demo: cafe）
- [ ] 歯科医院 ホームページ 制作（demo: dental）
- [ ] 飲食店 ホームページ 自分で作る vs 依頼（demo: restaurant/izakaya）

### 悩み解決（信頼構築）
- [x] ホームページ 集客 できない 理由 → ✅ 公開済み `hp-shukyaku-dekinai-riyu/`
- [ ] 古いホームページ リニューアル タイミング
- [ ] スマホ対応 ホームページ 重要性（自社100点を語れる）
- [ ] ホームページ 表示速度 改善（同上）
- [x] PageSpeed Insights 100点 取り方 → ✅ 公開済み `pagespeed-insights-100/`（技術・SEO/権威性記事）
- [ ] Wix / ペライチ vs 制作会社 依頼

### 知識・用語（初期接触）
- [ ] ホームページとLPの違い
- [ ] ドメインとサーバーとは
- [ ] SEO対策とは 初心者向け
- [ ] 補助金 ホームページ制作

### AI検索クラスター（柱1・最優先／競合薄・差別化）
親（ピラー）＝ `ai-search-llmo-taisaku/`「AI検索に載るサイトの作り方」を軸に、専門特化の子記事で束ねる。
- [x] LLMO 対策 とは → ✅ 公開済み `llmo-taisaku-toha/`（用語整理・SEOとの違い・始め方5ステップ）
- [x] AEO 対策 / AI Overview 表示 → ✅ 公開済み `aeo-ai-overview-taisaku/`（Google AI Overview特化の実践）
- [x] ChatGPT・Perplexityに引用されるサイトの作り方 → ✅ 公開済み `chatgpt-perplexity-inyou/`（生成AI個別・robots/llms.txt）
- [x] 構造化データ（FAQ・Article）の入れ方 初心者向け → ✅ 公開済み `kouzouka-data-nyumon/`（コード例つき・技術/SEO）
- [x] E-E-A-Tとは？個人・小規模で信頼性を高める方法 → ✅ 公開済み `eeat-toha-takameru/`（技術/SEO）
- [x] 「SEOはもう終わり」は本当か？AI時代に変わること → ✅ 公開済み `seo-owari-ai-jidai/`

→ AI検索クラスター（ピラー1＋子記事6＝計7本）が完成。次は柱2（受注直結KW）へ。

### 受注直結の抜けKW（柱2・次点）
- [ ] ホームページ リニューアル タイミング/費用/進め方
- [ ] ホームページ 運用・保守とは（費用相場・自分でできること）
- [ ] ホームページ 制作 期間（最短5営業日が強み）
- [ ] ホームページ 制作 流れ（依頼〜公開の全ステップ）
- [ ] ホームページ 自分で作る vs 依頼（判断基準）
- [x] 採用サイト 作り方・必要性（新ジャンル） → ✅ 公開済み `saiyou-site-tsukurikata/`（求人媒体との違い・必須ページ・求人検索エンジン/Googleしごと検索SEO・費用）
- [ ] ECサイト・ネットショップ 始め方（個人事業主向け）

## 新記事の追加手順
1. `blog/<英数字スラッグ>/index.html` を作る（`hp-seisaku-hiyou-souba/index.html` をコピー）。
2. 差し替える：`<title>` / `description` / canonical / OGP / 3つのJSON-LD（Article・Breadcrumb・FAQ）/ パンくず / h1 / 本文 / FAQ / 関連記事。
3. `blog/index.html` の `.post-list` に記事カードを1枚追加。
4. `sitemap.xml` に `<url>` を追記（lastmodは公開日）。
5. このファイルのチェックボックスを更新。
6. GA4タグ（G-VEMHY2G58C）が `<head>` 先頭にあることを確認。

## 記事構成テンプレ（3型）
- A. 費用相場型：早見表 → 差が出る理由 → 依頼先別 → 抑えるコツ → 自社誘導 → FAQ → まとめ
- B. 業種特化型：必要な理由 → 必須ページ → デザイン要点 → 制作方法比較 → 制作例(デモ) → FAQ → まとめ
- C. 悩み解決型：原因リスト → 優先順位 → 自分で/プロの判断基準 → 事例 → FAQ → まとめ
