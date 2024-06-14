<?php
/**
 * Title: Feature grid, horizontal
 * Slug: hrswds/text-feature-grid-horizontal
 * Categories: text, about
 * Viewport width: 1400
 * Description: A feature grid of 2 rows and 2 columns with icon on the left and headings and text on the right.
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\TextFeatureGridHorizontal;

?>

<!-- wp:group {"metadata":{"name":"<?php echo esc_html_x( 'Feature grid horizontal', 'Name of the horizontal feature grid pattern', 'hrswp-theme-wds' ); ?>"},"align":"wide","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide">
	<!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
	<div class="wp-block-group">
		<!-- wp:heading {"textAlign":"center","className":"is-style-callout"} -->
		<h2 class="wp-block-heading has-text-align-center is-style-callout"><?php echo esc_html_x( 'Important Resources', 'Heading of the features', 'hrswp-theme-wds' ); ?></h2>
		<!-- /wp:heading -->
	</div>
	<!-- /wp:group -->

	<!-- wp:spacer {"height":"var:preset|spacing|20"} -->
	<div style="height:var(--wp--preset--spacing--20)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|30","left":"var:preset|spacing|40"}}}} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"style":{"spacing":{"blockGap":"var:preset|spacing|10"}}} -->
		<div class="wp-block-column">
			<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"left"}} -->
			<div class="wp-block-group">
				<!-- wp:hrswds/svg-selector {"iconColor":"primary-light","iconColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-crimson\u002d\u002dcrimson-light)","iconColorClass":"has-primary-light-icon-color","slug":"health","size":124,"align":"center","className":"is-style-default"} -->
				<div class="wp-block-hrswds-svg-selector aligncenter has-default-icon-size has-icon-color has-primary-light-icon-color is-style-default"><span type="" class="hrswds-svg-icon-container"><svg width="124" height="124" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true"><path d="M718-313 604-426l57-56 57 56 141-141 57 56-198 198ZM440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Z"></path></svg><span class="hrswds-svg-icon-label screen-reader-text"><?php echo esc_html_x( 'Health', 'Icon label', 'hrswp-theme-wds' ); ?></span></span></div>
				<!-- /wp:hrswds/svg-selector -->
				<!-- wp:group {"layout":{"type":"flex","orientation":"vertical"}} -->
				<div class="wp-block-group">
					<!-- wp:paragraph {"fontSize":"medium"} -->
					<p class="has-medium-font-size"><a><?php echo esc_html_x( 'Benefits', 'Sample feature heading', 'hrswp-theme-wds' ); ?></a></p>
					<!-- /wp:paragraph -->
					<!-- wp:paragraph {"fontSize":"small"} -->
					<p class="has-small-font-size"><?php echo esc_html_x( 'Learn about benefits like insurance and retirement plans and employee wellness programs.', 'Sample feature content', 'hrswp-theme-wds' ); ?></p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"style":{"spacing":{"blockGap":"var:preset|spacing|10"}}} -->
		<div class="wp-block-column">
			<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
			<div class="wp-block-group">
				<!-- wp:hrswds/svg-selector {"iconColor":"primary-light","iconColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-crimson\u002d\u002dcrimson-light)","iconColorClass":"has-primary-light-icon-color","slug":"badge","size":124,"align":"center","className":"is-style-default"} -->
				<div class="wp-block-hrswds-svg-selector aligncenter has-default-icon-size has-icon-color has-primary-light-icon-color is-style-default"><span type="" class="hrswds-svg-icon-container"><svg width="124" height="124" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true"><path d="M160-80q-33 0-56.5-23.5T80-160v-440q0-33 23.5-56.5T160-680h200v-120q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v120h200q33 0 56.5 23.5T880-600v440q0 33-23.5 56.5T800-80H160Zm0-80h640v-440H600q0 33-23.5 56.5T520-520h-80q-33 0-56.5-23.5T360-600H160v440Zm80-80h240v-18q0-17-9.5-31.5T444-312q-20-9-40.5-13.5T360-330q-23 0-43.5 4.5T276-312q-17 8-26.5 22.5T240-258v18Zm320-60h160v-60H560v60Zm-200-60q25 0 42.5-17.5T420-420q0-25-17.5-42.5T360-480q-25 0-42.5 17.5T300-420q0 25 17.5 42.5T360-360Zm200-60h160v-60H560v60ZM440-600h80v-200h-80v200Zm40 220Z"></path></svg><span class="hrswds-svg-icon-label screen-reader-text"><?php echo esc_html_x( 'Badge', 'Icon label', 'hrswp-theme-wds' ); ?></span></span></div>
				<!-- /wp:hrswds/svg-selector -->
				<!-- wp:group {"layout":{"type":"flex","orientation":"vertical"}} -->
				<div class="wp-block-group">
					<!-- wp:paragraph {"fontSize":"medium"} -->
					<p class="has-medium-font-size"><a><?php echo esc_html_x( 'Workday', 'Sample feature heading', 'hrswp-theme-wds' ); ?></a></p>
					<!-- /wp:paragraph -->
					<!-- wp:paragraph {"fontSize":"small"} -->
					<p class="has-small-font-size"><?php echo esc_html_x( 'Use Workday to view pay slips, track time and leave, manage personal information, and more.', 'Sample feature content', 'hrswp-theme-wds' ); ?></p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->

	<!-- wp:spacer {"height":"var:preset|spacing|20"} -->
	<div style="height:var(--wp--preset--spacing--20)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|30","left":"var:preset|spacing|40"}}}} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"style":{"spacing":{"blockGap":"var:preset|spacing|10"}}} -->
		<div class="wp-block-column">
			<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
			<div class="wp-block-group">
				<!-- wp:hrswds/svg-selector {"iconColor":"primary-light","iconColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-crimson\u002d\u002dcrimson-light)","iconColorClass":"has-primary-light-icon-color","slug":"volunteering","size":124,"align":"center","className":"is-style-default"} -->
				<div class="wp-block-hrswds-svg-selector aligncenter has-default-icon-size has-icon-color has-primary-light-icon-color is-style-default"><span type="" class="hrswds-svg-icon-container"><svg width="124" height="124" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true"><path d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z"></path></svg><span class="hrswds-svg-icon-label screen-reader-text"><?php echo esc_html_x( 'Volunteering', 'Icon label', 'hrswp-theme-wds' ); ?></span></span></div>
				<!-- /wp:hrswds/svg-selector -->
				<!-- wp:group {"layout":{"type":"flex","orientation":"vertical"}} -->
				<div class="wp-block-group">
					<!-- wp:paragraph {"fontSize":"medium"} -->
					<p class="has-medium-font-size"><a><?php echo esc_html_x( 'Employee Assistance Program', 'Sample feature heading', 'hrswp-theme-wds' ); ?></a></p>
					<!-- /wp:paragraph -->
					<!-- wp:paragraph {"fontSize":"small"} -->
					<p class="has-small-font-size"><?php echo esc_html_x( 'Confidential assessment and referral services available to employees.', 'Sample feature content', 'hrswp-theme-wds' ); ?></p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"style":{"spacing":{"blockGap":"var:preset|spacing|10"}}} -->
		<div class="wp-block-column">
			<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
			<div class="wp-block-group">
				<!-- wp:hrswds/svg-selector {"iconColor":"primary-light","iconColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-crimson\u002d\u002dcrimson-light)","iconColorClass":"has-primary-light-icon-color","slug":"accessibility","size":124,"align":"center","className":"is-style-default"} -->
				<div class="wp-block-hrswds-svg-selector aligncenter has-default-icon-size has-icon-color has-primary-light-icon-color is-style-default"><span type="" class="hrswds-svg-icon-container"><svg width="124" height="124" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true"><path d="M480-720q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720ZM360-80v-520q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5q86 0 174-9.5T820-720l20 80q-56 15-118 25t-122 15v520h-80v-240h-80v240h-80Z"></path></svg><span class="hrswds-svg-icon-label screen-reader-text"><?php echo esc_html_x( 'Accessibility', 'Icon label', 'hrswp-theme-wds' ); ?></span></span></div>
				<!-- /wp:hrswds/svg-selector -->
				<!-- wp:group {"layout":{"type":"flex","orientation":"vertical"}} -->
				<div class="wp-block-group">
					<!-- wp:paragraph {"fontSize":"medium"} -->
					<p class="has-medium-font-size"><a><?php echo esc_html_x( 'Disability Services', 'Sample feature heading', 'hrswp-theme-wds' ); ?></a></p>
					<!-- /wp:paragraph -->
					<!-- wp:paragraph {"fontSize":"small"} -->
					<p class="has-small-font-size"><?php echo esc_html_x( 'Find policies and information on employee rights including leave and accommodations.', 'Sample feature content', 'hrswp-theme-wds' ); ?></p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->
