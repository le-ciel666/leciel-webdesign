
// ============================================================
// Sections C: Profile, FAQ, Contact, Footer
// ============================================================

const RAINBOW_C = 'linear-gradient(90deg,#e85d5d,#e8a23a,#e8d43a,#5db85d,#3a8de8,#7b5de8,#c45de8)';

function Profile() {
  return (
    <section id="profile" style={{ background: '#f5f6fb', padding: '80px 20px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#2d5be3', letterSpacing: '0.1em', marginBottom: 12 }}>About</p>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: '#1a2744' }}>
            プロフィール
          </h2>
        </div>

        <div style={{
          background: '#fff', borderRadius: 16, padding: '36px 40px',
          border: '1px solid #e8ecf4', display: 'grid',
          gridTemplateColumns: 'auto 1fr', gap: 36, alignItems: 'start',
        }}>
          {/* Avatar */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 88, height: 88, borderRadius: '50%',
              background: 'linear-gradient(135deg, #e8f0fb 0%, #c8d8f8 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 12px', position: 'relative',
            }}>
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                background: RAINBOW_C, opacity: 0.15,
              }} />
              <span style={{ fontSize: 32 }}>👤</span>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1a2744' }}>LE CIEL</div>
            <div style={{ fontSize: 11, color: '#8896b3' }}>WEB DESIGN</div>
          </div>

          {/* Text */}
          <div>
            <p style={{ fontSize: 15, color: '#2d3748', lineHeight: 1.85, marginBottom: 20 }}>
              ルシエルウェブデザインは、<strong>小さなお店・個人事業主向けにホームページ制作を行う個人制作サービス</strong>です。
            </p>
            <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.85, marginBottom: 20 }}>
              見た目を整えるだけでなく、サービス内容・料金・お問い合わせ導線が伝わる構成から一緒に整理します。初めてホームページを作る方にも分かりやすく、相談から公開まで一貫して対応します。
            </p>
            <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.85, marginBottom: 24 }}>
              制作会社に依頼するほど大きな予算はないけれど、きちんと信頼されるホームページを持ちたい方に向けて、目的やご予算に合わせた制作をご提案します。
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10, marginBottom: 24 }}>
              {[
                ['対応内容', 'HP制作 / LP制作 / スマホ対応 / 更新サポート'],
                ['対応エリア', '全国オンライン対応'],
                ['対象', '美容室・整体・飲食店・個人サービス'],
              ].map(([label, val]) => (
                <div key={label} style={{ background: '#f8faff', borderRadius: 8, padding: '10px 14px' }}>
                  <div style={{ fontSize: 11, color: '#8896b3', fontWeight: 600, marginBottom: 3 }}>{label}</div>
                  <div style={{ fontSize: 13, color: '#1a2744', fontWeight: 500 }}>{val}</div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid #e8ecf4', paddingTop: 20 }}>
              <p style={{ fontSize: 13, color: '#6b7a99', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 8 }}>
                Le Cielはフランス語で「空」を意味します。空にかかる虹のように、人とサービスをつなぐホームページを制作したいという想いを込めています。
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
              {[
                'ご相談には、専門用語をできるだけ使わず、分かりやすくお答えします。',
                '制作中は、進行状況が分かるように必要なタイミングでご連絡します。',
                '初めてWeb制作を依頼する方にも、準備する内容から丁寧にご案内します。',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#2d5be3', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.6 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(null);

  const faqs = [
    ['まだ内容が固まっていなくても相談できますか？', '可能です。事業内容や目的を伺いながら、必要なページ構成から一緒に整理します。'],
    ['写真や文章がなくても依頼できますか？', '可能です。文章のたたき台作成や、写真素材の選定も対応できます。必要に応じて、撮影や素材準備についてもご相談ください。'],
    ['スマートフォン対応は含まれますか？', 'すべてのプランでスマートフォン表示に対応します。スマホで見やすく、ボタンを押しやすいレイアウトに調整します。'],
    ['公開後の修正はできますか？', '納品後1か月以内の軽微な修正は無料で対応します。継続的な更新が必要な場合は、保守プランで対応します。'],
    ['WordPressで作れますか？', '更新が必要な場合はWordPressでの制作も可能です。更新頻度が少ない場合は、目的に合わせて別の制作方法をご提案します。'],
    ['制作期間はどれくらいですか？', '5ページ程度のホームページの場合、約3〜6週間が目安です。ページ数や素材の準備状況により前後します。'],
    ['相談だけでも大丈夫ですか？', 'はい、問題ありません。初回相談は無料です。作りたいサイトの方向性や概算費用についてお気軽にご相談ください。'],
    ['予算が少なくても相談できますか？', '可能です。ご予算に合わせて、優先度の高い内容から制作範囲をご提案します。'],
    ['オンラインだけで依頼できますか？', 'はい、全国オンラインで対応しています。メールやビデオ通話など、ご希望の方法で進行できます。'],
  ];

  return (
    <section id="faq" style={{ background: '#fff', padding: '80px 20px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#2d5be3', letterSpacing: '0.1em', marginBottom: 12 }}>FAQ</p>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: '#1a2744' }}>
            よくある質問
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {faqs.map(([q, a], i) => (
            <div key={i} style={{
              border: '1.5px solid', borderColor: open === i ? '#2d5be3' : '#e8ecf4',
              borderRadius: 10, overflow: 'hidden',
              transition: 'border-color 0.2s',
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', textAlign: 'left', padding: '16px 20px',
                  background: open === i ? '#f0f5ff' : '#fff',
                  border: 'none', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
                  transition: 'background 0.2s',
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, color: '#1a2744', lineHeight: 1.5 }}>
                  <span style={{ color: '#2d5be3', marginRight: 8 }}>Q.</span>{q}
                </span>
                <span style={{
                  fontSize: 16, color: '#2d5be3', flexShrink: 0,
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s', display: 'inline-block',
                }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 20px 16px 20px', borderTop: '1px solid #e8ecf4' }}>
                  <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.8, margin: '14px 0 0', paddingLeft: 22 }}>
                    {a}
                  </p>
                </div>
              )}
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
            その他のご質問はこちら →
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = React.useState({
    name: '', email: '', business: '', siteType: '',
    budget: '', deadline: '', message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [sendErr, setSendErr] = React.useState('');

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const inputStyle = {
    width: '100%', padding: '11px 14px', fontSize: 14,
    border: '1.5px solid #c8d4e8', borderRadius: 8, outline: 'none',
    color: '#1a2744', background: '#fff', boxSizing: 'border-box',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendErr('');
    try {
      const data = new FormData();
      data.append('name', form.name);
      data.append('email', form.email);
      data.append('message', form.message);
      data.append('business', form.business);
      data.append('siteType', form.siteType);
      data.append('budget', form.budget);
      data.append('deadline', form.deadline);
      const res = await fetch('/mail.php', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setSendErr(json.message || '送信に失敗しました。');
      }
    } catch {
      setSendErr('通信エラーが発生しました。時間をおいて再度お試しください。');
    }
  };

  return (
    <section id="contact" style={{ background: '#1a2744', padding: '80px 20px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#7b9de8', letterSpacing: '0.1em', marginBottom: 12 }}>Contact</p>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>
            まずは無料でご相談ください
          </h2>
          <p style={{ fontSize: 15, color: '#a8b8d8', lineHeight: 1.8, maxWidth: 480, margin: '0 auto 16px' }}>
            まだ内容が固まっていなくても大丈夫です。作りたいサイトのイメージ、ご予算、現在のお悩みをお聞かせください。
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
            {['初回相談無料', '全国オンライン対応', '無理な営業なし'].map(t => (
              <span key={t} style={{
                background: 'rgba(255,255,255,0.1)', color: '#c8d8f0', fontSize: 12,
                fontWeight: 600, padding: '4px 12px', borderRadius: 20,
              }}>{t}</span>
            ))}
          </div>
        </div>

        {submitted ? (
          <div style={{
            background: 'rgba(255,255,255,0.08)', borderRadius: 16, padding: '48px 36px',
            textAlign: 'center', border: '1px solid rgba(255,255,255,0.15)',
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 12 }}>送信が完了しました</h3>
            <p style={{ fontSize: 15, color: '#a8b8d8', lineHeight: 1.8 }}>
              お問い合わせいただきありがとうございます。<br />
              通常、2営業日以内にご返信いたします。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: '36px',
            border: '1px solid rgba(255,255,255,0.12)', display: 'flex', flexDirection: 'column', gap: 18,
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#c8d8f0', marginBottom: 6 }}>
                  お名前 <span style={{ color: '#e85d5d' }}>*</span>
                </label>
                <input required value={form.name} onChange={set('name')} placeholder="山田 太郎" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#2d5be3'}
                  onBlur={e => e.target.style.borderColor = '#c8d4e8'} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#c8d8f0', marginBottom: 6 }}>
                  メールアドレス <span style={{ color: '#e85d5d' }}>*</span>
                </label>
                <input required type="email" value={form.email} onChange={set('email')} placeholder="info@example.com" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#2d5be3'}
                  onBlur={e => e.target.style.borderColor = '#c8d4e8'} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#c8d8f0', marginBottom: 6 }}>事業内容</label>
              <input value={form.business} onChange={set('business')} placeholder="例：美容室、整体院、カフェ など" style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#2d5be3'}
                onBlur={e => e.target.style.borderColor = '#c8d4e8'} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#c8d8f0', marginBottom: 6 }}>作りたいサイト</label>
              <input value={form.siteType} onChange={set('siteType')} placeholder="例：ホームページのリニューアル、LP制作 など" style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#2d5be3'}
                onBlur={e => e.target.style.borderColor = '#c8d4e8'} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#c8d8f0', marginBottom: 6 }}>ご予算</label>
                <select value={form.budget} onChange={set('budget')} style={{ ...inputStyle, appearance: 'none' }}>
                  <option value="">選択してください</option>
                  <option>10万円未満</option>
                  <option>10〜20万円</option>
                  <option>20〜30万円</option>
                  <option>30万円以上</option>
                  <option>まだ決めていない</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#c8d8f0', marginBottom: 6 }}>希望納期</label>
                <select value={form.deadline} onChange={set('deadline')} style={{ ...inputStyle, appearance: 'none' }}>
                  <option value="">選択してください</option>
                  <option>1か月以内</option>
                  <option>2〜3か月以内</option>
                  <option>急ぎではない</option>
                  <option>相談して決めたい</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#c8d8f0', marginBottom: 6 }}>
                相談内容 <span style={{ color: '#e85d5d' }}>*</span>
              </label>
              <textarea required value={form.message} onChange={set('message')}
                placeholder="現在のお悩み、作りたいサイトのイメージ、その他ご質問などをご記入ください。内容が固まっていなくても大丈夫です。"
                rows={5}
                style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                onFocus={e => e.target.style.borderColor = '#2d5be3'}
                onBlur={e => e.target.style.borderColor = '#c8d4e8'}
              />
            </div>

            {sendErr && (
              <div style={{
                background: 'rgba(232,93,93,0.15)', border: '1px solid rgba(232,93,93,0.4)',
                borderRadius: 8, padding: '12px 16px',
                fontSize: 13, color: '#ffb0b0', lineHeight: 1.6,
              }}>
                ⚠️ {sendErr}
              </div>
            )}

            <button type="submit" style={{
              background: RAINBOW_C, color: '#fff', padding: '14px',
              borderRadius: 8, fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              相談内容を送信する →
            </button>
            <p style={{ textAlign: 'center', fontSize: 12, color: '#7b9de8', margin: 0 }}>
              通常、2営業日以内に返信いたします。
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#0f1827', padding: '40px 20px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <div style={{ width: 28, height: 28, position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: RAINBOW_C, borderRadius: '50%', opacity: 0.25 }} />
                <div style={{ position: 'absolute', inset: 3, background: '#1a2744', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontSize: 9, fontWeight: 700 }}>LC</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '0.04em' }}>LE CIEL WEB DESIGN</div>
                <div style={{ fontSize: 10, color: '#4a5a7a' }}>ルシエルウェブデザイン</div>
              </div>
            </div>
            <p style={{ fontSize: 12, color: '#4a5a7a', lineHeight: 1.8, maxWidth: 280 }}>
              小さなお店・個人事業主向けホームページ制作サービス
            </p>
          </div>

          <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
            {[
              ['サービス', '#services'],
              ['料金', '#pricing'],
              ['制作実績', '#works'],
              ['制作の流れ', '#process'],
              ['プロフィール', '#profile'],
              ['よくある質問', '#faq'],
              ['お問い合わせ', '#contact'],
            ].map(([label, href]) => (
              <a key={href} href={href} style={{
                color: '#6b7a99', fontSize: 13, textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = '#6b7a99'}
              >{label}</a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1e2d45', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 11, color: '#3a4a62', margin: 0 }}>
            © 2024 LE CIEL WEB DESIGN. All rights reserved.
          </p>
          <div style={{ width: 60, height: 3, background: RAINBOW_C, borderRadius: 99 }} />
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Profile, FAQ, Contact, Footer });
