<?php
/**
 * Title: Post Sidebar
 * Slug: hrswds/post-sidebar
 * Categories: posts
 * Keywords: post
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\PostSidebar;

?>
<!-- wp:heading -->
<h2 class="wp-block-heading"><?php echo esc_html_x( 'Recent News', 'Heading for the three most recent news posts.', 'hrswp-theme-wds' ); ?></h2>
<!-- /wp:heading -->
<!-- wp:latest-posts {"postsToShow":3,"displayPostDate":true,"displayFeaturedImage":true,"featuredImageSizeSlug":"medium"} /-->
