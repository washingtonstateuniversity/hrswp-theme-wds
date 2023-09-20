/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	ArrowRightIcon,
	ChainIcon,
	CougarIcon,
	LabIcon,
	MenuIcon,
	RocketIcon,
	SearchIcon,
	TreesIcon,
	WrenchIcon,
} from './svg';

const variations = [
	{
		name: 'arrow-right',
		title: __( 'Arrow right' ),
		attributes: { slug: 'arrow-right' },
		scope: [ 'block' ],
		icon: ArrowRightIcon,
	},
	{
		name: 'cougar',
		title: __( 'WSU Cougar head' ),
		attributes: { slug: 'cougar' },
		scope: [ 'block' ],
		icon: CougarIcon,
	},
	{
		name: 'chain',
		title: __( 'Link' ),
		attributes: { slug: 'chain' },
		scope: [ 'block' ],
		icon: ChainIcon,
	},
	{
		name: 'lab',
		title: __( 'Laboratory beaker' ),
		attributes: { slug: 'lab' },
		scope: [ 'block' ],
		icon: LabIcon,
	},
	{
		name: 'menu',
		title: __( 'Menu' ),
		attributes: { slug: 'menu' },
		scope: [ 'block' ],
		icon: MenuIcon,
	},
	{
		name: 'rocket',
		title: __( 'Rocket' ),
		attributes: { slug: 'rocket' },
		scope: [ 'block' ],
		icon: RocketIcon,
	},
	{
		name: 'trees',
		title: __( 'Trees' ),
		attributes: { slug: 'trees' },
		scope: [ 'block' ],
		icon: TreesIcon,
	},
	{
		name: 'wrench',
		title: __( 'Wrench' ),
		attributes: { slug: 'wrench' },
		scope: [ 'block' ],
		icon: WrenchIcon,
	},
	{
		name: 'search',
		title: __( 'Search' ),
		attributes: { slug: 'search' },
		scope: [ 'block' ],
		icon: SearchIcon,
	},
];

variations.forEach( ( variation ) => {
	if ( variation.isActive ) {
		return;
	}
	variation.isActive = ( blockAttributes, variationAttributes ) =>
		blockAttributes.slug === variationAttributes.slug;
} );

export default variations;
