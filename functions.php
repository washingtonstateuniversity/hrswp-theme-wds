<?php
/**
 * HRSWP Theme WDS functions and definitions
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Functions;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Silence is golden.' );
}

// Load asset loader and blocks.
require_once __DIR__ . '/inc/asset-loader.php';
require_once __DIR__ . '/inc/blocks.php';

// Include classes.
require_once __DIR__ . '/inc/classes/class-svg-icons.php';
