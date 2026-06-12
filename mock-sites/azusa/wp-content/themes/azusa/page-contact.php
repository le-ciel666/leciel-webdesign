<?php
/**
 * Template Name: お問い合わせ
 *
 * @package azusa
 */
get_header();
$home  = home_url( '/' );
$tel   = az_opt( 'az_tel', '03-1234-5678' );
$hours = az_opt( 'az_hours', '平日 9:00–18:00' );

$ipt = 'width:100%;background:transparent;border:none;border-bottom:1px solid #D9D5CA;padding:12px 2px;font-size:16px;font-family:inherit;letter-spacing:0.05em;color:#1B2536;outline:none;transition:border-color 0.4s;';
?>

<!-- PAGE HERO -->
<section style="background:linear-gradient(150deg,#0B1A33,#0E1F3D);padding:clamp(150px,17vw,210px) 0 clamp(56px,7vw,90px);position:relative;overflow:hidden;">
  <div style="position:absolute;right:-1vw;bottom:-4vw;font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(90px,16vw,230px);line-height:1;color:rgba(255,255,255,0.04);pointer-events:none;user-select:none;">CONTACT</div>
  <div style="position:relative;max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);">
    <div style="display:flex;align-items:center;gap:10px;font-size:11px;letter-spacing:0.18em;color:rgba(255,255,255,0.45);">
      <a class="az-crumb" href="<?php echo esc_url( $home ); ?>" style="color:rgba(255,255,255,0.45);cursor:pointer;text-decoration:none;transition:color 0.4s;">TOP</a>
      <span>—</span>
      <span style="color:#C9A86A;">お問い合わせ</span>
    </div>
    <div data-reveal style="font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(52px,8.5vw,116px);line-height:1.05;color:#F7F6F2;margin-top:20px;">CONTACT</div>
    <div data-reveal data-reveal-delay="150" style="display:flex;align-items:center;gap:16px;margin-top:16px;">
      <span style="width:40px;height:1px;background:#C9A86A;"></span>
      <span style="font-size:14px;letter-spacing:0.22em;color:rgba(255,255,255,0.72);">お問い合わせ</span>
    </div>
  </div>
</section>

