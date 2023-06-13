<?php
/**
 * Used to set up all blocks used with the block editor.
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Inc\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
* Registers blocks.
*
* @since 0.4.0
*
* @see register_block_type
* @return void
*/
add_action(
	'init',
	function(): void {
		$block_folders = array(
			'svg-selector',
		);
		foreach ( $block_folders as $block_folder ) {
			register_block_type(
				get_template_directory() . '/build/block-library/' . $block_folder
			);
		}
	}
);

