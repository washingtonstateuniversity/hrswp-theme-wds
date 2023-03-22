<?php
/**
 * Title: Hidden No Results Content
 * Slug: hrswds/hidden-no-results
 * Inserter: no
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\HiddenNoResults;

?>
<!-- wp:paragraph -->
<p>
	<?php echo esc_html_x( 'Sorry, but nothing matched your search terms. Please try searching with some different keywords.', 'Message explaining that there are no results returned from a search', 'hrswp-theme-wds' ); ?>
</p>
<!-- /wp:paragraph -->
