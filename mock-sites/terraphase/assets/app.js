const assets = {
  sentry: "assets/images/product-sentry.png",
  meshlink: "assets/images/product-meshlink.png",
  strata: "assets/images/product-strata.png",
  foresight: "assets/images/product-foresight.png",
  edgeAi: "assets/images/tech-edge-ai.png",
  sensorFusion: "assets/images/tech-sensor-fusion.png",
  secureDesign: "assets/images/tech-secure-design.png",
  autonomy: "assets/images/tech-autonomy.png"
};

const dictionaries = {
  ja: {
    nav: { domains: "対応領域", products: "製品", tech: "技術", careers: "採用情報", company: "会社概要", contact: "お問い合わせ" },
    hero: {
      eyebrow: "防衛・重要インフラのための先端技術",
      headline: "不確実な領域に、<br>確かな判断を。",
      sub: "防衛と重要インフラの最前線へ。センシング、自律制御、情報統合をひとつの基盤に束ね、現場の意思決定を支えます。大学発のディープテックが、過酷な現実の解像度を引き上げる。",
      cta1: "製品を見る",
      cta2: "技術について"
    },
    domains: {
      label: "Domains",
      title: "二つの領域、ひとつの基盤。",
      defenseTag: "DEFENSE",
      defenseName: "防衛",
      defenseDesc: "ISR、自律システム、指揮統制支援。通信や電力が限られる過酷な環境下でも、途切れない認識と判断を提供します。",
      infraTag: "CRITICAL INFRASTRUCTURE",
      infraName: "重要インフラ",
      infraDesc: "構造ヘルスモニタリング、予知保全、レジリエンス。橋梁・プラント・通信網など、社会の基盤を止めずに守り抜きます。"
    },
    defenseCaps: ["ISR / 監視・偵察", "自律システム / Autonomy", "指揮統制支援 / C2"],
    infraCaps: ["構造ヘルス監視", "予知保全 / Predictive", "レジリエンス設計"],
    products: { label: "Products", title: "現場で動く、製品群。" },
    tech: { label: "Technology", title: "基盤を支える、四つの技術。" },
    cta: {
      label: "Get in touch",
      title: "現場の課題から、はじめましょう。",
      sub: "省庁・事業者・投資家・技術者の皆さまへ。導入のご相談、共同研究、採用に関するお問い合わせを承っています。"
    },
    form: {
      name: "お名前",
      org: "組織・ご所属",
      email: "メールアドレス",
      category: "ご相談の種別",
      message: "お問い合わせ内容",
      categories: ["導入のご相談", "共同研究・技術連携", "採用について", "取材・その他"],
      submit: "送信する",
      placeholderName: "山田 太郎",
      placeholderOrg: "○○省 / ○○株式会社",
      placeholderEmail: "name@example.go.jp",
      placeholderMessage: "ご相談の背景や課題をご記入ください。",
      successTitle: "送信ありがとうございます。",
      successBody: "内容を確認し、担当者より折り返しご連絡いたします。",
      note: "※ これはプロトタイプのフォームです。実際の送信は行われません。"
    },
    footer: {
      about: "先端技術を手がける大学発のディープテック企業。防衛・重要インフラ分野に向けた製品とソフトウェアを開発しています。",
      siteLabel: "Site",
      contactLabel: "Contact",
      address: "東京都 / Tokyo, Japan",
      placeholder: "社名・情報は仮置きです"
    },
    chrome: {
      overview: "Overview",
      capabilities: "Capabilities",
      specs: "Specifications",
      specsNote: "※ 仕様値は代表例の仮置きです。構成により変動します。",
      useCases: "Use Cases",
      related: "Related Products",
      backToProducts: "製品一覧へ",
      contactCta: "この製品について相談する",
      viewProduct: "製品を見る",
      placeholder: "製品情報は仮置きです"
    },
    careers: {
      label: "Careers",
      title: "未知の現場に、確かな技術を届ける。",
      lead: "TERRAPHASE は、防衛・重要インフラの課題に向き合うディープテックチームです。研究と実装の距離を縮め、現場で動くプロダクトを一緒につくる仲間を探しています。",
      missionLabel: "Why Join",
      missionTitle: "社会基盤を支える、難しい問いに挑む。",
      missionBody: "通信が途切れる場所、点検できない構造物、複数の情報が矛盾する現場。私たちは、こうした不確実性の高い環境で、人の判断を支える技術を開発しています。",
      missionBody2: "研究成果を論文の中だけで終わらせず、ハードウェア、ソフトウェア、運用設計までつなげることを重視します。",
      rolesLabel: "Open Roles",
      role1Title: "エッジAIエンジニア",
      role1Body: "低遅延推論、モデル最適化、センサー処理基盤の開発。",
      role2Title: "組込み・通信エンジニア",
      role2Body: "メッシュ通信、デバイス制御、現場検証環境の構築。",
      role3Title: "リサーチサイエンティスト",
      role3Body: "センサーフュージョン、自律制御、異常検知アルゴリズムの研究開発。",
      peopleLabel: "People",
      peopleTitle: "先輩エンジニア紹介",
      person1Role: "Edge AI Lead",
      person1Name: "佐伯 拓真 / シニアエッジAIエンジニア",
      person1Body: "前職では製造現場向けの画像認識モデルを開発。TERRAPHASE では、通信が不安定な環境でも動き続ける推論基盤を担当しています。研究コードを現場で使える速度・消費電力・堅牢性まで落とし込むところに、いちばん面白さを感じています。",
      person1Quote: "「完璧な環境ではなく、制約だらけの現場で動くものをつくる。そこにエンジニアリングの濃さがあります。」",
      person2Role: "Sensor Fusion Lead",
      person2Name: "三島 玲奈 / センサーフュージョンエンジニア",
      person2Body: "大学院ではロボティクスと時系列解析を研究。現在は、光学・レーダー・振動データを統合し、単一センサーでは見えない異常や兆候を捉えるアルゴリズムを開発しています。専門の違うメンバーと一緒に仮説を検証し、プロダクトに反映するスピードが魅力です。",
      person2Quote: "「データの奥にある現場の変化を、どうすれば人が判断できる形にできるか。毎日その問いに向き合っています。」",
      ctaLabel: "Contact",
      ctaTitle: "まずは話しましょう。",
      ctaButton: "採用について問い合わせる"
    },
    company: {
      label: "Company",
      title: "不確実な領域を、見える基盤へ。",
      lead: "TERRAPHASE は、防衛と重要インフラに向けた先端技術を開発する大学発ディープテック企業です。センシング、自律制御、情報統合を横断し、現場の意思決定を支えます。",
      identityLabel: "Identity",
      identityTitle: "研究から実装へ。実装から現場へ。",
      identityBody: "私たちは、大学・研究機関で培われた技術を、過酷な環境で使えるプロダクトへ変換することを使命としています。",
      identityBody2: "重要な判断が求められる現場に、説明可能で、堅牢で、運用し続けられる技術を届けます。",
      profileLabel: "Profile",
      nameLabel: "社名",
      foundedLabel: "設立",
      foundedValue: "2026年（仮）",
      locationLabel: "所在地",
      locationValue: "東京都 / Tokyo, Japan",
      businessLabel: "事業内容",
      businessValue: "防衛・重要インフラ向けソフトウェア、エッジAI、センサー統合基盤の開発",
      noteLabel: "備考",
      noteValue: "本ページの会社情報はプロトタイプ用の仮置きです。",
      ctaLabel: "Contact",
      ctaTitle: "連携・導入のご相談はこちら。",
      ctaButton: "お問い合わせ"
    },
    techItems: [
      { no: "T.01", name: "エッジAI推論", desc: "クラウドに依存しない、現場完結の推論。低遅延・低電力で、極限環境でも動き続けます。", image: "edgeAi" },
      { no: "T.02", name: "センサーフュージョン", desc: "光学・電波・振動など異種センサーを時空間で統合し、ひとつの信頼できる像をつくります。", image: "sensorFusion" },
      { no: "T.03", name: "耐タンパ・セキュア設計", desc: "設計段階からの堅牢性と検証可能性。供給網と稼働の両面でセキュリティを担保します。", image: "secureDesign" },
      { no: "T.04", name: "自律制御", desc: "人の判断を置き換えるのではなく増幅する、説明可能な自律をめざします。", image: "autonomy" }
    ],
    productItems: [
      { slug: "sentry", idx: "01", code: "PRD // SENTRY-OS", name: "SENTRY OS", tag: "自律エッジ知覚", desc: "通信が途絶えても判断を止めない、エッジAI知覚プラットフォーム。デバイス上で推論を完結させ、現場でリアルタイムに状況を捉えます。" },
      { slug: "meshlink", idx: "02", code: "PRD // MESHLINK", name: "MESHLINK", tag: "耐障害メッシュ通信", desc: "ノードが失われても自己再構成する、戦術メッシュ通信基盤。妨害や断絶に強く、分散した部隊と設備をつなぎ続けます。" },
      { slug: "strata", idx: "03", code: "PRD // STRATA", name: "STRATA", tag: "構造ヘルスモニタリング", desc: "橋梁・プラント・施設の劣化を常時可視化し、破綻の前に知らせる監視基盤。微細な変位を捉え、予兆の段階で対処を促します。" },
      { slug: "foresight", idx: "04", code: "PRD // FORESIGHT", name: "FORESIGHT", tag: "マルチソース情報統合", desc: "断片的なセンサー情報を一枚の状況図に束ねる統合分析環境。異種データを時空間で融合し、意思決定者へ判断材料を届けます。" }
    ],
    productData: {
      sentry: {
        name: "SENTRY OS", code: "PRD // SENTRY-OS", tag: "自律エッジ知覚",
        pitch: "通信が途絶えても、判断を止めない。デバイス上で完結するエッジAI知覚プラットフォーム。",
        overview: "SENTRY OS は、カメラ・レーダー・音響などのセンサー入力をデバイス上でリアルタイムに解析し、人・車両・脅威を検知して追跡します。クラウドへの常時接続を前提とせず、妨害や遮断のある環境でも稼働を継続。検知結果のみを低帯域で共有するため、限られた通信資源でも運用できます。",
        caps: [["C.01", "オンデバイス推論", "クラウドに依存せず、低遅延・低電力で推論を完結。"], ["C.02", "マルチセンサー対応", "光学・赤外・レーダー・音響を一つの像に統合。"], ["C.03", "自動検知・追尾", "対象を継続的に追跡し、種別を分類。"], ["C.04", "低帯域連携", "検知メタデータのみを共有し通信を節約。"]],
        specs: [["推論ハードウェア", "NPU / GPU エッジモジュール"], ["推論遅延", "< 40 ms"], ["消費電力", "8-25 W (構成可変)"], ["動作環境", "-20 - 60 C / IP67"], ["連携I/F", "MESHLINK・FORESIGHT / REST / gRPC"]],
        useCases: [["01", "前線・無人地帯の監視", "人手をかけられない境界線での侵入検知と早期警戒。"], ["02", "重要施設の防護", "発電所・港湾・基地などの常時監視と異常検知。"]]
      },
      meshlink: {
        name: "MESHLINK", code: "PRD // MESHLINK", tag: "耐障害メッシュ通信",
        pitch: "ノードが失われても、つながり続ける。自己再構成する戦術メッシュ通信基盤。",
        overview: "MESHLINK は、各ノードが対等に通信を中継する分散型ネットワークです。一部のノードが破壊・離脱しても、残るノードが自動的に経路を再構成し、通信を維持します。妨害波や地形による遮断に強く、車両・隊員・固定設備を一つの網でつなぎます。",
        caps: [["C.01", "自己修復ルーティング", "ノードの増減に応じて経路を自動再構成。"], ["C.02", "耐妨害設計", "周波数ホッピングと暗号化で妨害に対抗。"], ["C.03", "動的トポロジ", "展開状況の変化にリアルタイムで追従。"], ["C.04", "低被探知", "出力と波形を最適化し探知リスクを低減。"]],
        specs: [["周波数帯", "マルチバンド (UHF / L / S)"], ["中継射程", "5-40 km / hop"], ["最大ノード数", "256 / fabric"], ["暗号", "AES-256 / 鍵ローテーション"], ["経路復旧時間", "< 2 s"]],
        useCases: [["01", "機動部隊の連接", "分散展開した車両・隊員を途切れなくつなぐ。"], ["02", "災害時の臨時通信", "既設インフラ喪失時に自律的な通信網を確立。"]]
      },
      strata: {
        name: "STRATA", code: "PRD // STRATA", tag: "構造ヘルスモニタリング",
        pitch: "壊れる前に、知らせる。社会基盤の劣化を常時可視化する監視基盤。",
        overview: "STRATA は、橋梁・トンネル・プラント・施設に設置したセンサー群から、振動・歪み・傾斜・温度などを連続収集します。微細な変位やひび割れの進行を捉え、劣化を予兆の段階で検出。点検の優先順位付けと予知保全を支援し、突発的な破綻を未然に防ぎます。",
        caps: [["C.01", "微小変位検出", "um単位の変化まで捉え、初期の異常を可視化。"], ["C.02", "予兆検知", "劣化の進行傾向を学習し、破綻の前に警告。"], ["C.03", "常時可視化", "構造の健全度をダッシュボードで一元表示。"], ["C.04", "予知保全", "点検と補修の時期を最適化し、コストを抑制。"]],
        specs: [["センサー種別", "歪み / 加速度 / 傾斜 / 温度 / 音響"], ["サンプリング", "up to 10 kHz"], ["設置形態", "有線 / 無線ノード"], ["電源", "PoE / バッテリ / ソーラー"], ["連携I/F", "REST / OPC-UA / FORESIGHT"]],
        useCases: [["01", "橋梁・トンネルの監視", "老朽化した交通インフラの健全度を常時把握。"], ["02", "プラント設備の保全", "配管・タンク・架構の劣化を早期に検出。"]]
      },
      foresight: {
        name: "FORESIGHT", code: "PRD // FORESIGHT", tag: "マルチソース情報統合",
        pitch: "断片を、一枚の状況図に。意思決定者のための統合分析環境。",
        overview: "FORESIGHT は、SENTRY OS や STRATA、外部センサー、各種データソースからの情報を時空間で統合し、一枚の状況図として提示します。異種データの相関を自動で評価し、注目すべき事象を浮かび上がらせ、指揮・運用の意思決定を支援します。",
        caps: [["C.01", "データ融合", "異種ソースを時空間で統合し一枚の像に。"], ["C.02", "相関分析", "事象間の関係を自動で評価・抽出。"], ["C.03", "共通状況図", "全体像を一画面で関係者に共有。"], ["C.04", "アラート", "重要な事象を即時に通知。"]],
        specs: [["入力ソース", "SENTRY OS / STRATA / RF / GIS / 外部"], ["統合方式", "時空間相関フュージョン"], ["配備形態", "オンプレ / エアギャップ対応"], ["同時ソース数", "1000+ feeds"], ["連携I/F", "REST / gRPC / WebSocket"]],
        useCases: [["01", "指揮統制(C2)支援", "複数領域の情報を統合し、判断材料を提示。"], ["02", "広域インフラ監視", "都市規模の監視を一つのコンソールに集約。"]]
      }
    }
  },
  en: {
    nav: { domains: "Domains", products: "Products", tech: "Technology", careers: "Careers", company: "Company", contact: "Contact" },
    hero: {
      eyebrow: "Advanced technology for defense & critical infrastructure",
      headline: "Decisive clarity<br>for contested domains.",
      sub: "From the front line of defense to critical infrastructure. We unite sensing, autonomy, and intelligence fusion on a single foundation, deep technology built to sharpen the resolution of hostile reality.",
      cta1: "Explore products",
      cta2: "Our technology"
    },
    domains: {
      label: "Domains",
      title: "Two domains. One foundation.",
      defenseTag: "DEFENSE",
      defenseName: "Defense",
      defenseDesc: "ISR, autonomous systems, and command support, delivering uninterrupted perception and judgment even where comms and power are scarce.",
      infraTag: "CRITICAL INFRASTRUCTURE",
      infraName: "Critical Infrastructure",
      infraDesc: "Structural health monitoring, predictive maintenance, and resilience, keeping bridges, plants, and networks running."
    },
    defenseCaps: ["ISR / Surveillance", "Autonomous systems", "C2 / Command support"],
    infraCaps: ["Structural monitoring", "Predictive maintenance", "Resilience by design"],
    products: { label: "Products", title: "Products built for the field." },
    tech: { label: "Technology", title: "Four technologies beneath the platform." },
    cta: {
      label: "Get in touch",
      title: "Let's start from your mission.",
      sub: "For agencies, operators, investors, and engineers. Talk to us about deployment, joint research, or careers."
    },
    form: {
      name: "Name",
      org: "Organization",
      email: "Email",
      category: "Inquiry type",
      message: "Message",
      categories: ["Deployment inquiry", "Joint research / partnership", "Careers", "Press / other"],
      submit: "Send",
      placeholderName: "Jane Doe",
      placeholderOrg: "Agency / Company",
      placeholderEmail: "name@example.com",
      placeholderMessage: "Tell us about your context and what you need.",
      successTitle: "Thank you for reaching out.",
      successBody: "We'll review your message and get back to you shortly.",
      note: "* This is a prototype form. Nothing is actually sent."
    },
    footer: {
      about: "A university-born deep-tech company developing products and software for defense and critical infrastructure.",
      siteLabel: "Site",
      contactLabel: "Contact",
      address: "Tokyo, Japan",
      placeholder: "name & details are placeholders"
    },
    chrome: {
      overview: "Overview",
      capabilities: "Capabilities",
      specs: "Specifications",
      specsNote: "* Spec values are representative placeholders and vary by configuration.",
      useCases: "Use Cases",
      related: "Related Products",
      backToProducts: "Back to products",
      contactCta: "Talk to us about this product",
      viewProduct: "View product",
      placeholder: "product details are placeholders"
    },
    careers: {
      label: "Careers",
      title: "Bring reliable technology to uncertain fields.",
      lead: "TERRAPHASE is a deep-tech team focused on defense and critical infrastructure. We are looking for people who can close the distance between research and deployment, and build products that work in the field.",
      missionLabel: "Why Join",
      missionTitle: "Work on hard questions beneath society's foundations.",
      missionBody: "Disconnected environments, structures that cannot be inspected easily, and conflicting streams of field information. We develop technology that supports human judgment under uncertainty.",
      missionBody2: "We care about moving research into hardware, software, and operational design that can survive real deployment.",
      rolesLabel: "Open Roles",
      role1Title: "Edge AI Engineer",
      role1Body: "Low-latency inference, model optimization, and sensor processing platforms.",
      role2Title: "Embedded / Communications Engineer",
      role2Body: "Mesh communications, device control, and field validation systems.",
      role3Title: "Research Scientist",
      role3Body: "Sensor fusion, autonomous control, and anomaly detection algorithms.",
      peopleLabel: "People",
      peopleTitle: "Meet Senior Engineers",
      person1Role: "Edge AI Lead",
      person1Name: "Takuma Saeki / Senior Edge AI Engineer",
      person1Body: "Before joining, Takuma developed computer vision models for manufacturing sites. At TERRAPHASE, he leads inference platforms that keep running even when networks are unstable. He enjoys turning research code into systems that meet field constraints for speed, power, and robustness.",
      person1Quote: "\"We build for constrained field conditions, not perfect labs. That is where engineering becomes dense and real.\"",
      person2Role: "Sensor Fusion Lead",
      person2Name: "Reina Mishima / Sensor Fusion Engineer",
      person2Body: "Reina studied robotics and time-series analysis in graduate school. Today she develops algorithms that combine optical, radar, and vibration data to detect signs a single sensor would miss. She values the speed of testing hypotheses with specialists across disciplines and bringing them into the product.",
      person2Quote: "\"Every day, I ask how we can turn hidden changes in data into something people can actually judge.\"",
      ctaLabel: "Contact",
      ctaTitle: "Start with a conversation.",
      ctaButton: "Ask about careers"
    },
    company: {
      label: "Company",
      title: "Turning uncertain domains into visible foundations.",
      lead: "TERRAPHASE is a university-born deep-tech company developing advanced technology for defense and critical infrastructure. We connect sensing, autonomy, and intelligence fusion to support decisions in the field.",
      identityLabel: "Identity",
      identityTitle: "From research to implementation. From implementation to the field.",
      identityBody: "Our mission is to translate technology from universities and research institutions into products that operate in demanding environments.",
      identityBody2: "We deliver technology that is explainable, robust, and operationally sustainable where important decisions are made.",
      profileLabel: "Profile",
      nameLabel: "Company Name",
      foundedLabel: "Founded",
      foundedValue: "2026 (placeholder)",
      locationLabel: "Location",
      locationValue: "Tokyo, Japan",
      businessLabel: "Business",
      businessValue: "Software, edge AI, and sensor integration platforms for defense and critical infrastructure",
      noteLabel: "Note",
      noteValue: "Company details on this page are placeholders for the prototype.",
      ctaLabel: "Contact",
      ctaTitle: "Talk to us about partnership or deployment.",
      ctaButton: "Contact us"
    },
    techItems: [
      { no: "T.01", name: "Edge AI inference", desc: "On-device inference that never depends on the cloud, low-latency, low-power, and operable at the extremes.", image: "edgeAi" },
      { no: "T.02", name: "Sensor fusion", desc: "Unifying optical, RF, and vibration sensors across space and time into one trustworthy picture.", image: "sensorFusion" },
      { no: "T.03", name: "Tamper-resistant by design", desc: "Robustness and verifiability from the silicon up, securing both supply chain and field operations.", image: "secureDesign" },
      { no: "T.04", name: "Autonomous control", desc: "Explainable autonomy that amplifies human judgment rather than replacing it.", image: "autonomy" }
    ],
    productItems: [
      { slug: "sentry", idx: "01", code: "PRD // SENTRY-OS", name: "SENTRY OS", tag: "Autonomous edge perception", desc: "An edge-AI perception platform that keeps deciding even when the network goes dark. Inference runs entirely on-device." },
      { slug: "meshlink", idx: "02", code: "PRD // MESHLINK", name: "MESHLINK", tag: "Resilient mesh comms", desc: "A tactical mesh fabric that self-heals as nodes are lost, keeping dispersed teams and assets connected." },
      { slug: "strata", idx: "03", code: "PRD // STRATA", name: "STRATA", tag: "Structural health monitoring", desc: "A monitoring backbone that visualizes degradation across bridges, plants, and facilities before failure." },
      { slug: "foresight", idx: "04", code: "PRD // FORESIGHT", name: "FORESIGHT", tag: "Multi-source fusion", desc: "A fusion environment that binds fragmented sensor feeds into one operating picture for decision-makers." }
    ],
    productData: {}
  }
};

