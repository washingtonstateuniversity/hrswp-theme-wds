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
	function (): void {
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
	function (): void {
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
 * Enqueues per-block stylesheets.
 *
 * Looks for `block.json` files in the `build` directory and subdirectories
 * and parses them for an `extraStyle` property. Uses styles defined there
 * to enqueue them on a per-block basis either internally or externally.
 * Can also load styles for patterns given a block defined in the `block.json`
 * metadata file `blockDependency` property.
 *
 * @since 0.5.0
 *
 * @see wp_enqueue_block_style
 * @return void
 */
add_action(
	'after_setup_theme',
	function (): void {
		$metadata_files = glob( get_theme_file_path( 'build' ) . '/**/**/block.json' );

		foreach ( $metadata_files as $metadata_file ) {
			$metadata = wp_json_file_decode( $metadata_file, array( 'associative' => true ) );

			if ( ! is_array( $metadata ) || empty( $metadata['name'] ) || empty( $metadata['extraStyle'] ) ) {
				continue;
			}

			foreach ( $metadata['extraStyle'] as $extra_style ) {
				$style_file = remove_block_asset_path_prefix( $extra_style['source'] );
				$style_path = dirname( explode( 'build', $metadata_file )[1] );
				$block_dep  = $metadata['blockDependency'] ?? $metadata['name'];

				$block_style_args = array(
					'handle' => str_replace( '/', '-', $metadata['name'] ) . '-extra',
					'src'    => get_theme_file_uri( "build{$style_path}/{$style_file}" ),
				);

				if ( false !== $extra_style['internal'] ) {
					$block_style_args['path'] = wp_normalize_path( realpath( dirname( $metadata_file ) . '/' . $style_file ) );
				}

				wp_enqueue_block_style( $block_dep, $block_style_args );
			}
		}
	}
);

add_action(
	'wp_enqueue_scripts',
	/**
	 * Deregisters selected WP Core block styles and scripts.
	 *
	 * @since 0.5.0
	 *
	 * @see wp_dequeue_style
	 * @see wp_deregister_script
	 * @return void
	 */
	function (): void {
		wp_dequeue_style( 'wp-block-navigation' );
	}
);
