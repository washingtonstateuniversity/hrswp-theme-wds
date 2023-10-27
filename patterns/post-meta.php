<?php
/**
 * Title: Post Meta
 * Slug: hrswds/post-meta
 * Categories: query
 * Keywords: post meta
 * Block Types: hrswds/template-part/main-footer
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\PostMeta;

?>
<!-- wp:social-links {"size":"has-normal-icon-size","className":"is-style-logos-only","layout":{"type":"flex","flexWrap":"nowrap"}} -->
<ul class="wp-block-social-links has-normal-icon-size has-icon-color is-style-logos-only">
	<!-- wp:social-link {"url":"https://www.facebook.com/wsuhrs","service":"facebook","label":"Share on Facebook"} /-->
	<!-- wp:social-link {"url":"https://www.linkedin.com/showcase/wsu-jobs","service":"linkedin","label":"Share on LinkedIn"} /-->
	<!-- wp:social-link {"url":"https://twitter.com/careerswsu","service":"twitter","label":"Share on Twitter"} /-->
	<!-- wp:social-link {"url":"mailto:","service":"mail","label":"Share with email"} /-->
	<!-- wp:social-link {"url":"#","service":"chain","label":"Copy link"} /--></ul>
<!-- /wp:social-links -->
<!-- wp:group {"className":"wsu-meta-byline has-small-font-size","layout":{"type":"flex"}} -->
<div class="wp-block-group wsu-meta-byline has-small-font-size">
	<!-- wp:paragraph -->
	<p><?php esc_html_e( 'By', 'hrswp-theme-wds' ); ?></p>
	<!-- /wp:paragraph -->
	<!-- wp:paragraph -->
	<p><?php esc_html_e( 'Human Resource Services', 'hrswp-theme-wds' ); ?></p>
	<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
<!-- wp:post-terms {"term":"category","prefix":"Categories: ","fontSize":"small"} /-->
<!-- wp:post-terms {"term":"post_tag","fontSize":"small"} /-->
