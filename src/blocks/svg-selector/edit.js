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
	ContrastChecker,
	withColors,
	__experimentalBlockVariationPicker as BlockVariationPicker,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
} from '@wordpress/block-editor';
import { useEffect, useRef, useState } from '@wordpress/element';
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

const SVGSelectorContainer = ( props ) => {
	const {
		attributes,
		clientId,
		iconBackgroundColor,
		iconColor,
		isSelected,
		setAttributes,
		setIconBackgroundColor,
		setIconColor,
	} = props;
	const {
		iconBackgroundColorValue,
		iconBackgroundColorClass,
		iconColorValue,
		iconColorClass,
		iconLabel,
		labelCondensed,
		labelPosition,
		showLabel,
		size,
		slug,
		url,
	} = attributes;
	const [ showURLPopover, setPopover ] = useState( false );
	const [ popoverAnchor, setPopoverAnchor ] = useState( null );
	const logosOnly = ! (
		attributes.className?.includes( 'is-style-round' ) ||
		attributes.className?.includes( 'is-style-square' )
	);

	// Remove icon background color when default style is selected or
	// restore it when the round or tile style is selected.
	const backgroundBackup = useRef( {} );
	useEffect( () => {
		if ( logosOnly ) {
			backgroundBackup.current = {
				iconBackgroundColor,
				iconBackgroundColorValue,
				iconBackgroundColorClass,
			};
			setAttributes( {
				iconBackgroundColor: undefined,
				iconBackgroundColorValue: undefined,
				iconBackgroundColorClass: undefined,
			} );
		} else {
			setAttributes( { ...backgroundBackup.current } );
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ logosOnly ] );

	useEffect( () => {
		setAttributes( { iconColorClass: iconColor.class } );
	}, [ iconColor, setAttributes ] );

	useEffect( () => {
		setAttributes( {
			iconBackgroundColorClass: iconBackgroundColor.class,
		} );
	}, [ iconBackgroundColor, setAttributes ] );

	let sizeClass = '';
	if ( size < 30 ) {
		sizeClass = 'has-small-icon-size';
	} else if ( size > 200 ) {
		sizeClass = 'has-large-icon-size';
	} else {
		sizeClass = 'has-default-icon-size';
	}

	// Fallback color values are used maintain selections in case switching
	// themes and named colors in palette do not match.
	const className = classNames( sizeClass, {
		'has-visible-label': showLabel,
		[ `is-label-position-${ labelPosition }` ]: showLabel,
		'has-icon-color': iconColor.color || iconColorValue,
		'has-icon-background-color':
			iconBackgroundColor.color || iconBackgroundColorValue,
		[ iconColorClass ]: iconColorClass,
		[ iconBackgroundColorClass ]: iconBackgroundColorClass,
	} );

	const blockProps = useBlockProps( { className } );

	const colorSettings = [
		{
			// Use custom attribute as fallback to prevent loss of named color selection when
			// switching themes to a new theme that does not have a matching named color.
			value: iconColor.color || iconColorValue,
			onChange: ( colorValue ) => {
				setIconColor( colorValue );
				setAttributes( { iconColorValue: colorValue } );
			},
			label: __( 'Icon color' ),
			resetAllFilter: () => {
				setIconColor( undefined );
				setAttributes( { iconColorValue: undefined } );
			},
		},
	];

	if ( ! logosOnly ) {
		colorSettings.push( {
			// Use custom attribute as fallback to prevent loss of named color selection when
			// switching themes to a new theme that does not have a matching named color.
			value: iconBackgroundColor.color || iconBackgroundColorValue,
			onChange: ( colorValue ) => {
				setIconBackgroundColor( colorValue );
				setAttributes( {
					iconBackgroundColorValue: colorValue,
				} );
			},
			label: __( 'Icon background' ),
			resetAllFilter: () => {
				setIconBackgroundColor( undefined );
				setAttributes( { iconBackgroundColorValue: undefined } );
			},
		} );
	}

	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	return (
		<div { ...blockProps }>
			<BlockControls group="other">
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
						max={ 400 }
						initialPosition={ size }
						value={ size || 48 }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Label settings' ) }>
					<PanelRow>
						<TextControl
							__nextHasNoMarginBottom
							label={ __( 'Icon label' ) }
							help={ __(
								'Add accompanying text or briefly describe the icon to help screen reader users.'
							) }
							value={ iconLabel || '' }
							onChange={ ( value ) =>
								setAttributes( { iconLabel: value } )
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
			<InspectorControls group="advanced">
				<TextControl
					__nextHasNoMarginBottom
					label={ __( 'Icon label (short version)' ) }
					help={ __(
						'Add accompanying text that will replace the label on small screens.'
					) }
					value={ labelCondensed || '' }
					onChange={ ( value ) =>
						setAttributes( { labelCondensed: value } )
					}
				/>
			</InspectorControls>
			<InspectorControls group="color">
				{ colorSettings.map(
					( { onChange, label, value, resetAllFilter } ) => (
						<ColorGradientSettingsDropdown
							key={ `svg-selector-color-${ label }` }
							__experimentalIsRenderedInSidebar
							settings={ [
								{
									colorValue: value,
									label,
									onColorChange: onChange,
									isShownByDefault: true,
									resetAllFilter,
									enableAlpha: true,
								},
							] }
							panelId={ clientId }
							{ ...colorGradientSettings }
						/>
					)
				) }
				{ ! logosOnly && (
					<ContrastChecker
						{ ...{
							textColor: iconColorValue,
							backgroundColor: iconBackgroundColorValue,
						} }
						isLargeText={ false }
					/>
				) }
			</InspectorControls>
			<IconComponent
				slug={ slug }
				url={ url }
				showLabel={ showLabel }
				label={ iconLabel }
				labelCondensed={ labelCondensed }
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

const iconColorAttributes = {
	iconColor: 'icon-color',
	iconBackgroundColor: 'icon-background-color',
};

export default withColors( iconColorAttributes )( SVGSelectorEdit );
