/**
 * WordPress dependencies
 */
import { registerBlockStyle, registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import * as button from './button';
import * as image from './image';
import * as svgSelector from './svg-selector';

/**
 * Blocks to register
 */
const blocks = [ svgSelector ];

/**
 * Blocks to register styles for
 */
const blockStyles = [ button, image ];

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
 * Function to add styles to a given block
 *
 * @param {Object} block The block to be modified.
 */
const registerStyle = ( block ) => {
	if ( ! block ) {
		return;
	}
	const { metadata, name } = block;
	registerBlockStyle( name, metadata.styles );
};

/**
 * Function to register blocks.
 *
 */
export const registerBlocks = () => {
	blocks.forEach( registerBlock );
};

/**
 * Function to register block styles.
 */
export const registerStyles = () => {
	blockStyles.forEach( registerStyle );
};
