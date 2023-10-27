# HRSWP Theme WDS

Author: Adam Turner
Author: Washington State University
URI: <https://github.com/washingtonstateuniversity/hrswp-theme-wds/>

<!--
Changelog formatting (http://semver.org/):

## Major.MinorAddorDeprec.Bugfix YYYY-MM-DD

### Added (for new features.)
### Changed (for changes in existing functionality.)
### Deprecated (for soon-to-be removed features.)
### Removed (for now removed features.)
### Fixed (for any bug fixes.)
### Security (in case of vulnerabilities.)
-->

## 0.5.0 (2023-10-27)

### Added

- Add post featured image styles. (bf326e9)
- Create main sidebar template part and pattern. (dd3c959)
- Create main header styles to close #55. (a587a7c)
- Create main content layout styles and adjust padding for #55. (39b7349)
- Style site navigation component small- and large-screen views. (19e78fe)
- Set up primary layout. (29c66e4)
- Create Logo Lockup block for header for #63. (c30d23a)
- Format and style pagination links for #57. (d9357f2)
- Set up Core search block options and styles for #57. (e20241d)
- Add post title styles for #57. (ffc82a0)
- Extend Gravity Forms form styles for #57. (3660101)
- Style post author block. (e4c4835)
- Create table block styles for #44, loaded externally. (bca602e, 2e2693b)
- Add quote block styles for #44. (1ac96f0)
- Set up editor-only styles. (1ac96f0)
- Create alternate stylesheet build scripts and use `wp_enqueue_block_style` to load per-block styles in addition to those in `theme.json` to close #56. (ec963c3)
- Style core post date block for #15. (24d59b0)
- Create base separator block style for #15.
- Style core list block for #44 and add list style variants to close #45. (492c221)
- Create image block styles with outline variation for #15. (0848084)
- Create global quote styles for #15. (9133b0c)
- Create global cite styles for #43. (9455a3d)
- Create global caption styles for #43. (90e957d)
- Create core button styles with shadow and radius presets, core button variations, and add styles. (3449d1a, aff438a)
- Set up block style variation registration methods to close #41. (071fd18)
- Close #9 set up CSS build tools and loader. (a56f2af)
- Add global link styles, underline styles, and interaction styles. (f472d3a)
- Define default block gap and available spacing units. (5dc011e)
- Define color palette, custom color values, gradient presets, and border color settings to close #38. (67a280c)
- Add IBM Plex Mono font. (d2fade3)
- Close #14 set up local fonts and base typography including font files. (cfe53b1)
- Add fast-glob package. (4f18b04)
- Add copy-webpack-plugin package. (303bb1f)
- Add postcss-cli package for manually generating alt stylesheets. (ce1eb27)
- Add postcss package for manually generating alt stylesheets. (4cebc78)
- Add wp:prettier package for more reliable linting. (18bc646)
- Add postcss-preset-env package. (a56f2af)
- Add postcss-import package. (a56f2af)
- Add cssnano package for npm v<7. (a56f2af)

### Changed

- Bump WordPress tested-to to 6.4.
- Style Core social icons block without inline styles to close #54. (f241161)
- Update and style archive template with sidebar to close #74. (2603787)
- Set feature image resolution (attribute added in WordPress 6.4). (c2231b9)
- Modify header link styles to remove underline and color. (10b5742)
- Style single post template with sidebar. (dd3c959)
- Add social links to post meta pattern. (dd3c959)
- Replace post-author block with hardcoded byline. (4961330)
- Rename footer deeplinks pattern and replace links with nav components. (4961330)
- Move "audiences" navigation component to a pattern. (4961330)
- Merge `header-global` and `header-unit` template parts into main `header` part. (4961330)
- Merge site footer into page footer, update and style page footer with deeplinks pattern, and style site footer for #55. (598e468)
- Update and style global footer to close #30. (d244ff2)
- Replace WP Core navigation block styles with local styles. (19e78fe)
- Update site navigation component styles for #30. (19e78fe)
- Replace site navigation open and close menu event handler links and with button elements to close #71. (19e78fe)
- Replace quicklinks event handler link with button and add search icon for #71. (4bb6fc3)
- Add button element option to SVG Selector block to close #70. (361da7b)
- Update all blocks to api version 3 for WordPress 6.3 to close #65. (6d56ea0)
- Update header with new WDS v3 header layout for #63. (13c2687)
- Modify per-block style loader to use block.json files instead of static array. (9f8e8fd)
- Set up SVG Selector block color controls and styles, load SVG Selector block styles internally, and fix round style clipping for #57. (7de6591)
- Load list styles internally on a per-block basis. (99ab539)
- Replace custom tags HTML with Core block. (a2a041d)
- Replace custom categories HTML with Core post terms block and style for #15. (f6e7a2d)
- Enable media query range and text decoration shorthand support. (886d10e)
- Close #35 set up block spacing support with custom steps. (eb2d13d)
- Set default content width to 1200px and wide width to 1400px. (eb2d13d, 39b7349)
- Rename Montserrat files. (d2fade3)
- Upgrade `wp-coding-standards/wpcs` to v3 and remove packages replaced by WPCS v3 and update phpcs config and GitHub Actions for WPCS v3 to close #68. (9a42523)
- Upgrade Node.js version (to 16) with WP Scripts and associated npm build tools to close #67. (ef852cc)

### Removed

- Remove WP core post terms styles. (4961330)
- Remove extra paragraph styles as unneeded. (020a5ac)

### Fixed

- Fix #79 Remove post meta footer from page template. (2935b99)
- Fix #75 Invalid block issues in templates and parts. (b87d00b)
- Fix #76 Update main sidebar to work with any template. (6181afa)
- Fix #72 Clean up templates and patterns: rename dirs and files to match class names, move user-created content into patterns, and remove theme attributes from template part tags. (4961330)
- Fix #64 use margin style now that Core layout styles issues is resolved in WP 6.3. (5ffb32c)
- Fix #62 Extend default WP Scripts Webpack config to process internally loaded css files, rename `blocks` directory to `block-library` for consistency, and remove now-unused `:alt` build scripts. (c0c91bc, 774a22e)
- Fix #61 SVG Selector block: Unresponsive icon background color control. (76c4557)
- Fix #60 SVG Selector Block: Separate icon color from text (label) color. (2267efc)
- Fix #50 replace custom author credit with author block to align WDS and WP HTML. (c82ceb0)
- Fix #39 Add "constrained" layout type to fix content width and align wide style. (eb2d13d)

## 0.4.0 (2023-04-13)

### Added

- Create SVG icon selector block to handling inserting SVG icons into block content, close #26. (6233fe8, ab7cc50)
- Create SVG helper class. (5f73216)
- Create base version of vertical site nav. (911aea5)
- Create asset loader and block registration functions for scripts and styles. (445a7f5)
- Create javascript build pipeline. (445a7f5)
- Create eslint config extending WP default rules. (fc35c34)
- Add classnames package. (81f6ca7)
- Add @wordpress/icons package. (dadd554)
- Add lodash package. (85b50bf)

### Changed

- Replace hardcoded header logo with svg icon block. (f8d78e7)
- Replace footer svg in pattern with svg icon block. (f8d78e7)
- Update GitHub actions to use specified Node versions and upgraded actions. (752b55c)
- Specify Node and npm versions in `package.json` and use WP Scripts `check engines` to manage. (752b55c)

### Fixed

- Upgrade to ramsey/composer-install v2 to resolve deprecation warnings. (caeb8af)
- Fix #28 require npm v6 to correct GitHub actions error: `fsevents not accessible from jest-haste-map`. (752b55c)

## 0.3.0 (2023-03-23)

### Added

- Close #23 create post meta pattern for article footer. (dd7ddcf)
- Create front page template for home page. (e1fb846)
- Create single template for displaying individual posts. (4127a55)
- Create page template. (ff580b7)
- Create search page template. (5121498)
- Create home template for "all posts" view. (5fdcddd)
- Create blank template. (f401f14)
- Create archive template. (c776e0b)
- Create 404 template. (ac3ed4c)

### Changed

- Clean up templates and remove layouts for now. (3a14e97)
- Register custom templates and parts. (a75f429)
- Close #24 convert query block "no posts found" message to pattern. (a8670fc)
- Add page title to index template. (cca329e)
- Close #11 finish site footer with nav menus, not using sidebars. (76c9216)

### Fixed

- Fix #25 standardize post date placement after title. (d456635)
- Fix #22 reduce divs in article footer template part. (5c4cfbc)
- Remove index template query ID. (c776e0b)
- Move body content out of header and add missing class in templates. (1eb9bf1)

## 0.2.0 (2023-03-10)

### Added

- Close #5 set up base functions file. (a723afa)
- Close #10 create GitHub CI actions workflow. (0ba4a06)
- Add stylelint config. (4382170)
- Create composer config and install linting packages. (4382170)
- Create phpcs config file. (4382170, b825494)
- Add Prettier config with to import the default config file and expose it in the project root for editor integration. (4382170)
- Create `.gitattributes` file with `export-ignore` rules. (d8678d2, 4382170)
- Add npm package json lint config to allow GPL 3 license. (d8678d2)
- Add ignore file for markdownlint. (d8678d2)
- Add @wordpress/scripts package. (d8678d2)
- Add npm-run-all package. (4632c57)

### Changed
 
- Add @wordpress/scripts script commands. (d8678d2, 4382170)

### Fixed

-  Fix missing `@Package` declaration, namespace, and WP global var issue in header template part. (b825494)
- Fix missing `@Package` declaration, namespace, and replace `date()` with `gmdate()` in footer template part. (b825494)
- Fix package.json formatting. (a69a8ec)

## 0.1.0 (2023-03-01)

### Added

- Close #1 create initial README content. (1470a10)
- Fill in base `index.html` template with template parts and structure to match the WSU Web Design System theme. (89ab013)
- Create placeholder site vertical nav and site footer template parts. (89ab013)
- Create global footer template part with footer copyright pattern. (89ab013)
- Create site header template part with global site title pattern. (89ab013)
- Create global header template part. (89ab013)
- Create WSU article footer template part. (89ab013)
- Create `package.json` file. (9def923)
- Create required block theme file placeholders: `style.css`, `theme.json`, and `templates/index.html`. (625cf99)
- Create CHANGELOG, contributors guide, and GitHub issue and pull request templates. (68b4dba)
- Add .gitignore and .editorconfig files. (68b4dba)
- Add readme and license. (3f4e145)
