/**
 * Internal dependencies
 */
const { plugins } = require( './tools/shared' );

const { NODE_ENV: mode = 'development' } = process.env;

module.exports = {
	ident: 'postcss',
	sourceMap: mode === 'development',
	plugins,
};
