<?php
/**
 * Title: Hidden Main Navigation
 * Slug: hrswds/hidden-main-navigation
 * Inserter: no
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\HiddenMainNavigation;

?>
<!-- wp:group {"metadata":{"name":"<?php echo esc_html_x( 'Main navigation', 'Name of the main navigation pattern', 'hrswp-theme-wds' ); ?>"},"className":"main-navigation","layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"right"},"fontSize":"small"} -->
<div class="wp-block-group main-navigation has-small-font-size">
	<!-- wp:paragraph {"className":"wp-block-heading"} -->
	<p class="wp-block-heading"><strong><?php echo esc_html_x( 'Resources for:', 'Content of the main navigation header', 'hrswp-theme-wds' ); ?></strong></p>
	<!-- /wp:paragraph -->
	<!-- wp:navigation {"showSubmenuIcon":false,"overlayMenu":"never","className":"is-style-underline-thick","layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"left"}} /-->
</div>
<!-- /wp:group -->
