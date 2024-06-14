<?php
/**
 * Title: Hero
 * Slug: hrswds/banner-hero
 * Categories: banner
 * Viewport width: 1400
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\BannerHero;

?>
<!-- wp:group {"metadata":{"name":"<?php echo esc_html_x( 'Hero', 'Name of the hero banner pattern', 'hrswp-theme-wds' ); ?>"},"align":"full","className":"banner-hero","layout":{"type":"default"}} -->
<div class="wp-block-group alignfull banner-hero">

	<!-- wp:cover {"url":"<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/wsu-employee-recognition.webp","alt":"<?php esc_attr_e( 'Washington State University employee recognition reception program and ribbons.', 'hrswp-theme-wds' ); ?>","isUserOverlayColor":true,"gradient":"hero-banner","contentPosition":"bottom center","className":"is-style-overlay-pattern-wsu-outline","layout":{"type":"default"}} -->
	<div class="wp-block-cover has-custom-content-position is-position-bottom-center is-style-overlay-pattern-wsu-outline">
		<span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim wp-block-cover__gradient-background has-background-gradient has-hero-banner-gradient-background"></span>
		<img class="wp-block-cover__image-background" alt="<?php esc_attr_e( 'Washington State University employee recognition reception program and ribbons.', 'hrswp-theme-wds' ); ?>" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/wsu-employee-recognition.webp" data-object-fit="cover"/>
		<div class="wp-block-cover__inner-container">

			<!-- wp:columns {"align":"full"} -->
			<div class="wp-block-columns alignfull">

				<!-- wp:column {"verticalAlignment":"bottom","width":"66.66%"} -->
				<div class="wp-block-column is-vertically-aligned-bottom" style="flex-basis:66.66%">

					<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"textColor":"base","className":"hero-eyebrow"} -->
					<p class="hero-eyebrow has-base-color has-text-color has-link-color"><?php echo esc_html_x( 'Human Resource Services', 'Content of the eyebrow header', 'hrswp-theme-wds' ); ?></p>
					<!-- /wp:paragraph -->

					<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"textColor":"base","className":"hero-title","fontSize":"xx-large"} -->
					<p class="hero-title has-base-color has-text-color has-link-color has-xx-large-font-size"><?php echo esc_html_x( 'We\'re here to help', 'Content of the banner header title', 'hrswp-theme-wds' ); ?></p>
					<!-- /wp:paragraph -->

				</div>
				<!-- /wp:column -->

				<!-- wp:column {"verticalAlignment":"stretch","width":"33.33%"} -->
				<div class="wp-block-column is-vertically-aligned-stretch" style="flex-basis:33.33%"></div>
				<!-- /wp:column -->

			</div>
			<!-- /wp:columns -->

		</div>
	</div>
	<!-- /wp:cover -->

</div>
<!-- /wp:group -->
