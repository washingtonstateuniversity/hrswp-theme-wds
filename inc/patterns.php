<?php
/**
 * Used to manage patterns used with the block editor.
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Inc\Patterns;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/*
 * Fires after the theme is loaded.
 *
 * @see https://developer.wordpress.org/reference/hooks/after_setup_theme/
 */
add_action(
	'after_setup_theme',
	/**
	 * Removes the WordPress Core patterns.
	 *
	 * @since 0.8.0
	 *
	 * @return void
	 */
	function (): void {
		remove_theme_support( 'core-block-patterns' );
	}
);

/*
 * Fires after WordPress has finished loading but before any headers are sent.
 *
 * @see https://developer.wordpress.org/reference/hooks/init/
 */
add_action(
	'init',
	/**
	 * Registers a new pattern category.
	 *
	 * @since 0.8.0
	 *
	 * @return void
	 */
	function (): void {
		register_block_pattern_category(
			'sidebars',
			array(
				'label' => __( 'Sidebars', 'hrswp-theme-wds' ),
			)
		);
	}
);
