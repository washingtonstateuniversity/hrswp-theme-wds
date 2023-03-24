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
require_once dirname( __FILE__ ) . '/inc/asset-loader.php';
require_once dirname( __FILE__ ) . '/inc/blocks.php';
