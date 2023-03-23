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

## 0.3.0 (:construction: TBD)

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
