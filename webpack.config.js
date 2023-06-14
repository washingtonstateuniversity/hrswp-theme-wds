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

const { NODE_ENV: mode = 'development' } = process.env;

function escapeRegExp( string ) {
	return string.replace( /[\\^$.*+?()[\]{}|]/g, '\\$&' );
}

const stylesTransform = ( content ) => {
	return postcss( [
		require( 'postcss-import' )( {
			path: 'src/',
		} ),
		require( 'postcss-preset-env' )( {
			stage: 2,
			autoprefixer: {
				grid: true,
			},
			features: {
				'media-query-ranges': true,
				'nesting-rules': true,
				'text-decoration-shorthand': true,
			},
		} ),
		require( 'cssnano' )( {
			preset: [
				'default',
				{
					discardComments: {
						removeAll: true,
					},
					normalizeWhitespace: mode === 'production',
				},
			],
		} ),
	] )
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
			patterns: [
				{
					from: './src/block-library/*/block.css',
					to( { absoluteFilename } ) {
						const [ , dirname ] = absoluteFilename.match(
							new RegExp(
								`([\\w-]+)${ escapeRegExp( sep ) }block.css$`
							)
						);

						return join( 'block-library', dirname, 'block.css' );
					},
					transform: stylesTransform,
				},
			],
		} ),
	].filter( Boolean ),
};
