<?php
/**
 * AZUSA theme functions — あずさ会計事務所
 *
 * @package azusa
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'AZ_VERSION', '1.0.0' );

/* ---------------------------------------------------------
 * Theme setup
 * ------------------------------------------------------- */
function az_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	register_nav_menus( array( 'primary' => 'グローバルナビゲーション' ) );
}
add_action( 'after_setup_theme', 'az_setup' );

/* ---------------------------------------------------------
 * 提案用モックサイトのため、WP側の表示設定に依存せず
 * 常にnoindexを出力する（ロリポップでは.htaccessのヘッダーが
 * PHP応答に乗らないため、テーマ側で強制する）
 * ------------------------------------------------------- */
function az_force_noindex( $robots ) {
	$robots['noindex']  = true;
	$robots['nofollow'] = true;
	return $robots;
}
add_filter( 'wp_robots', 'az_force_noindex' );

/* ---------------------------------------------------------
 * Assets
 * ------------------------------------------------------- */
function az_assets() {
	// Google Fonts — Zen Kaku Gothic New（和文） + Jost（欧文ラベル）。
	wp_enqueue_style(
		'az-fonts',
		'https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700&family=Jost:wght@200;300;400;500&display=swap',
		array(),
		null
	);
	wp_enqueue_style( 'az-style', get_stylesheet_uri(), array(), AZ_VERSION );
	wp_enqueue_script( 'az-main', get_template_directory_uri() . '/assets/main.js', array(), AZ_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'az_assets' );

/** Preconnect to the Google Fonts hosts. */
function az_resource_hints( $hints, $relation ) {
	if ( 'preconnect' === $relation ) {
		$hints[] = array( 'href' => 'https://fonts.googleapis.com' );
		$hints[] = array( 'href' => 'https://fonts.gstatic.com', 'crossorigin' );
	}
	return $hints;
}
add_filter( 'wp_resource_hints', 'az_resource_hints', 10, 2 );

/** Mark <html> as JS-enabled so reveal animations only hide when JS can show them. */
function az_html_js_class() {
	echo "<script>document.documentElement.className+=' az-js';</script>\n";
}
add_action( 'wp_head', 'az_html_js_class', 0 );

/* ---------------------------------------------------------
 * Head: meta description / OGP
 * ------------------------------------------------------- */
function az_head_meta() {
	echo '<meta name="theme-color" content="#0E1F3D">' . "\n";

	if ( is_front_page() ) {
		$desc = 'あずさ会計事務所は、東京・渋谷を拠点とする税理士事務所です。税務顧問・創業支援・クラウド会計導入・経営財務支援まで、月次の数字を経営の意思決定につなげる「攻めの会計」で中小企業に伴走します。';
	} elseif ( is_page() ) {
		$desc = get_post_meta( get_the_ID(), '_az_desc', true );
		if ( ! $desc ) {
			$desc = get_bloginfo( 'description' );
		}
	} else {
		$desc = get_bloginfo( 'description' );
	}
	$desc = trim( preg_replace( '/\s+/u', ' ', (string) $desc ) );
	if ( '' !== $desc ) {
		echo '<meta name="description" content="' . esc_attr( $desc ) . '">' . "\n";
	}

	$title = wp_get_document_title();
	$url   = is_front_page() ? home_url( '/' ) : get_permalink();
	echo '<meta property="og:type" content="' . ( is_front_page() ? 'website' : 'article' ) . '">' . "\n";
	echo '<meta property="og:site_name" content="' . esc_attr( get_bloginfo( 'name' ) ) . '">' . "\n";
	echo '<meta property="og:locale" content="ja_JP">' . "\n";
	echo '<meta property="og:title" content="' . esc_attr( $title ) . '">' . "\n";
	echo '<meta property="og:description" content="' . esc_attr( $desc ) . '">' . "\n";
	echo '<meta property="og:url" content="' . esc_url( $url ) . '">' . "\n";
	echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
}
add_action( 'wp_head', 'az_head_meta', 2 );

/* ---------------------------------------------------------
 * Drop classic-theme bloat
 * ------------------------------------------------------- */
function az_dequeue_bloat() {
	foreach ( array( 'wp-block-library', 'wp-block-library-theme', 'global-styles', 'classic-theme-styles' ) as $handle ) {
		wp_dequeue_style( $handle );
		wp_deregister_style( $handle );
	}
}
add_action( 'wp_enqueue_scripts', 'az_dequeue_bloat', 100 );
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'wp_head', 'wp_generator' );

require get_template_directory() . '/inc/customizer.php';
require get_template_directory() . '/inc/seed.php';

