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
 * Fires when enqueuing scripts for all admin pages.
 *
 * `admin_enqueue_scripts` is the proper hook to use when enqueuing scripts
 * and styles that are meant to be used in the administration panel. Despite
 * the name, it is used for enqueuing both scripts and styles.
 *
 * @see admin_enqueue_scripts
 */
add_action(
	'admin_enqueue_scripts',
	/**
	 * Registers the editor-only scripts and styles.
	 *
	 * @since 0.4.0
	 *
	 * @see wp_register_script
	 * @see wp_register_style
	 * @return void
	 */
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
 * Fires after enqueuing block assets for both editor and front-end.
 *
 * From WordPress version 6.3 onwards, styles and scripts added using
 * `enqueue_block_assets` will be enqueued for the editor iframe.
 *
 * @see enqueue_block_assets
 */
add_action(
	'enqueue_block_assets',
	/**
	 * Registers scripts and styles to load on both the frontend and backend.
	 *
	 * Enqueues the shared frontend/backend styles.
	 *
	 * @since 0.5.0
	 *
	 * @todo If the global stylesheet stays small, consider inlining it instead
	 * like is done with the WP global stylesheet. @see https://developer.wordpress.org/reference/functions/wp_enqueue_global_styles_css_custom_properties/
	 *
	 * @see wp_enqueue_style
	 * @return void
	 */
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
 * Fires when scripts and styles are enqueued.
 *
 * `wp_enqueue_scripts` is for enqueuing scripts and styles on the front end.
 * Despite the name, it is used for enqueuing both scripts and styles.
 *
 * @see wp_enqueue_scripts
 */
add_action(
	'wp_enqueue_scripts',
	/**
	 * Registers and deregisters styles and scripts.
	 *
	 * @since 0.5.0
	 *
	 * @see wp_dequeue_style
	 * @see wp_deregister_script
	 * @return void
	 */
	function (): void {
		wp_dequeue_style( 'wp-block-navigation' );
		wp_dequeue_style( 'wp-block-post-terms' );
	}
);

/**
 * Filters the content of a single block.
 *
 * @see render_block
 */
add_filter(
	'render_block',
	/**
	 * Callback function to register and enqueue per-block scripts.
	 *
	 * @see wp_enqueue_script
	 *
	 * @param string $content When the callback is used for the render_block filter,
	 *                        the content needs to be returned so the function parameter
	 *                        is to ensure the content exists.
	 * @param array  $block   The full block, including name and attributes.
	 * @return string Block content.
	 */
	function ( $content, $block ) {
		$metadata_files = glob( get_theme_file_path( 'build' ) . '/**/**/block.json' );

		foreach ( $metadata_files as $metadata_file ) {
			$metadata = wp_json_file_decode( $metadata_file, array( 'associative' => true ) );

			if ( ! is_array( $metadata ) || empty( $metadata['name'] ) || empty( $metadata['frontendScript'] ) ) {
				continue;
			}

			if ( $metadata['name'] === $block['blockName'] ) {
				$script_file = remove_block_asset_path_prefix( $metadata['frontendScript'] );
				$script_path = dirname( explode( 'build', $metadata_file )[1] );
				$asset_file  = include get_template_directory() . "/build{$script_path}/frontend.asset.php";

				wp_enqueue_script(
					'hrswds-' . str_replace( '/', '-', $metadata['name'] ) . '-frontend',
					get_theme_file_uri( "build{$script_path}/{$script_file}" ),
					$asset_file['dependencies'],
					$asset_file['version'],
					array( 'strategy' => 'defer' )
				);
			}
		}

		return $content;
	},
	10,
	2
);

/**
 * Fires after the theme is loaded.
 *
 * @see after_setup_theme
 */
add_action(
	'after_setup_theme',
	/**
	 * Enqueues per-block stylesheets.
	 *
	 * Looks for `block.json` files in the `build` directory and subdirectories
	 * and parses them for an `extraStyle` property. Uses styles defined there
	 * to enqueue them on a per-block basis either internally or externally.
	 * Can also load styles for patterns given a block defined in the `block.json`
	 * metadata file `blockDependency` property. Because `wp_enqueue_block_style`
	 * hooks enqueuing internally to `enqueue_block_assets` this must be hooked
	 * on `after_setup_theme`.
	 *
	 * @since 0.5.0
	 *
	 * @see wp_enqueue_block_style
	 * @return void
	 */
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
