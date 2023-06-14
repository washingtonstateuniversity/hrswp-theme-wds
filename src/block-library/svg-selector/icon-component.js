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
	const { slug, url, showLabel, label, labelCondensed, size } = props;

	const Icon = getIconBySlug( slug );
	const iconTitle = getTitleBySlug( slug );
	const iconLabel = label ?? iconTitle;
	const iconLabelCondensed = labelCondensed ?? '';
	const labelClassName = classNames( 'hrswds-svg-icon-label', {
		'screen-reader-text': ! showLabel,
	} );
	const labelCondensedClassName = classNames(
		'hrswds-svg-icon-label-condensed',
		{
			'screen-reader-text': ! showLabel,
		}
	);

	const element = (
		<>
			<Icon size={ size } />
			<span className={ labelClassName }>{ iconLabel }</span>
			{ iconLabelCondensed.length > 0 && (
				<span className={ labelCondensedClassName }>
					{ labelCondensed }
				</span>
			) }
		</>
	);

	if ( url ) {
		return (
			<a
				href={ url }
				className="hrswds-svg-icon-container"
				onClick={ preventDefault }
			>
				{ element }
			</a>
		);
	}

	return <span className="hrswds-svg-icon-container">{ element }</span>;
};
