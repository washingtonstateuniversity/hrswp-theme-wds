<?php
/**
 * Title: FAQ
 * Slug: hrswds/text-faq
 * Categories: text, about
 * Keywords: faq, about, frequently asked questions
 * Viewport width: 1400
 *
 * @package HRSWP_ThemeWDS
 */

namespace HRSWP\Theme\WDS\Patterns\TextFaq;

?>

<!-- wp:group {"metadata":{"name":"<?php echo esc_html_x( 'FAQs', 'Name of the FAQ pattern', 'hrswp-theme-wds' ); ?>"},"align":"wide","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide">
	<!-- wp:heading {"className":"is-style-callout"} -->
	<h2 class="wp-block-heading is-style-callout"><?php echo esc_html_x( 'FAQs', 'Heading of the FAQs', 'hrswp-theme-wds' ); ?></h2>
	<!-- /wp:heading -->

	<!-- wp:group {"layout":{"type":"default"}} -->
	<div class="wp-block-group">
		<!-- wp:details {"fontSize":"large"} -->
		<details class="wp-block-details has-large-font-size">
			<summary><?php echo esc_html_x( 'What are December Holiday Reduced Operations?', 'Question on the details block', 'hrswp-theme-wds' ); ?></summary>
			<!-- wp:paragraph {"placeholder":"Type / to add a hidden block","fontSize":"medium"} -->
			<p class="has-medium-font-size"><?php echo esc_html_x( 'Since 2011, the university reduced business operations during the December holiday period. Essential departments and public services must be open and available, but the reduced operations period allows colleges, areas, and departments flexibility with regards to staffing and operations.', 'Hidden answer on the details block', 'hrswp-theme-wds' ); ?></p>
			<!-- /wp:paragraph -->
		</details>
		<!-- /wp:details -->

		<!-- wp:details {"fontSize":"large"} -->
		<details class="wp-block-details has-large-font-size">
			<summary><?php echo esc_html_x( 'Where is the Holiday Schedule and the December Holiday Reduced Operations schedule?', 'Question on the details block', 'hrswp-theme-wds' ); ?></summary>
			<!-- wp:paragraph {"placeholder":"Type / to add a hidden block","fontSize":"medium"} -->
			<p class="has-medium-font-size"><?php echo wp_kses_post( _x( 'The <a>Holiday schedule</a> and <a>December Holiday Reduced Operations</a> schedule can be found on the HRS website. The observed holidays during the December Holiday Reduced Operations will vary from year to year.', 'Hidden answer on the details block', 'hrswp-theme-wds' ) ); ?></p>
			<!-- /wp:paragraph -->
		</details>
		<!-- /wp:details -->

		<!-- wp:details {"fontSize":"large"} -->
		<details class="wp-block-details has-large-font-size">
			<summary><?php echo esc_html_x( 'Who decides which operations and services operate during Reduced Operations?', 'Question on the details block', 'hrswp-theme-wds' ); ?></summary>
			<!-- wp:paragraph {"placeholder":"Type / to add a hidden block","fontSize":"medium"} -->
			<p class="has-medium-font-size"><?php echo esc_html_x( 'The Vice President, Chancellor or Dean, of a given area, campus or college will determine which business operations and services under their jurisdiction will be required to remain open and staffed, including reduced staffing levels.', 'Hidden answer on the details block', 'hrswp-theme-wds' ); ?></p>
			<!-- /wp:paragraph -->
		</details>
		<!-- /wp:details -->

		<!-- wp:details {"fontSize":"large"} -->
		<details class="wp-block-details has-large-font-size">
			<summary><?php echo esc_html_x( 'When should the building coordinator or office administrator notify Facilities Services of buildings or offices that will be occupied during reduced operations?', 'Question on the details block', 'hrswp-theme-wds' ); ?></summary>
			<!-- wp:paragraph {"placeholder":"Type / to add a hidden block","fontSize":"medium"} -->
			<p class="has-medium-font-size"><?php echo esc_html_x( 'On the Pullman Campus, Facility Services contacts areas about their building needs during the Fall semester. Colleges and Areas are encouraged to be proactive and notify Facilities Services prior to the second week of November. Individuals not located in Pullman should contact their Facilities group by mid-November.', 'Hidden answer on the details block', 'hrswp-theme-wds' ); ?></p>
			<!-- /wp:paragraph -->
		</details>
		<!-- /wp:details -->

		<!-- wp:details {"fontSize":"large"} -->
		<details class="wp-block-details has-large-font-size">
			<summary><?php echo esc_html_x( 'How flexible should areas and managers be when determining staffing levels?', 'Question on the details block', 'hrswp-theme-wds' ); ?></summary>
			<!-- wp:paragraph {"placeholder":"Type / to add a hidden block","fontSize":"medium"} -->
			<p class="has-medium-font-size"><?php echo esc_html_x( 'Areas be as flexible as possible when reviewing requests for time off or requests to work. Areas need to consider staffing requirements to meet deadlines for grant submittals, payroll, and personnel processing. Managers are encouraged to be as flexible as possible when determining schedules during the December Holiday Reduced Operations. If employees request to work and there is work to be performed, managers can and are encouraged to allow employees to work. Flexibility is encouraged and supported by the WSU administration to the extent that it works for both managers and employees.', 'Hidden answer on the details block', 'hrswp-theme-wds' ); ?></p>
			<!-- /wp:paragraph -->
		</details>
		<!-- /wp:details -->

		<!-- wp:details {"fontSize":"large"} -->
		<details class="wp-block-details has-large-font-size">
			<summary><?php echo esc_html_x( 'Do I need to report my leave during the December Holiday Reduced Operations?', 'Question on the details block', 'hrswp-theme-wds' ); ?></summary>
			<!-- wp:paragraph {"placeholder":"Type / to add a hidden block","fontSize":"medium"} -->
			<p class="has-medium-font-size">
				<?php echo esc_html_x( 'Yes, employees are to report their leave, per normal processes, during the Reduced Operations period. Employees who do not have sufficient annual leave balances, available personal holiday, and/or accrued compensatory time, may request leave without pay (LWOP) in accordance with department guidelines. (LWOP may affect eligibility for holiday pay.)', 'Hidden answer on the details block', 'hrswp-theme-wds' ); ?>
			</p>
			<!-- /wp:paragraph -->
		</details>
		<!-- /wp:details -->

		<!-- wp:details {"fontSize":"large"} -->
		<details class="wp-block-details has-large-font-size">
			<summary><?php echo esc_html_x( 'Are payroll processing dates impacted by the December Holiday Reduced Operations?', 'Question on the details block', 'hrswp-theme-wds' ); ?></summary>
			<!-- wp:paragraph {"placeholder":"Type / to add a hidden block","fontSize":"medium"} -->
			<p class="has-medium-font-size">
				<?php echo esc_html_x( 'No, to ensure faculty and staff are appropriately paid, payroll processing will occur during the Reduced Operations period. Areas/colleges must ensure staff are scheduled to process required payroll or personnel actions in accordance with the payroll document schedule.', 'Hidden answer on the details block', 'hrswp-theme-wds' ); ?>
			</p>
			<!-- /wp:paragraph -->
		</details>
		<!-- /wp:details -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->
