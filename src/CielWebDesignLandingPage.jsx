import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RB = 'linear-gradient(90deg,#FF6B6B,#FFA94D,#FFD93D,#6BCB77,#4D96FF,#7B61FF,#C77DFF)';
const NAVY = '#0F1623';
const SOFT = '#F7F9FC';

function goTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 74, behavior: 'smooth' });
}

function RLine({ w = '48px', h = '3px', sx = {} }) {
  return <div style={{ width: w, height: h, background: RB, borderRadius: '2px', ...sx }} />;
}

function ST({ en, ja, center = true }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: '64px' }}>
      <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '14px', letterSpacing: '0.28em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '14px' }}>{en}</p>
      <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '34px', fontWeight: '700', letterSpacing: '0.04em', lineHeight: 1.4, marginBottom: '18px', color: NAVY }}>{ja}</h2>
      <RLine sx={{ margin: center ? '0 auto' : '0' }} />
    </div>
  );
}

/* ── Nav ── */
function Nav() {
  const links = [
    ['選ばれる理由', 'reasons'],
    ['サービス', 'services'],
    ['制作実績', 'portfolio'],
    ['料金', 'pricing'],
    ['よくある質問', 'faq'],
  ];
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: 'rgba(10,16,32,0.97)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      padding: '0 56px', height: '74px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '14px' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: RB, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(10,16,32,0.85)' }} />
        </div>
        <div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '14px', fontWeight: '700', letterSpacing: '0.22em', color: 'white', lineHeight: 1.2, textTransform: 'uppercase' }}>LE CIEL WEB DESIGN</div>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', marginTop: '3px' }}>ル・シエルウェブデザイン</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {links.map(([label, id]) => (
          <button key={id} onClick={() => goTo(id)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', color: 'rgba(255,255,255,0.72)', letterSpacing: '0.04em', fontFamily: "'Noto Sans JP', sans-serif", fontWeight: '400', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}
          >{label}</button>
        ))}
        <button onClick={() => goTo('contact')}
          style={{ background: RB, color: 'white', border: 'none', padding: '10px 24px', borderRadius: '4px', fontSize: '14px', letterSpacing: '0.06em', cursor: 'pointer', fontFamily: "'Noto Sans JP', sans-serif", fontWeight: '500', transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >お問い合わせ</button>
      </div>
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section style={{
      minHeight: '100vh', padding: '130px 56px 90px',
      background: 'linear-gradient(175deg,#EBF1FB 0%,#F4F7FD 35%,#FFFFFF 70%)',
      display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: '-5%', right: '0', width: '55%', height: '110%', background: 'radial-gradient(ellipse at 60% 40%,rgba(77,150,255,0.09) 0%,rgba(199,125,255,0.06) 50%,transparent 80%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: RB }} />
      <div style={{ maxWidth: '1240px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', alignItems: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
            <div style={{ width: '32px', height: '1px', background: RB }} />
            <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '14px', letterSpacing: '0.28em', color: '#7B61FF', textTransform: 'uppercase' }}>LE CIEL Web Design</span>
          </div>
          <h1 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '58px', fontWeight: '700', lineHeight: 1.28, letterSpacing: '0.02em', color: NAVY, marginBottom: '32px' }}>
            空のように、<br />
            <span style={{ background: RB, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>広がる可能性</span>を<br />
            あなたのお店へ。
          </h1>
          <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 2.0, marginBottom: '44px', maxWidth: '500px' }}>
            美容室・居酒屋・整体院・カフェなど、個人事業主・小規模店舗の集客をWebサイトで支援します。シンプルで洗練されたデザインと確かな技術で、あなたのお店の魅力を最大限に引き出します。
          </p>
          <div style={{ display: 'flex', gap: '14px' }}>
            <button onClick={() => goTo('contact')}
              style={{ padding: '15px 36px', background: NAVY, color: 'white', border: 'none', borderRadius: '4px', fontSize: '14px', letterSpacing: '0.08em', cursor: 'pointer', fontFamily: "'Noto Sans JP', sans-serif", fontWeight: '500', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(15,22,35,0.22)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >無料でお問い合わせ</button>
            <button onClick={() => goTo('portfolio')}
              style={{ padding: '15px 36px', background: 'transparent', color: NAVY, border: '1px solid rgba(15,22,35,0.18)', borderRadius: '4px', fontSize: '14px', letterSpacing: '0.08em', cursor: 'pointer', fontFamily: "'Noto Sans JP', sans-serif", transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = NAVY; e.currentTarget.style.background = 'rgba(15,22,35,0.03)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(15,22,35,0.18)'; e.currentTarget.style.background = 'transparent'; }}
            >制作実績を見る</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }} style={{ position: 'relative', height: '480px' }}>
          <div style={{ position: 'absolute', top: '20px', right: '0', width: '78%', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(15,22,35,0.10)', transform: 'rotate(3.5deg)', transformOrigin: 'bottom right' }}>
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80" alt="カフェサイト" style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
            <div style={{ background: 'white', padding: '16px 20px' }}>
              <div style={{ fontSize: '11px', color: '#9CA3AF', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>Café</div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: NAVY }}>Café Soleil</div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: '0', left: '0', width: '80%', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 28px 72px rgba(15,22,35,0.15)', transform: 'rotate(-2.5deg)', transformOrigin: 'bottom left' }}>
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80" alt="サロンサイト" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ background: 'white', padding: '16px 20px' }}>
              <div style={{ fontSize: '11px', color: '#9CA3AF', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>Beauty Salon</div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: NAVY }}>Beauty &amp; Relax Ciel</div>
            </div>
            <div style={{ height: '3px', background: RB }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Reasons ── */
const reasonsData = [
  { icon: '✦', title: 'シンプルで洗練されたデザイン', desc: '流行に左右されない、時代を超えて愛されるWebデザインを提供します。お客様のブランドを大切にしながら、訪問者の心に残るサイトを制作します。' },
  { icon: '◈', title: '集客・成果にこだわった設計', desc: 'デザインの美しさだけでなく、予約・問い合わせにつながる動線設計を重視します。SEO対策やスマートフォン対応も標準で対応しています。' },
  { icon: '◉', title: '丁寧なヒアリングとサポート', desc: 'お客様のビジネスや想いを深くヒアリングし、コンセプトから一緒に考えます。納品後も安心のサポートで、長くお付き合いいただけます。' },
  { icon: '◆', title: '明瞭な料金と迅速な対応', desc: '追加費用なしの明瞭な料金設定と、最短3週間のスピード納品。クラウドワークス・ココナラでもご依頼いただけます。' },
];

function Reasons() {
  return (
    <section id="reasons" style={{ padding: '120px 56px', background: '#fff' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <ST en="Why Choose Us" ja="選ばれる理由" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '28px' }}>
          {reasonsData.map((r, i) => (
            <div key={i}
              style={{ padding: '40px 30px', background: 'white', border: '1px solid rgba(15,22,35,0.07)', borderRadius: '8px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(15,22,35,0.09)'; e.currentTarget.style.borderColor = 'transparent'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(15,22,35,0.07)'; }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: RB }} />
              <div style={{ fontSize: '26px', marginBottom: '20px', color: NAVY }}>{r.icon}</div>
              <h3 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '16px', fontWeight: '700', lineHeight: 1.6, letterSpacing: '0.03em', marginBottom: '14px', color: NAVY }}>{r.title}</h3>
              <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: 1.9 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Services ── */
const servicesData = [
  { title: 'ホームページ制作', price: '¥100,000〜', desc: '個人事業主・小規模店舗向けの新規ホームページ制作。ヒアリングからデザイン・コーディング・公開まで一括対応。お客様のブランドと想いを丁寧に表現します。', tags: ['HTML/CSS', 'レスポンシブ対応', 'SEO基本設定', 'お問い合わせフォーム'] },
  { title: 'サイトリニューアル', price: '¥100,000〜', desc: '古くなったサイトのデザインリニューアル。既存のコンテンツや構成を活かしながら、現代的でおしゃれなデザインに刷新します。', tags: ['デザイン刷新', 'スマホ最適化', 'コンテンツ移行'] },
  { title: 'LP（ランディングページ）制作', price: '¥50,000〜', desc: 'キャンペーンや新サービス向けのランディングページ制作。問い合わせ・予約につながるコンバージョン重視の設計で、集客効果を高めます。', tags: ['単ページ完結', '高速表示', 'フォーム設置'] },
];

function Services() {
  return (
    <section id="services" style={{ padding: '120px 56px', background: SOFT }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <ST en="Services" ja="サービス内容" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {servicesData.map((s, i) => (
            <div key={i}
              style={{ padding: '44px 40px', background: 'white', borderRadius: '8px', display: 'flex', flexDirection: 'column', border: '1px solid transparent', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 20px 60px rgba(15,22,35,0.08)'; e.currentTarget.style.borderColor = 'rgba(123,97,255,0.14)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'transparent'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <h3 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '19px', fontWeight: '700', letterSpacing: '0.03em', lineHeight: 1.4, color: NAVY }}>{s.title}</h3>
                <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '22px', fontWeight: '600', color: '#7B61FF', whiteSpace: 'nowrap', marginLeft: '20px' }}>{s.price}</span>
              </div>
              <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: 1.95, marginBottom: '22px', flex: 1 }}>{s.desc}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {s.tags.map(t => <span key={t} style={{ padding: '4px 12px', borderRadius: '100px', fontSize: '14px', color: '#4B5563', background: 'rgba(15,22,35,0.05)', letterSpacing: '0.03em' }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Portfolio ── */
const portfolioData = [
  { cat: '美容室', title: 'Hair Salon Lumière', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80', desc: '上品で清潔感のある世界観を、予約につながる導線で設計。', tags: ['デザイン制作', '予約導線', 'レスポンシブ'], bg: '#F3F0FF', link: '/works/salon' },
  { cat: '居酒屋', title: '酒場 七彩', img: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=700&q=80', desc: '料理写真と空気感を前面に出し、来店前の期待値を高める構成。', tags: ['メニュー紹介', '宴会プラン', 'MAP連携'], bg: '#FFF7ED', link: '/works/izakaya' },
  { cat: '整体・サロン', title: 'Seitai Reset Room', img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=700&q=80', desc: '不安を取り除き、初回予約まで迷わせないシンプルなページ設計。', tags: ['悩み別訴求', '料金表', 'LINE予約'], bg: '#F0FFF4', link: '/works/seitai' },
  { cat: 'カフェ', title: 'Café Soleil', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=80', desc: 'ナチュラルで温かみのある空間を表現。SNS連携とフォトギャラリーで来店を促進。', tags: ['コンセプト', 'メニュー', 'SNS連携'], bg: '#FEFCE8' },
  { cat: 'LP制作', title: 'Campaign One Page', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&q=80', desc: '商品・サービスの魅力を1ページに集約し、問い合わせに直結。', tags: ['ファーストビュー', '強み訴求', 'CTA設計'], bg: '#F5F0FF' },
];

function PCard({ item }) {
  const [hov, setHov] = useState(false);
  const handleClick = () => item.link && window.open(item.link, '_blank');
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={handleClick}
      style={{ borderRadius: '10px', overflow: 'hidden', background: 'white', boxShadow: hov ? '0 28px 70px rgba(15,22,35,0.13)' : '0 4px 20px rgba(15,22,35,0.06)', transform: hov ? 'translateY(-7px)' : 'none', transition: 'all 0.35s ease', cursor: item.link ? 'pointer' : 'default' }}
    >
      <div style={{ background: '#ECEEF2', padding: '10px 13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        {['#FF6B6B', '#FFD93D', '#6BCB77'].map((c, i) => <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c }} />)}
        <div style={{ flex: 1, background: 'white', borderRadius: '4px', height: '19px', marginLeft: '8px', display: 'flex', alignItems: 'center', padding: '0 9px' }}>
          <span style={{ fontSize: '11px', color: '#9CA3AF', letterSpacing: '0.03em' }}>le-ciel-sample.com</span>
        </div>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden', height: '210px' }}>
        <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hov ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.5s ease', display: 'block' }} />
        <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', padding: '4px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: '500', letterSpacing: '0.05em', color: NAVY }}>{item.cat}</div>
        {item.link && <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: '500', color: '#7B61FF' }}>サイトを見る →</div>}
      </div>
      <div style={{ padding: '26px 26px 22px' }}>
        <h3 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '17px', fontWeight: '700', marginBottom: '10px', letterSpacing: '0.03em', color: NAVY }}>{item.title}</h3>
        <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.85, marginBottom: '16px' }}>{item.desc}</p>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {item.tags.map(t => <span key={t} style={{ padding: '3px 10px', borderRadius: '100px', fontSize: '12px', background: item.bg, color: '#4B5563', letterSpacing: '0.03em' }}>{t}</span>)}
        </div>
      </div>
      <div style={{ height: '3px', background: hov ? RB : 'transparent', transition: 'background 0.3s ease' }} />
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: '120px 56px', background: 'white' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <ST en="Works" ja="制作実績イメージ" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '28px' }}>
          {portfolioData.slice(0, 3).map((item, i) => <PCard key={i} item={item} />)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '28px', marginTop: '28px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          {portfolioData.slice(3).map((item, i) => <PCard key={i} item={item} />)}
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ── */
function CheckItem({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#374151', padding: '6px 0' }}>
      <span style={{ color: '#4DD9C0', fontWeight: '700', fontSize: '15px', flexShrink: 0 }}>✓</span>
      {text}
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" style={{ padding: '120px 56px', background: SOFT }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', letterSpacing: '0.28em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '14px' }}>Plan</p>
          <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '42px', fontWeight: '700', color: NAVY, letterSpacing: '0.04em', marginBottom: '18px' }}>料金プラン</h2>
          <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.9 }}>わかりやすいシンプルな料金体系。<br />追加料金なし、隠れた費用なし。</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'start' }}>
          <div style={{ borderRadius: '16px', background: 'white', border: '1px solid rgba(15,22,35,0.08)', padding: '44px 40px' }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '12px', letterSpacing: '0.24em', color: '#7B61FF', textTransform: 'uppercase', marginBottom: '12px' }}>Production</p>
            <h3 style={{ fontSize: '26px', fontWeight: '700', color: NAVY, marginBottom: '28px', letterSpacing: '0.03em' }}>ホームページ制作</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px' }}>
              <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '48px', fontWeight: '700', color: NAVY, lineHeight: 1, letterSpacing: '-0.01em' }}>¥100,000</span>
              <span style={{ fontSize: '17px', fontWeight: '500', color: '#374151' }}>税込</span>
            </div>
            <p style={{ fontSize: '14px', color: '#9CA3AF', marginBottom: '32px' }}>買い切り・一括払い</p>
            <div style={{ borderTop: '1px solid rgba(15,22,35,0.08)', paddingTop: '28px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {['ヒアリング・要件整理', 'ページ構成・サイトマップ作成', 'オリジナルデザイン制作', 'コーディング・実装', 'スマホ対応（レスポンシブ）', 'SEO基本設定', 'お問い合わせフォーム設置', '公開サポート・納品', '修正対応（制作中は無制限）'].map(f => <CheckItem key={f} text={f} />)}
            </div>
            <button onClick={() => goTo('contact')}
              style={{ marginTop: '36px', width: '100%', padding: '16px', borderRadius: '8px', border: 'none', background: RB, color: 'white', fontSize: '15px', letterSpacing: '0.08em', cursor: 'pointer', fontFamily: "'Noto Sans JP', sans-serif", fontWeight: '700', transition: 'opacity 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >無料相談する &nbsp;→</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ borderRadius: '16px', background: 'white', border: '1px solid rgba(15,22,35,0.08)', padding: '36px' }}>
              <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '12px', letterSpacing: '0.24em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '12px' }}>Maintenance</p>
              <h3 style={{ fontSize: '22px', fontWeight: '700', color: NAVY, marginBottom: '20px', letterSpacing: '0.03em' }}>保守メンテナンス</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
                <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '44px', fontWeight: '700', color: NAVY, lineHeight: 1, letterSpacing: '-0.01em' }}>¥3,000</span>
                <span style={{ fontSize: '17px', fontWeight: '500', color: '#374151' }}>税込 / 月</span>
              </div>
              <p style={{ fontSize: '14px', color: '#9CA3AF', marginBottom: '24px' }}>月額・オプション</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {['サーバー・ドメイン更新管理', 'セキュリティアップデート対応', '表示崩れ・不具合の対応', '簡単な文言・画像の差し替え', 'メール相談サポート'].map(f => <CheckItem key={f} text={f} />)}
              </div>
            </div>
            <div style={{ borderRadius: '16px', background: 'rgba(15,22,35,0.03)', border: '1px solid rgba(15,22,35,0.07)', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['サーバー・ドメインの契約費用は別途', '着手金50%・納品時50%の2回払い可', 'クラウドワークス・ココナラからも受付可', 'ページ増設・機能追加は別途お見積もり'].map(n => (
                <div key={n} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#6B7280', lineHeight: 1.7 }}>
                  <span style={{ flexShrink: 0, color: '#9CA3AF' }}>※</span>{n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Flow ── */
const flowData = [
  { n: '01', title: 'お問い合わせ', desc: 'フォームまたはクラウドワークス・ココナラからご連絡ください。お返事は24時間以内を目標にしています。' },
  { n: '02', title: 'ヒアリング・ご提案', desc: 'お客様のビジネスや目的・ご希望を丁寧にヒアリング。最適なプランとデザインイメージをご提案します。' },
  { n: '03', title: 'デザイン制作', desc: 'ヒアリング内容をもとにデザイン案を制作。ご要望に応じて調整します。' },
  { n: '04', title: 'コーディング・実装', desc: 'ご承認いただいたデザインをHTML/CSSでコーディング。レスポンシブ対応・SEO設定も行います。' },
  { n: '05', title: '確認・修正', desc: '完成したサイトをご確認いただき、ご要望に応じて修正対応します。細部までこだわって仕上げます。' },
  { n: '06', title: '納品・公開', desc: 'お客様のサーバーへ設置し公開。操作説明資料もお渡しします。公開後もサポートいたします。' },
];

function Flow() {
  return (
    <section id="flow" style={{ padding: '120px 56px', background: 'white' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <ST en="Process" ja="制作の流れ" />
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '27px', top: '28px', bottom: '28px', width: '1px', background: 'linear-gradient(to bottom,transparent,rgba(15,22,35,0.1) 8%,rgba(15,22,35,0.1) 92%,transparent)' }} />
          {flowData.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '52px', alignItems: 'flex-start', padding: '28px 0', position: 'relative' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: i % 2 === 0 ? NAVY : 'white', border: `2px solid ${NAVY}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '17px', fontWeight: '600', color: i % 2 === 0 ? 'white' : NAVY }}>{s.n}</span>
              </div>
              <div style={{ paddingTop: '11px', flex: 1 }}>
                <h3 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '18px', fontWeight: '700', marginBottom: '10px', letterSpacing: '0.03em', color: NAVY }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.95 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
const faqData = [
  { q: '制作期間はどのくらいですか？', a: '内容・規模によって異なりますが、標準的なホームページで3〜4週間が目安です。お急ぎの場合はご相談ください。' },
  { q: '初めてのホームページ制作でも大丈夫ですか？', a: 'はい、もちろんです。難しい用語を使わず、わかりやすくご説明しながら丁寧に進めます。' },
  { q: '写真や原稿は自分で準備が必要ですか？', a: '基本的にはお客様にご用意いただきますが、フリー素材の選定サポートや文章構成のご相談も承っています。' },
  { q: '納品後に自分で更新できますか？', a: '納品時にすべてのファイルをお渡しします。更新が難しい場合は月額の保守メンテナンスで対応いたします。' },
  { q: 'クラウドワークスやココナラ以外でも依頼できますか？', a: 'はい、こちらのお問い合わせフォームから直接ご依頼いただくことも可能です。' },
  { q: '修正・更新は有料になりますか？', a: '制作中の修正は何度でも無償で対応いたします。納品後は保守メンテナンスご契約の場合、軽微な変更は無償です。' },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ padding: '120px 56px', background: SOFT }}>
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <ST en="FAQ" ja="よくある質問" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {faqData.map((f, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '7px', overflow: 'hidden', border: '1px solid rgba(15,22,35,0.06)' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', padding: '22px 28px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', gap: '16px' }}
              >
                <span style={{ fontSize: '15px', fontWeight: '500', color: NAVY, lineHeight: 1.6, letterSpacing: '0.02em' }}>Q. {f.q}</span>
                <span style={{ fontSize: '22px', color: '#7B61FF', flexShrink: 0, transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s ease', lineHeight: 1 }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 28px 24px', borderTop: '1px solid rgba(15,22,35,0.05)' }}>
                  <RLine sx={{ margin: '18px 0 16px' }} />
                  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.95 }}>A. {f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact ── */
function Contact({ form, setForm, status, setStatus, errorMsg, handleSubmit }) {
  return (
    <section id="contact" style={{ padding: '130px 56px', background: NAVY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: RB }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '900px', background: 'radial-gradient(circle,rgba(123,97,255,0.09) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '14px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '22px' }}>Contact</p>
        <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '40px', fontWeight: '700', color: 'white', lineHeight: 1.4, marginBottom: '22px', letterSpacing: '0.03em' }}>あなたのビジネスを、<br />一緒に輝かせましょう。</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 2.0, marginBottom: '52px' }}>お見積もりは無料です。まずはお気軽にご相談ください。<br />クラウドワークス・ココナラからもお受けしています。</p>

        {status === 'success' ? (
          <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', borderRadius: '14px', padding: '64px 48px', border: '1px solid rgba(255,255,255,0.09)', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
            <p style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '10px' }}>お問い合わせを受け付けました</p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px' }}>2〜3営業日以内にご連絡いたします。</p>
            <button onClick={() => setStatus('idle')}
              style={{ padding: '12px 32px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', color: 'white', fontSize: '14px', cursor: 'pointer', fontFamily: "'Noto Sans JP', sans-serif" }}
            >別のお問い合わせをする</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', borderRadius: '14px', padding: '48px', border: '1px solid rgba(255,255,255,0.09)', textAlign: 'left' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              {[['お名前', 'name', 'text', '山田 太郎'], ['メールアドレス', 'email', 'email', 'example@mail.com']].map(([label, name, type, ph]) => (
                <div key={name}>
                  <label style={{ display: 'block', fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginBottom: '8px', letterSpacing: '0.07em' }}>{label}</label>
                  <input
                    type={type} name={name} placeholder={ph} value={form[name]} onChange={e => setForm({ ...form, [name]: e.target.value })} required
                    style={{ width: '100%', padding: '12px 15px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.11)', borderRadius: '6px', color: 'white', fontSize: '14px', fontFamily: "'Noto Sans JP', sans-serif", transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(123,97,255,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.11)'}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginBottom: '8px', letterSpacing: '0.07em' }}>ご相談内容</label>
              <textarea
                name="message" placeholder="業種・参考サイト・ご要望などをご記入ください" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required
                style={{ width: '100%', padding: '12px 15px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.11)', borderRadius: '6px', color: 'white', fontSize: '14px', fontFamily: "'Noto Sans JP', sans-serif", resize: 'vertical', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = 'rgba(123,97,255,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.11)'}
              />
            </div>
            {status === 'error' && (
              <div style={{ marginBottom: '16px', padding: '12px 16px', background: 'rgba(255,100,100,0.15)', border: '1px solid rgba(255,100,100,0.3)', borderRadius: '6px', fontSize: '14px', color: '#fca5a5' }}>{errorMsg}</div>
            )}
            <button type="submit" disabled={status === 'sending'}
              style={{ width: '100%', padding: '16px', background: RB, border: 'none', borderRadius: '6px', color: 'white', fontSize: '14px', letterSpacing: '0.1em', cursor: 'pointer', fontFamily: "'Noto Sans JP', sans-serif", fontWeight: '500', boxShadow: '0 6px 24px rgba(123,97,255,0.35)', transition: 'all 0.25s ease', opacity: status === 'sending' ? 0.6 : 1 }}
              onMouseEnter={e => { if (status !== 'sending') { e.currentTarget.style.opacity = '0.87'; e.currentTarget.style.transform = 'translateY(-1px)'; } }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
            >{status === 'sending' ? '送信中...' : '無料で送信する'}</button>
          </form>
        )}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '36px', marginTop: '36px' }}>
          {[['クラウドワークス', '#4D96FF'], ['ココナラ', '#6BCB77']].map(([l, c]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: c }} />
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>{l}でも受付中</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer style={{ background: '#070B13', padding: '36px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '19px', fontWeight: '600', color: 'white', letterSpacing: '0.12em', lineHeight: 1 }}>LE CIEL</div>
        <div style={{ fontSize: '12px', letterSpacing: '0.28em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginTop: '4px' }}>Web Design</div>
      </div>
      <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.04em' }}>© {new Date().getFullYear()} ルシエルウェブデザイン. All rights reserved.</div>
      <div style={{ display: 'flex', gap: '24px' }}>
        {['プライバシーポリシー', '特定商取引法に基づく表記'].map(l => (
          <a key={l} href="#" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.25)', textDecoration: 'none', letterSpacing: '0.04em' }}>{l}</a>
        ))}
      </div>
    </footer>
  );
}

/* ── Main ── */
export default function CielWebDesignLandingPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const data = new FormData();
      data.append('name', form.name);
      data.append('email', form.email);
      data.append('message', form.message);
      const res = await fetch('/mail.php', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(json.message);
      }
    } catch {
      setStatus('error');
      setErrorMsg('通信エラーが発生しました。時間をおいて再度お試しください。');
    }
  };

  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: NAVY, background: 'white', lineHeight: 1.8 }}>
      <Nav />
      <Hero />
      <Reasons />
      <Services />
      <Portfolio />
      <Pricing />
      <Flow />
      <FAQ />
      <Contact form={form} setForm={setForm} status={status} setStatus={setStatus} errorMsg={errorMsg} handleSubmit={handleSubmit} />
      <Footer />
    </div>
  );
}
