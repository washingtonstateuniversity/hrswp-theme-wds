/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/primitives';

export const WrenchIcon = ( { size } ) => (
	<SVG
		width={ size }
		height={ size }
		viewBox="0 0 48 48"
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
	>
		<Path d="M35.65 41.35 22.45 28.1q-1.15.45-2.325.75-1.175.3-2.475.3-4.65 0-7.95-3.275T6.4 17.9q0-1.35.325-2.65.325-1.3.975-2.45l7.15 7.1 5-4.8-7.2-7.25q1.15-.65 2.425-1t2.575-.35q4.75 0 8.1 3.35 3.35 3.35 3.35 8.05 0 1.35-.275 2.525-.275 1.175-.775 2.275L41.3 35.9q.45.5.45 1.2t-.45 1.15l-3.35 3.15q-.5.45-1.15.425-.65-.025-1.15-.475Z" />
	</SVG>
);
