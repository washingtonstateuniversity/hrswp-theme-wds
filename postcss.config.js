const isProduction = process.env.NODE_ENV === 'production';
const plugins = [
	// eslint-disable-next-line import/no-extraneous-dependencies
	require( 'postcss-import' )( {
		path: 'src/',
	} ),
	// eslint-disable-next-line import/no-extraneous-dependencies
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
];

module.exports = {
	ident: 'postcss',
	sourceMap: ! isProduction,
	plugins: isProduction
		? [
			...plugins,
			// eslint-disable-next-line import/no-extraneous-dependencies
			require( 'cssnano' )( {
				preset: [
					'default',
					{
						discardComments: {
							removeAll: true,
						},
					},
				],
			} ),
		]
		: plugins,
};
