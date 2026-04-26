import React, { useState } from "react";

const DemoBanner = () => (
  <div className="bg-slate-950 text-center text-xs py-2 px-4">
    <span className="text-slate-400">これは </span>
    <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">LE CIEL WEB DESIGN</a>
    <span className="text-slate-400"> のポートフォリオ制作例です（美容室サイト）</span>
  </div>
);

export default function HairSalon() {
  const [activeTab, setActiveTab] = useState("cut");
  const [mobileOpen, setMobileOpen] = useState(false);

  const menus = {
    cut: [
      { name: "カット", price: "¥6,600", note: "シャンプー・ブロー込み" },
      { name: "カット（高校生以下）", price: "¥5,500", note: "" },
      { name: "前髪カット", price: "¥1,650", note: "" },
      { name: "メンズカット", price: "¥5,500", note: "シャンプー込み" },
    ],
    color: [
      { name: "リタッチカラー", price: "¥9,900〜", note: "根元3cm以内" },
      { name: "フルカラー", price: "¥13,200〜", note: "全体染め" },
      { name: "ハイライト", price: "¥15,400〜", note: "部分ハイライト" },
      { name: "インナーカラー", price: "¥13,200〜", note: "裏面カラー" },
      { name: "グラデーションカラー", price: "¥16,500〜", note: "" },
    ],
    perm: [
      { name: "パーマ", price: "¥13,200〜", note: "スタイル・長さにより変動" },
      { name: "デジタルパーマ", price: "¥19,800〜", note: "" },
      { name: "縮毛矯正", price: "¥22,000〜", note: "全体" },
      { name: "縮毛矯正（前髪のみ）", price: "¥8,800〜", note: "" },
    ],
    treatment: [
      { name: "システムトリートメント S", price: "¥3,300", note: "〜ショート" },
      { name: "システムトリートメント M", price: "¥4,400", note: "ミディアム" },
      { name: "システムトリートメント L", price: "¥5,500", note: "ロング〜" },
      { name: "ヘッドスパ（20分）", price: "¥3,850", note: "" },
      { name: "ヘッドスパ（40分）", price: "¥6,600", note: "" },
    ],
  };

  const tabLabels = { cut: "カット", color: "カラー", perm: "パーマ・矯正", treatment: "トリートメント" };

  const staff = [
    { name: "田中 彩花", nameEn: "Ayaka Tanaka", role: "ディレクター", exp: "美容師歴 15年", specialty: "カラーリング・トリートメント", message: "お客様の「なりたい」を丁寧に引き出し、一人ひとりに合った似合わせスタイルをご提案します。", grad: "from-rose-300 to-pink-400" },
    { name: "山本 楓", nameEn: "Kaede Yamamoto", role: "トップスタイリスト", exp: "美容師歴 9年", specialty: "パーマ・縮毛矯正", message: "髪の悩みに真摯に向き合い、扱いやすく美しいスタイルに仕上げます。", grad: "from-violet-300 to-purple-400" },
    { name: "佐々木 萌", nameEn: "Moe Sasaki", role: "スタイリスト", exp: "美容師歴 5年", specialty: "ヘッドスパ・ヘアケア", message: "頭皮ケアからスタイリングまで、頭の先から美しくなるお手伝いをします。", grad: "from-amber-300 to-orange-400" },
  ];

  const galleryGrads = [
    "from-rose-200 to-pink-300", "from-amber-200 to-yellow-300",
    "from-violet-200 to-purple-300", "from-sky-200 to-blue-300",
    "from-emerald-200 to-teal-300", "from-rose-300 to-red-200",
  ];

  return (
    <div className="min-h-screen bg-white text-stone-800">
      <DemoBanner />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-rose-100 shadow-sm">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div>
            <p className="text-[10px] tracking-[0.35em] text-rose-400 uppercase">Hair Salon</p>
            <p className="text-2xl font-serif tracking-widest text-stone-800 leading-none">Lumière</p>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-stone-500">
            {[["#about","当サロンについて"],["#menu","メニュー"],["#staff","スタイリスト"],["#gallery","ギャラリー"],["#access","アクセス"]].map(([href,label]) => (
              <a key={href} href={href} className="hover:text-rose-500 transition">{label}</a>
            ))}
            <a href="#reserve" className="bg-rose-500 text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-rose-600 transition">ご予約</a>
          </nav>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <div className="w-5 h-0.5 bg-stone-600 mb-1" /><div className="w-5 h-0.5 bg-stone-600 mb-1" /><div className="w-5 h-0.5 bg-stone-600" />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-rose-100 bg-white px-6 py-4 flex flex-col gap-3 text-sm text-stone-600">
            {["当サロンについて","メニュー","スタイリスト","ギャラリー","アクセス"].map(l => (
              <a key={l} href={`#${l}`} onClick={() => setMobileOpen(false)} className="py-1 border-b border-stone-100">{l}</a>
            ))}
            <a href="#reserve" className="mt-2 text-center bg-rose-500 text-white py-2 rounded-full text-xs">ご予約</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_25%_25%,rgba(253,164,175,0.4)_0%,transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_75%_80%,rgba(251,191,36,0.2)_0%,transparent_60%)]" />
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYmNmZTgiIGZpbGwtb3BhY2l0eT0iMC4xNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-60" />
        <div className="absolute top-16 right-16 w-72 h-72 rounded-full border border-rose-200/60 hidden md:block" />
        <div className="absolute top-28 right-28 w-48 h-48 rounded-full border border-rose-200/40 hidden md:block" />
        <div className="absolute bottom-20 left-10 w-52 h-52 rounded-full border border-amber-200/50 hidden md:block" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-2xl">
          <p className="text-[11px] tracking-[0.5em] text-rose-400 uppercase mb-5">Hair Salon in 渋谷</p>
          <h1 className="text-6xl md:text-8xl font-serif text-stone-800 leading-none mb-3">Lumière</h1>
          <div className="flex items-center justify-center gap-5 my-5">
            <div className="h-px w-16 bg-rose-200" />
            <p className="text-xs tracking-[0.25em] text-stone-400">ルミエール</p>
            <div className="h-px w-16 bg-rose-200" />
          </div>
          <p className="text-xl md:text-2xl text-stone-600 font-serif italic mb-3">光のような美しさを、あなたに。</p>
          <p className="text-sm text-stone-400 leading-8 mb-10">
            丁寧なカウンセリングと確かな技術で、<br className="hidden sm:block" />
            あなただけのスタイルをご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#reserve" className="inline-flex items-center justify-center gap-2 bg-rose-500 text-white px-9 py-4 rounded-full text-sm font-medium hover:bg-rose-600 transition shadow-lg shadow-rose-200">
              ネット予約する →
            </a>
            <a href="#menu" className="inline-flex items-center justify-center border border-stone-200 text-stone-500 px-9 py-4 rounded-full text-sm hover:border-rose-300 hover:text-rose-500 transition">
              メニューを見る
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="about" className="py-28 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.5em] text-rose-400 uppercase mb-3">About Us</p>
            <h2 className="text-3xl font-serif text-stone-800">Lumièreが選ばれる理由</h2>
            <div className="mt-5 mx-auto w-10 h-px bg-rose-300" />
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num:"01", title:"丁寧なカウンセリング", icon:"💬", desc:"施術前に十分な時間をとり、お客様の生活スタイル・髪のお悩み・理想のスタイルをしっかりとヒアリング。一人ひとりに最適なご提案をいたします。" },
              { num:"02", title:"最高品質の薬剤使用", icon:"✨", desc:"カラー・パーマには髪へのダメージを最小限に抑えた高品質な薬剤を使用。仕上がりの美しさと髪の健康を両立します。" },
              { num:"03", title:"くつろぎのプライベート空間", icon:"🌿", desc:"落ち着いた照明とBGMで包まれた上質な空間。日常の喧騒を忘れ、心地よいひとときをお過ごしください。" },
            ].map(f => (
              <div key={f.num} className="text-center group cursor-default">
                <div className="w-16 h-16 rounded-full bg-rose-50 group-hover:bg-rose-100 transition flex items-center justify-center text-2xl mx-auto mb-5">{f.icon}</div>
                <p className="text-[10px] tracking-widest text-rose-300 mb-2 font-mono">{f.num}</p>
                <h3 className="text-base font-medium text-stone-800 mb-3">{f.title}</h3>
                <p className="text-sm leading-8 text-stone-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-28 bg-rose-50/40">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.5em] text-rose-400 uppercase mb-3">Menu & Price</p>
            <h2 className="text-3xl font-serif text-stone-800">メニュー・料金</h2>
            <div className="mt-5 mx-auto w-10 h-px bg-rose-300" />
            <p className="mt-4 text-xs text-stone-400">※ 表示価格はすべて税込みです</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(tabLabels).map(([key, label]) => (
              <button key={key} onClick={() => setActiveTab(key)}
                className={`px-6 py-2 rounded-full text-sm transition ${activeTab === key ? "bg-rose-500 text-white shadow-md" : "bg-white text-stone-500 border border-stone-200 hover:border-rose-300"}`}>
                {label}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-rose-100">
            {menus[activeTab].map((item, i) => (
              <div key={i} className={`flex items-center justify-between px-8 py-5 ${i !== 0 ? "border-t border-stone-100" : ""}`}>
                <div>
                  <p className="font-medium text-stone-700">{item.name}</p>
                  {item.note && <p className="text-xs text-stone-400 mt-0.5">{item.note}</p>}
                </div>
                <p className="text-rose-500 font-semibold tabular-nums">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-stone-400">※ 髪の長さ・量により料金が変動する場合がございます。詳しくはお問い合わせください。</p>
        </div>
      </section>

      {/* Staff */}
      <section id="staff" className="py-28 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.5em] text-rose-400 uppercase mb-3">Stylist</p>
            <h2 className="text-3xl font-serif text-stone-800">スタイリスト紹介</h2>
            <div className="mt-5 mx-auto w-10 h-px bg-rose-300" />
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {staff.map(s => (
              <div key={s.name} className="text-center">
                <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${s.grad} mx-auto mb-5 flex items-center justify-center text-3xl text-white font-serif shadow-lg`}>
                  {s.name[0]}
                </div>
                <p className="text-[10px] tracking-widest text-rose-400 uppercase mb-1">{s.role}</p>
                <p className="text-xl font-serif text-stone-800 mb-0.5">{s.name}</p>
                <p className="text-xs text-stone-400 mb-1">{s.nameEn}</p>
                <div className="flex justify-center gap-2 mb-4">
                  <span className="text-xs bg-rose-50 text-rose-400 px-3 py-1 rounded-full">{s.exp}</span>
                  <span className="text-xs bg-stone-50 text-stone-400 px-3 py-1 rounded-full">{s.specialty}</span>
                </div>
                <p className="text-sm leading-7 text-stone-400 px-2">{s.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-28 bg-stone-50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.5em] text-rose-400 uppercase mb-3">Gallery</p>
            <h2 className="text-3xl font-serif text-stone-800">スタイルギャラリー</h2>
            <div className="mt-5 mx-auto w-10 h-px bg-rose-300" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryGrads.map((g, i) => (
              <div key={i} className={`aspect-square rounded-2xl bg-gradient-to-br ${g} flex items-end p-4 cursor-pointer hover:scale-[1.02] transition`}>
                <span className="text-white/80 text-xs font-medium">Style {String(i+1).padStart(2,"0")}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-xs text-stone-400">
            Instagram <span className="text-rose-400 font-medium">@lumiere_hair</span> でも最新スタイルを公開中
          </p>
        </div>
      </section>

      {/* Campaign */}
      <section className="py-20 bg-rose-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-rose-200 text-[10px] tracking-[0.5em] uppercase mb-3">Campaign</p>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">初回限定 20% OFF</h2>
          <p className="text-rose-100 text-sm leading-8 mb-8">
            ご新規のお客様は全メニュー20%オフでご提供しております。<br />
            ご予約の際に「初回」とお伝えください。
          </p>
          <a href="#reserve" className="inline-flex items-center gap-2 bg-white text-rose-500 px-8 py-4 rounded-full text-sm font-semibold hover:bg-rose-50 transition shadow-xl">
            今すぐ予約する →
          </a>
        </div>
      </section>

      {/* Reserve */}
      <section id="reserve" className="py-28 bg-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-[10px] tracking-[0.5em] text-rose-400 uppercase mb-3">Reservation</p>
          <h2 className="text-3xl font-serif text-stone-800 mb-3">ご予約</h2>
          <div className="mt-5 mx-auto w-10 h-px bg-rose-300 mb-10" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center gap-3 border border-stone-200 rounded-3xl p-8 hover:border-rose-200 hover:bg-rose-50/50 transition">
              <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center text-2xl">📞</div>
              <p className="text-[10px] text-stone-400 tracking-widest">お電話でのご予約</p>
              <p className="text-2xl font-medium text-stone-800">03-0000-0000</p>
              <p className="text-xs text-stone-400">受付 10:00〜19:00（水曜定休）</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 bg-rose-500 rounded-3xl p-8 hover:bg-rose-600 transition cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl">📅</div>
              <p className="text-[10px] text-rose-200 tracking-widest">WEBでのご予約</p>
              <p className="text-2xl font-medium text-white">ネット予約</p>
              <p className="text-xs text-rose-200">24時間いつでも受付中</p>
            </div>
          </div>
        </div>
      </section>

      {/* Access */}
      <section id="access" className="py-28 bg-stone-50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.5em] text-rose-400 uppercase mb-3">Access</p>
            <h2 className="text-3xl font-serif text-stone-800">アクセス</h2>
            <div className="mt-5 mx-auto w-10 h-px bg-rose-300" />
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="h-72 rounded-3xl bg-gradient-to-br from-rose-100 to-pink-50 flex items-center justify-center overflow-hidden border border-rose-100">
              <div className="text-center text-stone-300">
                <div className="text-5xl mb-3">📍</div>
                <p className="text-sm">地図が表示されます</p>
              </div>
            </div>
            <div className="grid gap-6">
              {[
                { icon:"📍", label:"住所", value:"東京都渋谷区神南1-23-45\nLumièreビル 2F" },
                { icon:"🚉", label:"アクセス", value:"JR渋谷駅 徒歩5分\n地下鉄渋谷駅 徒歩3分" },
                { icon:"🕐", label:"営業時間", value:"10:00〜20:00（最終受付 18:00）" },
                { icon:"📅", label:"定休日", value:"水曜日・第3火曜日" },
                { icon:"📞", label:"お電話", value:"03-0000-0000" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <div className="text-xl mt-0.5 w-6 text-center">{icon}</div>
                  <div>
                    <p className="text-[10px] text-stone-400 tracking-widest uppercase mb-1">{label}</p>
                    <p className="text-sm text-stone-700 whitespace-pre-line leading-7">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-500 py-12 text-center">
        <p className="font-serif text-white text-2xl mb-1">Lumière</p>
        <p className="text-[10px] tracking-[0.4em] text-stone-600 mb-6">HAIR SALON</p>
        <p className="text-xs">© 2026 Hair Salon Lumière. All rights reserved.</p>
        <p className="mt-2 text-xs text-stone-600">
          このサイトは <a href="/" className="text-rose-400 hover:text-rose-300 underline">LE CIEL WEB DESIGN</a> によるポートフォリオ制作例です。
        </p>
      </footer>
    </div>
  );
}
