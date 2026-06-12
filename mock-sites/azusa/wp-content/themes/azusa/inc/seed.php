<?php
/**
 * Content seeder (theme-embedded).
 *
 * Works WITHOUT wp-cli, so it also runs on shared hosting (Lolipop):
 *  - auto-runs once on theme activation (after_switch_theme)
 *  - can be re-run from 管理画面 → ツール → あずさ 初期データ
 *  - setup.sh calls az_run_seed() via `wp eval`
 *
 * @package azusa
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Create or update a page by slug. */
function az_seed_page( $slug, $title, $template = '', $desc = '', $content = '' ) {
	$existing = get_page_by_path( $slug );
	$args     = array(
		'post_title'   => $title,
		'post_name'    => $slug,
		'post_content' => $content,
		'post_status'  => 'publish',
		'post_type'    => 'page',
	);
	if ( $existing ) {
		$args['ID'] = $existing->ID;
		$id         = wp_update_post( $args );
	} else {
		$id = wp_insert_post( $args );
	}
	if ( $id && ! is_wp_error( $id ) ) {
		if ( $template ) {
			update_post_meta( $id, '_wp_page_template', $template );
		}
		if ( $desc ) {
			update_post_meta( $id, '_az_desc', $desc );
		}
	}
	return $id;
}

/** Provision all pages + static front page. Idempotent. */
function az_run_seed() {
	$home = az_seed_page( 'home', 'ホーム', '', '', '' );

	az_seed_page(
		'services', '事業内容', 'page-services.php',
		'あずさ会計事務所の事業内容。税務顧問・創業/起業支援・クラウド会計導入支援・経営/財務支援の4つのサービスと、ご相談の流れをご紹介します。'
	);
	az_seed_page(
		'company', '会社概要', 'page-company.php',
		'あずさ会計事務所の会社概要。事務所概要・沿革・アクセス（東京都渋谷区渋谷）をご案内します。'
	);
	az_seed_page(
		'greeting', '代表挨拶', 'page-greeting.php',
		'代表税理士 梓 真一郎よりご挨拶。「経営のための会計」という想いと略歴をご紹介します。'
	);
	az_seed_page(
		'contact', 'お問い合わせ', 'page-contact.php',
		'あずさ会計事務所へのお問い合わせ。初回のご相談は無料、オンライン面談にも対応しています。'
	);

	if ( $home && ! is_wp_error( $home ) ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $home );
	}
	update_option( 'blogname', 'あずさ会計事務所' );
	if ( ! get_option( 'blogdescription' ) || 'Just another WordPress site' === get_option( 'blogdescription' ) ) {
		update_option( 'blogdescription', '東京・渋谷の税理士事務所｜税務顧問・創業支援・クラウド会計・経営支援' );
	}
}

/** Auto-run once on activation. */
function az_after_switch_theme() {
	az_run_seed();
	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'az_after_switch_theme' );

/* ---- 管理画面 → ツール → あずさ 初期データ（再実行用） ---- */
function az_tools_page() {
	add_management_page( 'あずさ 初期データ', 'あずさ 初期データ', 'manage_options', 'az-seed', 'az_tools_render' );
}
add_action( 'admin_menu', 'az_tools_page' );

function az_tools_render() {
	if ( isset( $_POST['az_seed_run'] ) && check_admin_referer( 'az_seed' ) ) {
		az_run_seed();
		flush_rewrite_rules();
		echo '<div class="notice notice-success"><p>初期データを再生成しました。</p></div>';
	}
	echo '<div class="wrap"><h1>あずさ 初期データ</h1>'
		. '<p>固定ページ（事業内容・会社概要・代表挨拶・お問い合わせ）とフロントページ設定を再生成します。</p>'
		. '<form method="post">';
	wp_nonce_field( 'az_seed' );
	echo '<p><button class="button button-primary" name="az_seed_run" value="1">初期データを再生成</button></p>'
		. '</form></div>';
}
