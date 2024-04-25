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
<!-- wp:group {"metadata":{"name":"Hero"},"align":"full","className":"banner-hero","layout":{"type":"default"}} -->
<div class="wp-block-group alignfull banner-hero"><!-- wp:cover {"url":"<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/wsu-employee-recognition.webp","alt":"Washington State University employee recognition reception program and ribbons.","isUserOverlayColor":true,"gradient":"hero-banner","contentPosition":"bottom center","className":"is-style-overlay-pattern-wsu-outline","layout":{"type":"default"}} -->
<div class="wp-block-cover has-custom-content-position is-position-bottom-center is-style-overlay-pattern-wsu-outline"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim wp-block-cover__gradient-background has-background-gradient has-hero-banner-gradient-background"></span><img class="wp-block-cover__image-background" alt="Washington State University employee recognition reception program and ribbons." src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/wsu-employee-recognition.webp" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:columns {"align":"full"} -->
<div class="wp-block-columns alignfull"><!-- wp:column {"verticalAlignment":"bottom","width":"66.66%"} -->
<div class="wp-block-column is-vertically-aligned-bottom" style="flex-basis:66.66%"><!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"textColor":"base","className":"hero-eyebrow"} -->
<p class="hero-eyebrow has-base-color has-text-color has-link-color">A little words</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"textColor":"base","className":"hero-title","fontSize":"xx-large"} -->
<p class="hero-title has-base-color has-text-color has-link-color has-xx-large-font-size">Some big words next</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"stretch","width":"33.33%"} -->
<div class="wp-block-column is-vertically-aligned-stretch" style="flex-basis:33.33%"></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div></div>
<!-- /wp:cover --></div>
<!-- /wp:group -->
