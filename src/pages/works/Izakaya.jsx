import React, { useState } from "react";

export default function Izakaya() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("ippin");

  const menus = {
    ippin: {
      label: "一品料理",
      items: [
        { name: "だし巻き玉子", price: "¥550", note: "出汁の風味たっぷり" },
        { name: "鶏皮ポン酢", price: "¥462", note: "ぱりぱりに焼き上げた鶏皮" },
        { name: "冷やしトマト", price: "¥418", note: "季節の完熟トマト" },
        { name: "枝豆（塩ゆで）", price: "¥330", note: "" },
        { name: "もつ煮込み", price: "¥638", note: "味噌仕立て" },
        { name: "ポテトサラダ", price: "¥462", note: "昔懐かしい手作り" },
      ],
    },
    sashimi: {
      label: "お刺身",
      items: [
        { name: "本日のお刺身 盛り合わせ（3種）", price: "¥1,320", note: "漁師直送の旬魚" },
        { name: "本日のお刺身 盛り合わせ（5種）", price: "¥1,980", note: "旬魚5種盛り" },
        { name: "まぐろ 赤身", price: "¥858", note: "本まぐろ使用" },
        { name: "サーモン炙り", price: "¥770", note: "炙りポン酢で" },
        { name: "活ほたて", price: "¥990", note: "北海道産" },
      ],
    },
    kushiyaki: {
      label: "串焼き",
      items: [
        { name: "もも", price: "¥198", note: "" },
        { name: "つくね", price: "¥220", note: "卵黄添え" },
        { name: "ぼんじり", price: "¥198", note: "" },
        { name: "砂肝", price: "¥198", note: "" },
        { name: "豚バラ", price: "¥220", note: "塩・タレ選べます" },
        { name: "うずら", price: "¥165", note: "" },
        { name: "しいたけ", price: "¥198", note: "" },
        { name: "アスパラ巻き", price: "¥264", note: "豚バラ巻き" },
      ],
    },
    nabe: {
      label: "鍋料理",
      items: [
        { name: "もつ鍋（醬油・味噌・塩）", price: "¥1,540/人", note: "2人前より" },
        { name: "鶏白湯鍋", price: "¥1,320/人", note: "2人前より" },
        { name: "おでん（盛り合わせ）", price: "¥990", note: "7種盛り" },
      ],
    },
  };

  const banquetPlans = [
    { name: "気軽に飲みコース", price: "¥3,500/人", time: "2時間飲み放題付き", items: "全6品（旬の一品4品 ＋ 串焼き3本 ＋〆の一品）", min: "4名〜", color: "border-amber-500" },
    { name: "七彩おまかせコース", price: "¥5,500/人", time: "2.5時間飲み放題付き", items: "全9品（旬の刺身盛り ＋ 特選一品 ＋ 串焼き5本 ＋〆めし）", min: "4名〜", color: "border-orange-400" },
    { name: "特別個室プレミアム", price: "¥8,800/人", time: "3時間プレミアム飲み放題付き", items: "全12品（全コースに加え、特製の焼き魚・大将おまかせ一品）", min: "6名〜", color: "border-red-500" },
  ];

  return (
    <div className="min-h-screen bg-[#110b02] text-amber-50">
      {/* Demo Banner */}
      <div className="bg-slate-950 text-center text-xs py-2 px-4 border-b border-slate-800">
        <span className="text-slate-400">これは </span>
        <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">LE CIEL WEB DESIGN</a>
        <span className="text-slate-400"> のポートフォリオ制作例です（居酒屋サイト）</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#110b02]/95 backdrop-blur border-b border-amber-900/50">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-sm">🍶</div>
            <div>
              <p className="text-[9px] tracking-[0.4em] text-amber-600 uppercase">Izakaya</p>
              <p className="text-lg font-bold tracking-widest text-amber-100">酒場 七彩</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-amber-300/80">
            {[["#about","お店について"],["#menu","お品書き"],["#banquet","宴会プラン"],["#access","アクセス"]].map(([href,label]) => (
              <a key={href} href={href} className="hover:text-amber-200 transition">{label}</a>
            ))}
            <a href="#reserve" className="bg-amber-500 text-stone-900 px-5 py-2 rounded font-bold text-xs hover:bg-amber-400 transition">ご予約</a>
          </nav>
          <button className="md:hidden text-amber-300 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <div className="w-5 h-0.5 bg-amber-400 mb-1" /><div className="w-5 h-0.5 bg-amber-400 mb-1" /><div className="w-5 h-0.5 bg-amber-400" />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-amber-900/50 bg-[#110b02] px-6 py-4 flex flex-col gap-3 text-sm text-amber-300">
            {["お店について","お品書き","宴会プラン","アクセス"].map(l => (
              <a key={l} href="#" onClick={() => setMobileOpen(false)} className="py-1 border-b border-amber-900/30">{l}</a>
            ))}
            <a href="#reserve" className="mt-2 text-center bg-amber-500 text-stone-900 py-2 rounded font-bold text-xs">ご予約</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f00] via-[#110b02] to-[#0a0600]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_20%_30%,rgba(217,119,6,0.15)_0%,transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_80%_70%,rgba(180,83,9,0.12)_0%,transparent_60%)]" />
        </div>
        {/* Decorative lines */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-700/30 to-transparent hidden md:block" />
        <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-700/30 to-transparent hidden md:block" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#110b02] to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-amber-700/60" />
            <p className="text-[10px] tracking-[0.5em] text-amber-500 uppercase">Since 1998 · Shibuya</p>
            <div className="h-px w-16 bg-amber-700/60" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-amber-100 leading-tight mb-2 tracking-wider">
            酒場 七彩
          </h1>
          <p className="text-lg md:text-xl text-amber-400/80 tracking-widest mb-6">SAKABA NANASHIKI</p>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-amber-200/90 mb-3 font-light tracking-wide">
            旬の食材と厳選地酒で紡ぐ、<br />大人の夜時間。
          </p>
          <p className="text-sm text-amber-400/70 leading-8 mb-10 max-w-md mx-auto">
            漁師直送の鮮魚、地元農家の野菜。<br />
            日本全国から厳選した地酒と共に、<br />
            心ゆくまでお楽しみください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#reserve" className="inline-flex items-center justify-center gap-2 bg-amber-500 text-stone-900 px-9 py-4 rounded font-bold text-sm hover:bg-amber-400 transition shadow-lg shadow-amber-900/50">
              ご予約はこちら →
            </a>
            <a href="#menu" className="inline-flex items-center justify-center border border-amber-700/60 text-amber-300 px-9 py-4 rounded text-sm hover:border-amber-500 hover:text-amber-200 transition">
              お品書きを見る
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-[#0e0801]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] tracking-[0.5em] text-amber-600 uppercase mb-4">Our Story</p>
              <h2 className="text-3xl font-bold text-amber-100 mb-6 leading-relaxed">
                1998年創業。<br />変わらぬ味と、<br />変わり続ける旬を。
              </h2>
              <div className="w-12 h-px bg-amber-600 mb-6" />
              <p className="text-sm text-amber-300/70 leading-9">
                渋谷の路地裏でひっそりと暖簾を掲げて25年。<br />
                毎朝市場に足を運び、その日一番の食材だけを仕入れます。<br />
                料理人が丹精込めて仕上げた一品と、全国から取り寄せた地酒を。<br />
                大将のおすすめは黒板に、毎日変わります。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🐟", title: "漁師直送の鮮魚", desc: "毎朝豊洲市場より仕入れる新鮮な魚介" },
                { icon: "🌾", title: "地元農家の野菜", desc: "顔の見える農家さんから届く季節の恵み" },
                { icon: "🍶", title: "全国厳選地酒", desc: "常時30種以上の日本酒・焼酎を取り揃え" },
                { icon: "🔥", title: "炭火焼き串", desc: "備長炭でじっくり焼き上げる香ばしい串" },
              ].map(item => (
                <div key={item.title} className="rounded-2xl border border-amber-800/40 bg-amber-900/10 p-5">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <p className="text-xs font-bold text-amber-200 mb-2">{item.title}</p>
                  <p className="text-xs text-amber-400/60 leading-5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Today's Recommendation */}
      <section className="py-16 bg-amber-500">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[10px] tracking-[0.5em] text-amber-900 uppercase mb-2">Today's Special</p>
              <h2 className="text-2xl font-bold text-stone-900 mb-1">本日のおすすめ</h2>
              <p className="text-sm text-amber-900/70">毎日仕入れによって変わります</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["本日の刺身盛り ¥1,980","天然ぶりの塩焼き ¥1,100","新玉ねぎの丸ごとスープ ¥660","春キャベツのおひたし ¥440"].map(item => (
                <div key={item} className="bg-stone-900 text-amber-200 px-5 py-3 rounded-full text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 bg-[#110b02]">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.5em] text-amber-600 uppercase mb-3">Menu</p>
            <h2 className="text-3xl font-bold text-amber-100">お品書き</h2>
            <div className="mt-5 mx-auto w-10 h-px bg-amber-600" />
            <p className="mt-4 text-xs text-amber-600/60">※ 表示価格はすべて税込みです</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(menus).map(([key, val]) => (
              <button key={key} onClick={() => setActiveMenu(key)}
                className={`px-5 py-2 rounded text-sm font-medium transition ${activeMenu === key ? "bg-amber-500 text-stone-900" : "border border-amber-800/60 text-amber-400 hover:border-amber-600"}`}>
                {val.label}
              </button>
            ))}
          </div>
          <div className="rounded-2xl border border-amber-800/40 overflow-hidden">
            {menus[activeMenu].items.map((item, i) => (
              <div key={i} className={`flex items-center justify-between px-7 py-4 ${i !== 0 ? "border-t border-amber-800/30" : ""} hover:bg-amber-900/10 transition`}>
                <div>
                  <p className="font-medium text-amber-100">{item.name}</p>
                  {item.note && <p className="text-xs text-amber-600/70 mt-0.5">{item.note}</p>}
                </div>
                <p className="text-amber-400 font-bold tabular-nums">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banquet */}
      <section id="banquet" className="py-24 bg-[#0e0801]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.5em] text-amber-600 uppercase mb-3">Banquet</p>
            <h2 className="text-3xl font-bold text-amber-100">宴会プラン</h2>
            <div className="mt-5 mx-auto w-10 h-px bg-amber-600" />
            <p className="mt-4 text-sm text-amber-400/60">歓送迎会・忘新年会・各種宴会に対応</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {banquetPlans.map(plan => (
              <div key={plan.name} className={`rounded-2xl border-2 ${plan.color} bg-amber-900/10 p-7`}>
                <p className="text-lg font-bold text-amber-100 mb-2">{plan.name}</p>
                <p className="text-3xl font-bold text-amber-400 mb-1">{plan.price}</p>
                <p className="text-xs text-amber-600/70 mb-4">{plan.time}</p>
                <div className="w-full h-px bg-amber-800/40 mb-4" />
                <p className="text-xs text-amber-300/70 leading-6 mb-4">{plan.items}</p>
                <span className="text-xs text-amber-600 border border-amber-800/60 px-3 py-1 rounded">{plan.min}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-xs text-amber-600/60">※ 料理内容は季節・入荷状況により変更する場合がございます。まずはお電話にてご相談ください。</p>
        </div>
      </section>

      {/* Reserve */}
      <section id="reserve" className="py-24 bg-[#110b02]">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-[10px] tracking-[0.5em] text-amber-600 uppercase mb-3">Reservation</p>
          <h2 className="text-3xl font-bold text-amber-100 mb-4">ご予約</h2>
          <div className="w-10 h-px bg-amber-600 mx-auto mb-10" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-amber-800/50 bg-amber-900/10 p-8">
              <div className="text-3xl mb-3">📞</div>
              <p className="text-[10px] tracking-widest text-amber-600 mb-2">お電話</p>
              <p className="text-xl font-bold text-amber-100 mb-2">03-0000-0000</p>
              <p className="text-xs text-amber-500/60">17:00〜23:00（月〜日）</p>
            </div>
            <div className="rounded-2xl bg-amber-500 p-8">
              <div className="text-3xl mb-3">🌐</div>
              <p className="text-[10px] tracking-widest text-amber-900 mb-2">WEB予約</p>
              <p className="text-xl font-bold text-stone-900 mb-2">ネット予約</p>
              <p className="text-xs text-amber-900/70">24時間受付中</p>
            </div>
          </div>
          <p className="mt-6 text-xs text-amber-600/60">
            お席のご準備の都合上、ご来店の際はご予約をおすすめしております。<br />
            当日のお席はお電話にてご確認ください。
          </p>
        </div>
      </section>

      {/* Access */}
      <section id="access" className="py-24 bg-[#0e0801]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.5em] text-amber-600 uppercase mb-3">Access</p>
            <h2 className="text-3xl font-bold text-amber-100">アクセス</h2>
            <div className="mt-5 mx-auto w-10 h-px bg-amber-600" />
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="h-72 rounded-2xl bg-amber-900/20 border border-amber-800/40 flex items-center justify-center">
              <div className="text-center text-amber-700">
                <div className="text-5xl mb-3">📍</div>
                <p className="text-sm">地図が表示されます</p>
              </div>
            </div>
            <div className="grid gap-6">
              {[
                { icon:"📍", label:"住所", value:"東京都渋谷区道玄坂2-10-7\n渋谷センタービル B1F" },
                { icon:"🚉", label:"アクセス", value:"JR渋谷駅 西口 徒歩3分\n東急東横線 渋谷駅 徒歩4分" },
                { icon:"🕐", label:"営業時間", value:"月〜金：17:00〜翌1:00\n土日祝：16:00〜翌1:00" },
                { icon:"📅", label:"定休日", value:"無休（年末年始を除く）" },
                { icon:"💺", label:"席数", value:"カウンター8席 ／ テーブル28席 ／ 個室2部屋（最大20名）" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <div className="text-xl mt-0.5 w-6 text-center">{icon}</div>
                  <div>
                    <p className="text-[10px] text-amber-600/70 tracking-widest uppercase mb-1">{label}</p>
                    <p className="text-sm text-amber-200/80 whitespace-pre-line leading-7">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080500] text-amber-700 py-12 text-center border-t border-amber-900/30">
        <p className="text-2xl font-bold text-amber-200 mb-1">酒場 七彩</p>
        <p className="text-[10px] tracking-[0.4em] text-amber-800 mb-6">SAKABA NANASHIKI</p>
        <p className="text-xs">© 2026 酒場 七彩. All rights reserved.</p>
        <p className="mt-2 text-xs text-amber-800">
          このサイトは <a href="/" className="text-amber-500 hover:text-amber-400 underline">LE CIEL WEB DESIGN</a> によるポートフォリオ制作例です。
        </p>
      </footer>
    </div>
  );
}
