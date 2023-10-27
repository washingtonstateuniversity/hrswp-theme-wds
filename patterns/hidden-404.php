<?php
/**
 * Title: Hidden 404
 * Slug: hrswds/hidden-404
 * Inserter: no
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\Hidden404;

?>
<!-- wp:group {"tagName":"header","className":"main-header"} -->
<header class="wp-block-group main-header">
	<!-- wp:heading {"level":1} -->
	<h1 class="wp-block-post-title"><?php echo esc_html_x( 'Page Not Found', 'Error code for a webpage that is not found.', 'hrswp-theme-wds' ); ?></h1>
	<!-- /wp:heading -->
</header>
<!-- /wp:group -->

<!-- wp:paragraph -->
<p><?php echo esc_html_x( 'We\'re sorry, but the page you are looking for could not be found. Please try our site search or one of the following links.', 'Message to convey that a webpage could not be found', 'hrswp-theme-wds' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul>
	<!-- wp:list-item -->
	<li><a href="https://index.wsu.edu"><?php esc_html_e( 'The A-Z Directory', 'hrswp-theme-wds' ); ?></a> <?php esc_html_e( '(an alphabetical list of departments, programs, resources, organizations, and more)', 'hrswp-theme-wds' ); ?></li>
	<!-- /wp:list-item -->
	<!-- wp:list-item -->
	<li><a href="https://wsu.edu/academics/"><?php esc_html_e( 'Academic Departments', 'hrswp-theme-wds' ); ?></a> <?php esc_html_e( '(a list of links to all academic departments)', 'hrswp-theme-wds' ); ?></li>
	<!-- /wp:list-item -->
	<!-- wp:list-item -->
	<li><a href="https://wsu.edu/about/services/"><?php esc_html_e( 'Administrative Offices and Resources', 'hrswp-theme-wds' ); ?></a> <?php esc_html_e( '(a list of links to all administrative offices and resources)', 'hrswp-theme-wds' ); ?></li>
	<!-- /wp:list-item -->
	<!-- wp:list-item -->
	<li><a href="https://wsu.edu/admission/"><?php esc_html_e( 'Admissions and Aid', 'hrswp-theme-wds' ); ?></a> <?php esc_html_e( '(information for prospective students about applying, tuition, financial aid, and more)', 'hrswp-theme-wds' ); ?></li>
	<!-- /wp:list-item -->
	<!-- wp:list-item -->
	<li><a href="https://wsu.edu/contact/"><?php esc_html_e( 'Contact Us', 'hrswp-theme-wds' ); ?></a> <?php esc_html_e( '(phone and email contacts)', 'hrswp-theme-wds' ); ?></li>
	<!-- /wp:list-item -->
</ul>
<!-- /wp:list -->


