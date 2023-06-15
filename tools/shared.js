const { NODE_ENV: mode = 'development' } = process.env;

/**
 * The PostCSS plugins.
 */
const plugins = [
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
];

module.exports = { plugins };
