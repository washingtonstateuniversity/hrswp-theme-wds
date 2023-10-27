/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { url } = attributes;
	const blockProps = useBlockProps.save();
	const { children, ...innerBlocksProps } =
		useInnerBlocksProps.save( blockProps );

	const logoLockupContent = url ? (
		<a href={ url } { ...innerBlocksProps }>
			{ children }
		</a>
	) : (
		<span { ...innerBlocksProps }>{ children }</span>
	);

	return logoLockupContent;
}
