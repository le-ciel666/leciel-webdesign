<?php
/**
 * Front page (TOP).
 *
 * @package azusa
 */
get_header();

$u_contact  = az_contact_url();
$u_services = az_page_url( 'services' );
$u_company  = az_page_url( 'company' );
$u_greeting = az_page_url( 'greeting' );

$top_services = array(
	array( 'num' => '01', 'title' => '税務顧問',             'en' => 'TAX ADVISORY',       'desc' => '法人・個人の税務申告から、節税提案、税務調査対応まで。毎月の巡回監査で、数字をタイムリーに経営へ。' ),
	array( 'num' => '02', 'title' => '創業・起業支援',       'en' => 'STARTUP SUPPORT',     'desc' => '会社設立、創業融資、事業計画の策定。最初の一歩から、確かな数字で支えます。' ),
	array( 'num' => '03', 'title' => 'クラウド会計導入支援', 'en' => 'CLOUD ACCOUNTING',    'desc' => 'クラウド会計ソフトの選定から、運用設計まで。経理の自動化で、本業に集中できる体制へ。' ),
	array( 'num' => '04', 'title' => '経営・財務支援',       'en' => 'MANAGEMENT SUPPORT',  'desc' => '月次決算の早期化、資金繰り改善、経営計画の伴走。数字で語る経営を、ともに。' ),
);
?>

<!-- HERO -->
<section class="az-hero" style="position:relative;min-height:100svh;background:linear-gradient(160deg,#0B1A33 0%,#0E1F3D 55%,#142A4E 100%);overflow:hidden;display:flex;flex-direction:column;justify-content:center;padding:150px 0 110px;">
  <div style="position:absolute;inset:0;display:flex;justify-content:space-evenly;pointer-events:none;">
    <span style="width:1px;background:rgba(255,255,255,0.05);"></span>
    <span style="width:1px;background:rgba(255,255,255,0.05);"></span>
    <span style="width:1px;background:rgba(255,255,255,0.05);"></span>
  </div>
  <div style="position:absolute;right:-1vw;bottom:-3vw;font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(110px,21vw,310px);letter-spacing:0.04em;line-height:1;color:rgba(255,255,255,0.045);pointer-events:none;user-select:none;">AZUSA</div>
  <div style="position:relative;width:100%;max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);display:flex;flex-wrap:wrap;align-items:flex-start;gap:clamp(40px,5vw,80px);">
    <div style="flex:1 1 520px;min-width:min(100%,300px);">
      <div data-reveal style="display:flex;align-items:center;gap:16px;">
        <span style="width:44px;height:1px;background:#C9A86A;"></span>
        <span style="font-family:'Jost',sans-serif;font-size:11px;font-weight:400;letter-spacing:0.32em;color:#C9A86A;">AZUSA ACCOUNTING OFFICE — SHIBUYA, TOKYO</span>
      </div>
      <h1 data-reveal data-reveal-delay="150" style="margin:clamp(26px,3.4vw,44px) 0 0;color:#F7F6F2;font-size:clamp(38px,6vw,84px);font-weight:500;line-height:1.45;letter-spacing:0.06em;">数字の先に、<br>経営の答えを。</h1>
      <p data-reveal data-reveal-delay="320" style="margin:clamp(26px,3.4vw,44px) 0 0;max-width:33em;color:rgba(255,255,255,0.66);font-size:clamp(14px,1.15vw,16px);line-height:2.3;letter-spacing:0.06em;">税務・会計の確かな知見を、経営の意思決定につなげる。<br>あずさ会計事務所は、東京・渋谷から中小企業と<br>スタートアップの挑戦に伴走する税理士事務所です。</p>
      <div data-reveal data-reveal-delay="480" style="display:flex;flex-wrap:wrap;gap:16px;margin-top:clamp(34px,4vw,52px);">
        <a class="az-btn-gold" href="<?php echo esc_url( $u_contact ); ?>" style="background:#C9A86A;color:#0E1F3D;padding:17px 36px;font-size:13.5px;font-weight:700;letter-spacing:0.16em;cursor:pointer;text-decoration:none;transition:background 0.4s;">無料相談を予約する</a>
        <a class="az-btn-line" href="<?php echo esc_url( $u_services ); ?>" style="border:1px solid rgba(255,255,255,0.4);color:#F7F6F2;padding:17px 36px;font-size:13.5px;font-weight:500;letter-spacing:0.16em;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:12px;transition:border-color 0.4s,color 0.4s;">事業内容を見る <span>→</span></a>
      </div>
    </div>
    <div data-reveal data-reveal-delay="260" style="flex:0 1 430px;min-width:min(100%,280px);position:relative;margin-top:clamp(10px,7vw,110px);">
      <div style="position:absolute;top:24px;left:24px;right:-24px;bottom:-24px;border:1px solid rgba(201,168,106,0.45);pointer-events:none;"></div>
      <?php az_image( 'img_top_hero', 'オフィス・働く風景の写真', 'position:relative;display:block;width:100%;height:clamp(340px,44vw,540px);' ); ?>
    </div>
  </div>
  <div style="position:absolute;left:clamp(20px,4vw,48px);bottom:0;display:flex;flex-direction:column;align-items:center;gap:14px;">
    <span style="font-family:'Jost',sans-serif;font-size:10px;letter-spacing:0.32em;color:rgba(255,255,255,0.5);writing-mode:vertical-rl;">SCROLL</span>
    <span style="display:block;width:1px;height:60px;background:rgba(255,255,255,0.4);animation:az-scroll 2.4s cubic-bezier(0.65,0,0.35,1) infinite;"></span>
  </div>
  <div style="position:absolute;right:clamp(10px,1.6vw,24px);top:50%;transform:translateY(-50%);writing-mode:vertical-rl;font-family:'Jost',sans-serif;font-size:10px;letter-spacing:0.36em;color:rgba(255,255,255,0.35);">TAX &amp; ACCOUNTING FIRM — EST. 2012</div>
