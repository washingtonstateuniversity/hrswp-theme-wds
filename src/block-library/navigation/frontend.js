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
		this.mediaQuery = window.matchMedia( '(min-width: 1260px)' );

		this.openMenu = this.openMenu.bind( this );
		this.closeMenu = this.closeMenu.bind( this );
		this.toggleMenu = this.toggleMenu.bind( this );
		this.openSearchMenu = this.openSearchMenu.bind( this );
		this.closeSearchMenu = this.closeSearchMenu.bind( this );
		this.handleMediaExpand = this.handleMediaExpand.bind( this );
		this.setSubmenuActive = this.setSubmenuActive.bind( this );

		this.init();
	}

	init() {
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

		return () => {
			this.mediaQuery.removeEventListener(
				'change',
				this.handleMediaExpand
			);
		};
	}

	openMenu() {
		this.sidebarWrapper.classList.add( 'show-sidebar', 'show-scrim-menu' );

		Object.values( this.menuControls ).forEach( ( control ) => {
			this.toggleAttributes( control, 'Close site navigation' );
		} );

		this.navigationScrim.addEventListener( 'click', this.closeMenu );
	}

	closeMenu() {
		this.sidebarWrapper.classList.remove(
			'show-sidebar',
			'show-scrim-menu'
		);

		Object.values( this.menuControls ).forEach( ( control ) => {
			this.toggleAttributes( control, 'Open site navigation' );
		} );
	}

	openSearchMenu() {
		const control = document.getElementById(
			this.closeSearchTarget.getAttribute( 'aria-controls' )
		);
		control.classList.add( 'show-menu' );
		this.sidebarWrapper.classList.add( 'show-scrim-search' );

		this.openSearchTargets.forEach( ( target ) => {
			this.toggleAttributes( target, 'Close search menu' );
		} );
		this.closeSearchTarget.setAttribute( 'aria-expanded', 'true' );

		this.navigationScrim.addEventListener( 'click', this.closeSearchMenu );
	}

	closeSearchMenu() {
		const control = document.getElementById(
			this.closeSearchTarget.getAttribute( 'aria-controls' )
		);
		control.classList.remove( 'show-menu' );
		this.sidebarWrapper.classList.remove( 'show-scrim-search' );

		this.openSearchTargets.forEach( ( target ) => {
			this.toggleAttributes( target, 'Open search menu' );
		} );
		this.closeSearchTarget.setAttribute( 'aria-expanded', 'false' );
	}

	toggleMenu() {
		if ( this._isMenuOpen() ) {
			this.closeMenu();
		} else {
			this.openMenu();
		}
	}

	handleMediaExpand() {
		if ( this.mediaQuery.matches ) {
			this.sidebarWrapper.classList.remove(
				'show-sidebar',
				'show-scrim-menu'
			);
		}
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
			if ( event.key === 'Escape' ) {
				if ( this._isMenuOpen() ) {
					this.closeMenu();
				}
				if ( this._isSearchOpen() ) {
					this.closeSearchMenu();
				}
			}
		} );

		this.mediaQuery.addEventListener( 'change', this.handleMediaExpand );
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

	/**
	 * Updates an element's attributes on menu state change.
	 *
	 * @param {Element} target
	 * @param {string}  label
	 */
	toggleAttributes( target, label = '' ) {
		const ariaExpanded =
			target.getAttribute( 'aria-expanded' ) === 'true'
				? 'false'
				: 'true';

		target.setAttribute( 'aria-expanded', ariaExpanded );
		target.setAttribute( 'aria-label', label );
		target.setAttribute( 'title', label );
	}

	_isMenuOpen() {
		return this.sidebarWrapper.classList.contains( 'show-sidebar' );
	}

	_isSearchOpen() {
		return this.sidebarWrapper.classList.contains( 'show-scrim-search' );
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
