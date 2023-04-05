/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import { getIconBySlug, getTitleBySlug } from './utils';

export const IconComponent = ( props ) => {
	const { slug, url, showLabel, label } = props;

	const Icon = getIconBySlug( slug );
	const iconTitle = getTitleBySlug( slug );
	const iconLabel = label ?? iconTitle;
	const labelClassName = classNames( 'hrswds-svg-icon-label', {
		'screen-reader-text': ! showLabel,
	} );

	if ( url ) {
		return (
			<a href={ url }>
				<Icon />
				<span className={ labelClassName }>{ iconLabel }</span>
			</a>
		);
	}

	return (
		<>
			<Icon />
			<span className={ labelClassName }>{ iconLabel }</span>
		</>
	);
};
