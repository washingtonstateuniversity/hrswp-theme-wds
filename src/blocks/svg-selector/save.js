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
	const { slug, url, showLabel, label, size } = attributes;

	const classes = classNames( 'hrswds-svg-icon', 'hrswds-svg-icon-' + slug, {
		'has-visible-label': showLabel,
	} );

	const blockProps = useBlockProps.save( { className: classes } );

	return (
		<div { ...blockProps }>
			<IconComponent
				slug={ slug }
				url={ url }
				showLabel={ showLabel }
				label={ label }
				size={ size }
			/>
		</div>
	);
}
