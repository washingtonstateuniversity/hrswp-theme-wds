<?php
/**
 * Loads script and style assets.
 *
 * @package HRSWP_ThemeWDS
 * @since 0.4.0
 */

namespace HRSWP\Theme\WDS\Inc\AssetLoader;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the editor-only scripts and styles.
 *
 * @since 0.4.0
 *
 * @see wp_register_script
 * @see wp_register_style
 * @return void
 */
add_action(
	'admin_enqueue_scripts',
	function(): void {
		$asset_file = include get_template_directory() . '/build/index.asset.php';

		wp_register_script(
			'hrswds-blocks-script',
			get_template_directory_uri() . '/build/index.js',
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);
	}
);

/**
 * Registers scripts and styles to load on both the frontend and backend.
 *
 * @since 0.5.0
 *
 * @todo If the global stylesheet stays small, consider inlining it instead
 * like is done with the WP global stylesheet. @see https://developer.wordpress.org/reference/functions/wp_enqueue_global_styles_css_custom_properties/
 *
 * @return void
 */
add_action(
	'enqueue_block_assets',
	function(): void {
		$asset_file = include get_template_directory() . '/build/index.asset.php';

		wp_enqueue_style(
			'hrswds-global-style',
			get_template_directory_uri() . '/build/style-index.css',
			array(),
			$asset_file['version']
		);
	}
);
