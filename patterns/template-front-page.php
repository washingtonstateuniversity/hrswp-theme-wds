<?php
/**
 * Title: Front page template
 * Slug: hrswds/page-front-page
 * Block Types: core/post-content
 * Post Types: page, wp_template
 * Viewport width: 1400
 * Description: The template for the front page.
 * Inserter: no
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

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"width":"66.66%"} -->
			<div class="wp-block-column" style="flex-basis:66.66%">
				<!-- wp:heading {"className":"is-style-callout","fontSize":"x-large"} -->
				<h2 class="wp-block-heading is-style-callout has-x-large-font-size">Empowering the People that Power WSU</h2>
				<!-- /wp:heading -->
				<!-- wp:paragraph -->
				<p>Human Resource Services assists those who serve the students of the OneWSU system. Providing efficient and customer-focused solutions, HRS enhances the employment experience and satisfaction of WSU faculty and staff through clear communication, outreach, engagement, and support.</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->
			<!-- wp:column {"width":"33.33%"} -->
			<div class="wp-block-column" style="flex-basis:33.33%">
				<!-- wp:pattern {"slug":"hrswds/sidebar-navigation"} /-->
			</div>
			<!-- /wp:column -->
		</div>
		<!-- /wp:columns -->

		<!-- wp:spacer {"height":"3rem","className":"is-style-default"} -->
		<div style="height:3rem" aria-hidden="true" class="wp-block-spacer is-style-default"></div>
		<!-- /wp:spacer -->

		<!-- wp:post-content {"layout":{"type":"constrained"}} /-->
	</article>
	<!-- /wp:group -->
</main>
<!-- /wp:group -->
