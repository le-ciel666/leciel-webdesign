import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ExternalLink, Sparkles, Palette, MonitorSmartphone, MessageCircle, Clock, Layers, PenTool } from "lucide-react";

export default function CielWebDesignLandingPage() {
  const works = [
    {
      category: "美容室サイト",
      title: "Hair Salon Lumière",
      lead: "上品で清潔感のある世界観を、予約につながる導線で設計。",
      points: ["トップページ", "メニュー・料金", "スタッフ紹介", "予約導線"],
      gradient: "from-pink-100 via-rose-50 to-white",
      accent: "bg-pink-500",
    },
    {
      category: "居酒屋サイト",
      title: "酒場 七彩",
      lead: "料理写真と空気感を前面に出し、来店前の期待値を高める構成。",
      points: ["店舗紹介", "おすすめ料理", "宴会プラン", "Googleマップ導線"],
      gradient: "from-orange-100 via-amber-50 to-white",
      accent: "bg-orange-500",
    },
    {
      category: "整体・サロンサイト",
      title: "Seitai Reset Room",
      lead: "不安を取り除き、初回予約まで迷わせないシンプルなページ設計。",
      points: ["悩み別訴求", "施術の流れ", "料金", "LINE予約導線"],
      gradient: "from-emerald-100 via-teal-50 to-white",
      accent: "bg-emerald-500",
    },
    {
      category: "士業・個人事務所サイト",
      title: "Office Bridge",
      lead: "信頼感と相談しやすさを両立した、問い合わせ獲得型サイト。",
      points: ["サービス内容", "相談の流れ", "よくある質問", "問い合わせフォーム"],
      gradient: "from-blue-100 via-sky-50 to-white",
      accent: "bg-blue-500",
    },
    {
      category: "カフェ・小規模店舗サイト",
      title: "Café Sora",
      lead: "写真映えと店舗情報のわかりやすさを重視したブランドサイト。",
      points: ["コンセプト", "メニュー", "営業時間", "SNS導線"],
      gradient: "from-violet-100 via-purple-50 to-white",
      accent: "bg-violet-500",
    },
    {
      category: "LP制作",
      title: "Campaign One Page",
      lead: "商品・サービスの魅力を1ページに集約し、問い合わせに直結。",
      points: ["ファーストビュー", "強み訴求", "実績", "CTA設計"],
      gradient: "from-yellow-100 via-lime-50 to-white",
      accent: "bg-yellow-500",
    },
  ];

  const services = [
    {
      icon: <MonitorSmartphone className="h-5 w-5" />,
      title: "ホームページ制作",
      text: "店舗・個人事業主向けに、見やすく問い合わせにつながるサイトを制作します。",
    },
    {
      icon: <PenTool className="h-5 w-5" />,
      title: "LP制作",
      text: "サービス紹介・キャンペーン・集客用ページを1ページでわかりやすく設計します。",
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "デザイン改善",
      text: "既存サイトの見た目・導線・文章を整え、伝わりやすいページに改善します。",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "構成・文章作成",
      text: "何を載せればよいかわからない状態から、ページ構成と文章を整理します。",
    },
  ];

  const flow = ["ヒアリング", "構成案作成", "デザイン制作", "確認・修正", "公開サポート"];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500 blur-3xl" />
          <div className="absolute top-40 -left-20 h-80 w-80 rounded-full bg-fuchsia-500 blur-3xl" />
          <div className="absolute top-72 right-0 h-80 w-80 rounded-full bg-amber-400 blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_35%),linear-gradient(to_bottom,rgba(2,6,23,0.1),rgba(2,6,23,1))]" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-white/70">LE CIEL WEB DESIGN</p>
              <p className="text-xs text-white/45">ル・シエルウェブデザイン</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#works" className="hover:text-white">実績</a>
            <a href="#service" className="hover:text-white">サービス</a>
            <a href="#flow" className="hover:text-white">進め方</a>
            <a href="#contact" className="hover:text-white">相談する</a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-28 pt-16 md:grid-cols-[1.05fr_0.95fr] md:pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              店舗・個人事業主向けホームページ制作
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              空にかかる虹のように、
              <span className="block bg-gradient-to-r from-cyan-200 via-fuchsia-200 to-amber-200 bg-clip-text text-transparent">
                人とサービスをつなぐWebデザイン。
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              ル・シエルウェブデザインは、美容室・飲食店・整体サロンなどの小規模ビジネス向けに、見た目の美しさと問い合わせ導線を両立したホームページを制作します。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="group inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
                無料で相談する
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#works" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
                制作実績を見る
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-slate-950/70 p-5 ring-1 ring-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-3xl bg-gradient-to-br from-cyan-300 via-fuchsia-300 to-amber-200 p-[1px]">
                    <div className="rounded-3xl bg-slate-950 p-5">
                      <p className="text-xs text-slate-400">Concept</p>
                      <p className="mt-2 text-2xl font-semibold">LE CIEL connects people.</p>
                      <p className="mt-3 text-sm leading-6 text-slate-300">空、光、虹をモチーフに、清潔感・信頼感・親しみやすさを表現。</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {['美容室', '居酒屋', '整体', 'LP'].map((item) => (
                      <div key={item} className="rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
                        <p className="text-sm font-medium">{item}</p>
                        <div className="mt-3 h-2 rounded-full bg-white/10">
                          <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="works">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300">WORKS</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">制作実績イメージ</h2>
          <p className="mt-4 leading-7 text-slate-300">業種ごとにディレクトリを分け、クラウドワークス・ココナラから訪れた人が「自分の業種でも依頼できそう」と判断しやすい構成にしています。</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <article key={work.title} className={`group rounded-[1.75rem] bg-gradient-to-br ${work.gradient} p-5 text-slate-950 shadow-xl transition hover:-translate-y-1`}>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold">{work.category}</span>
                <ExternalLink className="h-4 w-4 opacity-50 transition group-hover:opacity-100" />
              </div>
              <div className="mt-10 h-32 rounded-3xl bg-white/65 p-4 shadow-inner">
                <div className={`h-3 w-20 rounded-full ${work.accent}`} />
                <div className="mt-4 h-3 w-32 rounded-full bg-slate-300" />
                <div className="mt-3 h-3 w-24 rounded-full bg-slate-200" />
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="h-12 rounded-2xl bg-white" />
                  <div className="h-12 rounded-2xl bg-white" />
                  <div className="h-12 rounded-2xl bg-white" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{work.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{work.lead}</p>
              <ul className="mt-5 grid gap-2 text-sm text-slate-700">
                {work.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]" id="service">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-fuchsia-300">SERVICE</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">依頼しやすい制作メニュー</h2>
              <p className="mt-4 leading-7 text-slate-300">初めてホームページを作る方にも伝わるように、専門用語を抑えたメニュー名にしています。</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="rounded-3xl border border-white/10 bg-white/8 p-6 backdrop-blur">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-950">{service.icon}</div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="flow">
        <p className="text-sm font-semibold tracking-[0.25em] text-amber-200">FLOW</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">制作の進め方</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {flow.map((item, index) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/8 p-5">
              <p className="text-sm text-slate-400">STEP {String(index + 1).padStart(2, "0")}</p>
              <p className="mt-4 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24" id="contact">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white text-slate-950 shadow-2xl">
          <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white md:p-10">
              <p className="text-sm font-semibold tracking-[0.25em] text-cyan-200">CONTACT</p>
              <h2 className="mt-4 text-3xl font-semibold">まずは内容が固まっていなくても大丈夫です。</h2>
              <p className="mt-5 leading-7 text-slate-300">業種、載せたい内容、参考サイトを共有いただければ、ページ構成から整理します。</p>
              <div className="mt-8 grid gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-cyan-200" />クラウドワークス・ココナラから相談可能</div>
                <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-cyan-200" />初回相談・見積もり無料</div>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <div className="grid gap-4">
                <label className="grid gap-2 text-sm font-medium">お名前<input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500" placeholder="山田 太郎" /></label>
                <label className="grid gap-2 text-sm font-medium">メールアドレス<input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500" placeholder="example@mail.com" /></label>
                <label className="grid gap-2 text-sm font-medium">相談内容<textarea className="min-h-32 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500" placeholder="美容室のホームページを作りたい、既存サイトをきれいにしたい、など" /></label>
                <button className="mt-2 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">相談内容を送信する</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
