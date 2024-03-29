<?php
/**
 * Used to manage blocks used with the block editor.
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Inc\Blocks;

use HRSWP\Theme\WDS\Inc\Classes\Class_SVG_Icons;

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
		// Removes hover triggers from site navigation submenus.
		if ( 'core/navigation' === $block['blockName'] ) {
			$find = array(
				'data-wp-on--mouseenter="actions.openMenuOnHover"',
				'data-wp-on--mouseleave="actions.closeMenuOnHover"',
				'data-wp-on--focusout="actions.handleMenuFocusout"',
			);

			$block_content = str_replace( $find, '', $block_content );
		}

		// Adds ARIA attributes to the site navigation menu toggle.
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

		// Adds icons to heading links.
		if ( 'core/heading' === $block['blockName'] ) {
			$p = new \WP_HTML_Tag_Processor( $block_content );
			if ( $p->next_tag( 'a' ) ) {
				$icon = Class_SVG_Icons\SVG_Icons::get_svg( 'link', 18, 'heading-link-icon' );
				$p->add_class( 'has-inline-icon' );
				$block_content = $p->get_updated_html();
				$block_content = str_replace( '</a>', $icon . '</a>', $block_content );
			}
		}

		// Adds icons to figcaption elements.
		if ( 'core/image' === $block['blockName'] ) {
			$p = new \WP_HTML_Tag_Processor( $block_content );
			if ( $p->next_tag( 'figcaption' ) ) {
				$icon = Class_SVG_Icons\SVG_Icons::get_svg( 'camera', 20 );
				$p->add_class( 'has-inline-icon' );
				$block_content = $p->get_updated_html();
				$block_content = preg_replace( '/(<figcaption .*?>)/', '$1' . $icon, $block_content );
			}
		}

		// Adds decorator icon to quote block.
		if ( 'core/quote' === $block['blockName'] ) {
			$p = new \WP_HTML_Tag_Processor( $block_content );
			if ( $p->next_tag() ) {
				// Return early if it's the "plain" style.
				if ( str_contains( $p->get_attribute( 'class' ), 'is-style-plain' ) ) {
					return $block_content;
				}
				$icon = Class_SVG_Icons\SVG_Icons::get_svg( 'quote', 52 );
				$p->next_tag();
				$tag = '<' . strtolower( $p->get_tag() );

				$block_content = $p->get_updated_html();
				$block_content = str_replace( $tag, $icon . $tag, $block_content );
			}
		}

		// Adds decorator icon to post date block.
		if ( 'core/post-date' === $block['blockName'] ) {
			$icon = Class_SVG_Icons\SVG_Icons::get_svg( 'clock', 18 );

			$block_content = str_replace( '<time', $icon . '<time', $block_content );
		}

		return $block_content;
	},
	10,
	2
);
