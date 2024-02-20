<?php
/**
 * Used to manage blocks used with the block editor.
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Inc\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Fires after WordPress has finished loading but before any headers are sent.
 *
 * @see https://developer.wordpress.org/reference/hooks/init/
 */
add_action(
	'init',
	/**
	 * Registers blocks.
	 *
	 * @since 0.4.0
	 *
	 * @see register_block_type
	 * @return void
	 */
	function (): void {
		$block_folders = array(
			'logo-lockup',
			'svg-selector',
		);
		foreach ( $block_folders as $block_folder ) {
			register_block_type(
				get_template_directory() . '/build/block-library/' . $block_folder
			);
		}
	}
);

/**
 * Filters the content of a single block.
 *
 * @see https://developer.wordpress.org/reference/hooks/render_block/
 */
add_filter(
	'render_block',
	/**
	 * Filters the Core navigation block to remove hover triggers.
	 *
	 * @since 0.6.0
	 *
	 * @see https://github.com/WordPress/gutenberg/tree/trunk/packages/interactivity/docs
	 *
	 * @param string   $block_content The block content.
	 * @param array    $block         The full block, including name and attributes.
	 * @param WP_Block $instance      The block instance.
	 */
	function ( string $block_content, array $block ): string {
		if ( 'core/navigation' === $block['blockName'] ) {
			$find = array(
				'data-wp-on--mouseenter="actions.openMenuOnHover"',
				'data-wp-on--mouseleave="actions.closeMenuOnHover"',
				'data-wp-on--focusout="actions.handleMenuFocusout"',
			);

			$block_content = str_replace( $find, '', $block_content );
		}

		if ( 'hrswds/svg-selector' === $block['blockName'] && isset( $block['attrs']['className'] ) ) {

			if ( 'wp-block-navigation__responsive-container-open' === $block['attrs']['className'] ) {
				$p = new \WP_HTML_Tag_Processor( $block_content );
				if ( $p->next_tag( 'button' ) ) {
					$p->add_class( 'open-site-navigation' );
					$p->set_attribute( 'title', 'Open site navigation' );
					$p->set_attribute( 'aria-haspopup', 'menu' );
					$p->set_attribute( 'aria-label', 'Open site navigation' );
					$p->set_attribute( 'aria-expanded', 'false' );
					$p->set_attribute( 'aria-controls', 'site-navigation-parent' );
				}

				$block_content = $p->get_updated_html();
			}
		}

		return $block_content;
	},
	10,
	2
);
