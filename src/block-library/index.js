/**
 * WordPress dependencies
 */
import { registerBlockStyle, registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import * as button from './button';
import * as heading from './heading';
import * as image from './image';
import * as list from './list';
import * as logoLockup from './logo-lockup';
import * as quote from './quote';
import * as separator from './separator';
import * as svgSelector from './svg-selector';

/**
 * Blocks to register
 */
const blocks = [ logoLockup, svgSelector ];

/**
 * Blocks to register styles for
 */
const blockStyles = [ button, heading, image, list, quote, separator ];

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
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
