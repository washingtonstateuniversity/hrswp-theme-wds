/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/primitives';

export const MenuIcon = ( { size } ) => (
	<SVG
		width={ size }
		height={ size }
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
	>
		<Path d="M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z" />
	</SVG>
);
