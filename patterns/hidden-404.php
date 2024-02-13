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
<!-- wp:group {"tagName":"section","align":"full","backgroundColor":"secondary-light","layout":{"type":"constrained"},"metadata":{"name":"Search"}} -->
<section class="wp-block-group alignfull has-secondary-light-background-color has-background">
	<!-- wp:search {"label":"Search","showLabel":false,"placeholder":"Search","buttonText":"Search","buttonUseIcon":true} /-->
</section>
<!-- /wp:group -->
<!-- wp:heading {"fontSize":"large"} -->
<h2 class="wp-block-heading has-large-font-size">
	<?php esc_html_e( 'Quicklinks', 'hrswp-theme-wds' ); ?>
</h2>
<!-- /wp:heading -->
