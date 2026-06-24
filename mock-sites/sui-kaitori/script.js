const data = {
  featured: [
    ["山崎 25年", "サントリー", "¥1,500,000", "./assets/item-yamazaki-25.webp"],
    ["響 30年", "サントリー", "¥800,000", "./assets/item-hibiki-30.webp"],
    ["白州 25年", "サントリー", "¥600,000", "./assets/item-hakushu-25.webp"],
    ["マッカラン 30年", "スコッチ", "¥700,000", "./assets/item-macallan-30.webp"],
    ["ロマネ・コンティ", "DRC", "¥2,500,000", "./assets/item-romanee-conti.webp"],
    ["ルイ13世", "レミーマルタン", "¥200,000", "./assets/item-louis-xiii.webp"]
  ],
  categories: [
    ["ウイスキー", "WHISKY"], ["ブランデー", "BRANDY"], ["ワイン", "WINE"], ["シャンパン", "CHAMPAGNE"],
    ["コニャック", "COGNAC"], ["焼酎", "SHOCHU"], ["日本酒", "SAKE"], ["その他洋酒", "OTHERS"]
  ],
  records: [
    ["響 30年", "¥780,000", "店舗買取", "2026.05", "./assets/item-hibiki-30.webp"],
    ["マッカラン 25年", "¥430,000", "出張買取", "2026.05", "./assets/item-macallan-30.webp"],
    ["ロマネ・コンティ 2018", "¥2,300,000", "宅配買取", "2026.04", "./assets/item-romanee-conti.webp"],
    ["山崎 18年 ×3本", "¥420,000", "店舗買取", "2026.04", "./assets/item-yamazaki-25.webp"]
  ],
  prices: [
    ["whisky", "ウイスキー", "山崎", "25年", "¥1,500,000", true],
    ["whisky", "ウイスキー", "山崎", "18年", "¥150,000", true],
    ["whisky", "ウイスキー", "響", "30年", "¥800,000", true],
    ["whisky", "ウイスキー", "響", "21年", "¥120,000", false],
    ["whisky", "ウイスキー", "白州", "25年", "¥600,000", false],
    ["whisky", "ウイスキー", "軽井沢", "1960 ヴィンテージ", "¥3,000,000", true],
    ["brandy", "ブランデー", "レミーマルタン", "ルイ13世", "¥200,000", true],
    ["brandy", "ブランデー", "ヘネシー", "リシャール", "¥250,000", false],
    ["brandy", "ブランデー", "カミュ", "ブック バカラ", "¥80,000", false],
    ["wine", "ワイン", "ロマネ・コンティ", "DRC 2018", "¥2,500,000", true],
    ["wine", "ワイン", "シャトー・ペトリュス", "2015", "¥400,000", false],
    ["wine", "ワイン", "オーパス・ワン", "2019", "¥45,000", false],
    ["champagne", "シャンパン", "ドン・ペリニヨン", "P2 ロゼ", "¥150,000", true],
    ["champagne", "シャンパン", "サロン", "ブラン・ド・ブラン 2012", "¥60,000", false],
    ["shochu", "焼酎", "森伊蔵", "金ラベル", "¥30,000", true],
    ["shochu", "焼酎", "魔王", "—", "¥12,000", false],
    ["sake", "日本酒", "十四代", "龍泉", "¥120,000", true],
    ["sake", "日本酒", "而今", "特別純米", "¥12,000", false]
  ],
  faqs: [
    ["査定について", [
      ["査定だけのお願いでも大丈夫ですか？", "もちろん可能です。査定は無料で、金額にご納得いただけない場合はキャンセルいただけます。"],
      ["査定にはどれくらい時間がかかりますか？", "LINE査定は最短10分でご回答。店頭・出張買取はその場で査定し、即日現金化が可能です。"],
      ["何を見て査定額が決まりますか？", "銘柄・年代・未開封か否か・付属品・保存状態をもとに、国内外の最新相場と照らして算出します。"]
    ]],
    ["買取方法について", [
      ["遠方でも買取してもらえますか？", "全国対応しております。宅配買取または出張買取をご利用ください。"],
      ["出張買取に費用はかかりますか？", "出張費・査定費・キャンセル費はすべて無料です。"],
      ["1本だけでも買取できますか？", "1本から承ります。まとめ売りや本数の多いお品物は買取価格を優遇しております。"]
    ]],
    ["お品物について", [
      ["箱やラベルがなくても買取できますか？", "可能です。状態により価格は変動しますが、箱なし・ラベル傷みのお品物もまずはご相談ください。"],
      ["開封済みのお酒は買取できますか？", "銘柄や残量によってはお買取できる場合がございます。LINEで写真をお送りください。"]
    ]]
  ],
  stores: [
    ["新宿本店", "駐車場あり", "東京都新宿区〇〇 1-2-3 〇〇ビル 1F", "JR「新宿駅」南口より徒歩5分", "0120-000-001"],
    ["渋谷店", "宅配受付OK", "東京都渋谷区〇〇 2-3-4 〇〇ビル 2F", "各線「渋谷駅」ハチ公口より徒歩3分", "0120-000-002"],
    ["横浜店", "駐車場あり", "神奈川県横浜市〇〇区 3-4-5 〇〇ビル 1F", "各線「横浜駅」西口より徒歩6分", "0120-000-003"],
    ["大阪梅田店", "宅配受付OK", "大阪府大阪市北区〇〇 4-5-6 〇〇ビル 3F", "JR「大阪駅」御堂筋口より徒歩4分", "0120-000-004"]
  ],
  articles: [
    ["買取のコツ", "2026.06.18", "ウイスキー買取で高く売るための3つのコツ", "付属品・タイミング・売り先。少しの工夫で査定額は大きく変わります。"],
    ["豆知識", "2026.06.10", "未開封でなくても買取できる？開封済みのお酒について", "残量や銘柄によっては開封済みでも買取可能。判断のポイントを解説します。"],
    ["お酒の知識", "2026.06.02", "贈答品のブランデー、眠っていませんか？価値を見直す", "いただきもののまましまい込んだ高級ブランデー。今が手放し時かもしれません。"],
    ["お酒の知識", "2026.05.24", "山崎・響・白州が高騰する理由", "世界的評価と品薄が招く価格上昇。人気銘柄の今を読み解きます。"],
    ["買取のコツ", "2026.05.15", "箱・付属品で査定額はどれだけ変わる？", "化粧箱・冊子・保証書の有無で評価は変動。保管のコツもご紹介。"],
    ["お知らせ", "2026.04.28", "年末年始の出張買取スケジュールのお知らせ", "繁忙期の出張・宅配買取の受付スケジュールをご案内します。"]
  ]
};

