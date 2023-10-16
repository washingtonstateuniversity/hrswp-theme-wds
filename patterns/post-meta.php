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
<!-- wp:post-terms {"term":"post_tag","prefix":"Tags: ","fontSize":"small"} /-->
