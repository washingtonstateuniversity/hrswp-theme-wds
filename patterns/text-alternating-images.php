<?php
/**
 * Title: Text with alternating images
 * Slug: hrswds/text-alternating-images
 * Categories: text, about
 * Viewport width: 1400
 * Description: A text section, then a two column section with text in one and image in another.
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\TextAlternatingImages;

?>

<!-- wp:group {"metadata":{"name":"<?php echo esc_html_x( 'Text with alternating images', 'Name text with alternating images pattern', 'hrswp-theme-wds' ); ?>"},"align":"wide","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide">
	<!-- wp:heading {"textAlign":"center","className":"is-style-callout"} -->
	<h2 class="wp-block-heading has-text-align-center is-style-callout">
		<?php echo esc_html_x( 'Stay up to date', 'Sample heading content', 'hrswp-theme-wds' ); ?>
	</h2>
	<!-- /wp:heading -->
	<!-- wp:paragraph {"align":"center"} -->
	<p class="has-text-align-center"><?php echo esc_html_x( 'HRS has many ways to stay informed about upcoming policy changes, training and events, benefits updates, and other HR information for all employees.', 'Sample subheading content', 'hrswp-theme-wds' ); ?></p>
	<!-- /wp:paragraph -->

	<!-- wp:spacer {"height":"var:preset|spacing|40"} -->
	<div style="height:var(--wp--preset--spacing--40)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|50","left":"var:preset|spacing|50"}}}} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"verticalAlignment":"center","width":"40%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:40%">
			<!-- wp:heading {"level":3} -->
			<h3 class="wp-block-heading"><?php echo esc_html_x( 'HRS News and Social', 'Sample list heading', 'hrswp-theme-wds' ); ?></h3>
			<!-- /wp:heading -->
			<!-- wp:list -->
			<ul>
				<!-- wp:list-item -->
				<li><?php echo esc_html_x( 'Visit the HRS News page for timely updates and important employee information.', 'Sample list item', 'hrswp-theme-wds' ); ?></li>
				<!-- /wp:list-item -->
				<!-- wp:list-item -->
				<li><?php echo esc_html_x( 'Follow HRS on a variety of social platforms.', 'Sample list item', 'hrswp-theme-wds' ); ?></li>
				<!-- /wp:list-item -->
				<!-- wp:list-item -->
				<li><?php echo esc_html_x( 'Find up-to-the-minute jobs postings on WSU Careers.', 'Sample list item', 'hrswp-theme-wds' ); ?></li>
				<!-- /wp:list-item -->
			</ul>
			<!-- /wp:list -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"width":"50%"} -->
		<div class="wp-block-column" style="flex-basis:50%">
			<!-- wp:image {"aspectRatio":"4/3","scale":"cover","sizeSlug":"large","linkDestination":"none","className":"is-style-framed"} -->
			<figure class="wp-block-image size-large is-style-framed">
				<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/wsu-everett.webp" alt="<?php esc_attr_e( 'Upward view of a WSU Everett building with the WSU logo on it.', 'hrswp-theme-wds' ); ?>" />
			</figure>
			<!-- /wp:image -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->

	<!-- wp:spacer {"height":"var:preset|spacing|40"} -->
	<div style="height:var(--wp--preset--spacing--40)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|50","left":"var:preset|spacing|50"}}}} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"width":"50%"} -->
		<div class="wp-block-column" style="flex-basis:50%">
			<!-- wp:image {"aspectRatio":"4/3","scale":"cover","sizeSlug":"large","linkDestination":"none","className":"is-style-framed"} -->
			<figure class="wp-block-image size-large is-style-framed">
				<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/wsu-tri-cities.webp" alt="<?php esc_attr_e( 'A building on the WSU Tri-Cities campus backlit by the sun.', 'hrswp-theme-wds' ); ?>" />
			</figure>
			<!-- /wp:image -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"40%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:40%">
			<!-- wp:heading {"level":3} -->
			<h3 class="wp-block-heading"><?php echo esc_html_x( 'HRS Newsletter', 'Sample heading', 'hrswp-theme-wds' ); ?></h3>
			<!-- /wp:heading -->
			<!-- wp:list -->
			<ul>
				<!-- wp:list-item -->
				<li><?php echo esc_html_x( 'Timely information about upcoming deadlines.', 'Sample list item', 'hrswp-theme-wds' ); ?></li>
				<!-- /wp:list-item -->
				<!-- wp:list-item -->
				<li><?php echo esc_html_x( 'Featured training opportunities and events.', 'Sample list item', 'hrswp-theme-wds' ); ?></li>
				<!-- /wp:list-item -->
				<!-- wp:list-item -->
				<li><?php echo esc_html_x( 'A world of information useful for all employees.', 'Sample list item', 'hrswp-theme-wds' ); ?></li>
				<!-- /wp:list-item -->
			</ul>
			<!-- /wp:list -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->