/* ---------------------------------------------------------
 * Helpers
 * ------------------------------------------------------- */

/** Theme option (Customizer) getter with default fallback. */
function az_opt( $key, $default = '' ) {
	$val = get_theme_mod( $key, $default );
	return ( '' === $val || false === $val || null === $val ) ? $default : $val;
}

/** Default generated photos bundled with the theme. */
function az_default_images() {
	$base = get_template_directory_uri() . '/assets/images/';
	return array(
		'img_top_hero'         => $base . 'azusa-top-hero.webp',
		'img_top_portrait'     => $base . 'azusa-representative.webp',
		'img_message_portrait' => $base . 'azusa-representative.webp',
		'img_company_office'   => $base . 'azusa-office-entrance.webp',
		'img_svc_tax'          => $base . 'azusa-service-tax.webp',
		'img_svc_startup'      => $base . 'azusa-service-startup.webp',
		'img_svc_cloud'        => $base . 'azusa-service-cloud.webp',
		'img_svc_mgmt'         => $base . 'azusa-service-management.webp',
	);
}

/** Permalink of a page by slug, with a sensible fallback. */
function az_page_url( $slug ) {
	$page = get_page_by_path( $slug );
	return $page ? get_permalink( $page ) : home_url( '/' . $slug . '/' );
}

/** Contact page URL. */
function az_contact_url() {
	return az_page_url( 'contact' );
}

/** Is the given logical page currently shown? ('top' = front page) */
function az_is_current( $slug ) {
	if ( 'top' === $slug ) {
		return is_front_page();
	}
	return is_page( $slug );
}

/** Navigation definition (shared by header / footer / mobile menu). */
function az_nav_items() {
	return array(
		array( 'slug' => 'services', 'label' => '事業内容', 'en' => 'SERVICES' ),
		array( 'slug' => 'company',  'label' => '会社概要', 'en' => 'COMPANY' ),
		array( 'slug' => 'greeting', 'label' => '代表挨拶', 'en' => 'MESSAGE' ),
	);
}

/** Full nav incl. TOP + CONTACT (footer / mobile menu). */
function az_footer_nav() {
	$items = array( array( 'slug' => 'top', 'label' => 'TOP', 'en' => 'TOP' ) );
	$items = array_merge( $items, az_nav_items() );
	$items[] = array( 'slug' => 'contact', 'label' => 'お問い合わせ', 'en' => 'CONTACT' );
	return $items;
}

/** URL for a logical nav slug. */
function az_nav_url( $slug ) {
	return ( 'top' === $slug ) ? home_url( '/' ) : az_page_url( $slug );
}

/**
 * Render a photo box. Uses the Customizer image for $key when set,
 * otherwise falls back to bundled generated photos, then a branded placeholder.
 *
 * @param string $key     Customizer option key (e.g. 'img_top_hero').
 * @param string $caption Placeholder caption / img alt.
 * @param string $style   Inline style for the box (size/position).
 * @param bool   $light   Light placeholder variant.
 */
function az_image( $key, $caption, $style = '', $light = false ) {
	$defaults = az_default_images();
	$url      = az_opt( $key, isset( $defaults[ $key ] ) ? $defaults[ $key ] : '' );
	if ( $url ) {
		$loading       = ( 'img_top_hero' === $key ) ? 'eager' : 'lazy';
		$fetchpriority = ( 'img_top_hero' === $key ) ? ' fetchpriority="high"' : '';
		echo '<div class="az-photo" style="overflow:hidden;' . esc_attr( $style ) . '">'
			. '<img class="az-img-cover" src="' . esc_url( $url ) . '" alt="' . esc_attr( $caption ) . '" loading="' . esc_attr( $loading ) . '" decoding="async"' . $fetchpriority . '></div>';
		return;
	}
	$cls = 'az-imgph' . ( $light ? ' az-imgph--light' : '' );
	echo '<div class="' . esc_attr( $cls ) . '" style="' . esc_attr( $style ) . '"><span>' . esc_html( $caption ) . '</span></div>';
}

/** Render the access map: Google Maps embed (no API key) for the office area. */
function az_map( $style = '' ) {
	$q   = rawurlencode( az_opt( 'az_map_q', '東京都渋谷区渋谷2丁目' ) );
	$src = 'https://maps.google.com/maps?q=' . $q . '&z=16&output=embed';
	echo '<div style="overflow:hidden;' . esc_attr( $style ) . '">'
		. '<iframe title="あずさ会計事務所 地図" src="' . esc_url( $src ) . '" '
		. 'style="width:100%;height:100%;border:0;display:block;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>';
}
