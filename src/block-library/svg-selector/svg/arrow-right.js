/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/primitives';

export const ArrowRightIcon = ( { size } ) => (
	<SVG
		width={ size }
		height={ size }
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
	>
		<Path d="m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z" />
	</SVG>
);
