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
