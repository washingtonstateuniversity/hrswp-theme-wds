/**
 * External dependencies
 */
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const { join, sep } = require( 'path' );
const fastGlob = require( 'fast-glob' );
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

/*
 * Matches a block's frontend JS filepaths.
 */
const blockViewRegex = new RegExp(
	/block-library\/(?<filename>.*\/frontend.*).js$/
);

/*
 * Creates the frontend script entrypoints.
 */
const createEntrypoints = () => {
	const blockViewScriptPaths = fastGlob.sync(
		'./src/block-library/**/frontend*.js'
	);

	return blockViewScriptPaths.reduce( ( entries, scriptPath ) => {
		const result = scriptPath.match( blockViewRegex );

		if ( ! result?.groups?.filename ) {
			return entries;
		}

		return {
			...entries,
			[ result.groups.filename ]: scriptPath,
		};
	}, {} );
};

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
	entry: Object.assign( defaultConfig.entry(), createEntrypoints() ),
	output: {
		filename: ( pathData ) => {
			return pathData.chunk.name === 'index'
				? '[name].js'
				: 'block-library/[name].js';
		},
		path: defaultConfig?.output?.path,
	},
	plugins: [
		...defaultConfig.plugins,
		new CopyWebpackPlugin( {
			patterns: Object.entries( {
				'./src/block-library/': 'block-library',
				'./src/template-library': 'template-library',
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
