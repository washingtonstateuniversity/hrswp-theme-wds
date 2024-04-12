/**
 * Internal dependencies
 */
import metadata from './block.json';

const { name } = metadata;

const filters = [
	{
		hookname: 'blocks.registerBlockType',
		namespace: 'hrswds/background-color/spacer-block',
		callback: ( settings, blockName ) => {
			if ( blockName !== name ) {
				return settings;
			}
			return {
				...settings,
				attributes: {
					...settings.attributes,
					backgroundColor: {
						type: 'string',
					},
					textColor: {
						type: 'string',
					},
				},
				supports: {
					...settings.supports,
					color: {
						enableContrastChecker: false,
						__experimentalDefaultControls: {
							background: true,
							text: true,
						},
					},
				},
			};
		},
	},
];

export { metadata, name, filters };
