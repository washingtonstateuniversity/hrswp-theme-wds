/**
 * Navigation menu modifiers
 */

/**
 * Sets submenu with current page to expanded.
 *
 * Using setTimeout in order to not be overwritten by WP Core navigation view
 * script.
 *
 * @param {Node} navigationBlock
 */
function setSubmenuActive( navigationBlock ) {
	const currentMenuTarget = navigationBlock.querySelector(
		'.current-menu-ancestor ~ button'
	);

	if ( currentMenuTarget ) {
		setTimeout(
			() => currentMenuTarget.setAttribute( 'aria-expanded', true ),
			100
		);
	}
}

/**
 * Initializes the navigation modifers.
 */
function init() {
	const siteNavigationBlock = document.querySelector( 'nav.site-navigation' );

	if ( siteNavigationBlock ) {
		setSubmenuActive( siteNavigationBlock );
	}
}

init();
