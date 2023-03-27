/**
 * WordPress dependencies
 */
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

/**
 * The block template.
 *
 * @constant
 * @type {string[]}
 */
const TEMPLATE = [ [ 'core/paragraph' ] ];

export default function NavigationEdit() {
	const blocksProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blocksProps, {
		template: TEMPLATE,
	} );

	return <div { ...innerBlocksProps } />;
}
