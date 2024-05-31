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

			<!-- wp:hrswds/svg-selector {"iconColor":"base","iconColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-gray\u002d\u002d0)","iconColorClass":"has-base-icon-color","iconBackgroundColor":"primary","iconBackgroundColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-crimson\u002d\u002dcrimson)","iconBackgroundColorClass":"has-primary-icon-background-color","slug":"arrow-right","size":24,"url":"#hr-partners","showLabel":true,"iconLabel":"Careers","className":"is-style-round is-style-action","textColor":"primary","style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"}}}}} -->
			<div class="wp-block-hrswds-svg-selector has-small-icon-size has-visible-label is-label-position-right has-icon-color has-icon-background-color has-base-icon-color has-primary-icon-background-color is-style-round is-style-action has-primary-color has-text-color has-link-color">
				<span class="hrswds-svg-icon-container">
					<a href="#hr-partners" class="hrswds-svg-icon-container">
						<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true"><path d="m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"></path></svg>
						<span class="hrswds-svg-icon-label">Current employees</span>
					</a>
				</span>
			</div>
			<!-- /wp:hrswds/svg-selector -->
			<!-- wp:hrswds/svg-selector {"iconColor":"base","iconColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-gray\u002d\u002d0)","iconColorClass":"has-base-icon-color","iconBackgroundColor":"primary","iconBackgroundColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-crimson\u002d\u002dcrimson)","iconBackgroundColorClass":"has-primary-icon-background-color","slug":"arrow-right","size":24,"url":"#hr-partners","showLabel":true,"iconLabel":"Careers","className":"is-style-round is-style-action","textColor":"primary","style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"}}}}} -->
			<div class="wp-block-hrswds-svg-selector has-small-icon-size has-visible-label is-label-position-right has-icon-color has-icon-background-color has-base-icon-color has-primary-icon-background-color is-style-round is-style-action has-primary-color has-text-color has-link-color">
				<span class="hrswds-svg-icon-container">
					<a href="#hr-partners" class="hrswds-svg-icon-container">
						<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true"><path d="m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"></path></svg>
						<span class="hrswds-svg-icon-label">New employees</span>
					</a>
				</span>
			</div>
			<!-- /wp:hrswds/svg-selector -->
			<!-- wp:hrswds/svg-selector {"iconColor":"base","iconColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-gray\u002d\u002d0)","iconColorClass":"has-base-icon-color","iconBackgroundColor":"primary","iconBackgroundColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-crimson\u002d\u002dcrimson)","iconBackgroundColorClass":"has-primary-icon-background-color","slug":"arrow-right","size":24,"url":"#hr-partners","showLabel":true,"iconLabel":"Careers","className":"is-style-round is-style-action","textColor":"primary","style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"}}}}} -->
			<div class="wp-block-hrswds-svg-selector has-small-icon-size has-visible-label is-label-position-right has-icon-color has-icon-background-color has-base-icon-color has-primary-icon-background-color is-style-round is-style-action has-primary-color has-text-color has-link-color">
				<span class="hrswds-svg-icon-container">
					<a href="#hr-partners" class="hrswds-svg-icon-container">
						<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true"><path d="m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"></path></svg>
						<span class="hrswds-svg-icon-label">HR partners</span>
					</a>
				</span>
			</div>
			<!-- /wp:hrswds/svg-selector -->
		</div>
		<!-- /wp:group -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide"><!-- wp:column {"width":"66.66%"} -->
		<div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:heading {"className":"is-style-callout","fontSize":"x-large"} -->
		<h2 class="wp-block-heading is-style-callout has-x-large-font-size">Empowering the People that Power WSU</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph -->
		<p>Human Resource Services assists those who serve the students of the OneWSU system. Providing efficient and customer-focused solutions, HRS enhances the employment experience and satisfaction of WSU faculty and staff through clear communication, outreach, engagement, and support.</p>
		<!-- /wp:paragraph --></div>
		<!-- /wp:column -->

		<!-- wp:column {"width":"33.33%"} -->
		<div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:group {"tagName":"aside","metadata":{"name":"Sidebar navigation"},"className":"sidebar-navigation","layout":{"type":"default"}} -->
		<aside class="wp-block-group sidebar-navigation"><!-- wp:heading -->
		<h2 class="wp-block-heading">Dig deeper</h2>
		<!-- /wp:heading -->

		<!-- wp:list {"className":"is-style-lined"} -->
		<ul class="is-style-lined"><!-- wp:list-item -->
		<li><a>Workday Self-Service</a></li>
		<!-- /wp:list-item -->

		<!-- wp:list-item -->
		<li><a>Percipio Online Learning</a></li>
		<!-- /wp:list-item -->

		<!-- wp:list-item -->
		<li><a>WSU Holiday Schedule</a></li>
		<!-- /wp:list-item -->

		<!-- wp:list-item -->
		<li><a>Employee Assistance Program</a></li>
		<!-- /wp:list-item -->

		<!-- wp:list-item -->
		<li><a>Life Events</a></li>
		<!-- /wp:list-item --></ul>
		<!-- /wp:list --></aside>
		<!-- /wp:group --></div>
		<!-- /wp:column --></div>
		<!-- /wp:columns -->

		<!-- wp:spacer {"height":"3rem","className":"is-style-default"} -->
		<div style="height:3rem" aria-hidden="true" class="wp-block-spacer is-style-default"></div>
		<!-- /wp:spacer -->

		<!-- wp:post-content {"layout":{"type":"constrained"}} /-->
	</article>
	<!-- /wp:group -->
</main>
<!-- /wp:group -->
