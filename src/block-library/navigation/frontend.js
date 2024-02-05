/**
 * The site navigation menu
 */
class SiteNavigation {
	constructor( siteNavigationBlock ) {
		this.parent = siteNavigationBlock;
		this.sidebarWrapper = document.querySelector( '.sidebar-wrapper' );
		this.navigationScrim = document.querySelector(
			'.wsu-navigation-menu--scrim'
		);

		this.openSearchTargets = document.querySelectorAll(
			'.quicklinks-panel-toggle .wp-element-button'
		);
		this.closeSearchTarget = document.querySelector(
			'.search-menu--close .hrswds-svg-icon-container'
		);

		this.menuControls = {
			menuToggle: document.querySelector( 'button.open-site-navigation' ),
			closeMenuTarget: document.querySelector(
				'.wsu-navigation-menu--close .hrswds-svg-icon-container'
			),
		};

		this.openMenu = this.openMenu.bind( this );
		this.closeMenu = this.closeMenu.bind( this );
		this.toggleMenu = this.toggleMenu.bind( this );

		this.openSearchMenu = this.openSearchMenu.bind( this );
		this.closeSearchMenu = this.closeSearchMenu.bind( this );

		this.setSubmenuActive = this.setSubmenuActive.bind( this );

		this.openSearchTargets.forEach( ( target ) => {
			this.initButton(
				target,
				'Open search menu',
				'quicklinks-search-menu'
			);
		} );

		this.initButton(
			this.menuControls.closeMenuTarget,
			'Close site navigation',
			'site-navigation-parent'
		);
		this.initButton(
			this.closeSearchTarget,
			'Close search menu',
			'quicklinks-search-menu'
		);

		this.addEventListeners();
		this.setSubmenuActive();
	}

	openMenu() {
		this.sidebarWrapper.classList.add( 'show-sidebar', 'show-scrim-menu' );

		Object.values( this.menuControls ).forEach( ( control ) => {
			control.setAttribute( 'aria-expanded', 'true' );
			control.setAttribute( 'aria-label', 'Close site navigation' );
			control.setAttribute( 'title', 'Close site navigation' );
		} );

		this.navigationScrim.addEventListener( 'click', this.closeMenu );
	}

	closeMenu() {
		this.sidebarWrapper.classList.remove(
			'show-sidebar',
			'show-scrim-menu'
		);

		Object.values( this.menuControls ).forEach( ( control ) => {
			control.setAttribute( 'aria-expanded', 'false' );
			control.setAttribute( 'aria-label', 'Open site navigation' );
			control.setAttribute( 'title', 'Open site navigation' );
		} );
	}

	openSearchMenu() {
		const control = document.getElementById(
			this.closeSearchTarget.getAttribute( 'aria-controls' )
		);
		control.classList.add( 'show-menu' );
		this.sidebarWrapper.classList.add( 'show-scrim-search' );
	}

	closeSearchMenu() {
		const control = document.getElementById(
			this.closeSearchTarget.getAttribute( 'aria-controls' )
		);
		control.classList.remove( 'show-menu' );
		this.sidebarWrapper.classList.remove( 'show-scrim-search' );
	}

	toggleMenu() {
		if ( this._isMenuOpen() ) {
			this.closeMenu();
		} else {
			this.openMenu();
		}
	}

	/**
	 * Sets up a button target.
	 *
	 * @param {Element} button
	 * @param {string}  label
	 * @param {string}  controls
	 */
	initButton( button, label, controls ) {
		button.setAttribute( 'aria-expanded', 'false' );
		button.setAttribute( 'title', label );
		button.setAttribute( 'aria-label', label );
		button.setAttribute( 'aria-controls', controls );
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

		this.openSearchTargets.forEach( ( target ) => {
			target.addEventListener( 'click', this.openSearchMenu );
		} );
		this.closeSearchTarget.addEventListener(
			'click',
			this.closeSearchMenu
		);

		document.addEventListener( 'keyup', ( event ) => {
			if ( this._isMenuOpen() && event.key === 'Escape' ) {
				this.closeMenu();
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
