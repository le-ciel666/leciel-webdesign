
// ============================================================
// Sections B: Pricing, Works, Process
// ============================================================

const RAINBOW_B = 'linear-gradient(90deg,#e85d5d,#e8a23a,#e8d43a,#5db85d,#3a8de8,#7b5de8,#c45de8)';

function Pricing() {
  const plans = [
    {
      name: 'ライトプラン',
      price: '50,000',
      target: '名刺代わりのサイトがほしい方',
      desc: '名刺代わりのホームページや、サービス内容を1ページで分かりやすく紹介したい方向けのプランです。',
      items: ['1ページ制作', 'スマホ対応', '問い合わせ導線', '基本SEO設定', '公開作業サポート'],
      recommended: false,
      cta: '相談する',
    },
    {
      name: 'スタンダードプラン',
      price: '100,000',
      target: '店舗・サービスをしっかり整えたい方',
      desc: '店舗や個人サービスの情報をしっかり整理し、信頼感のあるホームページを持ちたい方向けのプランです。',
      items: ['5ページ程度', 'トップ・サービス・料金・アクセス', 'お問い合わせフォーム', 'スマホ対応', '基本SEO設定', '文章整理'],
      recommended: true,
      cta: '相談する',
    },
    {
      name: 'プレミアムプラン',
      price: '200,000',
      target: '集客・問い合わせ導線まで整えたい方',
      desc: 'ホームページの構成から問い合わせ導線まで、集客を意識して整えたい方向けのプランです。',
      items: ['10ページまで', '構成提案', '文章整理', 'デザイン制作', 'スマホ対応', '問い合わせフォーム', '基本SEO設定', '公開後サポート'],
      recommended: false,
      cta: '相談する',
    },
  ];

  return (
    <section id="pricing" style={{ background: '#fff', padding: '80px 20px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#2d5be3', letterSpacing: '0.1em', marginBottom: 12 }}>Pricing</p>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: '#1a2744', marginBottom: 16 }}>
            制作プラン・料金
          </h2>
          <p style={{ fontSize: 15, color: '#4a5568', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 48px' }}>
            ご予算や目的に合わせて、必要な範囲だけを選べるプランをご用意しています。内容が固まっていない場合でも、初回相談で最適な進め方をご提案します。
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, alignItems: 'start' }}>
          {plans.map((plan, i) => (
            <div key={i} style={{
              borderRadius: 14,
              border: plan.recommended ? '2px solid #2d5be3' : '1.5px solid #e8ecf4',
              overflow: 'hidden',
              position: 'relative',
              background: plan.recommended ? '#f0f5ff' : '#fff',
              boxShadow: plan.recommended ? '0 8px 32px rgba(45,91,227,0.15)' : 'none',
            }}>
              {plan.recommended && (
                <div style={{
                  background: RAINBOW_B, color: '#fff',
                  fontSize: 11, fontWeight: 700, textAlign: 'center',
                  padding: '5px', letterSpacing: '0.08em',
                }}>
                  ★ おすすめ
                </div>
              )}
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1a2744', marginBottom: 4 }}>{plan.name}</h3>
                <p style={{ fontSize: 12, color: '#6b7a99', marginBottom: 16 }}>{plan.target}</p>
                <div style={{ marginBottom: 16, display: 'flex', alignItems: 'baseline', gap: 2 }}>
                  <span style={{ fontSize: 'clamp(28px, 5vw, 36px)', fontWeight: 800, color: '#1a2744' }}>¥</span>
                  <span style={{ fontSize: 'clamp(28px, 5vw, 36px)', fontWeight: 800, color: '#1a2744' }}>{plan.price}</span>
                  <span style={{ fontSize: 'clamp(28px, 5vw, 36px)', fontWeight: 800, color: '#1a2744' }}>円</span>
                  <span style={{ fontSize: 12, color: '#6b7a99', marginLeft: 4 }}>（税別）</span>
                </div>
                <p style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.7, marginBottom: 20 }}>{plan.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {plan.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#2d3748' }}>
                      <span style={{ color: '#2d5be3', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{
                  display: 'block', textAlign: 'center',
                  background: plan.recommended ? '#2d5be3' : '#1a2744',
                  color: '#fff', padding: '11px', borderRadius: 7,
                  fontSize: 13, fontWeight: 600, textDecoration: 'none',
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >{plan.cta}</a>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: 12, color: '#8896b3', marginTop: 24, lineHeight: 1.8 }}>
          ※ 表示価格は目安です。ページ数、機能、原稿作成、写真素材の有無により変動します。<br />
          ご相談内容を確認したうえで、正式なお見積もりをご提示します。
        </p>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href="#contact" style={{
            background: '#2d5be3', color: '#fff', padding: '13px 28px',
            borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none',
            display: 'inline-block', transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#1a3fa8'}
          onMouseLeave={e => e.currentTarget.style.background = '#2d5be3'}
          >
            概算見積もりを相談する →
          </a>
          <p style={{ fontSize: 12, color: '#8896b3', marginTop: 10 }}>無理な営業は行いません。まずは現在のお悩みをお聞かせください。</p>
        </div>
      </div>
    </section>
  );
}

// Portfolio card with browser mockup frame
function PCard({ item }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid #e8ecf4',
        boxShadow: hovered ? '0 12px 32px rgba(26,39,68,0.13)' : '0 2px 8px rgba(26,39,68,0.06)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'box-shadow 0.25s, transform 0.25s',
      }}
    >
      {/* Browser mockup frame */}
      <div style={{ background: item.bg, padding: '12px 12px 0' }}>
        {/* Browser chrome */}
        <div style={{
          background: '#e8eaf0',
          borderRadius: '8px 8px 0 0',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
          <div style={{
            flex: 1, marginLeft: 8, background: '#fff', borderRadius: 4,
            padding: '3px 10px', fontSize: 10, color: '#8896b3',
          }}>
            leciel-webdesign.com/demo
          </div>
        </div>
        {/* Screenshot */}
        <div style={{ overflow: 'hidden', height: 180, position: 'relative' }}>
          <img
            src={item.img}
            alt={item.title}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 0.4s',
              display: 'block',
            }}
          />
          {/* Demo badge */}
          <div style={{
            position: 'absolute', top: 8, right: 8,
            background: 'rgba(26,39,68,0.82)', color: '#fff',
            fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 4,
            backdropFilter: 'blur(4px)',
          }}>
            自主制作デモ
          </div>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '18px 20px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{
            background: '#e8f0fb', color: '#2d5be3',
            fontSize: 11, fontWeight: 700, padding: '2px 9px', borderRadius: 20,
          }}>{item.cat}</span>
        </div>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1a2744', marginBottom: 8 }}>{item.title}</h3>
        <p style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.7, marginBottom: 14 }}>{item.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {item.tags.map(tag => (
            <span key={tag} style={{
              background: '#f5f6fb', color: '#6b7a99',
              fontSize: 11, fontWeight: 500, padding: '3px 9px', borderRadius: 4,
              border: '1px solid #e8ecf4',
            }}>{tag}</span>
          ))}
        </div>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: hovered ? '#2d5be3' : '#1a2744',
            color: '#fff', fontSize: 12, fontWeight: 600,
            padding: '8px 16px', borderRadius: 6, textDecoration: 'none',
            transition: 'background 0.2s',
          }}
        >
          デモサイトを見る →
        </a>
      </div>
    </div>
  );
}

