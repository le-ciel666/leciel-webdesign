<?php
/**
 * Template Name: 代表挨拶
 *
 * @package azusa
 */
get_header();
$home = home_url( '/' );

$profile = array(
	array( '1978', '東京都生まれ' ),
	array( '2001', '大学卒業後、都内の会計事務所に入所。中小企業の税務・会計実務に従事' ),
	array( '2008', '税理士登録' ),
	array( '2012', 'あずさ会計事務所を開業' ),
	array( '現在', '東京税理士会渋谷支部 所属。中小企業の経営支援をライフワークに、年間100件を超える経営相談を受ける' ),
);
?>

<!-- PAGE HERO -->
<section style="background:linear-gradient(150deg,#0B1A33,#0E1F3D);padding:clamp(150px,17vw,210px) 0 clamp(56px,7vw,90px);position:relative;overflow:hidden;">
  <div style="position:absolute;right:-1vw;bottom:-4vw;font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(90px,16vw,230px);line-height:1;color:rgba(255,255,255,0.04);pointer-events:none;user-select:none;">MESSAGE</div>
  <div style="position:relative;max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);">
    <div style="display:flex;align-items:center;gap:10px;font-size:11px;letter-spacing:0.18em;color:rgba(255,255,255,0.45);">
      <a class="az-crumb" href="<?php echo esc_url( $home ); ?>" style="color:rgba(255,255,255,0.45);cursor:pointer;text-decoration:none;transition:color 0.4s;">TOP</a>
      <span>—</span>
      <span style="color:#C9A86A;">代表挨拶</span>
    </div>
    <div data-reveal style="font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(52px,8.5vw,116px);line-height:1.05;color:#F7F6F2;margin-top:20px;">MESSAGE</div>
    <div data-reveal data-reveal-delay="150" style="display:flex;align-items:center;gap:16px;margin-top:16px;">
      <span style="width:40px;height:1px;background:#C9A86A;"></span>
      <span style="font-size:14px;letter-spacing:0.22em;color:rgba(255,255,255,0.72);">代表挨拶</span>
    </div>
  </div>
</section>

<!-- GREETING -->
<section style="background:#F7F6F2;padding:clamp(80px,11vw,150px) 0;">
  <div style="max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);display:flex;flex-wrap:wrap;align-items:flex-start;gap:clamp(48px,7vw,100px);">
    <div data-reveal style="flex:0 1 360px;min-width:min(100%,280px);position:relative;margin-top:clamp(0px,3vw,48px);">
      <div style="position:absolute;top:22px;left:-22px;right:22px;bottom:-22px;border:1px solid rgba(201,168,106,0.5);pointer-events:none;"></div>
      <?php az_image( 'img_message_portrait', '代表者のポートレート写真', 'position:relative;display:block;width:100%;height:clamp(420px,46vw,520px);' ); ?>
      <div style="position:relative;margin-top:44px;display:flex;flex-direction:column;gap:6px;">
        <span style="font-size:14px;font-weight:500;letter-spacing:0.16em;color:#1B2536;">代表税理士｜梓 真一郎</span>
        <span style="font-family:'Jost',sans-serif;font-size:10px;letter-spacing:0.3em;color:#9AA2B5;">SHINICHIRO AZUSA</span>
      </div>
    </div>
    <div style="flex:1 1 480px;min-width:min(100%,300px);">
      <div data-reveal style="display:flex;align-items:center;gap:16px;">
        <span style="font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.32em;color:#C9A86A;">GREETING</span>
        <span style="width:44px;height:1px;background:#C9A86A;"></span>
      </div>
      <h2 data-reveal data-reveal-delay="120" style="margin:clamp(24px,3vw,40px) 0 0;font-size:clamp(25px,3vw,40px);font-weight:500;line-height:1.85;letter-spacing:0.05em;color:#1B2536;">経営者の隣に、<br>“数字の伴走者”を。</h2>
      <div data-reveal data-reveal-delay="240">
        <p style="margin:clamp(28px,3.5vw,48px) 0 0;font-size:15px;line-height:2.5;letter-spacing:0.05em;color:#3A4458;">あずさ会計事務所のウェブサイトをご覧いただき、ありがとうございます。代表税理士の梓 真一郎です。</p>
        <p style="margin:28px 0 0;font-size:15px;line-height:2.5;letter-spacing:0.05em;color:#3A4458;">私たちは2012年の開業以来、「経理のためではなく、経営のための会計を」という想いを大切にしてきました。決算書や申告書はゴールではなく、未来の意思決定のための材料です。数字を正しく整えることはもちろん、その数字が経営者にとって“使える言葉”になるまで翻訳すること。それが私たちの仕事だと考えています。</p>
        <p style="margin:28px 0 0;font-size:15px;line-height:2.5;letter-spacing:0.05em;color:#3A4458;">中小企業の経営者は、いつも孤独な決断を迫られています。だからこそ、いちばん近くで数字を見てきた専門家として、ときに励まし、ときに苦言を呈しながら、長く伴走できるパートナーでありたい。創業の一歩目から事業承継まで、貴社の挑戦に寄り添い続けます。</p>
        <p style="margin:28px 0 0;font-size:15px;line-height:2.5;letter-spacing:0.05em;color:#3A4458;">どうぞお気軽にご相談ください。スタッフ一同、お会いできることを楽しみにしております。</p>
      </div>
      <div data-reveal data-reveal-delay="100" style="margin-top:clamp(40px,5vw,64px);display:flex;flex-direction:column;gap:8px;align-items:flex-end;">
        <span style="font-family:'Jost',sans-serif;font-weight:300;font-size:24px;letter-spacing:0.14em;color:#0E1F3D;">Shinichiro Azusa</span>
        <span style="font-size:12px;letter-spacing:0.14em;color:#9AA2B5;">あずさ会計事務所 代表税理士 梓 真一郎</span>
      </div>
    </div>
  </div>
</section>

<!-- PROFILE -->
<section style="background:#FFFFFF;padding:clamp(80px,10vw,140px) 0;">
  <div style="max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);">
    <div style="max-width:920px;margin:0 auto;">
      <div data-reveal>
        <div style="display:flex;align-items:center;gap:16px;">
          <span style="font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.32em;color:#C9A86A;">PROFILE</span>
          <span style="width:44px;height:1px;background:#C9A86A;"></span>
        </div>
        <h2 style="margin:clamp(20px,2.6vw,34px) 0 0;font-size:clamp(26px,3.1vw,42px);font-weight:500;letter-spacing:0.06em;color:#1B2536;">略歴</h2>
      </div>
      <div data-reveal data-reveal-delay="150" style="margin-top:clamp(36px,4.5vw,60px);border-bottom:1px solid #E7E3D8;">
        <?php foreach ( $profile as $row ) : ?>
          <div style="display:grid;grid-template-columns:minmax(80px,140px) 1fr;gap:16px;align-items:baseline;padding:24px 4px;border-top:1px solid #E7E3D8;"><span style="font-family:'Jost',sans-serif;font-weight:300;font-size:20px;letter-spacing:0.1em;color:#C9A86A;"><?php echo esc_html( $row[0] ); ?></span><span style="font-size:14.5px;letter-spacing:0.05em;line-height:2;color:#3A4458;"><?php echo esc_html( $row[1] ); ?></span></div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
