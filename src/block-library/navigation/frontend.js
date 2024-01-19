/**
 * The site navigation menu
 */
class SiteNavigation {
	constructor( siteNavigationBlock ) {
		this.parent = siteNavigationBlock;
		this.sidebarWrapper = document.querySelector( '.sidebar-wrapper' );
		this.menuControls = {
			menuToggle: document.querySelector( 'button.open-site-navigation' ),
			closeMenuTarget: document.querySelector(
				'.wsu-navigation-menu--close .hrswds-svg-icon-container'
			),
		};

		this.openMenu = this.openMenu.bind( this );
		this.closeMenu = this.closeMenu.bind( this );
		this.toggleMenu = this.toggleMenu.bind( this );
		this.setSubmenuActive = this.setSubmenuActive.bind( this );

		this.initCloseMenuButton();
		this.addEventListeners();
		this.setSubmenuActive();
	}

	openMenu( event ) {
		event.preventDefault();
		this.sidebarWrapper.classList.add( 'show-sidebar' );

		Object.values( this.menuControls ).forEach( ( control ) => {
			control.setAttribute( 'aria-expanded', 'true' );
			control.setAttribute( 'aria-label', 'Close site navigation' );
			control.setAttribute( 'title', 'Close site navigation' );
		} );
	}

	closeMenu( event ) {
		event.preventDefault();
		this.sidebarWrapper.classList.remove( 'show-sidebar' );

		Object.values( this.menuControls ).forEach( ( control ) => {
			control.setAttribute( 'aria-expanded', 'false' );
			control.setAttribute( 'aria-label', 'Open site navigation' );
			control.setAttribute( 'title', 'Open site navigation' );
		} );
	}

	toggleMenu( event ) {
		if ( this._isMenuOpen() ) {
			this.closeMenu( event );
		} else {
			this.openMenu( event );
		}
	}

	initCloseMenuButton() {
		const menuButton = this.menuControls.closeMenuTarget;

		menuButton.setAttribute( 'title', 'Close site navigation' );
		menuButton.setAttribute( 'aria-label', 'Close site navigation' );
		menuButton.setAttribute( 'aria-expanded', 'false' );
		menuButton.setAttribute( 'aria-controls', 'site-navigation-parent' );
	}

	addEventListeners() {
		this.menuControls.menuToggle.addEventListener(
			'click',
			this.toggleMenu
		);
		this.menuControls.closeMenuTarget.addEventListener(
			'click',
			this.closeMenu
		);

		document.addEventListener( 'keyup', ( event ) => {
			if ( this._isMenuOpen() && event.key === 'Escape' ) {
				this.closeMenu( event );
			}
		} );
	}

	/**
	 * Sets submenu with current page to expanded.
	 *
	 * Using setTimeout in order to not be overwritten by WP Core navigation view
	 * script.
	 */
	setSubmenuActive() {
		const currentMenuTarget = this.parent.querySelector(
			'.current-menu-ancestor ~ button'
		);

		if ( currentMenuTarget ) {
			setTimeout(
				() => currentMenuTarget.setAttribute( 'aria-expanded', true ),
				100
			);
		}
	}

	_isMenuOpen() {
		return this.sidebarWrapper.classList.contains( 'show-sidebar' );
	}
}

/**
 * Initializes the navigation modifers.
 */
function init() {
	const siteNavigationBlock = document.querySelector( 'nav.site-navigation' );

	if ( siteNavigationBlock ) {
		new SiteNavigation( siteNavigationBlock );
	}
}

init();
