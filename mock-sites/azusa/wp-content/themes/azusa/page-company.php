<?php
/**
 * Template Name: 会社概要
 *
 * @package azusa
 */
get_header();
$home    = home_url( '/' );
$tel     = az_opt( 'az_tel', '03-1234-5678' );
$fax     = az_opt( 'az_fax', '03-1234-5679' );
$zip     = az_opt( 'az_zip', '150-0002' );
$address = az_opt( 'az_address', '東京都渋谷区渋谷2-X-X 梓ビル 5F' );
$hours   = az_opt( 'az_hours', '平日 9:00–18:00' );

$profile = array(
	array( '事務所名', 'あずさ会計事務所' ),
	array( '代表者', '代表税理士 梓 真一郎(東京税理士会 渋谷支部 所属)' ),
	array( '設立', '2012年4月' ),
	array( '所在地', '〒' . $zip . ' ' . $address ),
	array( '連絡先', 'TEL ' . $tel . ' / FAX ' . $fax ),
	array( '営業時間', $hours . '(土日祝休)' ),
	array( '業務内容', '税務顧問 / 創業・起業支援 / クラウド会計導入支援 / 経営・財務支援' ),
	array( 'スタッフ', '税理士 3名 / スタッフ 8名(2026年4月現在)' ),
);

$history = array(
	array( '2012', '渋谷区桜丘町にて、あずさ会計事務所を開業' ),
	array( '2015', 'スタッフ5名体制に。創業・起業支援サービスを開始' ),
	array( '2019', 'クラウド会計導入支援チームを発足' ),
	array( '2022', '現オフィス(渋谷2丁目)へ移転' ),
	array( '2025', '顧問先300社を突破' ),
);
?>

<!-- PAGE HERO -->
<section style="background:linear-gradient(150deg,#0B1A33,#0E1F3D);padding:clamp(150px,17vw,210px) 0 clamp(56px,7vw,90px);position:relative;overflow:hidden;">
  <div style="position:absolute;right:-1vw;bottom:-4vw;font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(90px,16vw,230px);line-height:1;color:rgba(255,255,255,0.04);pointer-events:none;user-select:none;">COMPANY</div>
  <div style="position:relative;max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);">
    <div style="display:flex;align-items:center;gap:10px;font-size:11px;letter-spacing:0.18em;color:rgba(255,255,255,0.45);">
      <a class="az-crumb" href="<?php echo esc_url( $home ); ?>" style="color:rgba(255,255,255,0.45);cursor:pointer;text-decoration:none;transition:color 0.4s;">TOP</a>
      <span>—</span>
      <span style="color:#C9A86A;">会社概要</span>
    </div>
    <div data-reveal style="font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(52px,8.5vw,116px);line-height:1.05;color:#F7F6F2;margin-top:20px;">COMPANY</div>
    <div data-reveal data-reveal-delay="150" style="display:flex;align-items:center;gap:16px;margin-top:16px;">
      <span style="width:40px;height:1px;background:#C9A86A;"></span>
      <span style="font-size:14px;letter-spacing:0.22em;color:rgba(255,255,255,0.72);">会社概要</span>
    </div>
  </div>
</section>

<!-- PROFILE -->
<section style="background:#F7F6F2;padding:clamp(80px,10vw,140px) 0;">
  <div style="max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);">
    <div data-reveal style="position:relative;max-width:1040px;">
      <div style="position:absolute;top:24px;left:24px;right:-24px;bottom:-24px;border:1px solid rgba(201,168,106,0.45);pointer-events:none;"></div>
      <?php az_image( 'img_company_office', 'オフィス外観・エントランスの写真', 'position:relative;display:block;width:100%;height:clamp(240px,34vw,440px);' ); ?>
    </div>

    <div style="max-width:920px;margin:clamp(80px,10vw,130px) auto 0;">
      <div data-reveal>
        <div style="display:flex;align-items:center;gap:16px;">
          <span style="font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.32em;color:#C9A86A;">PROFILE</span>
          <span style="width:44px;height:1px;background:#C9A86A;"></span>
        </div>
        <h2 style="margin:clamp(20px,2.6vw,34px) 0 0;font-size:clamp(26px,3.1vw,42px);font-weight:500;letter-spacing:0.06em;color:#1B2536;">事務所概要</h2>
      </div>
      <div data-reveal data-reveal-delay="150" style="margin-top:clamp(36px,4.5vw,60px);border-bottom:1px solid #E4E0D5;">
        <?php foreach ( $profile as $row ) : ?>
          <div style="display:grid;grid-template-columns:minmax(96px,200px) 1fr;gap:16px;padding:24px 4px;border-top:1px solid #E4E0D5;"><span style="font-size:13px;font-weight:500;letter-spacing:0.14em;color:#9AA2B5;"><?php echo esc_html( $row[0] ); ?></span><span style="font-size:14.5px;letter-spacing:0.05em;line-height:2;color:#1B2536;"><?php echo esc_html( $row[1] ); ?></span></div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>

