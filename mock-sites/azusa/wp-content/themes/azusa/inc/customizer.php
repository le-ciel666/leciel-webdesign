<?php
/**
 * Customizer — 管理画面から更新できるサイト情報 / 写真。
 *
 * @package azusa
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function az_customize_register( $wp ) {

	/* ===== 事務所情報 ===== */
	$wp->add_section( 'az_info', array(
		'title'    => 'あずさ｜事務所情報',
		'priority' => 30,
	) );

	$texts = array(
		'az_tel'       => array( 'TEL', '03-1234-5678' ),
		'az_fax'       => array( 'FAX', '03-1234-5679' ),
		'az_zip'       => array( '郵便番号', '150-0002' ),
		'az_address'   => array( '住所', '東京都渋谷区渋谷2-X-X 梓ビル 5F' ),
		'az_hours'     => array( '営業時間', '平日 9:00–18:00' ),
		'az_reception' => array( '受付時間（表示用）', '受付時間｜平日 9:00–18:00' ),
		'az_map_q'     => array( '地図の検索キーワード', '東京都渋谷区渋谷2丁目' ),
	);
	foreach ( $texts as $key => $def ) {
		$wp->add_setting( $key, array(
			'default'           => $def[1],
			'sanitize_callback' => 'sanitize_text_field',
			'transport'         => 'refresh',
		) );
		$wp->add_control( $key, array(
			'label'   => $def[0],
			'section' => 'az_info',
			'type'    => 'text',
		) );
	}

	/* ===== 写真 ===== */
	$wp->add_section( 'az_photos', array(
		'title'    => 'あずさ｜写真',
		'priority' => 31,
	) );

	$images = array(
		'img_top_hero'         => 'TOP メインビジュアル',
		'img_top_portrait'     => 'TOP 代表者ポートレート',
		'img_message_portrait' => '代表挨拶 ポートレート',
		'img_company_office'   => '会社概要 オフィス外観',
		'img_svc_tax'          => '事業内容 税務顧問',
		'img_svc_startup'      => '事業内容 創業・起業支援',
		'img_svc_cloud'        => '事業内容 クラウド会計',
		'img_svc_mgmt'         => '事業内容 経営・財務支援',
	);
	$default_images = function_exists( 'az_default_images' ) ? az_default_images() : array();
	foreach ( $images as $key => $label ) {
		$wp->add_setting( $key, array(
			'default'           => isset( $default_images[ $key ] ) ? $default_images[ $key ] : '',
			'sanitize_callback' => 'esc_url_raw',
			'transport'         => 'refresh',
		) );
		$wp->add_control( new WP_Customize_Image_Control( $wp, $key, array(
			'label'   => $label,
			'section' => 'az_photos',
		) ) );
	}
}
add_action( 'customize_register', 'az_customize_register' );
