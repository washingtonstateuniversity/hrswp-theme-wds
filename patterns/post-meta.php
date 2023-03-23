<?php
/**
 * Title: Post Meta
 * Slug: hrswds/post-meta
 * Categories: query
 * Keywords: post meta
 * Block Types: hrswds/template-part/wsu-article-footer
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\PostMeta;

?>
<!-- wp:group {"className":"wsu-meta-byline","layout":{"type":"flex"}} -->
<div class="wsu-meta-byline wp-block-group">
	<!-- wp:paragraph {"className":"wsu-meta-byline"} -->
	<p class="wsu-meta-byline__text">
		<?php echo esc_html_x( 'By', 'Verb to explain the publication status of a post', 'hrswp-theme-wds' ); ?>
	</p>
	<!-- /wp:paragraph -->

	<!-- wp:post-author {"showAvatar":false} /-->
</div>
<!-- /wp:group -->

<!-- wp:group {"className":"wsu-meta-categories","layout":{"type":"flex"}} -->
<div class="wsu-meta-categories wp-block-group">
	<!-- wp:paragraph -->
	<p>
		<?php echo esc_html_x( 'Categories:', 'Label for a list of post categories', 'hrswp-theme-wds' ); ?>
	</p>
	<!-- /wp:paragraph -->

	<!-- wp:post-terms {"term":"category"} /-->
</div>
<!-- /wp:group -->

<!-- wp:group {"className":"wsu-meta-tags","layout":{"type":"flex"}} -->
<div class="wsu-meta-tags wp-block-group">
	<!-- wp:paragraph -->
	<p>
		<?php echo esc_html_x( 'Tags:', 'Label for a list of post tags', 'hrswp-theme-wds' ); ?>
	</p>
	<!-- /wp:paragraph -->

	<!-- wp:post-terms {"term":"post_tag"} /-->
</div>
<!-- /wp:group -->
