<?php
/**
 * Title: Hidden CTA link
 * Slug: hrswds/cta-link
 * Description: A call-to-action link.
 * Inserter: no
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\HiddenCtaLink;

?>

<!-- wp:hrswds/svg-selector {"iconColor":"base","iconColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-gray\u002d\u002d0)","iconColorClass":"has-base-icon-color","iconBackgroundColor":"primary","iconBackgroundColorValue":"var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-crimson\u002d\u002dcrimson)","iconBackgroundColorClass":"has-primary-icon-background-color","slug":"arrow-right","size":24,"url":"#","showLabel":true,"iconLabel":"<?php echo esc_html_x( 'Join us', 'Call to action link text.', 'hrswp-theme-wds' ); ?>","className":"is-style-round is-style-action","textColor":"primary","style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"}}}}} -->
<div class="wp-block-hrswds-svg-selector has-small-icon-size has-visible-label is-label-position-right has-icon-color has-icon-background-color has-base-icon-color has-primary-icon-background-color is-style-round is-style-action has-primary-color has-text-color has-link-color">
	<span class="hrswds-svg-icon-container">
		<a href="#" class="hrswds-svg-icon-container">
			<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true"><path d="m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"></path></svg>
			<span class="hrswds-svg-icon-label"><?php echo esc_html_x( 'Join us', 'Call to action link text.', 'hrswp-theme-wds' ); ?></span>
		</a>
	</span>
</div>
<!-- /wp:hrswds/svg-selector -->