</section>

<!-- ABOUT -->
<section style="background:#F7F6F2;padding:clamp(100px,13vw,180px) 0 clamp(70px,9vw,120px);">
  <div style="max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(440px,100%),1fr));gap:clamp(40px,6vw,100px);">
    <div data-reveal style="position:relative;">
      <span style="position:absolute;top:-0.55em;left:-0.06em;font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(90px,11vw,150px);line-height:1;color:rgba(14,31,61,0.06);pointer-events:none;user-select:none;">01</span>
      <div style="position:relative;display:flex;align-items:center;gap:16px;">
        <span style="font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.32em;color:#C9A86A;">ABOUT US</span>
        <span style="width:44px;height:1px;background:#C9A86A;"></span>
      </div>
      <h2 style="position:relative;margin:clamp(24px,3vw,40px) 0 0;font-size:clamp(26px,3.1vw,42px);font-weight:500;line-height:1.75;letter-spacing:0.05em;color:#1B2536;">「経理のため」ではなく、<br>「経営のため」の会計を。</h2>
    </div>
    <div data-reveal data-reveal-delay="160" style="margin-top:clamp(0px,5vw,84px);">
      <p style="margin:0;font-size:15px;line-height:2.4;letter-spacing:0.05em;color:#444F63;">あずさ会計事務所は、東京・渋谷を拠点とする税理士事務所です。記帳や申告といった“守り”の業務にとどまらず、月次の数字を経営判断につなげる“攻めの会計”をご提供しています。</p>
      <p style="margin:28px 0 0;font-size:15px;line-height:2.4;letter-spacing:0.05em;color:#444F63;">創業期の資金調達から、成長期の体制づくり、その先の事業承継まで。経営のステージが変わっても、いちばん近くで数字を支え続けるパートナーであることをお約束します。</p>
      <div style="margin-top:44px;">
        <a class="az-more" href="<?php echo esc_url( $u_company ); ?>" style="display:inline-flex;align-items:center;gap:14px;cursor:pointer;text-decoration:none;color:#0E1F3D;font-size:13px;font-weight:500;letter-spacing:0.22em;padding-bottom:10px;border-bottom:1px solid #C9A86A;transition:color 0.4s;">会社概要を見る <span>→</span></a>
      </div>
    </div>
  </div>
</section>

<!-- MARQUEE -->
<div style="background:#F7F6F2;overflow:hidden;padding:clamp(16px,2.5vw,36px) 0 clamp(40px,5vw,70px);">
  <div style="display:flex;white-space:nowrap;width:max-content;animation:az-marquee 42s linear infinite;">
    <span style="font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(60px,8.5vw,120px);letter-spacing:0.05em;line-height:1.1;color:rgba(14,31,61,0.06);padding-right:60px;">TAX ADVISORY — STARTUP SUPPORT — CLOUD ACCOUNTING — MANAGEMENT SUPPORT —&nbsp;</span>
    <span style="font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(60px,8.5vw,120px);letter-spacing:0.05em;line-height:1.1;color:rgba(14,31,61,0.06);padding-right:60px;">TAX ADVISORY — STARTUP SUPPORT — CLOUD ACCOUNTING — MANAGEMENT SUPPORT —&nbsp;</span>
  </div>
</div>