function Works() {
  const portfolioData = [
    {
      cat: '美容室',
      title: 'Hair Salon Lumière',
      img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80',
      desc: '上品で清潔感のある世界観を、予約につながる導線で設計。',
      tags: ['HTML/CSS', '予約機能', 'レスポンシブ'],
      bg: '#F3F0FF',
      link: 'hair-salon.html',
    },
    {
      cat: '居酒屋',
      title: '炉端 さくら',
      img: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=700&q=80',
      desc: '和の温かみを伝えるデザイン。メニュー紹介・予約フォーム・アクセスを使いやすく配置。',
      tags: ['HTML/CSS', 'メニュー管理', 'MAP連携'],
      bg: '#FFF7ED',
      link: 'izakaya.html',
    },
    {
      cat: '整体・サロン',
      title: 'Seitai Reset Room',
      img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=700&q=80',
      desc: '不安を取り除き、初回予約まで迷わせないシンプルなページ設計。',
      tags: ['HTML/CSS', '予約フォーム', 'SEO対応'],
      bg: '#F0FFF4',
      link: 'seitai.html',
    },
    {
      cat: 'カフェ',
      title: 'Café Soleil',
      img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=80',
      desc: 'ナチュラルで温かみのある空間を表現。SNS連携とフォトギャラリーで来店を促進。',
      tags: ['HTML/CSS', 'SNS連携', 'ギャラリー'],
      bg: '#FEFCE8',
      link: 'cafe.html',
    },
    {
      cat: 'ヨガスタジオ',
      title: 'SORA Yoga Studio',
      img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=700&q=80',
      desc: '洗練されたプライベートヨガスタジオ。タイムテーブル・インストラクター紹介を完備。',
      tags: ['HTML/CSS', '予約機能', 'レスポンシブ'],
      bg: '#EEF2FF',
      link: 'yoga.html',
    },
    {
      cat: 'LP制作',
      title: 'LUMIA シャンプーLP',
      img: 'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=700&q=80',
      desc: 'プレミアムシャンプーLP。商品の世界観を表現し、購買へと導くコンバージョン設計。',
      tags: ['LP制作', 'EC連携', 'コンバージョン最適化'],
      bg: '#FDF8F0',
      link: 'shampoo-lp.html',
    },
  ];

  return (
    <section id="works" style={{ background: '#f5f6fb', padding: '80px 20px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#2d5be3', letterSpacing: '0.1em', marginBottom: 12 }}>Works</p>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: '#1a2744', marginBottom: 16 }}>
            制作実績
          </h2>
          <p style={{ fontSize: 15, color: '#4a5568', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 48px' }}>
            店舗・個人サービスを想定したホームページ制作実績です。公開可能な実績に加え、自主制作のデモサイトも掲載しています。
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {portfolioData.map((item, i) => (
            <PCard key={i} item={item} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="#contact" style={{
            background: '#2d5be3', color: '#fff', padding: '13px 28px',
            borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none',
            display: 'inline-block', transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#1a3fa8'}
          onMouseLeave={e => e.currentTarget.style.background = '#2d5be3'}
          >
            実績について相談する →
          </a>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { num: '01', title: '無料相談', desc: '作りたいサイトの目的、ご予算、希望納期などをお伺いします。内容が固まっていなくても問題ありません。' },
    { num: '02', title: 'ヒアリング', desc: '事業内容、ターゲット、掲載したい内容、必要なページを整理します。' },
    { num: '03', title: '構成・お見積もり', desc: 'ページ構成、制作範囲、スケジュール、お見積もりをご提案します。' },
    { num: '04', title: 'ご契約・制作開始', desc: '内容に問題がなければご契約後、制作を開始します。' },
    { num: '05', title: 'デザイン制作', desc: 'サイト全体の雰囲気、色、レイアウトを作成します。' },
    { num: '06', title: '実装・スマホ調整', desc: 'デザインをもとにサイトを構築し、スマートフォンでも見やすい表示に調整します。' },
    { num: '07', title: 'ご確認・修正', desc: '完成したサイトをご確認いただき、必要に応じて修正します。' },
    { num: '08', title: '公開・納品', desc: '最終確認後、サイトを公開します。公開後の軽微な修正もご相談いただけます。' },
  ];

  return (
    <section id="process" style={{ background: '#fff', padding: '80px 20px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#2d5be3', letterSpacing: '0.1em', marginBottom: 12 }}>Flow</p>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: '#1a2744', marginBottom: 16 }}>
            制作の流れ
          </h2>
          <p style={{ fontSize: 15, color: '#4a5568', lineHeight: 1.8, maxWidth: 520, margin: '0 auto 48px' }}>
            初めてホームページを依頼する方にも分かりやすいように、相談から公開まで一つずつ進めます。
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 20, position: 'relative' }}>
              {/* Left: number + line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: i === 0 ? '#2d5be3' : '#f0f5ff',
                  border: i === 0 ? 'none' : '2px solid #c8d4e8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: i === 0 ? '#fff' : '#2d5be3' }}>{step.num}</span>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: 2, flex: 1, background: '#e8ecf4', minHeight: 24 }} />
                )}
              </div>

              {/* Right: content */}
              <div style={{ paddingBottom: i < steps.length - 1 ? 28 : 0, paddingTop: 8 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1a2744', marginBottom: 6 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 36, background: '#e8f0fb', borderRadius: 10,
          padding: '16px 20px', textAlign: 'center',
        }}>
          <p style={{ fontSize: 14, color: '#1a2744', margin: 0, fontWeight: 500 }}>
            📅 5ページ程度のホームページの場合、制作期間は<strong>約3〜6週間</strong>が目安です。原稿や写真素材の準備状況により前後します。
          </p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pricing, Works, Process });
