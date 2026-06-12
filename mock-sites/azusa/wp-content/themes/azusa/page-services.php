<?php
/**
 * Template Name: 事業内容
 *
 * @package azusa
 */
get_header();
$home = home_url( '/' );

$services = array(
	array(
		'num' => '01', 'en' => 'TAX ADVISORY', 'title' => '税務顧問', 'img' => 'img_svc_tax',
		'cap' => '巡回監査・打ち合わせ風景の写真', 'reverse' => false,
		'desc' => '毎月の巡回監査と月次決算をベースに、数字をタイムリーに経営へ届けます。申告のための会計ではなく、判断のための会計を。',
		'items' => array( '法人税・所得税・消費税の申告', '月次巡回監査・月次決算の早期化', '節税対策・タックスプランニング', '税務調査の立会い・事前対策' ),
	),
	array(
		'num' => '02', 'en' => 'STARTUP SUPPORT', 'title' => '創業・起業支援', 'img' => 'img_svc_startup',
		'cap' => '創業・スタートアップのイメージ写真', 'reverse' => true,
		'desc' => '「いい事業計画」は、最初の資金調達を変えます。会社設立から創業融資まで、最初の一歩を確かな数字で支えます。',
		'items' => array( '会社設立・各種届出のサポート', '創業融資・補助金の申請支援', '事業計画書・資金計画の策定', '開業後の経理体制づくり' ),
	),
	array(
		'num' => '03', 'en' => 'CLOUD ACCOUNTING', 'title' => 'クラウド会計導入支援', 'img' => 'img_svc_cloud',
		'cap' => 'クラウド会計・PC操作のイメージ写真', 'reverse' => false,
		'desc' => '経理の自動化は、目的ではなく手段。バックオフィスの仕組みを再設計し、本業に集中できる体制をつくります。',
		'items' => array( 'クラウド会計ソフトの選定・初期設定', '経理フローの自動化・ペーパーレス化', '請求・経費精算ツールとの連携設計', '操作レクチャー・運用定着サポート' ),
	),
	array(
		'num' => '04', 'en' => 'MANAGEMENT SUPPORT', 'title' => '経営・財務支援', 'img' => 'img_svc_mgmt',
		'cap' => '経営会議・資料のイメージ写真', 'reverse' => true,
		'desc' => '月次の数字を“使える言葉”に翻訳し、資金繰りから経営計画まで、意思決定のすぐ隣で伴走します。',
		'items' => array( '資金繰り表の作成・キャッシュフロー改善', '経営計画の策定・予実管理', '金融機関との折衝サポート', '事業承継・M&Aの初期相談' ),
	),
);

$flow = array(
	array( '01', 'お問い合わせ', 'フォームまたはお電話にてご連絡ください。2営業日以内にご返信いたします。' ),
	array( '02', '初回面談(無料)', '現状の課題やご要望を丁寧に伺います。オンラインでの面談にも対応しています。' ),
	array( '03', 'ご提案・お見積り', '課題に合わせて最適なサポート内容と料金プランをご提案いたします。' ),
	array( '04', 'ご契約・サポート開始', '専任の担当者がつき、貴社の数字と経営に継続的に伴走します。' ),
);
?>

<!-- PAGE HERO -->
<section style="background:linear-gradient(150deg,#0B1A33,#0E1F3D);padding:clamp(150px,17vw,210px) 0 clamp(56px,7vw,90px);position:relative;overflow:hidden;">
  <div style="position:absolute;right:-1vw;bottom:-4vw;font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(90px,16vw,230px);line-height:1;color:rgba(255,255,255,0.04);pointer-events:none;user-select:none;">SERVICES</div>
  <div style="position:relative;max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);">
    <div style="display:flex;align-items:center;gap:10px;font-size:11px;letter-spacing:0.18em;color:rgba(255,255,255,0.45);">
      <a class="az-crumb" href="<?php echo esc_url( $home ); ?>" style="color:rgba(255,255,255,0.45);cursor:pointer;text-decoration:none;transition:color 0.4s;">TOP</a>
      <span>—</span>
      <span style="color:#C9A86A;">事業内容</span>
    </div>
    <div data-reveal style="font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(52px,8.5vw,116px);line-height:1.05;color:#F7F6F2;margin-top:20px;">SERVICES</div>
    <div data-reveal data-reveal-delay="150" style="display:flex;align-items:center;gap:16px;margin-top:16px;">
      <span style="width:40px;height:1px;background:#C9A86A;"></span>
      <span style="font-size:14px;letter-spacing:0.22em;color:rgba(255,255,255,0.72);">事業内容</span>
    </div>
  </div>
