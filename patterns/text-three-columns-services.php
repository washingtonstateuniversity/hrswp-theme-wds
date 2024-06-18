<?php
/**
 * Title: Three columns of services
 * Slug: hrswds/text-three-columns-services
 * Categories: text, about
 * Viewport width: 1400
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\TextThreeColumnsServices;

?>

<!-- wp:group {"metadata":{"name":"<?php echo esc_html_x( 'Three columns of services', 'Name of the FAQ pattern', 'hrswp-theme-wds' ); ?>"},"align":"full","style":{"spacing":{"padding":{"right":"var:preset|spacing|40","left":"var:preset|spacing|40"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="padding-right:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--40)">
	<!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|40","left":"var:preset|spacing|40"}}}} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"width":"33%"} -->
		<div class="wp-block-column" style="flex-basis:33%">
			<!-- wp:paragraph {"fontSize":"large"} -->
			<p class="has-large-font-size"><strong><?php echo esc_html_x( 'WSU Leadership Development Programs cultivate leaders at all levels.', 'Description of services', 'hrswp-theme-wds' ); ?></strong></p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"style":{"spacing":{"blockGap":"var:preset|spacing|40"}}} -->
		<div class="wp-block-column">
			<!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"var:preset|spacing|40"}}}} -->
			<div class="wp-block-columns is-not-stacked-on-mobile">
				<!-- wp:column -->
				<div class="wp-block-column">
					<!-- wp:paragraph -->
					<p><strong><?php echo esc_html_x( 'Foundational skills', 'Name of single service', 'hrswp-theme-wds' ); ?></strong></p>
					<!-- /wp:paragraph -->

					<!-- wp:paragraph -->
					<p><?php echo esc_html_x( 'Develop foundational leadership skills, advance skills for emerging leaders, and provides advanced support for mastery in leadership.', 'Description of single service', 'hrswp-theme-wds' ); ?></p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:column -->

				<!-- wp:column -->
				<div class="wp-block-column">
					<!-- wp:paragraph -->
					<p><strong><?php echo esc_html_x( 'Best practices', 'Name of single service', 'hrswp-theme-wds' ); ?></strong></p>
					<!-- /wp:paragraph -->

					<!-- wp:paragraph -->
					<p><?php echo esc_html_x( 'Teach and provide opportunities to develop and implement best practices associated with leadership roles and responsibilities.', 'Description of single service', 'hrswp-theme-wds' ); ?></p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:column -->
			</div>
			<!-- /wp:columns -->

			<!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"var:preset|spacing|40"}}}} -->
			<div class="wp-block-columns is-not-stacked-on-mobile">
				<!-- wp:column -->
				<div class="wp-block-column">
					<!-- wp:paragraph -->
					<p><strong><?php echo esc_html_x( 'Flexibility', 'Name of single service', 'hrswp-theme-wds' ); ?></strong></p>
					<!-- /wp:paragraph -->

					<!-- wp:paragraph -->
					<p><?php echo esc_html_x( 'Develop leaders\' change capability in order to react quickly to changes in economic and social environments.', 'Description of single service', 'hrswp-theme-wds' ); ?></p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:column -->

				<!-- wp:column -->
				<div class="wp-block-column">
					<!-- wp:paragraph -->
					<p><strong><?php echo esc_html_x( 'Soft skills', 'Name of single service', 'hrswp-theme-wds' ); ?></strong></p>
					<!-- /wp:paragraph -->

					<!-- wp:paragraph -->
					<p><?php echo esc_html_x( 'Develop leaders\' soft skills, such as emotional intelligence, to advance leadership impact.', 'Description of single service', 'hrswp-theme-wds' ); ?></p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:column -->
			</div>
			<!-- /wp:columns -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->
