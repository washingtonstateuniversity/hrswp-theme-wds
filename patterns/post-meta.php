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
<!-- wp:post-author {"showAvatar":false,"showBio":false,"byline":"By","fontSize":"small","className":"wsu-meta-byline"} /-->

<!-- wp:post-terms {"term":"category","prefix":"Categories: ","fontSize":"small","className":"wsu-meta-categories"} /-->

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
