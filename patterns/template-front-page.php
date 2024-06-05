<?php
/**
 * Title: Front page template
 * Slug: hrswds/template-front-page
 * Post Types: front-page, wp_template
 * Viewport width: 1400
 * Description: The template for the front page.
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\TemplateFrontPage;

?>

<!-- wp:group {"tagName":"main","className":"main-content"} -->
<main class="wp-block-group main-content">
	<!-- wp:group {"tagName":"article","className":"article-wrapper"} -->
	<article class="wp-block-group article-wrapper">
		<!-- wp:site-title {"isLink":false,"className":"screen-reader-text"} /-->
		<!-- wp:pattern {"slug":"hrswds/banner-hero"} /-->

		<!-- wp:group {"metadata":{"name":"Hero menu"},"align":"wide","style":{"spacing":{"blockGap":"var:preset|spacing|70"}},"className":"hero-menu","layout":{"type":"flex","flexWrap":"wrap","justifyContent":"center"}} -->
		<div class="wp-block-group alignwide hero-menu">
			<!-- wp:pattern {"slug":"hrswds/cta-link"} /-->
			<!-- wp:pattern {"slug":"hrswds/cta-link"} /-->
			<!-- wp:pattern {"slug":"hrswds/cta-link"} /-->
			<!-- wp:pattern {"slug":"hrswds/cta-link"} /-->
		</div>
		<!-- /wp:group -->

		<!-- wp:post-content {"layout":{"type":"constrained"}} /-->
	</article>
	<!-- /wp:group -->
</main>
<!-- /wp:group -->
