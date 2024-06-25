<?php
/**
 * Title: CTA with full-height background
 * Slug: hrswds/cta-full-height
 * Categories: banner, call-to-action
 * Viewport width: 1400
 * Description: A full-height call to action with a background.
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\CtaTitleAndDetails;

?>

<!-- wp:cover {"url":"<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/wsu-tri-cities.webp","isUserOverlayColor":true,"minHeight":100,"minHeightUnit":"vh","gradient":"hero-banner","metadata":{"name":"CTA full height"},"align":"full","style":{"spacing":{"padding":{"right":"var:preset|spacing|40","left":"var:preset|spacing|40"},"blockGap":"0"}},"className":"is-style-default","layout":{"type":"default"}} -->
<div class="wp-block-cover alignfull is-style-default" style="padding-right:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--40);min-height:100vh">
	<span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim wp-block-cover__gradient-background has-background-gradient has-hero-banner-gradient-background"></span>
	<img
		class="wp-block-cover__image-background wp-image-38852"
		alt=""
		src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/wsu-tri-cities.webp" data-object-fit="cover"/>
	<div class="wp-block-cover__inner-container"><!-- wp:columns {"verticalAlignment":"top","align":"full","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|70"}}}} -->
<div class="wp-block-columns alignfull are-vertically-aligned-top"><!-- wp:column {"verticalAlignment":"top","width":"55%"} -->
<div class="wp-block-column is-vertically-aligned-top" style="flex-basis:55%"><!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}},"typography":{"textTransform":"uppercase"}},"textColor":"base","className":"hero-eyebrow"} -->
<p class="hero-eyebrow has-base-color has-text-color has-link-color" style="text-transform:uppercase">Come work with us</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"1rem"} -->
<div style="height:1rem" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}},"typography":{"lineHeight":"1.2"}},"textColor":"base","className":"hero-title","fontSize":"xx-large"} -->
<p class="hero-title has-base-color has-text-color has-link-color has-xx-large-font-size" style="line-height:1.2">Your career is waiting</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"1rem"} -->
<div style="height:1rem" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:paragraph {"fontSize":"large"} -->
<p class="has-large-font-size">WSU offers rewarding careers at a public research university empowering students, faculty, and others to create a world where all people can thrive.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"3rem"} -->
<div style="height:3rem" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-fill"} -->
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button">View jobs</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"top","width":"45%"} -->
<div class="wp-block-column is-vertically-aligned-top" style="flex-basis:45%"><!-- wp:spacer {"height":"3rem"} -->
<div style="height:3rem" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:group {"metadata":{"name":"Stat"},"style":{"spacing":{"padding":{"left":"var:preset|spacing|20","right":"var:preset|spacing|20"}},"border":{"left":{"color":"var:preset|color|secondary-light","width":"12px"}}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="border-left-color:var(--wp--preset--color--secondary-light);border-left-width:12px;padding-right:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--20)"><!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|primary-light"}}},"layout":{"selfStretch":"fit","flexSize":null},"typography":{"lineHeight":"1"}},"textColor":"primary-light","fontSize":"xx-large"} -->
<p class="has-primary-light-color has-text-color has-link-color has-xx-large-font-size" style="line-height:1"><strong>$335.2 million</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"textColor":"base"} -->
<p class="has-base-color has-text-color has-link-color"><strong>annual research expenditures across the WSU system (FY 2020)</strong></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:spacer {"height":"3rem"} -->
<div style="height:3rem" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:group {"metadata":{"name":"Stat"},"style":{"spacing":{"padding":{"left":"var:preset|spacing|20","right":"var:preset|spacing|20"}},"border":{"left":{"color":"var:preset|color|secondary-light","width":"12px"}}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="border-left-color:var(--wp--preset--color--secondary-light);border-left-width:12px;padding-right:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--20)"><!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|primary-light"}}},"layout":{"selfStretch":"fit","flexSize":null},"typography":{"lineHeight":"1"}},"textColor":"primary-light","fontSize":"xx-large"} -->
<p class="has-primary-light-color has-text-color has-link-color has-xx-large-font-size" style="line-height:1"><strong>95%</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"textColor":"base"} -->
<p class="has-base-color has-text-color has-link-color"><strong>employees always, often, or sometimes satisfied at work (2023 Employee Engagement Survey)</strong></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div></div>
<!-- /wp:cover -->
