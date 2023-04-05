/**
 * External dependencies
 */
import classNames from 'classnames';
import { get } from 'lodash';

/**
 * WordPress dependencies
 */
import {
	BlockControls,
	InspectorControls,
	URLPopover,
	URLInput,
	useBlockProps,
	__experimentalBlockVariationPicker as BlockVariationPicker,
} from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import {
	Button,
	PanelBody,
	PanelRow,
	TextControl,
	ToolbarButton,
	ToggleControl,
} from '@wordpress/components';
import { store as blocksStore } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { link as linkIcon, keyboardReturn } from '@wordpress/icons';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { IconComponent } from './icon-component';

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

const SVGSelectorContainer = ( { attributes, isSelected, setAttributes } ) => {
	const { slug, url, showLabel, label } = attributes;
	const [ showURLPopover, setPopover ] = useState( false );
	const [ popoverAnchor, setPopoverAnchor ] = useState( null );

	const classes = classNames( 'hrswds-svg-icon', 'hrswds-svg-icon-' + slug, {
		'has-visible-label': showLabel,
	} );

	const blockProps = useBlockProps( { className: classes } );

	return (
		<div { ...blockProps }>
			<BlockControls group="block">
				<ToolbarButton
					icon={ linkIcon }
					title={ __( 'Add link' ) }
					ref={ setPopoverAnchor }
					onClick={ () => setPopover( true ) }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Label settings' ) }>
					<PanelRow>
						<TextControl
							label={ __( 'Icon label' ) }
							help={ __(
								'Add accompanying text or briefly describe the icon to help screen reader users.'
							) }
							value={ label || '' }
							onChange={ ( value ) =>
								setAttributes( { label: value } )
							}
						/>
					</PanelRow>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Show label' ) }
						checked={ showLabel }
						onChange={ () =>
							setAttributes( { showLabel: ! showLabel } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<IconComponent
				slug={ slug }
				url={ url }
				showLabel={ showLabel }
				label={ label }
			/>
			{ isSelected && showURLPopover && (
				<LinkURLPopover
					url={ url }
					setAttributes={ setAttributes }
					setPopover={ setPopover }
					popoverAnchor={ popoverAnchor }
				/>
			) }
		</div>
	);
};

const Placeholder = ( { name, setAttributes } ) => {
	const { blockType, defaultVariation, variations } = useSelect(
		( select ) => {
			const {
				getBlockVariations,
				getBlockType,
				getDefaultBlockVariation,
			} = select( blocksStore );

			return {
				blockType: getBlockType( name ),
				defaultVariation: getDefaultBlockVariation( name, 'block' ),
				variations: getBlockVariations( name, 'block' ),
			};
		},
		[ name ]
	);
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<BlockVariationPicker
				icon={ get( blockType, [ 'icon', 'src' ] ) }
				label={ get( blockType, [ 'title' ] ) }
				variations={ variations }
				onSelect={ ( nextVariation = defaultVariation ) => {
					if ( nextVariation.attributes ) {
						setAttributes( nextVariation.attributes );
					}
				} }
			/>
		</div>
	);
};

const SVGSelectorEdit = ( props ) => {
	const { attributes } = props;

	const hasSelected = attributes.slug?.length > 0;
	const Component = hasSelected ? SVGSelectorContainer : Placeholder;

	return <Component { ...props } />;
};

export default SVGSelectorEdit;