dictionaries.en.productData = {
  sentry: {
    name: "SENTRY OS", code: "PRD // SENTRY-OS", tag: "Autonomous edge perception",
    pitch: "When the network goes dark, the decision continues. An edge-AI perception platform that runs entirely on-device.",
    overview: "SENTRY OS analyzes camera, radar, and acoustic inputs in real time on the device itself, detecting and tracking people, vehicles, and threats. It assumes no persistent cloud link and keeps operating through jamming or blackout, sharing only detections over low bandwidth.",
    caps: [["C.01", "On-device inference", "Low-latency, low-power inference with no cloud dependency."], ["C.02", "Multi-sensor input", "Optical, IR, radar, and acoustic inputs fused into one picture."], ["C.03", "Detect & track", "Continuously tracks targets and classifies their type."], ["C.04", "Low-bandwidth link", "Shares detection metadata only to conserve comms."]],
    specs: [["Inference HW", "NPU / GPU edge module"], ["Latency", "< 40 ms"], ["Power", "8-25 W configurable"], ["Environment", "-20 to 60 C / IP67"], ["Interfaces", "MESHLINK / FORESIGHT / REST / gRPC"]],
    useCases: [["01", "Forward surveillance", "Intrusion detection and early warning along boundaries that cannot be staffed."], ["02", "Critical site protection", "Always-on monitoring and anomaly detection for plants, ports, and bases."]]
  },
  meshlink: {
    name: "MESHLINK", code: "PRD // MESHLINK", tag: "Resilient mesh comms",
    pitch: "Stay connected as nodes fall. A self-healing tactical mesh fabric.",
    overview: "MESHLINK is a decentralized network in which every node relays traffic as a peer. When nodes drop out, the survivors automatically re-route and the link holds. Hardened against interference and terrain shadowing, it binds vehicles, personnel, and fixed assets into one fabric.",
    caps: [["C.01", "Self-healing routing", "Routes re-form automatically as nodes come and go."], ["C.02", "Anti-jam waveform", "Frequency hopping and encryption resist interference."], ["C.03", "Dynamic topology", "Adapts to changing deployments in real time."], ["C.04", "Low probability of intercept", "Optimized power and waveform reduce detectability."]],
    specs: [["Band", "Multi-band (UHF / L / S)"], ["Range", "5-40 km per hop"], ["Max nodes", "256 per fabric"], ["Crypto", "AES-256 / key rotation"], ["Re-route time", "< 2 s"]],
    useCases: [["01", "Linking mobile forces", "Keep dispersed vehicles and personnel connected without dropouts."], ["02", "Disaster-relief comms", "Stand up an autonomous network when fixed infrastructure is lost."]]
  },
  strata: {
    name: "STRATA", code: "PRD // STRATA", tag: "Structural health monitoring",
    pitch: "Warn before it breaks. A backbone that continuously visualizes infrastructure degradation.",
    overview: "STRATA continuously gathers vibration, strain, tilt, and temperature from sensors placed across bridges, tunnels, plants, and facilities. It catches micro-displacement and propagating cracks, detecting degradation at the warning stage.",
    caps: [["C.01", "Micro-displacement sensing", "Captures changes down to microns to surface early anomalies."], ["C.02", "Anomaly detection", "Learns degradation trends and warns before failure."], ["C.03", "Live dashboard", "Health of every structure shown in one console."], ["C.04", "Predictive maintenance", "Optimizes inspection and repair timing to cut cost."]],
    specs: [["Sensors", "Strain / accel / tilt / temp / acoustic"], ["Sampling", "up to 10 kHz"], ["Deployment", "Wired / wireless nodes"], ["Power", "PoE / battery / solar"], ["Interfaces", "REST / OPC-UA / FORESIGHT"]],
    useCases: [["01", "Bridges & tunnels", "Continuous insight into aging transport infrastructure."], ["02", "Plant integrity", "Early detection of degradation in pipes, tanks, and structures."]]
  },
  foresight: {
    name: "FORESIGHT", code: "PRD // FORESIGHT", tag: "Multi-source fusion",
    pitch: "Fragments into one picture. A fusion environment for decision-makers.",
    overview: "FORESIGHT fuses information from SENTRY OS, STRATA, external sensors, and other data sources across space and time, presenting it as a single operating picture. It correlates heterogeneous data and surfaces the events that matter.",
    caps: [["C.01", "Data fusion", "Unifies heterogeneous sources across space and time."], ["C.02", "Correlation", "Automatically evaluates and extracts event relationships."], ["C.03", "Common picture", "Shares one operating picture across stakeholders."], ["C.04", "Alerting", "Delivers instant notice of the events that matter."]],
    specs: [["Inputs", "SENTRY OS / STRATA / RF / GIS / external"], ["Fusion", "Spatio-temporal correlation"], ["Deployment", "On-prem / air-gapped"], ["Concurrent sources", "1000+ feeds"], ["Interfaces", "REST / gRPC / WebSocket"]],
    useCases: [["01", "C2 support", "Integrates multi-domain information into decision-ready material."], ["02", "Wide-area infrastructure", "Consolidates city-scale monitoring into a single console."]]
  }
};