<!-- SERVICES -->
<section style="background:#FFFFFF;padding:clamp(90px,12vw,160px) 0;">
  <div style="max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);">
    <div data-reveal style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:32px;">
      <div>
        <div style="display:flex;align-items:center;gap:16px;">
          <span style="font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.32em;color:#C9A86A;">SERVICES</span>
          <span style="width:44px;height:1px;background:#C9A86A;"></span>
        </div>
        <h2 style="margin:clamp(20px,2.6vw,34px) 0 0;font-size:clamp(26px,3.1vw,42px);font-weight:500;letter-spacing:0.06em;color:#1B2536;">事業内容</h2>
      </div>
      <a class="az-more" href="<?php echo esc_url( $u_services ); ?>" style="display:inline-flex;align-items:center;gap:14px;cursor:pointer;text-decoration:none;color:#0E1F3D;font-size:13px;font-weight:500;letter-spacing:0.22em;padding-bottom:10px;border-bottom:1px solid #C9A86A;transition:color 0.4s;">サービス詳細を見る <span>→</span></a>
    </div>
    <div style="margin-top:clamp(40px,5vw,72px);border-bottom:1px solid #E7E3D8;">
      <?php foreach ( $top_services as $sv ) : ?>
        <a class="az-svc-row" data-reveal href="<?php echo esc_url( $u_services ); ?>" style="display:grid;grid-template-columns:clamp(56px,8vw,110px) 1fr clamp(44px,4vw,56px);align-items:center;gap:clamp(16px,3vw,48px);padding:clamp(28px,4vw,44px) clamp(8px,1.5vw,20px);border-top:1px solid #E7E3D8;cursor:pointer;text-decoration:none;transition:background 0.5s;">
          <span style="font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(26px,3.4vw,46px);color:#C9A86A;line-height:1;"><?php echo esc_html( $sv['num'] ); ?></span>
          <span style="display:flex;flex-direction:column;gap:10px;">
            <span style="display:flex;align-items:baseline;gap:18px;flex-wrap:wrap;">
              <span style="font-size:clamp(19px,2vw,26px);font-weight:500;letter-spacing:0.08em;color:#1B2536;"><?php echo esc_html( $sv['title'] ); ?></span>
              <span style="font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.26em;color:#9AA2B5;"><?php echo esc_html( $sv['en'] ); ?></span>
            </span>
            <span style="font-size:14px;line-height:2;letter-spacing:0.04em;color:#69748A;max-width:54em;"><?php echo esc_html( $sv['desc'] ); ?></span>
          </span>
          <span class="az-svc-row__circle" style="width:clamp(44px,4vw,52px);height:clamp(44px,4vw,52px);border:1px solid #D9D5CA;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#0E1F3D;font-size:15px;transition:background 0.4s,color 0.4s,border-color 0.4s;">→</span>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- MESSAGE TEASER -->
<section style="background:#0E1F3D;padding:clamp(90px,12vw,160px) 0;position:relative;overflow:hidden;">
  <div style="position:absolute;right:-1vw;top:-2vw;font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(80px,13vw,190px);line-height:1;color:rgba(255,255,255,0.04);pointer-events:none;user-select:none;">MESSAGE</div>
  <div style="position:relative;max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);display:flex;flex-wrap:wrap;align-items:center;gap:clamp(48px,7vw,110px);">
    <div data-reveal style="flex:0 1 360px;min-width:min(100%,280px);position:relative;">
      <div style="position:absolute;top:20px;left:-20px;right:20px;bottom:-20px;border:1px solid rgba(201,168,106,0.4);pointer-events:none;"></div>
      <?php az_image( 'img_top_portrait', '代表者のポートレート写真', 'position:relative;display:block;width:100%;height:clamp(380px,42vw,470px);' ); ?>
    </div>
    <div data-reveal data-reveal-delay="180" style="flex:1 1 460px;min-width:min(100%,300px);">
      <div style="display:flex;align-items:center;gap:16px;">
        <span style="font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.32em;color:#C9A86A;">MESSAGE</span>
        <span style="width:44px;height:1px;background:#C9A86A;"></span>
      </div>
      <h2 style="margin:clamp(24px,3vw,40px) 0 0;font-size:clamp(24px,2.9vw,40px);font-weight:500;line-height:1.85;letter-spacing:0.05em;color:#F7F6F2;">経営者の、いちばん近くにいる<br>専門家でありたい。</h2>
      <p style="margin:28px 0 0;font-size:14.5px;line-height:2.3;letter-spacing:0.05em;color:rgba(255,255,255,0.6);max-width:36em;">決算書はゴールではなく、未来の意思決定のための材料です。代表税理士・梓 真一郎より、私たちの想いをお伝えします。</p>
      <div style="margin-top:30px;display:flex;align-items:center;gap:16px;">
        <span style="width:32px;height:1px;background:rgba(201,168,106,0.7);"></span>
        <span style="font-size:13px;letter-spacing:0.18em;color:rgba(255,255,255,0.75);">代表税理士｜梓 真一郎</span>
      </div>
      <div style="margin-top:40px;">
        <a class="az-more" href="<?php echo esc_url( $u_greeting ); ?>" style="display:inline-flex;align-items:center;gap:14px;cursor:pointer;text-decoration:none;color:#F7F6F2;font-size:13px;font-weight:500;letter-spacing:0.22em;padding-bottom:10px;border-bottom:1px solid #C9A86A;transition:color 0.4s;">代表挨拶を読む <span>→</span></a>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
