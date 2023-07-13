/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	URLInput,
	URLPopover,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { Button, ToolbarButton } from '@wordpress/components';
import { link as linkIcon, keyboardReturn } from '@wordpress/icons';

/**
 * The allowed blocks.
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = [
	'hrswds/svg-selector',
	'core/site-title',
	'core/site-tagline',
	'core/group',
];

/**
 * The block template.
 *
 * @constant
 * @type {string[]}
 */
const TEMPLATE = [
	[
		'hrswds/svg-selector',
		{
			iconColor: 'primary',
			iconColorValue:
				'var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dwsu-color-crimson\u002d\u002dcrimson)',
			iconColorClass: 'has-primary-icon-color',
			slug: 'cougar',
			size: 86,
		},
	],
	[
		'core/group',
		{ className: 'wsu-logo-lockup__title-wrapper' },
		[
			[ 'core/site-tagline', { fontSize: 'small' } ],
			[ 'core/site-title', { level: 0, isLink: false } ],
		],
	],
];

const LinkURLPopover = ( {
	url,
	setAttributes,
	setPopover,
	popoverAnchor,
} ) => (
	<URLPopover anchor={ popoverAnchor } onClose={ () => setPopover( false ) }>
		<form
			className="block-editor-url-popover__link-editor"
			onSubmit={ ( event ) => {
				event.preventDefault();
				setPopover( false );
			} }
		>
			<div className="block-editor-url-input">
				<URLInput
					__nextHasNoMarginBottom
					value={ url }
					onChange={ ( nextURL ) =>
						setAttributes( { url: nextURL } )
					}
					placeholder={ __( 'Enter address' ) }
					disableSuggestions={ true }
				/>
			</div>
			<Button
				icon={ keyboardReturn }
				label={ __( 'Apply' ) }
				type="submit"
			/>
		</form>
	</URLPopover>
);

function LogoLockupEdit( { attributes, setAttributes, isSelected } ) {
	const { url } = attributes;
	const [ showURLPopover, setPopover ] = useState( false );
	const [ popoverAnchor, setPopoverAnchor ] = useState( null );

	const blockProps = useBlockProps();
	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: TEMPLATE,
		templateLock: 'all',
	} );

	const logoLockupContent = url ? (
		<a
			href={ url }
			{ ...innerBlocksProps }
			onClick={ ( event ) => {
				event.preventDefault();
			} }
		>
			{ children }
		</a>
	) : (
		<span { ...innerBlocksProps }>{ children }</span>
	);

	return (
		<>
			<BlockControls group="other">
				<ToolbarButton
					icon={ linkIcon }
					title={ __( 'Add link' ) }
					ref={ setPopoverAnchor }
					onClick={ () => setPopover( true ) }
				/>
			</BlockControls>
			{ logoLockupContent }
			{ isSelected && showURLPopover && (
				<LinkURLPopover
					url={ url }
					setAttributes={ setAttributes }
					setPopover={ setPopover }
					popoverAnchor={ popoverAnchor }
				/>
			) }
		</>
	);
}

export default LogoLockupEdit;
