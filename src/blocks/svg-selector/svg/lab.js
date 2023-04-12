/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/primitives';

export const LabIcon = ( { size } ) => (
	<SVG
		width={ size }
		height={ size }
		viewBox="0 0 48 48"
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
	>
		<Path d="M9 41q-1.6 0-2.275-1.475-.675-1.475.425-2.675l12.3-14.15V9.25H16.6q-.45 0-.775-.325T15.5 8.1q0-.45.325-.775T16.6 7h14.8q.45 0 .775.325t.325.825q0 .5-.325.8-.325.3-.775.3h-2.85V22.7l12.3 14.15q1.1 1.2.425 2.675Q40.6 41 39 41Z" />
	</SVG>
);
