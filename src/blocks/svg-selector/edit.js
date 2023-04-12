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
	RangeControl,
	SelectControl,
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
	const { slug, url, showLabel, label, labelPosition, size } = attributes;
	const [ showURLPopover, setPopover ] = useState( false );
	const [ popoverAnchor, setPopoverAnchor ] = useState( null );

	const classes = classNames(
		{
			'has-visible-label': showLabel,
			[ `is-label-position-${ labelPosition }` ]: showLabel,
		},
		'hrswds-svg-icon',
		'hrswds-svg-icon-' + slug
	);

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
				<ToolbarButton
					title={ __( 'Replace SVG icon' ) }
					text={ __( 'Replace' ) }
					onClick={ () => setAttributes( { slug: '' } ) }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Icon settings' ) }>
					<RangeControl
						__nextHasNoMarginBottom
						label={ __( 'Size' ) }
						onChange={ ( newSize ) =>
							setAttributes( { size: newSize } )
						}
						min={ 16 }
						max={ 1104 }
						step={ 16 }
						initialPosition={ size }
						value={ size || 48 }
					/>
				</PanelBody>
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
					{ showLabel && (
						<SelectControl
							__nextHasNoMarginBottom
							label={ __( 'Label position' ) }
							value={ labelPosition }
							options={ [
								{ label: 'Top', value: 'top' },
								{ label: 'Right', value: 'right' },
								{ label: 'Bottom', value: 'bottom' },
								{ label: 'Left', value: 'left' },
							] }
							onChange={ ( newPosition ) =>
								setAttributes( { labelPosition: newPosition } )
							}
						/>
					) }
				</PanelBody>
			</InspectorControls>
			<IconComponent
				slug={ slug }
				url={ url }
				showLabel={ showLabel }
				label={ label }
				size={ size }
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
