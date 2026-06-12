<?php
/**
 * Footer — CTA band + site footer.
 *
 * @package azusa
 */
$tel     = az_opt( 'az_tel', '03-1234-5678' );
$hours   = az_opt( 'az_hours', '平日 9:00–18:00' );
$zip     = az_opt( 'az_zip', '150-0002' );
$address = az_opt( 'az_address', '東京都渋谷区渋谷2-X-X 梓ビル 5F' );
?>
</main>

<?php if ( ! is_page( 'contact' ) ) : ?>
<!-- ============ CTA BAND ============ -->
<section style="background:#081426;padding:clamp(90px,12vw,150px) 0;position:relative;overflow:hidden;">
  <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(90px,17vw,250px);line-height:1;color:rgba(255,255,255,0.03);pointer-events:none;user-select:none;white-space:nowrap;">CONTACT</div>
  <div data-reveal style="position:relative;max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);display:flex;flex-direction:column;align-items:center;text-align:center;gap:26px;">
    <div style="display:flex;align-items:center;gap:16px;">
      <span style="width:36px;height:1px;background:#C9A86A;"></span>
      <span style="font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.34em;color:#C9A86A;">CONTACT</span>
      <span style="width:36px;height:1px;background:#C9A86A;"></span>
    </div>
    <h2 style="margin:0;font-size:clamp(25px,3.2vw,44px);font-weight:500;line-height:1.7;letter-spacing:0.06em;color:#F7F6F2;">まずは、お気軽にご相談ください。</h2>
    <p style="margin:0;font-size:14px;line-height:2.2;letter-spacing:0.06em;color:rgba(255,255,255,0.6);">初回のご相談は無料です。オンラインでの面談にも対応しています。</p>
    <a class="az-btn-gold" href="<?php echo esc_url( az_contact_url() ); ?>" style="margin-top:12px;background:#C9A86A;color:#0E1F3D;padding:18px 52px;font-size:13.5px;font-weight:700;letter-spacing:0.2em;cursor:pointer;text-decoration:none;transition:background 0.4s;">お問い合わせはこちら</a>
    <span style="font-family:'Jost',sans-serif;font-size:12px;letter-spacing:0.18em;color:rgba(255,255,255,0.45);">TEL <?php echo esc_html( $tel ); ?>｜<?php echo esc_html( $hours ); ?></span>
  </div>
</section>
<?php endif; ?>

<!-- ============ FOOTER ============ -->
<footer style="background:#060F1D;padding:clamp(60px,8vw,96px) 0 36px;">
  <div style="max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);">
    <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:clamp(40px,6vw,80px);">
      <div style="display:flex;flex-direction:column;gap:24px;">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" style="display:flex;align-items:center;gap:13px;cursor:pointer;text-decoration:none;">
          <span style="width:10px;height:10px;background:#C9A86A;transform:rotate(45deg);flex-shrink:0;"></span>
          <span style="display:flex;flex-direction:column;gap:3px;line-height:1.2;">
            <span style="color:#FFFFFF;font-size:16px;font-weight:700;letter-spacing:0.14em;">あずさ会計事務所</span>
            <span style="font-family:'Jost',sans-serif;font-size:8.5px;letter-spacing:0.32em;color:rgba(255,255,255,0.5);">AZUSA ACCOUNTING OFFICE</span>
          </span>
        </a>
        <p style="margin:0;font-size:12.5px;line-height:2.2;letter-spacing:0.06em;color:rgba(255,255,255,0.55);">〒<?php echo esc_html( $zip ); ?> <?php echo esc_html( $address ); ?><br>TEL <?php echo esc_html( $tel ); ?>｜<?php echo esc_html( $hours ); ?></p>
      </div>
      <nav style="display:flex;flex-direction:column;gap:4px;min-width:200px;">
        <?php foreach ( az_footer_nav() as $item ) : ?>
          <a class="az-foot-link" href="<?php echo esc_url( az_nav_url( $item['slug'] ) ); ?>" style="display:flex;align-items:baseline;gap:16px;padding:11px 0;cursor:pointer;text-decoration:none;">
            <span style="font-family:'Jost',sans-serif;font-size:9px;letter-spacing:0.28em;color:rgba(201,168,106,0.8);min-width:76px;"><?php echo esc_html( $item['en'] ); ?></span>
            <span class="az-foot-link__label" style="color:rgba(255,255,255,0.72);font-size:13px;letter-spacing:0.12em;transition:color 0.4s;"><?php echo esc_html( $item['label'] ); ?></span>
          </a>
        <?php endforeach; ?>
      </nav>
    </div>
    <div style="margin-top:clamp(48px,6vw,72px);padding-top:26px;border-top:1px solid rgba(255,255,255,0.1);display:flex;flex-wrap:wrap;justify-content:space-between;gap:16px;">
      <span style="font-family:'Jost',sans-serif;font-size:10px;letter-spacing:0.26em;color:rgba(255,255,255,0.4);">© <?php echo esc_html( date( 'Y' ) ); ?> AZUSA ACCOUNTING OFFICE</span>
      <span style="font-family:'Jost',sans-serif;font-size:10px;letter-spacing:0.26em;color:rgba(255,255,255,0.3);">SHIBUYA, TOKYO — TAX &amp; ACCOUNTING</span>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