const storeImg = "./assets/storefront.webp";
const priceFilters = [["all", "すべて"], ["whisky", "ウイスキー"], ["brandy", "ブランデー"], ["wine", "ワイン"], ["champagne", "シャンパン"], ["shochu", "焼酎"], ["sake", "日本酒"]];
let currentFilter = "all";
let heroIndex = 0;
const heroSlides = data.featured;

// カテゴリカードのEN名 → 相場表フィルタの対応（該当が無いものはコニャック=ブランデー、その他洋酒=すべて）
const categoryFilterMap = { whisky: "whisky", brandy: "brandy", wine: "wine", champagne: "champagne", cognac: "brandy", shochu: "shochu", sake: "sake", others: "all" };
// セクションのid → ページ名（#contactはhomeページ内）
const pageById = { top: "home", first: "first", prices: "prices", column: "column", faq: "faq", stores: "stores", access: "access", contact: "home" };
// ページ名 → 既定のハッシュ
const hashByPage = { home: "#top", first: "#first", prices: "#prices", column: "#column", faq: "#faq", stores: "#stores", access: "#access" };

function setPage(page, target) {
  document.querySelectorAll(".page").forEach(el => el.classList.toggle("is-active", el.dataset.page === page));
  document.querySelectorAll("[data-page-link]").forEach(el => el.classList.toggle("is-active", el.dataset.pageLink === page));
  document.querySelector(".site-nav").classList.remove("is-open");
  document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
  const targetEl = target ? document.querySelector(target) : null;
  if (targetEl) {
    targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function render() {
  document.getElementById("featuredItems").innerHTML = data.featured.map(([name, sub, price, image]) => `
    <article class="item-card"><img src="${image}" alt="${name}のイメージ"><div><p>${sub}</p><h3>${name}</h3><span>買取上限</span><br><b>${price}</b></div></article>
  `).join("");
  document.getElementById("categoryGrid").innerHTML = data.categories.map(([name, en]) => {
    const filter = categoryFilterMap[en.toLowerCase()] || "all";
    return `<button class="category" data-page-link="prices" data-filter="${filter}"><span>${en.slice(0, 2)}</span><strong>${name}</strong><small>${en}</small></button>`;
  }).join("");
  document.getElementById("recordGrid").innerHTML = data.records.map(([name, price, method, date, image]) => `
    <article><img src="${image}" alt="${name}の買取実績イメージ"><div><h3>${name}</h3><b>${price}</b><p>${method} / ${date}</p></div></article>
  `).join("");
  applyFilter();
  document.getElementById("faqList").innerHTML = data.faqs.map(([group, items]) => `
    <div class="faq-group"><h2>${group}</h2>${items.map(([q, a], i) => `
      <article class="faq-item ${i === 0 ? "is-open" : ""}"><button type="button"><span>${q}</span><b>${i === 0 ? "−" : "＋"}</b></button><div>${a}</div></article>
    `).join("")}</div>
  `).join("");
  document.getElementById("storeGrid").innerHTML = data.stores.map(([name, badge, address, nearest, tel]) => `
    <article class="store-card"><img src="${storeImg}" alt="${name}の店舗イメージ"><div><span class="badge">${badge}</span><h3>${name}</h3><p>${address}</p><p>${nearest}</p><p>${tel}</p><button class="button gold" data-page-link="access">地図・アクセス</button></div></article>
  `).join("");
  document.getElementById("articleGrid").innerHTML = data.articles.map(([cat, date, title, excerpt]) => `
    <article class="article-card"><span>${cat} / ${date}</span><h3>${title}</h3><p>${excerpt}</p></article>
  `).join("");
  renderHeroDots();
  updateHeroSlide(0, true);
}

function applyFilter() {
  document.getElementById("priceFilters").innerHTML = priceFilters.map(([key, label]) => `
    <button type="button" data-filter="${key}" class="${key === currentFilter ? "is-active" : ""}">${label}</button>
  `).join("");
  renderPrices();
}

function renderPrices() {
  const rows = data.prices.filter(row => currentFilter === "all" || row[0] === currentFilter);
  document.getElementById("priceTable").innerHTML = `
    <div class="price-row header"><span>カテゴリ</span><span>銘柄・ブランド</span><span>商品名</span><span>買取上限価格</span></div>
    ${rows.map(row => `<div class="price-row"><span>${row[1]}${row[5] ? "<em class=\"hot\">強化</em>" : ""}</span><span>${row[2]}</span><span>${row[3]}</span><b>${row[4]}</b></div>`).join("")}
  `;
}

function renderHeroDots() {
  document.getElementById("heroDots").innerHTML = heroSlides.map((slide, index) => `
    <button type="button" class="${index === heroIndex ? "is-active" : ""}" data-hero-slide="${index}" aria-label="${slide[0]}を表示"></button>
  `).join("");
}

function updateHeroSlide(index, immediate = false) {
  heroIndex = index;
  const [name, , price, image] = heroSlides[heroIndex];
  const imageEl = document.getElementById("heroSlideImage");
  const apply = () => {
    imageEl.src = image;
    imageEl.alt = `${name}のイメージ`;
    document.getElementById("heroItem").textContent = name;
    document.getElementById("heroPrice").textContent = price;
    document.querySelectorAll("[data-hero-slide]").forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === heroIndex);
    });
    imageEl.classList.remove("is-changing");
  };
  if (immediate) {
    apply();
    return;
  }
  imageEl.classList.add("is-changing");
  window.setTimeout(apply, 180);
}

