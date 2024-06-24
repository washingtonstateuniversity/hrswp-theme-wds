<?php
/**
 * Title: CTA with title and details
 * Slug: hrswds/cta-title-and-details
 * Categories: about, call-to-action
 * Viewport width: 1400
 * Description: A heading and 3 columns with text and action links.
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\CtaTitleAndDetails;

?>

<!-- wp:group {"metadata":{"name":"<?php echo esc_html_x( 'CTA with title and details', 'Name of the call to action with title and details pattern', 'hrswp-theme-wds' ); ?>"},"align":"full","style":{"border":{"top":{"color":"var:preset|color|primary-light","width":"12px"}}},"backgroundColor":"secondary-light","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-secondary-light-background-color has-background" style="border-top-color:var(--wp--preset--color--primary-light);border-top-width:12px">
	<!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
	<div class="wp-block-group">
		<!-- wp:heading {"textAlign":"center","className":"is-style-callout"} -->
		<h2 class="wp-block-heading has-text-align-center is-style-callout"><?php echo esc_html_x( 'Employee Assistance Program', 'Heading of the call to action group', 'hrswp-theme-wds' ); ?></h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center"} -->
		<p class="has-text-align-center"><?php echo esc_html_x( 'EAP offers webinars on self care, change management, and ways to support emotional and mental health and wellbeing. Register for an upcoming live session or watch past sessions on-demand.', 'Brief description of the call to action', 'hrswp-theme-wds' ); ?></p>
		<!-- /wp:paragraph -->
	</div>
	<!-- /wp:group -->

	<!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|30","left":"var:preset|spacing|40"}}}} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"style":{"spacing":{"blockGap":"var:preset|spacing|10"}}} -->
		<div class="wp-block-column">
			<!-- wp:spacer {"height":"1.5rem"} -->
			<div style="height:1.5rem" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer -->

			<!-- wp:group {"style":{"dimensions":{"minHeight":"90%"}},"layout":{"type":"flex","orientation":"vertical","verticalAlignment":"space-between","flexWrap":"nowrap"}} -->
			<div class="wp-block-group" style="min-height:90%">
				<!-- wp:group {"layout":{"type":"constrained"}} -->
				<div class="wp-block-group">
					<!-- wp:heading {"level":3} -->
					<h3 class="wp-block-heading"><?php echo esc_html_x( 'Instructor-Led Sessions', 'Sub-heading of a call to action details group', 'hrswp-theme-wds' ); ?></h3>
					<!-- /wp:heading -->

					<!-- wp:list {"className":"is-style-boxed"} -->
					<ul class="is-style-boxed">
						<!-- wp:list-item -->
						<li><?php echo esc_html_x( 'Actionable Ways to Incorporate Wellness Into Your Workday', 'A details group list item', 'hrswp-theme-wds' ); ?></li>
						<!-- /wp:list-item -->
						<!-- wp:list-item -->
						<li><?php echo esc_html_x( 'Navigating the Pace of Change', 'A details group list item', 'hrswp-theme-wds' ); ?></li>
						<!-- /wp:list-item -->
					</ul>
					<!-- /wp:list -->
				</div>
				<!-- /wp:group -->

				<!-- wp:hrswds/svg-selector {"iconColor":"base","iconColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-gray\u002d\u002d0)","iconColorClass":"has-base-icon-color","iconBackgroundColor":"primary","iconBackgroundColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-crimson\u002d\u002dcrimson)","iconBackgroundColorClass":"has-primary-icon-background-color","slug":"arrow-right","size":24,"url":"#","showLabel":true,"iconLabel":"<?php echo esc_html_x( 'Instructor-Led Sessions', 'Action button label', 'hrswp-theme-wds' ); ?>","className":"is-style-round is-style-action","textColor":"primary","style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"}}}}} -->
				<div class="wp-block-hrswds-svg-selector has-small-icon-size has-visible-label is-label-position-right has-icon-color has-icon-background-color has-base-icon-color has-primary-icon-background-color is-style-round is-style-action has-primary-color has-text-color has-link-color">
					<span class="hrswds-svg-icon-container">
						<a href="#" class="hrswds-svg-icon-container">
							<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true"><path d="m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"></path></svg>
							<span class="hrswds-svg-icon-label"><?php echo esc_html_x( 'Instructor-Led Sessions', 'Action button label', 'hrswp-theme-wds' ); ?></span>
						</a>
					</span>
				</div>
				<!-- /wp:hrswds/svg-selector -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"style":{"spacing":{"blockGap":"var:preset|spacing|10"}}} -->
		<div class="wp-block-column">
			<!-- wp:spacer {"height":"1.5rem"} -->
			<div style="height:1.5rem" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer -->

			<!-- wp:group {"style":{"dimensions":{"minHeight":"90%"}},"layout":{"type":"flex","orientation":"vertical","verticalAlignment":"space-between","flexWrap":"nowrap"}} -->
			<div class="wp-block-group" style="min-height:90%">
				<!-- wp:group {"layout":{"type":"constrained"}} -->
				<div class="wp-block-group">
					<!-- wp:heading {"level":3} -->
					<h3 class="wp-block-heading"><?php echo esc_html_x( 'Live Webinars', 'Sub-heading of a call to action details group', 'hrswp-theme-wds' ); ?></h3>
					<!-- /wp:heading -->

					<!-- wp:list {"className":"is-style-boxed"} -->
					<ul class="is-style-boxed">
						<!-- wp:list-item -->
						<li><?php echo esc_html_x( 'Breaking the Burnout Cycle', 'A details group list item', 'hrswp-theme-wds' ); ?></li>
						<!-- /wp:list-item -->
						<!-- wp:list-item -->
						<li><?php echo esc_html_x( 'Transitioning into the New Work Life: Strategies for Responding to Change', 'A details group list item', 'hrswp-theme-wds' ); ?></li>
						<!-- /wp:list-item -->
					</ul>
					<!-- /wp:list -->
				</div>
				<!-- /wp:group -->

				<!-- wp:hrswds/svg-selector {"iconColor":"base","iconColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-gray\u002d\u002d0)","iconColorClass":"has-base-icon-color","iconBackgroundColor":"primary","iconBackgroundColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-crimson\u002d\u002dcrimson)","iconBackgroundColorClass":"has-primary-icon-background-color","slug":"arrow-right","size":24,"url":"#","showLabel":true,"iconLabel":"<?php echo esc_html_x( 'Live Webinars', 'Action button label', 'hrswp-theme-wds' ); ?>","className":"is-style-round is-style-action","textColor":"primary","style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"}}}}} -->
				<div class="wp-block-hrswds-svg-selector has-small-icon-size has-visible-label is-label-position-right has-icon-color has-icon-background-color has-base-icon-color has-primary-icon-background-color is-style-round is-style-action has-primary-color has-text-color has-link-color">
					<span class="hrswds-svg-icon-container">
						<a href="#" class="hrswds-svg-icon-container">
							<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true"><path d="m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"></path></svg>
							<span class="hrswds-svg-icon-label"><?php echo esc_html_x( 'Live Webinars', 'Action button label', 'hrswp-theme-wds' ); ?></span>
						</a>
					</span>
				</div>
				<!-- /wp:hrswds/svg-selector -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"style":{"spacing":{"blockGap":"var:preset|spacing|10"}}} -->
		<div class="wp-block-column">
			<!-- wp:spacer {"height":"1.5rem"} -->
			<div style="height:1.5rem" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer -->

			<!-- wp:group {"style":{"dimensions":{"minHeight":"90%"}},"layout":{"type":"flex","orientation":"vertical","verticalAlignment":"space-between","flexWrap":"nowrap"}} -->
			<div class="wp-block-group" style="min-height:90%">
				<!-- wp:group {"layout":{"type":"constrained"}} -->
				<div class="wp-block-group">
					<!-- wp:heading {"level":3} -->
					<h3 class="wp-block-heading"><?php echo esc_html_x( 'On-demand webinars', 'Sub-heading of a call to action details group', 'hrswp-theme-wds' ); ?></h3>
					<!-- /wp:heading -->

					<!-- wp:list {"className":"is-style-boxed"} -->
					<ul class="is-style-boxed">
						<!-- wp:list-item -->
						<li><?php echo esc_html_x( 'Leading the Human Side of Change', 'A details group list item', 'hrswp-theme-wds' ); ?></li>
						<!-- /wp:list-item -->
						<!-- wp:list-item -->
						<li><?php echo esc_html_x( 'Navigating Change in Challenging Times', 'A details group list item', 'hrswp-theme-wds' ); ?></li>
						<!-- /wp:list-item -->
					</ul>
					<!-- /wp:list -->
				</div>
				<!-- /wp:group -->

				<!-- wp:hrswds/svg-selector {"iconColor":"base","iconColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-gray\u002d\u002d0)","iconColorClass":"has-base-icon-color","iconBackgroundColor":"primary","iconBackgroundColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-crimson\u002d\u002dcrimson)","iconBackgroundColorClass":"has-primary-icon-background-color","slug":"arrow-right","size":24,"url":"#","showLabel":true,"iconLabel":"<?php echo esc_html_x( 'On-demand webinars', 'Action button label', 'hrswp-theme-wds' ); ?>","className":"is-style-round is-style-action","textColor":"primary","style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"}}}}} -->
				<div class="wp-block-hrswds-svg-selector has-small-icon-size has-visible-label is-label-position-right has-icon-color has-icon-background-color has-base-icon-color has-primary-icon-background-color is-style-round is-style-action has-primary-color has-text-color has-link-color">
					<span class="hrswds-svg-icon-container">
						<a href="#" class="hrswds-svg-icon-container">
							<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true"><path d="m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"></path></svg>
							<span class="hrswds-svg-icon-label"><?php echo esc_html_x( 'On-demand webinars', 'Action button label', 'hrswp-theme-wds' ); ?></span>
						</a>
					</span>
				</div>
				<!-- /wp:hrswds/svg-selector -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->

	<!-- wp:spacer {"height":"var:preset|spacing|60"} -->
	<div style="height:var(--wp--preset--spacing--60)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:buttons {"align":"wide","layout":{"type":"flex","justifyContent":"center"}} -->
	<div class="wp-block-buttons alignwide">
		<!-- wp:button {"className":"is-style-fill"} -->
		<div class="wp-block-button is-style-fill">
			<a class="wp-block-button__link wp-element-button"><?php echo esc_html_x( 'Learn more about EAP', 'Call to action button', 'hrswp-theme-wds' ); ?></a>
		</div>
		<!-- /wp:button -->
	</div>
	<!-- /wp:buttons -->
</div>
<!-- /wp:group -->
