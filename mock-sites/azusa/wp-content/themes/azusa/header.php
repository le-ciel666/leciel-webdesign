<?php
/**
 * Header — fixed nav + mobile menu.
 *
 * @package azusa
 */
?><!DOCTYPE html>
<html lang="ja">
<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VEMHY2G58C"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-VEMHY2G58C');
</script>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<?php
$tel  = az_opt( 'az_tel', '03-1234-5678' );
$recep = az_opt( 'az_reception', '受付時間｜平日 9:00–18:00' );
?>

<!-- ============ HEADER ============ -->
<header class="az-header" style="position:fixed;top:0;left:0;right:0;z-index:80;">
  <div style="max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);height:84px;display:flex;align-items:center;justify-content:space-between;gap:24px;">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" style="display:flex;align-items:center;gap:13px;cursor:pointer;text-decoration:none;">
      <span style="width:10px;height:10px;background:#C9A86A;transform:rotate(45deg);flex-shrink:0;"></span>
      <span style="display:flex;flex-direction:column;gap:3px;line-height:1.2;">
        <span style="color:#FFFFFF;font-size:17px;font-weight:700;letter-spacing:0.14em;">あずさ会計事務所</span>
        <span style="font-family:'Jost',sans-serif;font-size:8.5px;font-weight:400;letter-spacing:0.32em;color:rgba(255,255,255,0.55);">AZUSA ACCOUNTING OFFICE</span>
      </span>
    </a>
    <nav class="az-desktop-nav" style="display:flex;align-items:center;gap:clamp(24px,3vw,40px);">
      <?php foreach ( az_nav_items() as $item ) : ?>
        <a class="az-nav-item" href="<?php echo esc_url( az_nav_url( $item['slug'] ) ); ?>" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;text-decoration:none;">
          <span class="az-nav-item__label" style="color:#FFFFFF;font-size:13.5px;font-weight:500;letter-spacing:0.14em;transition:color 0.4s;"><?php echo esc_html( $item['label'] ); ?></span>
          <span style="width:4px;height:4px;border-radius:50%;background:#C9A86A;opacity:<?php echo az_is_current( $item['slug'] ) ? '1' : '0'; ?>;transition:opacity 0.4s;"></span>
        </a>
      <?php endforeach; ?>
      <a class="az-cta-outline" href="<?php echo esc_url( az_contact_url() ); ?>" style="border:1px solid rgba(201,168,106,0.75);color:#C9A86A;padding:11px 24px;font-size:12.5px;font-weight:500;letter-spacing:0.18em;cursor:pointer;text-decoration:none;transition:background 0.4s,color 0.4s;">お問い合わせ</a>
    </nav>
    <a class="az-menu-btn" href="#" data-az-menu-open style="font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.3em;color:#FFFFFF;border:1px solid rgba(255,255,255,0.4);padding:11px 18px;cursor:pointer;text-decoration:none;align-items:center;">MENU</a>
  </div>
</header>

<!-- ============ MOBILE MENU ============ -->
<div class="az-mobile-menu" style="position:fixed;inset:0;z-index:90;background:rgba(7,15,29,0.97);flex-direction:column;padding:24px clamp(20px,5vw,48px) 40px;overflow:auto;">
  <div style="display:flex;align-items:center;justify-content:space-between;height:60px;">
    <span style="display:flex;align-items:center;gap:12px;">
      <span style="width:9px;height:9px;background:#C9A86A;transform:rotate(45deg);"></span>
      <span style="color:#FFFFFF;font-size:15px;font-weight:700;letter-spacing:0.14em;">あずさ会計事務所</span>
    </span>
    <a href="#" data-az-menu-close style="font-family:'Jost',sans-serif;font-size:11px;letter-spacing:0.3em;color:#C9A86A;border:1px solid rgba(201,168,106,0.6);padding:11px 18px;cursor:pointer;text-decoration:none;">CLOSE</a>
  </div>
  <nav style="display:flex;flex-direction:column;margin-top:44px;">
    <?php foreach ( az_footer_nav() as $item ) : ?>
      <a href="<?php echo esc_url( az_nav_url( $item['slug'] ) ); ?>" style="display:flex;align-items:baseline;gap:18px;padding:20px 0;border-bottom:1px solid rgba(255,255,255,0.09);cursor:pointer;text-decoration:none;">
        <span style="font-family:'Jost',sans-serif;font-size:10px;letter-spacing:0.3em;color:#C9A86A;min-width:84px;"><?php echo esc_html( $item['en'] ); ?></span>
        <span style="color:#F7F6F2;font-size:19px;font-weight:500;letter-spacing:0.12em;"><?php echo esc_html( $item['label'] ); ?></span>
      </a>
    <?php endforeach; ?>
  </nav>
  <div style="margin-top:auto;padding-top:48px;color:rgba(255,255,255,0.5);font-size:12px;letter-spacing:0.1em;line-height:2;">
    TEL <?php echo esc_html( $tel ); ?><br><?php echo esc_html( $recep ); ?>
  </div>
</div>

<main>