</section>

<!-- SERVICE BLOCKS -->
<section style="background:#F7F6F2;padding:clamp(80px,11vw,150px) 0;">
  <div style="max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);display:flex;flex-direction:column;gap:clamp(80px,11vw,150px);">
    <?php foreach ( $services as $sv ) :
      $dir   = $sv['reverse'] ? 'row-reverse' : 'row';
      $frame = $sv['reverse'] ? 'top:20px;left:-20px;right:20px;bottom:-20px;' : 'top:20px;left:20px;right:-20px;bottom:-20px;';
    ?>
      <div data-reveal style="display:flex;flex-wrap:wrap;flex-direction:<?php echo $dir; ?>;align-items:center;gap:clamp(36px,6vw,90px);">
        <div style="flex:1 1 420px;min-width:min(100%,280px);position:relative;">
          <div style="position:absolute;<?php echo $frame; ?>border:1px solid rgba(201,168,106,0.5);pointer-events:none;"></div>
          <?php az_image( $sv['img'], $sv['cap'], 'position:relative;display:block;width:100%;height:clamp(280px,30vw,400px);' ); ?>
        </div>
        <div style="flex:1 1 420px;min-width:min(100%,280px);">
          <div style="display:flex;align-items:center;gap:16px;">
            <span style="font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(30px,3vw,42px);color:#C9A86A;line-height:1;"><?php echo esc_html( $sv['num'] ); ?></span>
            <span style="width:36px;height:1px;background:#C9A86A;"></span>
            <span style="font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.26em;color:#9AA2B5;"><?php echo esc_html( $sv['en'] ); ?></span>
          </div>
          <h3 style="margin:22px 0 0;font-size:clamp(24px,2.7vw,34px);font-weight:500;letter-spacing:0.07em;color:#1B2536;"><?php echo esc_html( $sv['title'] ); ?></h3>
          <p style="margin:22px 0 0;font-size:14.5px;line-height:2.3;letter-spacing:0.05em;color:#444F63;"><?php echo esc_html( $sv['desc'] ); ?></p>
          <div style="margin-top:28px;display:flex;flex-direction:column;">
            <?php foreach ( $sv['items'] as $i => $it ) :
              $last = ( count( $sv['items'] ) - 1 ) === $i;
            ?>
              <div style="display:flex;align-items:center;gap:14px;padding:14px 0;border-top:1px solid #E4E0D5;<?php echo $last ? 'border-bottom:1px solid #E4E0D5;' : ''; ?>"><span style="width:6px;height:6px;background:#C9A86A;transform:rotate(45deg);flex-shrink:0;"></span><span style="font-size:14px;letter-spacing:0.05em;color:#3A4458;"><?php echo esc_html( $it ); ?></span></div>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</section>

<!-- FLOW -->
<section style="background:#FFFFFF;padding:clamp(90px,12vw,160px) 0;">
  <div style="max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);">
    <div data-reveal>
      <div style="display:flex;align-items:center;gap:16px;">
        <span style="font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.32em;color:#C9A86A;">FLOW</span>
        <span style="width:44px;height:1px;background:#C9A86A;"></span>
      </div>
      <h2 style="margin:clamp(20px,2.6vw,34px) 0 0;font-size:clamp(26px,3.1vw,42px);font-weight:500;letter-spacing:0.06em;color:#1B2536;">ご相談の流れ</h2>
    </div>
    <div data-reveal data-reveal-delay="150" style="margin-top:clamp(40px,5vw,72px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr));">
      <?php foreach ( $flow as $i => $st ) :
        $last = ( count( $flow ) - 1 ) === $i;
      ?>
        <div style="border-left:1px solid #E4E0D5;<?php echo $last ? 'border-right:1px solid #E4E0D5;' : ''; ?>padding:8px 28px;display:flex;flex-direction:column;gap:18px;margin-bottom:24px;">
          <span style="font-family:'Jost',sans-serif;font-size:12px;letter-spacing:0.28em;color:#C9A86A;">STEP <?php echo esc_html( $st[0] ); ?></span>
          <h4 style="margin:0;font-size:18px;font-weight:500;letter-spacing:0.08em;color:#1B2536;"><?php echo esc_html( $st[1] ); ?></h4>
          <p style="margin:0;font-size:13.5px;line-height:2.1;letter-spacing:0.04em;color:#69748A;"><?php echo esc_html( $st[2] ); ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php get_footer(); ?>