function getLang() {
  const saved = localStorage.getItem("tp_lang");
  if (saved === "ja" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("ja") ? "ja" : "en";
}

function getPath(obj, path) {
  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
}

function setText(el, value) {
  if (value == null) return;
  if (String(value).includes("<br>")) el.innerHTML = value;
  else el.textContent = value;
}

function renderI18n(dict) {
  document.querySelectorAll("[data-i18n]").forEach((el) => setText(el, getPath(dict, el.dataset.i18n)));
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = getPath(dict, el.dataset.i18nPlaceholder);
    if (value) el.placeholder = value;
  });
}

function renderHome(dict) {
  const productGrid = document.querySelector("[data-products]");
  if (productGrid) {
    productGrid.innerHTML = dict.productItems.map((p) => `
      <a class="product-card" href="product.html?p=${p.slug}">
        <figure><img src="${assets[p.slug]}" alt=""><span class="idx">${p.idx}</span></figure>
        <div class="product-card-content">
          <h3>${p.name}</h3>
          <span class="tag">${p.tag}</span>
          <p>${p.desc}</p>
        </div>
      </a>
    `).join("");
  }

  const techGrid = document.querySelector("[data-tech]");
  if (techGrid) {
    techGrid.innerHTML = dict.techItems.map((item) => cardMarkup(item.no, item.name, item.desc, item.image)).join("");
  }

  [["defenseCaps", dict.defenseCaps], ["infraCaps", dict.infraCaps]].forEach(([key, list]) => {
    const target = document.querySelector(`[data-list="${key}"]`);
    if (target) target.innerHTML = list.map((item) => `<li>${item}</li>`).join("");
  });

  const categories = document.querySelector("[data-categories]");
  if (categories) categories.innerHTML = dict.form.categories.map((item) => `<option>${item}</option>`).join("");
}

