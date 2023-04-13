/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';
import { CougarIcon as icon } from './svg/cougar';
import variations from './variations';

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon,
	edit,
	save,
	variations,
};
