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

		wp_enqueue_style(
			'hrswds-global-editor-style',
			get_template_directory_uri() . '/build/index.css',
			array(),
			$asset_file['version'],
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

/**
 * Enqueues stylesheets for specific blocks.
 *
 * Given a stylesheet in `build/blocks/BLOCK_NAME/block.css`, this
 * will use `wp_enqueue_block_style` to either enqueue it or load
 * it internally on any page with the given block.
 *
 * @since 0.5.0
 *
 * @see wp_enqueue_block_style
 * @return void
 */
add_action(
	'after_setup_theme',
	function(): void {
		$blocks = array(
			array(
				'namespace' => 'core',
				'name'      => 'list',
				'internal'  => true,
			),
			array(
				'namespace' => 'core',
				'name'      => 'post-author',
				'internal'  => true,
			),
			array(
				'namespace' => 'core',
				'name'      => 'quote',
				'internal'  => true,
			),
			array(
				'namespace' => 'core',
				'name'      => 'table',
				'internal'  => false,
			),
			array(
				'namespace' => 'gravityforms',
				'name'      => 'form',
				'internal'  => false,
			),
			array(
				'namespace' => 'hrswds',
				'name'      => 'svg-selector',
				'internal'  => true,
			),
		);

		foreach ( $blocks as $block ) {
			$args = array(
				'handle' => 'hrswds-' . $block['name'],
				'src'    => get_theme_file_uri( 'build/block-library/' . $block['name'] . '/block.css' ),
			);

			if ( false !== $block['internal'] ) {
				$args['path'] = get_theme_file_path( 'build/block-library/' . $block['name'] . '/block.css' );
			}

			wp_enqueue_block_style( $block['namespace'] . '/' . $block['name'], $args );
		}
	}
);
