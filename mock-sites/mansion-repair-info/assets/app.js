const news = [
  { date: "2026.06.20", tag: "重要", cls: "important", title: "足場設置に伴うベランダ私物の撤去のお願い（6/24〜）", body: "6月24日（水）より南面の足場設置を開始します。足場および防水工事の妨げとなるため、ベランダに置かれている植木鉢・物干し竿・サンダル・収納ボックスなどの私物は、6月23日（火）までに室内へ移動してくださいますようお願いいたします。\n\nエアコン室外機の取り扱いについては、対象のお部屋へ個別にご案内します。" },
  { date: "2026.06.15", tag: "工程", cls: "process", title: "工事説明会の資料を掲載しました。ご確認ください。", body: "6月13日（土）に開催した工事説明会の配布資料を、各戸の郵便受けへ投函するとともに掲示板に掲示しました。工事の全体スケジュール、各工程の作業内容、生活上のお願いをまとめております。" },
  { date: "2026.06.10", tag: "お知らせ", cls: "info", title: "工事期間中の臨時駐車場の場所が決定しました。", body: "足場設置エリアに面した駐車区画は、工事期間中ご利用いただけません。対象となる契約者の方には、近隣に確保した臨時駐車場を個別にご案内いたします。" },
  { date: "2026.06.05", tag: "工程", cls: "process", title: "高圧洗浄作業に伴う騒音・水しぶきについて", body: "外壁の下地補修後、塗装前の工程として高圧洗浄を行います。作業中は機械音および水しぶきが発生します。洗浄を行う面の窓は、当日は閉めていただきますようお願いいたします。" },
  { date: "2026.06.01", tag: "お知らせ", cls: "info", title: "大規模修繕工事の情報サイトを開設しました。", body: "居住者のみなさまに工事の情報を分かりやすくお届けするため、本情報サイトを開設しました。工事の進捗、日々のお願い、よくある質問などを随時更新してまいります。" },
  { date: "2026.05.25", tag: "お知らせ", cls: "info", title: "工事説明会開催のご案内（6/13）", body: "大規模修繕工事の着工に先立ち、工事説明会を開催いたします。日時：6月13日（土）10:00〜／場所：1階集会室。施工会社より工事内容・スケジュール・生活上のお願いについてご説明します。" },
  { date: "2026.05.18", tag: "重要", cls: "important", title: "修繕委員会だより 第3号を発行しました", body: "修繕委員会より、工事会社の選定経緯と今後のスケジュールについてご報告する「修繕委員会だより 第3号」を発行しました。各戸へ配布しておりますのでご確認ください。" },
  { date: "2026.05.10", tag: "お知らせ", cls: "info", title: "事前建物調査の実施について", body: "工事に先立ち、建物全体の劣化状況を把握するための事前調査を実施します。共用部が中心ですが、一部のお部屋でベランダ等の確認をお願いする場合があります。" }
];

const faqs = [
  ["工事中も今までどおり生活できますか？", "はい、通常どおりお過ごしいただけます。足場設置中は窓の施錠やベランダの私物撤去などにご協力をお願いしますが、室内での生活に大きな支障はありません。"],
  ["作業員が部屋の中に入ることはありますか？", "原則として室内に立ち入ることはありません。専有部の点検・補修が必要な場合は、事前に日時をご相談のうえお伺いします。"],
  ["工事の騒音やにおいが心配です。", "騒音・振動・においを伴う作業は、事前にお知らせ欄や掲示板でご案内します。ご体調などご不安のある方は管理組合までご相談ください。"],
  ["スケジュールは変更になりますか？", "天候や現場の状況により、工程が前後する場合があります。最新の予定は「工事スケジュール」および「お知らせ」で随時更新します。"],
  ["ベランダの植木やエアコン室外機はどうすればよいですか？", "足場設置・防水工事の期間中は、植木鉢などの私物は室内への移動をお願いします。室外機については個別にご案内します。"],
  ["工事費用はどうなっていますか？", "工事費用は管理組合の修繕積立金等から支出されます。詳細は総会資料および管理組合までお問い合わせください。"]
];

let page = 0;
const perPage = 4;
const newsList = document.querySelector("#news-list");
const newsPager = document.querySelector("#news-pager");
const modal = document.querySelector("#news-modal");

function renderNews() {
  const start = page * perPage;
  newsList.innerHTML = news.slice(start, start + perPage).map((item, index) => `
    <button class="news-item" type="button" data-news="${start + index}">
      <time>${item.date}</time>
      <span class="tag ${item.cls}">${item.tag}</span>
      <span class="news-title">${item.title}</span>
      <span class="news-more">詳細 ›</span>
    </button>
  `).join("");

  const total = Math.ceil(news.length / perPage);
  newsPager.innerHTML = Array.from({ length: total }, (_, i) => `
    <button type="button" ${i === page ? 'aria-current="page"' : ""} data-page="${i}">${i + 1}</button>
  `).join("");
}

function openNews(index) {
  const item = news[index];
  document.querySelector("#modal-meta").innerHTML = `<time>${item.date}</time><span class="tag ${item.cls}">${item.tag}</span>`;
  document.querySelector("#modal-title").textContent = item.title;
  document.querySelector("#modal-body").textContent = item.body;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

document.addEventListener("click", (event) => {
  const menuButton = event.target.closest(".menu-button, .mobile-menu-button");
  if (menuButton) {
    const nav = document.querySelector("#site-nav");
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    document.querySelectorAll(".menu-button, .mobile-menu-button").forEach((button) => {
      button.setAttribute("aria-expanded", String(open));
    });
    return;
  }

  if (event.target.closest(".site-nav a")) {
    document.querySelector("#site-nav").classList.remove("is-open");
    document.querySelectorAll(".menu-button, .mobile-menu-button").forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });
  }

  const newsButton = event.target.closest("[data-news]");
  if (newsButton) openNews(Number(newsButton.dataset.news));

  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    page = Number(pageButton.dataset.page);
    renderNews();
  }

  const closeButton = event.target.closest("[data-close-modal]");
  if (closeButton) closeModal();

  const faqButton = event.target.closest(".faq-item button");
  if (faqButton) {
    const item = faqButton.closest(".faq-item");
    const open = item.classList.toggle("is-open");
    faqButton.setAttribute("aria-expanded", String(open));
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});

document.querySelector("#faq-list").innerHTML = faqs.map(([q, a], index) => `
  <article class="faq-item ${index === 0 ? "is-open" : ""}">
    <button type="button" aria-expanded="${index === 0 ? "true" : "false"}">
      <span class="faq-q">Q</span>
      <span class="faq-title">${q}</span>
      <span class="faq-plus">＋</span>
    </button>
    <div class="faq-answer">${a}</div>
  </article>
`).join("");

renderNews();