function cardMarkup(no, title, desc, imageKey) {
  const image = imageKey ? `<figure><img src="${assets[imageKey]}" alt=""></figure>` : "";
  const className = imageKey ? "tech-card has-image" : "tech-card";
  return `<article class="${className}">${image}<div class="tech-card-body"><span class="no">${no}</span><h3>${title}</h3><p>${desc}</p></div></article>`;
}

function renderProduct(dict) {
  const page = document.querySelector("[data-product-page]");
  if (!page) return;
  const params = new URLSearchParams(location.search);
  const slug = ["sentry", "meshlink", "strata", "foresight"].includes(params.get("p")) ? params.get("p") : "sentry";
  const product = dict.productData[slug];

  document.title = `${product.name} | TERRAPHASE`;
  document.querySelectorAll("[data-product]").forEach((el) => setText(el, product[el.dataset.product]));
  const img = document.querySelector("[data-product-img]");
  if (img) {
    img.src = assets[slug];
    img.alt = `${product.name} visual`;
  }

  const capabilities = document.querySelector("[data-capabilities]");
  if (capabilities) capabilities.innerHTML = product.caps.map(([no, title, desc]) => cardMarkup(no, title, desc)).join("");

  const specs = document.querySelector("[data-specs]");
  if (specs) specs.innerHTML = product.specs.map(([label, value]) => `<div class="spec-row"><span>${label}</span><span>${value}</span></div>`).join("");

  const useCases = document.querySelector("[data-usecases]");
  if (useCases) {
    useCases.innerHTML = product.useCases.map(([no, title, desc]) => `
      <article class="usecase-card"><span class="no">${no}</span><h3>${title}</h3><p>${desc}</p></article>
    `).join("");
  }

  const related = document.querySelector("[data-related]");
  if (related) {
    related.innerHTML = dict.productItems.filter((item) => item.slug !== slug).map((item) => `
      <a class="related-card" href="product.html?p=${item.slug}">
        <span>${item.code}</span><b>${item.name}</b><small>${item.tag}</small><span>${dict.chrome.viewProduct} -&gt;</span>
      </a>
    `).join("");
  }
}