<section style="background:#F7F6F2;padding:clamp(80px,10vw,140px) 0;">
  <div style="max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);display:flex;flex-wrap:wrap;align-items:flex-start;gap:clamp(48px,6vw,90px);">

    <div data-reveal style="flex:1 1 340px;min-width:min(100%,280px);">
      <div style="display:flex;align-items:center;gap:16px;">
        <span style="font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.32em;color:#C9A86A;">CONTACT</span>
        <span style="width:44px;height:1px;background:#C9A86A;"></span>
      </div>
      <h2 style="margin:clamp(20px,2.6vw,34px) 0 0;font-size:clamp(26px,3vw,40px);font-weight:500;line-height:1.7;letter-spacing:0.05em;color:#1B2536;">ご相談・お見積りは<br>こちらから。</h2>
      <p style="margin:28px 0 0;font-size:14.5px;line-height:2.4;letter-spacing:0.05em;color:#444F63;">初回のご相談は無料です。「何から相談すればよいか分からない」という段階でも、お気軽にご連絡ください。2営業日以内に担当者よりご返信いたします。</p>
      <div style="margin-top:44px;border-top:1px solid #E4E0D5;padding-top:32px;">
        <span style="font-size:12px;font-weight:500;letter-spacing:0.2em;color:#9AA2B5;">お電話でのご相談</span>
        <div style="font-family:'Jost',sans-serif;font-weight:300;font-size:clamp(28px,3.2vw,38px);letter-spacing:0.08em;color:#0E1F3D;margin-top:10px;"><?php echo esc_html( $tel ); ?></div>
        <div style="font-size:12.5px;letter-spacing:0.08em;color:#69748A;margin-top:6px;">受付時間｜<?php echo esc_html( $hours ); ?></div>
      </div>
      <p style="margin:32px 0 0;font-size:12.5px;line-height:2.1;letter-spacing:0.04em;color:#9AA2B5;">オンライン面談(Zoom / Google Meet)にも対応しています。</p>
    </div>

    <div data-reveal data-reveal-delay="160" style="flex:1 1 480px;min-width:min(100%,300px);background:#FFFFFF;border:1px solid #E7E3D8;padding:clamp(28px,4.5vw,56px);">
      <form id="az-contact-form" novalidate style="display:flex;flex-direction:column;gap:30px;">
        <div style="display:flex;flex-direction:column;gap:10px;">
          <label style="display:flex;align-items:center;gap:12px;"><span style="font-size:13.5px;font-weight:500;letter-spacing:0.12em;color:#1B2536;">お名前</span><span style="font-size:10px;letter-spacing:0.12em;color:#C9A86A;border:1px solid #C9A86A;padding:2px 7px;">必須</span></label>
          <input class="az-input" name="name" placeholder="山田 太郎" style="<?php echo esc_attr( $ipt ); ?>">
          <span class="az-err" data-for="name" style="font-size:12px;letter-spacing:0.04em;color:#C2533F;"></span>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <label style="display:flex;align-items:center;gap:12px;"><span style="font-size:13.5px;font-weight:500;letter-spacing:0.12em;color:#1B2536;">会社名</span><span style="font-size:10px;letter-spacing:0.12em;color:#9AA2B5;border:1px solid #D9D5CA;padding:2px 7px;">任意</span></label>
          <input class="az-input" name="company" placeholder="株式会社〇〇" style="<?php echo esc_attr( $ipt ); ?>">
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <label style="display:flex;align-items:center;gap:12px;"><span style="font-size:13.5px;font-weight:500;letter-spacing:0.12em;color:#1B2536;">メールアドレス</span><span style="font-size:10px;letter-spacing:0.12em;color:#C9A86A;border:1px solid #C9A86A;padding:2px 7px;">必須</span></label>
          <input class="az-input" name="email" type="email" placeholder="example@company.jp" style="<?php echo esc_attr( $ipt ); ?>">
          <span class="az-err" data-for="email" style="font-size:12px;letter-spacing:0.04em;color:#C2533F;"></span>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <label style="display:flex;align-items:center;gap:12px;"><span style="font-size:13.5px;font-weight:500;letter-spacing:0.12em;color:#1B2536;">お問い合わせ内容</span><span style="font-size:10px;letter-spacing:0.12em;color:#C9A86A;border:1px solid #C9A86A;padding:2px 7px;">必須</span></label>
          <textarea class="az-input" name="message" rows="6" placeholder="ご相談内容をご記入ください" style="<?php echo esc_attr( $ipt ); ?>line-height:1.9;resize:vertical;"></textarea>
          <span class="az-err" data-for="message" style="font-size:12px;letter-spacing:0.04em;color:#C2533F;"></span>
        </div>
        <button type="submit" class="az-submit" style="width:100%;background:#0E1F3D;color:#F7F6F2;border:none;padding:19px;font-size:14px;font-weight:500;font-family:inherit;letter-spacing:0.24em;cursor:pointer;transition:background 0.4s,color 0.4s;">送信する</button>
        <p style="margin:0;font-size:11.5px;line-height:2;letter-spacing:0.04em;color:#9AA2B5;">ご入力いただいた個人情報は、お問い合わせへの対応の目的にのみ使用いたします。</p>
      </form>

      <div id="az-sent" hidden style="flex-direction:column;align-items:center;text-align:center;gap:22px;padding:clamp(24px,4vw,48px) 0;">
        <span style="width:64px;height:64px;border:1px solid #C9A86A;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#C9A86A;font-size:26px;">✓</span>
        <h3 style="margin:0;font-size:22px;font-weight:500;letter-spacing:0.12em;color:#1B2536;">送信が完了しました</h3>
        <p style="margin:0;font-size:14px;line-height:2.3;letter-spacing:0.05em;color:#69748A;">お問い合わせありがとうございます。<br>2営業日以内に担当者よりご連絡いたします。</p>
        <a class="az-btn-navy" href="<?php echo esc_url( $home ); ?>" style="margin-top:10px;border:1px solid #0E1F3D;color:#0E1F3D;padding:15px 36px;font-size:13px;font-weight:500;letter-spacing:0.2em;cursor:pointer;text-decoration:none;transition:background 0.4s,color 0.4s;">TOPへ戻る</a>
      </div>
    </div>

  </div>
</section>

<?php get_footer(); ?>
