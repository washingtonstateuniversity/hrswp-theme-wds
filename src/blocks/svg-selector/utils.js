/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import variations from './variations';
import { ChainIcon } from './svg';

export const getIconBySlug = ( slug ) => {
	const variation = variations.find( ( v ) => v.name === slug );
	return variation ? variation.icon : ChainIcon;
};

export const getTitleBySlug = ( slug ) => {
	const variation = variations.find( ( v ) => v.name === slug );
	return variation ? variation.title : __( 'Icon' );
};