function applyLanguage(lang) {
  const dict = dictionaries[lang];
  document.documentElement.lang = lang;
  localStorage.setItem("tp_lang", lang);
  document.querySelectorAll("[data-lang]").forEach((button) => button.classList.toggle("active", button.dataset.lang === lang));
  renderI18n(dict);
  renderHome(dict);
  renderProduct(dict);
}

function startHeroCanvas() {
  const canvas = document.querySelector("[data-hero-canvas]");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let dpr = 1;
  let sized = false;
  let raf = 0;
  let fallback = 0;
  const accent = [57, 210, 255];

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const nextWidth = Math.max(1, rect.width || 1280);
    const nextHeight = Math.max(1, rect.height || 720);
    if (sized && nextWidth === width && nextHeight === height) return;
    width = nextWidth;
    height = nextHeight;
    canvas.width = Math.round(nextWidth * dpr);
    canvas.height = Math.round(nextHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    sized = true;
  }

  function draw(timeMs) {
    resize();
    const time = timeMs / 1000;
    const w = width;
    const h = height;
    ctx.clearRect(0, 0, width, height);

    const ar = accent[0];
    const ag = accent[1];
    const ab = accent[2];
    const waveK = 1;
    const cols = 72;
    const rows = 116;
    const scale = h / 720;
    const focal = h * 0.62;
    const camY = 1.9;
    const cx = w / 2;
    const cy = h * 0.34;
    const near = 1.7;
    const spacingZ = 0.52;
    const spacingX = 0.5;
    const fogFar = near + rows * spacingZ * 0.62;
    const swayX = Math.sin(time * 0.13) * 1.3;
    const flow = time * 0.85;
    const scanPeriod = 5.5;
    const scanZ = near + ((time % scanPeriod) / scanPeriod) * (fogFar - near) * 1.05;
    const waveAt = (x, z) => waveK * (
      Math.sin(x * 0.34 + flow * 0.6) * 0.62 +
      Math.sin(z * 0.5 - flow) * 0.5 +
      Math.sin((x * 0.7 + z * 0.45) * 0.5 + flow * 0.35) * 0.42 +
      Math.sin(x * 0.12 - z * 0.18 + flow * 0.2) * 0.3
    );
    const xs = new Array(cols);
    for (let c = 0; c < cols; c++) xs[c] = (c - (cols - 1) / 2) * spacingX;

    const px = [];
    const py = [];
    const pa = [];
    const scanB = [];
    for (let r = 0; r < rows; r++) {
      const z = near + r * spacingZ;
      const rx = [];
      const ry = [];
      const ra = [];
      const fog = Math.pow(Math.max(0, 1 - (z - near) / (fogFar - near)), 1.6);
      const sb = Math.exp(-Math.pow((z - scanZ) / 0.9, 2));
      for (let c = 0; c < cols; c++) {
        const x = xs[c] + swayX;
        const y = waveAt(xs[c], z);
        const sx = cx + (focal * x) / z;
        const sy = cy + (focal * (camY - y)) / z;
        rx.push(sx);
        ry.push(sy);
        ra.push(fog);
      }
      px.push(rx);
      py.push(ry);
      pa.push(ra);
      scanB.push(sb);
    }

    const hg = ctx.createLinearGradient(0, cy - h * 0.18, 0, cy + h * 0.06);
    hg.addColorStop(0, `rgba(${ar},${ag},${ab},0)`);
    hg.addColorStop(0.7, `rgba(${ar},${ag},${ab},0.05)`);
    hg.addColorStop(1, `rgba(${ar},${ag},${ab},0)`);
    ctx.fillStyle = hg;
    ctx.fillRect(0, cy - h * 0.18, w, h * 0.24);

    ctx.globalCompositeOperation = "lighter";
    ctx.lineJoin = "round";
    ctx.lineWidth = 0.7 * scale;

    for (let c = 0; c < cols; c++) {
      ctx.beginPath();
      ctx.moveTo(px[0][c], py[0][c]);
      for (let r = 1; r < rows; r++) ctx.lineTo(px[r][c], py[r][c]);
      const g = ctx.createLinearGradient(px[0][c], py[0][c], px[rows - 1][c], py[rows - 1][c]);
      g.addColorStop(0, `rgba(${ar},${ag},${ab},0.22)`);
      g.addColorStop(1, `rgba(${ar},${ag},${ab},0)`);
      ctx.strokeStyle = g;
      ctx.stroke();
    }

    for (let r = 0; r < rows; r++) {
      const base = pa[r][0];
      if (base < 0.012) continue;
      const sb = scanB[r];
      const a = Math.min(0.6, base * 0.55 + sb * 0.5);
      ctx.lineWidth = (0.9 + sb * 1.4) * scale;
      ctx.strokeStyle = `rgba(${ar},${ag},${ab},${a.toFixed(3)})`;
      ctx.beginPath();
      ctx.moveTo(px[r][0], py[r][0]);
      for (let c = 1; c < cols; c++) ctx.lineTo(px[r][c], py[r][c]);
      ctx.stroke();
    }

    for (let r = 0; r < rows; r += 1) {
      const fog = pa[r][0];
      if (fog < 0.06) continue;
      const sb = scanB[r];
      for (let c = 0; c < cols; c += 1) {
        const y = waveAt(xs[c], near + r * spacingZ);
        const ridge = Math.max(0, (y - 0.55) / 0.9);
        const lit = ridge * fog + sb * fog * 1.2;
        if (lit < 0.12) continue;
        const rad = (0.9 + lit * 2.1) * scale;
        const a = Math.min(0.9, lit * 0.9);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${Math.min(255, ar + 60)},${Math.min(255, ag + 30)},${Math.min(255, ab + 20)},${a.toFixed(3)})`;
        ctx.arc(px[r][c], py[r][c], rad, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.globalCompositeOperation = "source-over";

    raf = requestAnimationFrame(draw);
  }

  resize();
  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(() => {
      sized = false;
      resize();
    });
    observer.observe(canvas);
  } else {
    window.addEventListener("resize", () => {
      sized = false;
      resize();
    });
  }
  raf = requestAnimationFrame(draw);
  fallback = window.setInterval(() => {
    if (document.hidden) draw(performance.now());
  }, 120);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }
  });
  window.addEventListener("pagehide", () => {
    cancelAnimationFrame(raf);
    clearInterval(fallback);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(getLang());
  startHeroCanvas();
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.hidden = true;
      document.querySelector("[data-success]").hidden = false;
    });
  }
});
