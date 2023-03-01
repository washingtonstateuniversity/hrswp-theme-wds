# WSU Human Resource Services Theme WDS

[![Support Level](https://img.shields.io/badge/support-active-green.svg)](#support-level) [![Build Status](https://github.com/washingtonstateuniversity/hrswp-theme-wds/actions/workflows/coding-standards.yml/badge.svg)](https://github.com/washingtonstateuniversity/hrswp-theme-wds/actions) [![Release Version](https://img.shields.io/github/v/release/washingtonstateuniversity/hrswp-theme-wds)](https://github.com/washingtonstateuniversity/hrswp-theme-wds/releases/latest) ![WordPress tested up to version 6.1.1](https://img.shields.io/badge/WordPress-v6.1.1%20tested-success.svg) ![WordPress Full Site Editor Ready](https://img.shields.io/badge/block-theme-blueviolet) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![GPLv3 License](https://img.shields.io/github/license/washingtonstateuniversity/hrswp-theme-wds)](https://github.com/washingtonstateuniversity/hrswp-theme-wds/blob/develop/LICENSE.md)

## Overview

This is the WordPress theme for the Washington State University Human Resource Services (WSU HRS) website. It is a standalone theme based on the WSU Web Design System and built as a block theme for full site editing.

## Description

Block themes use blocks for all parts of the site, including navigation menus, header, content, and site footer. This allows admins to edit all parts of the site and to create new templates without having to modify the theme code. With a block theme, you can place and edit blocks outside your content using the Template Editor or Site Editor.

### Templates

This theme includes a variety of built-in templates to handle displaying different types of content.

### Patterns

A WordPress pattern is a collection of blocks arranged together into an intentional section for a page or post. Once inserted into a page, the author can edit and customize the blocks to their needs. Patterns help to add complex layouts without having to start from scratch every time.

This theme includes patterns both at the template level and for general content.

### Settings


## Installation

This theme is not in the WordPress directory. You have to install it manually either with SFTP or from the WordPress themes screen:

1. [Download the latest version from GitHub](https://github.com/washingtonstateuniversity/hrswp-theme-wds/archive/stable.zip) and rename the .zip file to: `hrswp-theme-wds.zip`.
2. From here you can either extract the files into your plugins directory via SFTP or navigate to the Plugins screen in the admin area of your site to upload it through the plugin uploader (steps 3-5).
3. Select Themes > Add New and then select the "Upload Theme" button.
4. Select "Browse" and locate the downloaded .zip file for the theme (it **must** be a file in .zip format) on your computer. Select "Install Now."
5. You should receive a message that the theme installed correctly. Select "Activate Theme" or return to the themes page to activate later.

### Dependencies


### Updates

This theme will not update automatically and will not notify of available updates. It is your responsibility to make sure you stay up to date with the latest version.

### Deactivating and Deleting: Theme Data

This theme does not store any user information.

## For Developers

The development environment relies on NPM, using the [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) package, and Composer. The `package.json` and `composer.json` configuration files manage dependencies for testing and building the production version of the theme. The NPM scripts in `package.json` do most of the heavy lifting. Please follow the development workflow outlined in the [Contributing guide](https://github.com/washingtonstateuniversity/hrswp-theme-wds/blob/develop/CONTRIBUTING.md).

### Initial Setup

1. Clone the theme to a directory on your computer.
2. Change into that directory.
3. Install the NPM and Composer dependencies.
4. Ensure linting and coding standards checks are working -- this should exit with zero (0) errors.
5. Create a new branch for local development.

In a terminal:

~~~bash
git clone https://github.com/washingtonstateuniversity/hrswp-theme-wds.git
cd hrswp-theme-wds
npm install
composer install
npm run lint
git checkout -b new-branch-name
~~~

### Build Commands

The following commands will handle basic build functions.

- `npm run build`: Transforms the code according the configuration so it’s ready for production and optimized for the best performance.
- `npm run lint`: Check all PHP and CSS files for coding standards compliance.
- `npm run start`: Transforms your code according the configuration provided so it’s ready for development.

See the scripts section of `package.json` for additional available commands.

## Support Level

**Active:** WSU HRS actively works on this project. We plan to continue work for the foreseeable future, adding new features, enhancing existing ones, and maintaining compatability with the latest version of WordPress. Bug reports, feature requests, questions, and pull requests are welcome.

## Changelog

All notable changes are documented in the [CHANGELOG.md](https://github.com/washingtonstateuniversity/hrswp-theme-wds/blob/develop/CHANGELOG.md), with dates and version numbers.

## Contributing

Please submit bugs and feature requests through [GitHub Issues](https://github.com/washingtonstateuniversity/hrswp-theme-wds/issues). Refer to [CONTRIBUTING.md](https://github.com/washingtonstateuniversity/hrswp-theme-wds/blob/develop/CONTRIBUTING.md) for the development workflow and details for submitting pull requests.
