
// ============================================================
// Sections A: Header, Hero, Concerns, Services
// ============================================================

const RAINBOW = 'linear-gradient(90deg,#e85d5d,#e8a23a,#e8d43a,#5db85d,#3a8de8,#7b5de8,#c45de8)';

function RainbowBar({ height = 3, style = {} }) {
  return (
    <div style={{ background: RAINBOW, height, borderRadius: 99, ...style }} />
  );
}

function Badge({ children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      background: '#e8f0fb', color: '#1a2744', fontSize: 12, fontWeight: 600,
      padding: '4px 10px', borderRadius: 20, whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  );
}

function NavLink({ href, children, active }) {
  return (
    <a href={href} style={{
      color: active ? '#2d5be3' : '#1a2744',
      textDecoration: 'none', fontSize: 13, fontWeight: 500,
      padding: '4px 2px', borderBottom: active ? '2px solid #2d5be3' : '2px solid transparent',
      transition: 'color 0.2s',
    }}
    onMouseEnter={e => { e.target.style.color = '#2d5be3'; }}
    onMouseLeave={e => { e.target.style.color = active ? '#2d5be3' : '#1a2744'; }}
    >
      {children}
    </a>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #e8ecf4',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 18, textDecoration: 'none' }}>
          {/* Icon mark */}
          <div style={{ width: 52, height: 52, position: 'relative', flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: 0, background: RAINBOW, borderRadius: '50%', opacity: 0.25 }} />
            <div style={{ position: 'absolute', inset: 4, background: '#1a2744', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: 15, fontWeight: 800, letterSpacing: '-0.5px' }}>LC</span>
            </div>
          </div>
          {/* Divider */}
          <div style={{ width: 1, height: 42, background: '#dde3ef', flexShrink: 0 }} />
          {/* Text block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {/* Main name row */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontSize: 26, fontWeight: 800, color: '#1a2744', letterSpacing: '0.12em', lineHeight: 1 }}>LE CIEL</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#2d5be3', letterSpacing: '0.2em', lineHeight: 1 }}>WEB DESIGN</span>
            </div>
            {/* Rainbow underline */}
            <div style={{ height: 3, background: RAINBOW, borderRadius: 99, width: '100%' }} />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: 20, alignItems: 'center' }} className="desktop-nav">
          <NavLink href="#services">サービス</NavLink>
          <NavLink href="#pricing">料金</NavLink>
          <NavLink href="#works">制作実績</NavLink>
          <NavLink href="#process">制作の流れ</NavLink>
          <NavLink href="#profile">プロフィール</NavLink>
          <a href="#contact" style={{
            background: '#1a2744', color: '#fff', padding: '7px 16px',
            borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.target.style.background = '#2d5be3'}
          onMouseLeave={e => e.target.style.background = '#1a2744'}
          >無料相談</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 6, flexDirection: 'column', gap: 5 }}
          className="hamburger"
          aria-label="メニュー"
        >
          <span style={{ display: 'block', width: 22, height: 2, background: '#1a2744', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#1a2744', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#1a2744', borderRadius: 2 }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #e8ecf4', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[['#services','サービス'],['#pricing','料金'],['#works','制作実績'],['#process','制作の流れ'],['#profile','プロフィール'],['#contact','お問い合わせ']].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{
              color: '#1a2744', textDecoration: 'none', fontSize: 15, fontWeight: 500,
              padding: '12px 0', borderBottom: '1px solid #f0f2f7',
            }}>{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: 'linear-gradient(160deg, #f8faff 0%, #eef3ff 100%)',
      paddingTop: 72,
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 20px', width: '100%' }}>
        <div style={{ maxWidth: 680 }}>
          <RainbowBar height={4} style={{ width: 48, marginBottom: 24 }} />

          <h1 style={{
            fontSize: 'clamp(26px, 4.5vw, 46px)', fontWeight: 800,
            color: '#1a2744', lineHeight: 1.45, marginBottom: 20,
            letterSpacing: '-0.01em',
          }}>
            小さなお店の魅力が伝わる、<br />
            <span style={{ color: '#2d5be3' }}>見やすく相談しやすい</span><br />
            ホームページを制作します。
          </h1>

          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 17px)', color: '#4a5568', lineHeight: 1.8,
            marginBottom: 28, maxWidth: 560,
          }}>
            美容室・整体・飲食店・個人サービス向けに、構成づくりからデザイン、スマホ対応、公開後の更新までサポートします。
          </p>

          {/* Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
            {['✓ 初回相談無料', '✓ 全国オンライン対応', '✓ スマホ対応', '✓ 納品後サポートあり'].map(t => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <a href="#contact" style={{
              background: '#2d5be3', color: '#fff', padding: '14px 28px',
              borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(45,91,227,0.3)',
              transition: 'transform 0.15s, box-shadow 0.15s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(45,91,227,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 16px rgba(45,91,227,0.3)'; }}
            >
              無料で相談する →
            </a>
            <a href="#pricing" style={{
              background: '#fff', color: '#1a2744', padding: '14px 28px',
              borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: 'none',
              border: '1.5px solid #c8d4e8', transition: 'border-color 0.15s',
              display: 'inline-block',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#2d5be3'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#c8d4e8'}
            >
              制作プランを見る
            </a>
          </div>

          <p style={{ fontSize: 12, color: '#8896b3', marginTop: 16 }}>
            初回相談は無料です。内容が固まっていなくてもご相談いただけます。
          </p>
        </div>
      </div>
    </section>
  );
}

function Concerns() {
  const items = [
    'ホームページを作りたいけれど、何から始めればいいか分からない',
    '古いサイトをスマホでも見やすく作り直したい',
    'サービス内容や料金がうまく伝わっていない',
    '問い合わせや予約につながる導線を整えたい',
    '制作会社に頼むほど大きな予算はないが、きちんとしたサイトを持ちたい',
    'SNSや紹介だけでなく、事業の信頼につながるホームページを持ちたい',
  ];

  return (
    <section style={{ background: '#fff', padding: '80px 20px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#2d5be3', letterSpacing: '0.1em', marginBottom: 12, textTransform: 'uppercase' }}>For You</p>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: '#1a2744', marginBottom: 0 }}>
            こんなお悩みありませんか？
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {items.map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 14,
              background: '#f8faff', borderRadius: 10, padding: '16px 20px',
              border: '1px solid #e8ecf4',
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                background: RAINBOW, flexShrink: 0, marginTop: 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>✓</span>
              </div>
              <span style={{ fontSize: 15, color: '#2d3748', lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 36, padding: '20px 24px', background: '#e8f0fb',
          borderRadius: 10, borderLeft: '4px solid #2d5be3',
        }}>
          <p style={{ fontSize: 14, color: '#1a2744', lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
            ルシエルウェブデザインでは、初めてホームページを作る方にも分かりやすく、目的やご予算に合わせて必要な内容を一緒に整理します。
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: '🏠',
      title: 'ホームページ制作',
      desc: '店舗や個人サービスの魅力が伝わるホームページを制作します。トップページ、サービス紹介、料金、アクセス、お問い合わせなど、必要なページ構成からご提案します。',
    },
    {
      icon: '📄',
      title: 'ランディングページ制作',
      desc: 'キャンペーン、広告、サービス紹介に使える1ページ完結型のページを制作します。問い合わせや申し込みにつながる構成を重視します。',
    },
    {
      icon: '📱',
      title: 'スマホ対応',
      desc: 'スマートフォンで見やすく、ボタンを押しやすいレイアウトに調整します。すべてのプランでスマホ表示に対応します。',
    },
    {
      icon: '✏️',
      title: '文章・構成整理',
      desc: '掲載内容がまとまっていない場合でも、ヒアリングをもとにページ構成や文章のたたき台を整理します。',
    },
    {
      icon: '🔧',
      title: '公開後の更新・保守',
      desc: '公開後の軽微な修正や更新作業もご相談いただけます。継続的な更新が必要な場合は、保守プランで対応します。',
    },
  ];

  return (
    <section id="services" style={{ background: '#f5f6fb', padding: '80px 20px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#2d5be3', letterSpacing: '0.1em', marginBottom: 12 }}>Services</p>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: '#1a2744', marginBottom: 16 }}>
            ルシエルウェブデザインでできること
          </h2>
          <p style={{ fontSize: 15, color: '#4a5568', lineHeight: 1.8, maxWidth: 600, margin: '0 auto 48px' }}>
            事業内容、メニュー、料金、アクセス、お問い合わせまで、必要な情報を分かりやすく整理したホームページを制作します。訪問者が迷わず相談・予約できる導線づくりを重視します。
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {items.map((item, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 12, padding: '24px',
              border: '1px solid #e8ecf4',
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,39,68,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1a2744', marginBottom: 10 }}>{item.title}</h3>
              <p style={{ fontSize: 13.5, color: '#4a5568', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
            </div>
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
            作りたいサイトについて相談する →
          </a>
          <p style={{ fontSize: 12, color: '#8896b3', marginTop: 10 }}>初回相談は無料です。内容が固まっていなくてもご相談いただけます。</p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, Concerns, Services, RainbowBar });
