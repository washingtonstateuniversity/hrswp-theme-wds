/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { IconComponent } from './icon-component';

export default function save( { attributes } ) {
	const { slug, url, showLabel, label, labelCondensed, labelPosition, size } =
		attributes;

	const classes = classNames(
		{
			'has-visible-label': showLabel,
			[ `is-label-position-${ labelPosition }` ]: showLabel,
		},
		'hrswds-svg-icon',
		'hrswds-svg-icon-' + slug
	);

	const blockProps = useBlockProps.save( { className: classes } );

	return (
		<div { ...blockProps }>
			<IconComponent
				slug={ slug }
				url={ url }
				showLabel={ showLabel }
				label={ label }
				labelCondensed={ labelCondensed }
				size={ size }
			/>
		</div>
	);
}
