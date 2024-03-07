/**
 * WordPress dependencies
 */
import { registerBlockStyle, registerBlockType } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';

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
import * as spacer from './spacer';
import * as svgSelector from './svg-selector';

/**
 * Blocks to register
 */
const blocks = [ logoLockup, svgSelector ];

/**
 * Blocks to register styles for
 */
const blockStyles = [ button, heading, image, list, quote, separator, spacer ];

/**
 * Blocks to filter
 */
const blockFilters = [ spacer ];

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
 * Function to add block filter to a given block
 *
 * @param {Object} block The block to be modified.
 */
const addBlockFilter = ( block ) => {
	if ( ! block ) {
		return;
	}
	const { filters } = block;

	filters.forEach( ( filter ) => {
		const { hookname, namespace, callback } = filter;
		addFilter( hookname, namespace, callback );
	} );
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

/**
 * Function to register block filters.
 */
export const addBlockFilters = () => {
	blockFilters.forEach( addBlockFilter );
};
