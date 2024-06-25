<?php
/**
 * Title: Stat
 * Slug: hrswds/text-stat
 * Categories: text, about
 * Viewport width: 1400
 * Description: A stat component with a large number and smaller description to prominently display data..
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\TextStat;

?>

<!-- wp:group {"metadata":{"name":"<?php echo esc_html_x( 'Stat', 'Name of the stat pattern', 'hrswp-theme-wds' ); ?>"},"style":{"spacing":{"padding":{"left":"var:preset|spacing|20","right":"var:preset|spacing|20"}},"border":{"left":{"color":"var:preset|color|secondary-light","width":"12px"}}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="border-left-color:var(--wp--preset--color--secondary-light);border-left-width:12px;padding-right:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--20)">
	<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|primary-light"}}},"layout":{"selfStretch":"fit","flexSize":null},"typography":{"lineHeight":"1"}},"textColor":"primary-light","fontSize":"xx-large"} -->
	<p class="has-primary-light-color has-text-color has-link-color has-xx-large-font-size" style="line-height:1"><strong><?php echo esc_html_x( '$335.2 million', 'The stat figure', 'hrswp-theme-wds' ); ?></strong></p>
	<!-- /wp:paragraph -->

	<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|secondary"}}}},"textColor":"secondary"} -->
	<p class="has-secondary-color has-text-color has-link-color"><strong><?php echo esc_html_x( 'annual research expenditures across the WSU system (FY 2020)', 'The stat description', 'hrswp-theme-wds' ); ?></strong></p>
	<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
