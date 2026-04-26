import React, { useState } from "react";

export default function Seitai() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const symptoms = ["肩こり・首こり","腰痛・ぎっくり腰","頭痛・偏頭痛","膝・関節の痛み","姿勢の歪み","冷え性・むくみ","自律神経の乱れ","産後の骨盤矯正","スポーツ障害","慢性疲労"];

  const steps = [
    { num:"01", title:"カウンセリング", desc:"お体の状態やお悩みを丁寧にヒアリング。生活習慣や既往歴も確認しながら、最適な施術プランをご提案します。", icon:"💬" },
    { num:"02", title:"検査・評価", desc:"姿勢チェックや関節可動域の検査を行い、不調の根本原因を特定します。専用機器で体のバランスを数値で確認します。", icon:"🔍" },
    { num:"03", title:"施術", desc:"原因に合わせた手技で筋肉・関節・神経へアプローチ。痛みなくリラックスした状態で受けていただける施術です。", icon:"🙌" },
    { num:"04", title:"アフターケアの説明", desc:"日常生活での注意点やセルフケアの方法をお伝えします。根本改善のための通院プランもご相談いただけます。", icon:"📋" },
  ];

  const menus = [
    { name: "初回体験コース", price: "¥3,300", time: "60分", note: "カウンセリング・検査込み（初回限定）" },
    { name: "全身調整コース", price: "¥6,600", time: "60分", note: "全身の歪みを整える基本コース" },
    { name: "集中ケアコース", price: "¥9,900", time: "90分", note: "お悩みの部位に集中してアプローチ" },
    { name: "骨盤矯正コース", price: "¥8,800", time: "75分", note: "産後ケア・O脚X脚改善に効果的" },
    { name: "ヘッドスパ＋首肩コース", price: "¥7,700", time: "75分", note: "頭痛・目の疲れ・肩こり専門" },
    { name: "リラクゼーションコース", price: "¥5,500", time: "50分", note: "全身ほぐし・疲労回復に" },
  ];

  const faqs = [
    { q: "施術は痛くないですか？", a: "ほとんどの方が「痛くない」とおっしゃいます。強い力を使わず、筋肉や関節の状態に合わせた優しい手技で施術します。もし気になる点があれば施術中にいつでもお伝えください。" },
    { q: "何回通えばよくなりますか？", a: "症状の程度や期間によって異なりますが、初回から楽になったと感じる方も多くいらっしゃいます。目安として、慢性的なお悩みの場合は週1〜2回を3ヶ月程度継続されることをおすすめしています。" },
    { q: "予約なしでも来院できますか？", a: "可能な限り当日の対応もしておりますが、お待ちいただく場合がございます。スムーズにご案内するためにも、事前のご予約をおすすめしております。" },
    { q: "どんな服装で来ればよいですか？", a: "動きやすい服装であれば何でも構いません。着替えをご用意しておりますので、スーツやお仕事帰りの服装のままでもお気軽にお越しください。" },
    { q: "保険は使えますか？", a: "当院は自由診療となっておりますので、健康保険は適用されません。ただし、受領委任制度を利用した施術や、各種交通事故の保険請求には対応しておりますのでお気軽にご相談ください。" },
    { q: "子ども連れでも来院できますか？", a: "キッズスペースをご用意しています。お子様連れでも安心してご来院ください。ただし施術中はお子様から目を離す場合がありますので、一緒にお越しいただけるご家族がいると安心です。" },
  ];

  const staff = [
    { name: "石川 健太", role: "院長・柔道整復師", exp: "臨床歴 18年", cert: "柔道整復師 ／ 鍼灸師", message: "「体の声を聞く」ことを大切に、一人ひとりの根本原因にアプローチします。諦めていた不調も、ぜひ一度ご相談ください。", grad: "from-teal-400 to-cyan-500" },
    { name: "渡辺 さくら", role: "施術スタッフ・鍼灸師", exp: "臨床歴 7年", cert: "鍼灸師 ／ リンパドレナージュ認定", message: "女性ならではの視点で、ホルモンバランスや産後のお悩みに寄り添います。", grad: "from-emerald-400 to-teal-500" },
    { name: "中村 悠斗", role: "施術スタッフ", exp: "臨床歴 4年", cert: "柔道整復師 ／ スポーツトレーナー資格", message: "スポーツ障害や姿勢改善を得意としています。日常のパフォーマンスを上げるサポートをします。", grad: "from-cyan-400 to-blue-500" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Demo Banner */}
      <div className="bg-slate-950 text-center text-xs py-2 px-4">
        <span className="text-slate-400">これは </span>
        <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">LE CIEL WEB DESIGN</a>
        <span className="text-slate-400"> のポートフォリオ制作例です（整体・サロンサイト）</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-teal-100 shadow-sm">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center text-white font-bold text-sm">SR</div>
            <div>
              <p className="text-[9px] tracking-[0.35em] text-teal-500 uppercase">Seitai Salon</p>
              <p className="text-base font-bold text-slate-800 leading-none">Reset Room</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-500">
            {[["#symptoms","お悩みの方へ"],["#flow","施術の流れ"],["#menu","メニュー・料金"],["#staff","スタッフ"],["#faq","よくある質問"],["#access","アクセス"]].map(([href,label]) => (
              <a key={href} href={href} className="hover:text-teal-500 transition text-xs">{label}</a>
            ))}
            <a href="#reserve" className="bg-teal-500 text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-teal-600 transition">予約する</a>
          </nav>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <div className="w-5 h-0.5 bg-slate-500 mb-1" /><div className="w-5 h-0.5 bg-slate-500 mb-1" /><div className="w-5 h-0.5 bg-slate-500" />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-teal-100 bg-white px-6 py-4 flex flex-col gap-3 text-sm text-slate-600">
            {["お悩みの方へ","施術の流れ","メニュー・料金","スタッフ","よくある質問","アクセス"].map(l => (
              <a key={l} href="#" onClick={() => setMobileOpen(false)} className="py-1 border-b border-slate-100">{l}</a>
            ))}
            <a href="#reserve" className="mt-2 text-center bg-teal-500 text-white py-2 rounded-lg text-xs font-bold">予約する</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-white" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_80%_30%,rgba(20,184,166,0.12)_0%,transparent_70%)]" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-gradient-to-br from-teal-100 to-teal-200 clip-hero hidden lg:block" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-600 text-xs px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              渋谷・初回体験 ¥3,300〜
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-4">
              その痛み、<br />
              <span className="text-teal-500">諦めないでください。</span>
            </h1>
            <p className="text-lg text-slate-500 leading-8 mb-4">
              肩こり・腰痛・頭痛・骨盤の歪み——<br />
              根本から整えて、快適な毎日を取り戻す。
            </p>
            <p className="text-sm text-slate-400 leading-8 mb-10">
              マッサージで一時的に楽になっても、またすぐ元に戻る……<br />
              そんなお悩みを抱えている方に、<br />
              Seitai Reset Roomはお役に立てます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#reserve" className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-teal-600 transition shadow-lg shadow-teal-200">
                LINEで無料相談 →
              </a>
              <a href="#menu" className="inline-flex items-center justify-center border-2 border-teal-200 text-teal-600 px-8 py-4 rounded-xl font-medium text-sm hover:bg-teal-50 transition">
                メニューを見る
              </a>
            </div>
            <div className="mt-10 flex gap-8">
              {[["18年+","臨床経験"],["2,000人+","施術実績"],["98%","リピート率"]].map(([num,label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-teal-500">{num}</p>
                  <p className="text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-72 h-96 rounded-3xl bg-gradient-to-br from-teal-200 to-cyan-300 flex items-center justify-center shadow-2xl shadow-teal-100">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🙌</div>
                  <p className="font-bold text-lg">Seitai Reset Room</p>
                  <p className="text-sm text-white/80 mt-1">整体・骨盤矯正</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-teal-100">
                <p className="text-xs text-slate-400">本日の空き</p>
                <p className="text-sm font-bold text-teal-500 mt-0.5">残り3枠あり</p>
              </div>
              <div className="absolute -top-4 -left-4 bg-teal-500 rounded-2xl shadow-xl p-4 text-white">
                <p className="text-xs text-teal-200">初回限定</p>
                <p className="text-sm font-bold">¥3,300〜</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section id="symptoms" className="py-24 bg-teal-50/50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.5em] text-teal-500 uppercase mb-3">Symptoms</p>
            <h2 className="text-3xl font-bold text-slate-800">こんなお悩みはありませんか？</h2>
            <div className="mt-5 mx-auto w-10 h-px bg-teal-400" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {symptoms.map(s => (
              <span key={s} className="flex items-center gap-2 bg-white border border-teal-200 text-teal-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:bg-teal-50 transition cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                {s}
              </span>
            ))}
          </div>
          <div className="bg-teal-500 rounded-3xl p-8 text-center text-white">
            <p className="text-lg font-bold mb-2">ひとつでも当てはまったら、お気軽にご相談ください</p>
            <p className="text-sm text-teal-100 leading-7">諦めていた不調でも、根本から整えることで楽になる方がたくさんいらっしゃいます。</p>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.5em] text-teal-500 uppercase mb-3">Treatment Flow</p>
            <h2 className="text-3xl font-bold text-slate-800">施術の流れ</h2>
            <div className="mt-5 mx-auto w-10 h-px bg-teal-400" />
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[-2rem] h-px border-t-2 border-dashed border-teal-200" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-teal-50 border-2 border-teal-200 flex items-center justify-center text-2xl mx-auto mb-4 relative z-10">{s.icon}</div>
                <p className="text-[10px] tracking-widest text-teal-400 font-mono mb-1">STEP {s.num}</p>
                <p className="font-bold text-slate-700 mb-3">{s.title}</p>
                <p className="text-xs text-slate-400 leading-6">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.5em] text-teal-500 uppercase mb-3">Menu & Price</p>
            <h2 className="text-3xl font-bold text-slate-800">施術メニュー・料金</h2>
            <div className="mt-5 mx-auto w-10 h-px bg-teal-400" />
          </div>
          <div className="grid gap-4">
            {menus.map((m, i) => (
              <div key={i} className={`flex items-center justify-between p-6 rounded-2xl border bg-white transition hover:border-teal-300 hover:shadow-sm ${i === 0 ? "border-teal-300 ring-2 ring-teal-100" : "border-slate-200"}`}>
                <div className="flex items-center gap-4">
                  {i === 0 && <span className="bg-teal-500 text-white text-[10px] px-2.5 py-1 rounded-full font-bold">おすすめ</span>}
                  <div>
                    <p className="font-bold text-slate-800">{m.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{m.note}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-teal-600">{m.price}</p>
                  <p className="text-xs text-slate-400">{m.time}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-slate-400">※ 表示価格はすべて税込みです。初診料・カウンセリング料は無料です。</p>
        </div>
      </section>

      {/* Staff */}
      <section id="staff" className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.5em] text-teal-500 uppercase mb-3">Staff</p>
            <h2 className="text-3xl font-bold text-slate-800">スタッフ紹介</h2>
            <div className="mt-5 mx-auto w-10 h-px bg-teal-400" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {staff.map(s => (
              <div key={s.name} className="rounded-3xl border border-slate-100 overflow-hidden hover:shadow-lg transition">
                <div className={`h-36 bg-gradient-to-br ${s.grad} flex items-center justify-center`}>
                  <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center text-2xl text-white font-bold">{s.name[0]}</div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-teal-500 font-medium mb-1">{s.role}</p>
                  <p className="text-xl font-bold text-slate-800 mb-1">{s.name}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="text-[10px] bg-teal-50 text-teal-600 px-2.5 py-1 rounded-full">{s.exp}</span>
                    <span className="text-[10px] bg-slate-50 text-slate-500 px-2.5 py-1 rounded-full">{s.cert}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-7">{s.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.5em] text-teal-500 uppercase mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-slate-800">よくある質問</h2>
            <div className="mt-5 mx-auto w-10 h-px bg-teal-400" />
          </div>
          <div className="grid gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-teal-50 text-teal-500 flex items-center justify-center text-xs font-bold flex-shrink-0">Q</span>
                    <p className="font-medium text-slate-800 text-sm">{faq.q}</p>
                  </div>
                  <span className={`text-teal-400 ml-4 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-45" : ""}`}>＋</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <div className="flex gap-3 bg-teal-50 rounded-xl p-4">
                      <span className="w-7 h-7 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">A</span>
                      <p className="text-sm text-slate-600 leading-7">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINE Reserve CTA */}
      <section id="reserve" className="py-24 bg-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-teal-200 text-[10px] tracking-[0.5em] uppercase mb-4">Reservation</p>
          <h2 className="text-3xl font-bold text-white mb-3">まずは無料相談から</h2>
          <p className="text-teal-100 leading-8 mb-10 text-sm">
            症状やお悩みについて、LINEから気軽にご相談いただけます。<br />
            初回は特別価格でお試しいただけますので、お気軽にどうぞ。
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-[#06C755] text-white rounded-2xl p-6 hover:opacity-90 transition cursor-pointer shadow-lg">
              <div className="text-3xl mb-2">💬</div>
              <p className="font-bold text-sm">LINEで相談</p>
              <p className="text-xs text-green-100 mt-1">24時間受付中</p>
            </div>
            <div className="bg-white text-teal-600 rounded-2xl p-6 hover:bg-teal-50 transition cursor-pointer shadow-lg">
              <div className="text-3xl mb-2">📅</div>
              <p className="font-bold text-sm">WEB予約</p>
              <p className="text-xs text-teal-400 mt-1">空き確認も可能</p>
            </div>
            <div className="bg-white/20 text-white rounded-2xl p-6 hover:bg-white/30 transition cursor-pointer">
              <div className="text-3xl mb-2">📞</div>
              <p className="font-bold text-sm">お電話</p>
              <p className="text-xs text-teal-200 mt-1">03-0000-0000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Access */}
      <section id="access" className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.5em] text-teal-500 uppercase mb-3">Access</p>
            <h2 className="text-3xl font-bold text-slate-800">アクセス</h2>
            <div className="mt-5 mx-auto w-10 h-px bg-teal-400" />
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="h-72 rounded-3xl bg-teal-50 border border-teal-100 flex items-center justify-center">
              <div className="text-center text-teal-200">
                <div className="text-5xl mb-3">📍</div>
                <p className="text-sm">地図が表示されます</p>
              </div>
            </div>
            <div className="grid gap-6">
              {[
                { icon:"📍", label:"住所", value:"東京都渋谷区桜丘町15-8\nNKビル 3F" },
                { icon:"🚉", label:"アクセス", value:"JR渋谷駅 南口 徒歩4分\n京王井の頭線 渋谷駅 徒歩3分" },
                { icon:"🕐", label:"営業時間", value:"平日：10:00〜21:00\n土日祝：9:00〜18:00" },
                { icon:"📅", label:"定休日", value:"木曜日" },
                { icon:"🅿️", label:"駐車場", value:"近隣コインパーキングをご利用ください" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <div className="text-xl mt-0.5 w-6 text-center">{icon}</div>
                  <div>
                    <p className="text-[10px] text-slate-400 tracking-widest uppercase mb-1">{label}</p>
                    <p className="text-sm text-slate-700 whitespace-pre-line leading-7">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-500 py-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <div className="w-7 h-7 rounded-lg bg-teal-500 flex items-center justify-center text-white font-bold text-xs">SR</div>
          <p className="font-bold text-white text-lg">Seitai Reset Room</p>
        </div>
        <p className="text-[10px] tracking-[0.4em] text-slate-600 mb-6">整体・骨盤矯正サロン</p>
        <p className="text-xs">© 2026 Seitai Reset Room. All rights reserved.</p>
        <p className="mt-2 text-xs text-slate-600">
          このサイトは <a href="/" className="text-teal-400 hover:text-teal-300 underline">LE CIEL WEB DESIGN</a> によるポートフォリオ制作例です。
        </p>
      </footer>
    </div>
  );
}
