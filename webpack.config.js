/**
 * External dependencies
 */
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const { join, sep } = require( 'path' );
const postcss = require( 'postcss' );

/**
 * WordPress dependencies
 */
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

/**
 * Internal dependencies
 */
const { plugins } = require( './tools/shared' );

/**
 * Escapes the RegExp special characters.
 *
 * @param {string} string Input string.
 *
 * @return {string} Regex-escaped string.
 */
function escapeRegExp( string ) {
	return string.replace( /[\\^$.*+?()[\]{}|]/g, '\\$&' );
}

/**
 * Uses PostCSS to transform css for development or production.
 *
 * @param {string} content The css content to modify.
 *
 * @return {string} The modified css content.
 */
const stylesTransform = ( content ) => {
	return postcss( plugins )
		.process( content, {
			from: 'src/app.css',
			to: 'dest/app.css',
		} )
		.then( ( result ) => result.css );
};

module.exports = {
	...defaultConfig,
	plugins: [
		...defaultConfig.plugins,
		new CopyWebpackPlugin( {
			patterns: Object.entries( {
				'./src/block-library/': 'block-library',
			} ).flatMap( ( [ from, to ] ) => [
				{
					from: `${ from }/**/block.css`,
					to( { absoluteFilename } ) {
						const [ , dirname ] = absoluteFilename.match(
							new RegExp(
								`([\\w-]+)${ escapeRegExp( sep ) }block\\.css$`
							)
						);

						return join( to, dirname, 'block.css' );
					},
					transform: stylesTransform,
				},
			] ),
		} ),
	].filter( Boolean ),
};
