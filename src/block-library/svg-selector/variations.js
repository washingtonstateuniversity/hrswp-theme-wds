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
	DiversityIcon,
	EcoIcon,
	GuideIcon,
	HandshakeIcon,
	HealthIcon,
	LabIcon,
	LearningIcon,
	MenuIcon,
	PersonIcon,
	RocketIcon,
	SearchIcon,
	StrategyIcon,
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
		name: 'diversity',
		title: __( 'Diversity' ),
		attributes: { slug: 'diversity' },
		scope: [ 'block' ],
		icon: DiversityIcon,
	},
	{
		name: 'eco',
		title: __( 'Eco' ),
		attributes: { slug: 'eco' },
		scope: [ 'block' ],
		icon: EcoIcon,
	},
	{
		name: 'guide',
		title: __( 'Guide' ),
		attributes: { slug: 'guide' },
		scope: [ 'block' ],
		icon: GuideIcon,
	},
	{
		name: 'handshake',
		title: __( 'Handshake' ),
		attributes: { slug: 'handshake' },
		scope: [ 'block' ],
		icon: HandshakeIcon,
	},
	{
		name: 'health',
		title: __( 'Health' ),
		attributes: { slug: 'health' },
		scope: [ 'block' ],
		icon: HealthIcon,
	},
	{
		name: 'lab',
		title: __( 'Laboratory beaker' ),
		attributes: { slug: 'lab' },
		scope: [ 'block' ],
		icon: LabIcon,
	},
	{
		name: 'learning',
		title: __( 'Learning' ),
		attributes: { slug: 'learning' },
		scope: [ 'block' ],
		icon: LearningIcon,
	},
	{
		name: 'menu',
		title: __( 'Menu' ),
		attributes: { slug: 'menu' },
		scope: [ 'block' ],
		icon: MenuIcon,
	},
	{
		name: 'person',
		title: __( 'Person' ),
		attributes: { slug: 'person' },
		scope: [ 'block' ],
		icon: PersonIcon,
	},
	{
		name: 'rocket',
		title: __( 'Rocket' ),
		attributes: { slug: 'rocket' },
		scope: [ 'block' ],
		icon: RocketIcon,
	},
	{
		name: 'search',
		title: __( 'Search' ),
		attributes: { slug: 'search' },
		scope: [ 'block' ],
		icon: SearchIcon,
	},
	{
		name: 'strategy',
		title: __( 'Strategy' ),
		attributes: { slug: 'strategy' },
		scope: [ 'block' ],
		icon: StrategyIcon,
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
];

variations.forEach( ( variation ) => {
	if ( variation.isActive ) {
		return;
	}
	variation.isActive = ( blockAttributes, variationAttributes ) =>
		blockAttributes.slug === variationAttributes.slug;
} );

export default variations;
