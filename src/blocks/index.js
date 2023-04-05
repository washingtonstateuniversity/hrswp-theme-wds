/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import * as svgSelector from './svg-selector';

const blocks = [ svgSelector ];

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}
	const { metadata, settings, name } = block;
	registerBlockType( name, {
		...metadata,
		...settings,
	} );
};

/**
 * Function to register blocks.
 *
 */
export const registerBlocks = () => {
	blocks.forEach( registerBlock );
};
