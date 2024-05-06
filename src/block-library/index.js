/**
 * WordPress dependencies
 */
import { registerBlockStyle, registerBlockType } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import * as button from './button';
import * as cover from './cover';
import * as heading from './heading';
import * as image from './image';
import * as list from './list';
import * as logoLockup from './logo-lockup';
import * as quote from './quote';
import * as separator from './separator';
import * as spacer from './spacer';
import * as svgSelector from './svg-selector';
import * as table from './table';

/**
 * Blocks to register
 *
 * @type {Object[]}
 */
const blocks = [ logoLockup, svgSelector ];

/**
 * Blocks to show
 *
 * @type {string[]}
 */
const showBlocks = [ 'core/button', 'core/buttons' ];

/**
 * Blocks to register styles for
 *
 * @type {Object[]}
 */
const blockStyles = [
	button,
	cover,
	heading,
	image,
	list,
	quote,
	separator,
	spacer,
	table,
];

/**
 * Blocks to filter
 *
 * @type {Object[]}
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

/**
 * Update the provided block types to be visible.
 */
export const showEditorBlocks = () => {
	dispatch( 'core/edit-post' ).showBlockTypes( showBlocks );
};