function buildHash(page, target, filter) {
  let base = target && target.startsWith("#") ? target : (hashByPage[page] || "#top");
  if (page === "prices" && filter && filter !== "all") base = "#prices?" + filter;
  return base;
}

function parseLocation() {
  const raw = location.hash.replace(/^#/, "");
  const [id, filter] = raw.split("?");
  const page = pageById[id] || "home";
  return { page, target: id ? "#" + id : null, filter: page === "prices" ? (filter || "all") : "all" };
}

// 履歴に積みながら遷移する（ページ切替・フィルタ適用・URL更新）
function navigate(page, { target = null, filter } = {}, push = true) {
  const filterChanged = filter !== undefined && filter !== currentFilter;
  if (filter !== undefined) currentFilter = filter;
  setPage(page, target);
  if (filterChanged) applyFilter();
  const state = { page, filter: currentFilter, target };
  const hash = buildHash(page, target, currentFilter);
  if (push) history.pushState(state, "", hash);
  else history.replaceState(state, "", hash);
}

// 履歴（戻る/進む・直リンク）から状態を反映する（履歴は積まない）
function applyState(state) {
  const { page = "home", filter = "all", target = null } = state || {};
  const filterChanged = filter !== currentFilter;
  currentFilter = filter;
  setPage(page, target);
  if (filterChanged) applyFilter();
}

document.addEventListener("click", event => {
  const link = event.target.closest("[data-page-link]");
  if (link) {
    event.preventDefault();
    const href = link.getAttribute("href");
    const target = href && href.startsWith("#") ? href : null;
    navigate(link.dataset.pageLink, { target, filter: link.dataset.filter });
    return;
  }
  const filter = event.target.closest("[data-filter]");
  if (filter) {
    currentFilter = filter.dataset.filter;
    applyFilter();
    history.replaceState({ page: "prices", filter: currentFilter, target: null }, "", buildHash("prices", null, currentFilter));
    return;
  }
  const heroDot = event.target.closest("[data-hero-slide]");
  if (heroDot) {
    updateHeroSlide(Number(heroDot.dataset.heroSlide));
    return;
  }
  const faqButton = event.target.closest(".faq-item button");
  if (faqButton) {
    const item = faqButton.closest(".faq-item");
    item.classList.toggle("is-open");
    faqButton.querySelector("b").textContent = item.classList.contains("is-open") ? "−" : "＋";
  }
});

document.querySelector(".menu-button").addEventListener("click", event => {
  const nav = document.querySelector(".site-nav");
  nav.classList.toggle("is-open");
  event.currentTarget.setAttribute("aria-expanded", nav.classList.contains("is-open"));
});

setInterval(() => {
  updateHeroSlide((heroIndex + 1) % heroSlides.length);
}, 3600);

window.addEventListener("popstate", event => {
  applyState(event.state || parseLocation());
});

render();

// 読み込み時：URLのハッシュ（直リンク・リロード）を反映し、履歴の起点を記録する
const initial = parseLocation();
applyState(initial);
history.replaceState({ page: initial.page, filter: initial.filter, target: initial.target }, "", buildHash(initial.page, initial.target, initial.filter));
