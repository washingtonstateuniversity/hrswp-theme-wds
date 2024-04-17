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
	<!-- wp:hrswds/svg-selector {"slug":"person","size":22} -->
	<div class="wp-block-hrswds-svg-selector has-small-icon-size">
		<span type="" class="hrswds-svg-icon-container">
			<svg width="22" height="22" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"></path></svg>
			<span class="hrswds-svg-icon-label screen-reader-text">Person</span>
		</span>
	</div>
	<!-- /wp:hrswds/svg-selector -->
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
