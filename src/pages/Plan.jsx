import { Check, ArrowRight, MessageCircle, HelpCircle, ChevronDown, Sparkles } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    q: '分割払いは可能ですか？',
    a: '着手金50%・納品時50%の2回払いに対応しています。その他ご要望があればお気軽にご相談ください。',
  },
  {
    q: '修正は何回まで対応してもらえますか？',
    a: '制作中の修正は回数無制限で対応します。公開後の大幅なデザイン変更は別途お見積もりになります。',
  },
  {
    q: '保守メンテナンスは必須ですか？',
    a: 'オプションです。ただ、サーバー・ドメインの更新管理や急なトラブル時の対応があるため、ご加入をおすすめしています。',
  },
  {
    q: '制作期間はどのくらいですか？',
    a: 'ヒアリングから公開まで、標準で3〜4週間程度です。素材・テキストのご用意が早いほどスムーズに進みます。',
  },
  {
    q: 'サーバー・ドメイン費用は含まれますか？',
    a: 'サーバー・ドメインの契約費用は含まれません。既存のご契約がある場合はそのままご利用いただけます。新規の場合はご相談ください。',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="flex items-start gap-3 text-base font-medium">
          <span className="mt-0.5 shrink-0 text-cyan-400 font-bold">Q.</span>
          {q}
        </span>
        <ChevronDown
          className={`ml-4 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 pl-7 text-slate-300 leading-7 text-sm">
          {a}
        </div>
      )}
    </div>
  )
}

export default function Plan() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Nav */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
            <Sparkles className="h-5 w-5" />
          </div>
          <a href="/" className="block">
            <p className="text-sm font-semibold tracking-[0.22em] text-white/70">LE CIEL WEB DESIGN</p>
            <p className="text-xs text-white/45">ル・シエルウェブデザイン</p>
          </a>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="/#works" className="hover:text-white transition-colors">実績</a>
          <a href="/#service" className="hover:text-white transition-colors">サービス</a>
          <a href="/#flow" className="hover:text-white transition-colors">進め方</a>
          <a href="/plan" className="text-white font-semibold">料金プラン</a>
          <a href="/#company" className="hover:text-white transition-colors">運営情報</a>
          <a href="/#contact" className="hover:text-white transition-colors">相談する</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 text-center">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500 blur-3xl" />
          <div className="absolute top-20 right-10 h-60 w-60 rounded-full bg-fuchsia-500 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300">PLAN</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">料金プラン</h1>
          <p className="mt-5 text-slate-300 leading-7">
            わかりやすいシンプルな1プラン。<br />追加料金なし、隠れた費用なし。
          </p>
        </div>
      </section>

      {/* Main Plan */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">

          {/* 制作費 */}
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-cyan-950/60 to-slate-900 p-8">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
            <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400">PRODUCTION</p>
            <h2 className="mt-2 text-2xl font-bold">ホームページ制作</h2>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-5xl font-bold tracking-tight">¥100,000</span>
              <span className="mb-1 text-slate-400">税込</span>
            </div>
            <p className="mt-1 text-sm text-slate-400">買い切り・一括払い</p>

            <ul className="mt-8 space-y-3">
              {[
                'ヒアリング・要件整理',
                'ページ構成・サイトマップ作成',
                'オリジナルデザイン制作',
                'コーディング・実装',
                'スマホ対応（レスポンシブ）',
                'SEO基本設定',
                'お問い合わせフォーム設置',
                '公開サポート・納品',
                '修正対応（制作中は無制限）',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="/#contact"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 py-3 text-sm font-semibold text-white hover:bg-cyan-400 transition-colors"
            >
              無料相談する <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* 保守メンテナンス */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-slate-400">MAINTENANCE</p>
              <h2 className="mt-2 text-2xl font-bold">保守メンテナンス</h2>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-bold tracking-tight">¥3,000</span>
                <span className="mb-1 text-slate-400">税込 / 月</span>
              </div>
              <p className="mt-1 text-sm text-slate-400">月額・オプション</p>

              <ul className="mt-8 space-y-3">
                {[
                  'サーバー・ドメイン更新管理',
                  'セキュリティアップデート対応',
                  '表示崩れ・不具合の対応',
                  '簡単な文言・画像の差し替え',
                  'メール相談サポート',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 補足ノート */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-400 leading-6 space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">※</span>
                サーバー・ドメインの契約費用は別途
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">※</span>
                着手金50%・納品時50%の2回払い可
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">※</span>
                クラウドワークス・ココナラからも受付可
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">※</span>
                ページ増設・機能追加は別途お見積もり
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow reminder */}
      <section className="border-y border-white/10 bg-white/[0.02] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300">FLOW</p>
          <h2 className="mt-3 text-2xl font-semibold">制作の流れ</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
            {['ヒアリング', '構成案作成', 'デザイン制作', '確認・修正', '公開サポート'].map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm">
                  {i + 1}
                </div>
                <span className="text-sm text-slate-300">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold">よくある質問</h2>
        <div className="mt-10">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 p-10 text-center">
            <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300">CONTACT</p>
            <h2 className="mt-3 text-2xl font-semibold">まずは無料でご相談ください</h2>
            <p className="mt-4 text-slate-300 text-sm leading-7">
              内容が固まっていなくても大丈夫です。<br />業種や参考サイトを教えていただければ、構成からご提案します。
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/#contact"
                className="flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-white hover:bg-cyan-400 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                相談フォームへ
              </a>
              <a
                href="/"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                ← トップに戻る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © 2024 LE CIEL WEB DESIGN. All rights reserved.
      </footer>
    </main>
  )
}
