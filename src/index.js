/**
 * Internal dependencies
 */
import {
	registerBlocks,
	registerStyles,
	addBlockFilters,
	showEditorBlocks,
} from './block-library';
import './style.css';
import './editor.css';

registerBlocks();
registerStyles();
addBlockFilters();
showEditorBlocks();
