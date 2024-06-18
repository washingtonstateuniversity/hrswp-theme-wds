<?php
/**
 * Title: Sidebar navigation
 * Slug: hrswds/sidebar-navigation
 * Categories: sidebars
 * Viewport width: 400
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\SidebarNavigation;

?>
<!-- wp:group {"metadata":{"name":"<?php echo esc_html_x( 'Sidebar navigation', 'Name of the sidebar navigation pattern', 'hrswp-theme-wds' ); ?>"},"tagName":"aside","metadata":{"name":"Sidebar navigation"},"className":"sidebar-navigation","layout":{"type":"default"}} -->
<aside class="wp-block-group sidebar-navigation">
	<!-- wp:heading -->
	<h2 class="wp-block-heading"><?php echo esc_html_x( 'Dig deeper', 'Sample heading', 'hrswp-theme-wds' ); ?></h2>
	<!-- /wp:heading -->
	<!-- wp:list {"className":"is-style-lined"} -->
	<ul class="is-style-lined">
		<!-- wp:list-item -->
		<li><a><?php echo esc_html_x( 'Workday Self-Service', 'Sample list item link', 'hrswp-theme-wds' ); ?></a></li>
		<!-- /wp:list-item -->
		<!-- wp:list-item -->
		<li><a><?php echo esc_html_x( 'Percipio Online Learning', 'Sample list item link', 'hrswp-theme-wds' ); ?></a></li>
		<!-- /wp:list-item -->
		<!-- wp:list-item -->
		<li><a><?php echo esc_html_x( 'WSU Holiday Schedule', 'Sample list item link', 'hrswp-theme-wds' ); ?></a></li>
		<!-- /wp:list-item -->
		<!-- wp:list-item -->
		<li><a><?php echo esc_html_x( 'Employee Assistance Program', 'Sample list item link', 'hrswp-theme-wds' ); ?></a></li>
		<!-- /wp:list-item -->
		<!-- wp:list-item -->
		<li><a><?php echo esc_html_x( 'Life Events', 'Sample list item link', 'hrswp-theme-wds' ); ?></a></li>
		<!-- /wp:list-item -->
	</ul>
	<!-- /wp:list -->
</aside>
<!-- /wp:group -->