<!-- HISTORY -->
<section style="background:#FFFFFF;padding:clamp(80px,10vw,140px) 0;">
  <div style="max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);">
    <div style="max-width:920px;margin:0 auto;">
      <div data-reveal>
        <div style="display:flex;align-items:center;gap:16px;">
          <span style="font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.32em;color:#C9A86A;">HISTORY</span>
          <span style="width:44px;height:1px;background:#C9A86A;"></span>
        </div>
        <h2 style="margin:clamp(20px,2.6vw,34px) 0 0;font-size:clamp(26px,3.1vw,42px);font-weight:500;letter-spacing:0.06em;color:#1B2536;">沿革</h2>
      </div>
      <div data-reveal data-reveal-delay="150" style="margin-top:clamp(36px,4.5vw,60px);border-bottom:1px solid #E7E3D8;">
        <?php foreach ( $history as $row ) : ?>
          <div style="display:grid;grid-template-columns:minmax(80px,140px) 1fr;gap:16px;align-items:baseline;padding:24px 4px;border-top:1px solid #E7E3D8;"><span style="font-family:'Jost',sans-serif;font-weight:300;font-size:20px;letter-spacing:0.1em;color:#C9A86A;"><?php echo esc_html( $row[0] ); ?></span><span style="font-size:14.5px;letter-spacing:0.05em;line-height:2;color:#3A4458;"><?php echo esc_html( $row[1] ); ?></span></div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>

<!-- ACCESS -->
<section style="background:#F7F6F2;padding:clamp(80px,10vw,140px) 0;">
  <div style="max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);display:flex;flex-wrap:wrap;align-items:flex-start;gap:clamp(40px,6vw,90px);">
    <div data-reveal style="flex:1 1 480px;min-width:min(100%,280px);">
      <?php az_map( 'display:block;width:100%;height:clamp(300px,34vw,420px);' ); ?>
    </div>
    <div data-reveal data-reveal-delay="160" style="flex:1 1 340px;min-width:min(100%,280px);">
      <div style="display:flex;align-items:center;gap:16px;">
        <span style="font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.32em;color:#C9A86A;">ACCESS</span>
        <span style="width:44px;height:1px;background:#C9A86A;"></span>
      </div>
      <h2 style="margin:clamp(20px,2.6vw,34px) 0 0;font-size:clamp(26px,3.1vw,42px);font-weight:500;letter-spacing:0.06em;color:#1B2536;">アクセス</h2>
      <p style="margin:30px 0 0;font-size:14.5px;line-height:2.3;letter-spacing:0.05em;color:#444F63;">〒<?php echo esc_html( $zip ); ?><br><?php echo esc_html( $address ); ?></p>
      <div style="margin-top:28px;display:flex;flex-direction:column;">
        <div style="display:flex;align-items:center;gap:14px;padding:14px 0;border-top:1px solid #E4E0D5;"><span style="width:6px;height:6px;background:#C9A86A;transform:rotate(45deg);flex-shrink:0;"></span><span style="font-size:14px;letter-spacing:0.05em;color:#3A4458;">JR・東京メトロ「渋谷駅」B2出口より徒歩5分</span></div>
        <div style="display:flex;align-items:center;gap:14px;padding:14px 0;border-top:1px solid #E4E0D5;border-bottom:1px solid #E4E0D5;"><span style="width:6px;height:6px;background:#C9A86A;transform:rotate(45deg);flex-shrink:0;"></span><span style="font-size:14px;letter-spacing:0.05em;color:#3A4458;">東京メトロ「表参道駅」B1出口より徒歩12分</span></div>
      </div>
      <p style="margin:24px 0 0;font-size:12.5px;line-height:2.1;letter-spacing:0.04em;color:#9AA2B5;">お車でお越しの際は、近隣のコインパーキングをご利用ください。</p>
    </div>
  </div>
</section>

<?php get_footer(); ?>
