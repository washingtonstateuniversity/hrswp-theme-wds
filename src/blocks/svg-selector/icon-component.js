/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import { getIconBySlug, getTitleBySlug } from './utils';

const preventDefault = ( event ) => event.preventDefault();

export const IconComponent = ( props ) => {
	const { slug, url, showLabel, label, size } = props;

	const Icon = getIconBySlug( slug );
	const iconTitle = getTitleBySlug( slug );
	const iconLabel = label ?? iconTitle;
	const labelClassName = classNames( 'hrswds-svg-icon-label', {
		'screen-reader-text': ! showLabel,
	} );

	const element = (
		<>
			<Icon size={ size } />
			<span className={ labelClassName }>{ iconLabel }</span>
		</>
	);

	if ( url ) {
		return (
			<a href={ url } onClick={ preventDefault }>
				{ element }
			</a>
		);
	}

	return element;
};
