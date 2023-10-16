<?php
/**
 * Title: Footer Deeplinks
 * Slug: hrswds/footer-deeplinks
 * Categories: footer
 * Block Types: hrswds/template-part/footer
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\FooterDeeplinks;

?>
<!-- wp:columns {"className":"footer-deeplinks"} -->
<div class="wp-block-columns footer-deeplinks">
	<!-- wp:column -->
	<div class="wp-block-column">
		<!-- wp:heading {"className":"footer-title"} -->
		<h2 class="wp-block-heading footer-title">
			<?php esc_html_e( 'Support', 'hrswp-theme-wds' ); ?>
		</h2>
		<!-- /wp:heading -->
		<!-- wp:navigation {"overlayMenu":"never","layout":{"type":"flex","orientation":"vertical"},"ariaLabel":"<?php esc_attr_e( 'Support', 'hrswp-theme-wds' ); ?>"} -->
			<!-- wp:navigation-link {"label":"News","url":"/news"} /-->
			<!-- wp:navigation-link {"label":"Contact","url":"/contact"} /-->
			<!-- wp:navigation-link {"label":"Workday Service Desk","url":"https://support.workday.wsu.edu/"} /-->
			<!-- wp:navigation-link {"label":"Percipio Guides","url":"#"} /-->
			<!-- wp:navigation-link {"label":"About HRS","url":"/contact/#about"} /-->
		<!-- /wp:navigation -->
	</div>
	<!-- /wp:column -->

	<!-- wp:column -->
	<div class="wp-block-column">
		<!-- wp:heading {"className":"footer-title"} -->
		<h2 class="wp-block-heading footer-title">
			<?php esc_html_e( 'WSU Locations', 'hrswp-theme-wds' ); ?>
		</h2>
		<!-- /wp:heading -->
		<!-- wp:navigation {"overlayMenu":"never","layout":{"type":"flex","orientation":"vertical"},"ariaLabel":"<?php esc_attr_e( 'WSU Locations', 'hrswp-theme-wds' ); ?>"} -->
			<!-- wp:navigation-link {"label":"Pullman","url":"https://pullman.wsu.edu/"} /-->
			<!-- wp:navigation-link {"label":"Spokane","url":"https://spokane.wsu.edu/"} /-->
			<!-- wp:navigation-link {"label":"Tri-Cities","url":"https://tricities.wsu.edu/"} /-->
			<!-- wp:navigation-link {"label":"Vancouver","url":"https://www.vancouver.wsu.edu/"} /-->
			<!-- wp:navigation-link {"label":"Everett","url":"https://everett.wsu.edu/"} /-->
			<!-- wp:navigation-link {"label":"Global Campus (online)","url":"https://online.wsu.edu/"} /-->
			<!-- wp:navigation-link {"label":"Extension","url":"https://extension.wsu.edu/"} /-->
		<!-- /wp:navigation -->
	</div>
	<!-- /wp:column -->

	<!-- wp:column -->
	<div class="wp-block-column">
		<!-- wp:heading {"className":"footer-title"} -->
		<h2 class="wp-block-heading footer-title">
			<?php esc_html_e( 'Employees', 'hrswp-theme-wds' ); ?>
		</h2>
		<!-- /wp:heading -->
		<!-- wp:navigation {"overlayMenu":"never","layout":{"type":"flex","orientation":"vertical"},"ariaLabel":"<?php esc_attr_e( 'Employees', 'hrswp-theme-wds' ); ?>"} -->
			<!-- wp:navigation-link {"label":"Workday Self-Service","url":"http://workday.wsu.edu/"} /-->
			<!-- wp:navigation-link {"label":"Percipio Online Learning","url":"https://wsu.percipio.com/"} /-->
			<!-- wp:navigation-link {"label":"WSU Holiday Schedule","url":"#"} /-->
			<!-- wp:navigation-link {"label":"Employee Assistance Program","url":"#"} /-->
			<!-- wp:navigation-link {"label":"Life Events","url":"#"} /-->
		<!-- /wp:navigation -->
	</div>
	<!-- /wp:column -->

	<!-- wp:column -->
	<div class="wp-block-column">
		<!-- wp:heading {"className":"footer-title"} -->
		<h2 class="wp-block-heading footer-title">
			<?php esc_html_e( 'HR Partners', 'hrswp-theme-wds' ); ?>
		</h2>
		<!-- /wp:heading -->
		<!-- wp:navigation {"overlayMenu":"never","layout":{"type":"flex","orientation":"vertical"},"ariaLabel":"<?php esc_attr_e( 'HR Partners', 'hrswp-theme-wds' ); ?>"} -->
			<!-- wp:navigation-link {"label":"Classification and Compensation","url":"#"} /-->
			<!-- wp:navigation-link {"label":"Recruitment Toolkit","url":"#"} /-->
		<!-- /wp:navigation -->
	</div>
	<!-- /wp:column -->

	<!-- wp:column -->
	<div class="wp-block-column">
		<!-- wp:heading {"className":"footer-title"} -->
		<h2 class="wp-block-heading footer-title">
			<?php esc_html_e( 'WSU Resources', 'hrswp-theme-wds' ); ?>
		</h2>
		<!-- /wp:heading -->
		<!-- wp:navigation {"overlayMenu":"never","layout":{"type":"flex","orientation":"vertical"},"ariaLabel":"<?php esc_attr_e( 'WSU Resources', 'hrswp-theme-wds' ); ?>"} -->
			<!-- wp:navigation-link {"label":"Payroll","url":"https://payroll.wsu.edu/"} /-->
			<!-- wp:navigation-link {"label":"MyWSU","url":"https://my.wsu.edu/"} /-->
			<!-- wp:navigation-link {"label":"WSU Insider","url":"https://news.wsu.edu/"} /-->
			<!-- wp:navigation-link {"label":"WSU A-Z Index","url":"https://index.wsu.edu/"} /-->
		<!-- /wp:navigation -->
	</div>
	<!-- /wp:column -->
</div>
<!-- /wp:columns -->
