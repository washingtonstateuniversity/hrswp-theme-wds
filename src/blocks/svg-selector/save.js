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

export default function save( props ) {
	const {
		attributes: {
			slug,
			url,
			showLabel,
			label,
			labelCondensed,
			labelPosition,
			size,
			iconBackgroundColorValue,
			iconBackgroundColorClass,
			iconColorValue,
			iconColorClass,
		},
	} = props;

	const className = classNames( {
		'has-visible-label': showLabel,
		[ `is-label-position-${ labelPosition }` ]: showLabel,
		'has-icon-color': iconColorValue,
		'has-icon-background-color': iconBackgroundColorValue,
	} );

	const blockProps = useBlockProps.save( { className } );

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
