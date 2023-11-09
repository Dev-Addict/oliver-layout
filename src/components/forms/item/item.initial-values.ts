import {ItemFields} from './item.fields.ts';
import {Item} from '../../../types/item.type.ts';

export const itemInitialValues: ItemFields = {
	name: '',
	text: '',
	width: '',
	height: '',
	display: 'block',
	position: 'relative',
	color: '',
	paddingTop: '',
	paddingRight: '',
	paddingBottom: '',
	paddingLeft: '',
	marginTop: '',
	marginRight: '',
	marginBottom: '',
	marginLeft: '',
};

export const generateItemInitialValues = ({width, height, color, padding, margin, ...item}: Item): ItemFields => ({
	...itemInitialValues,
	...item,
	width: `${width}`,
	height: `${height}`,
	color: color || '',
	paddingTop: `${padding.top}`,
	paddingRight: `${padding.right}`,
	paddingBottom: `${padding.bottom}`,
	paddingLeft: `${padding.left}`,
	marginTop: `${margin.top}`,
	marginRight: `${margin.right}`,
	marginBottom: `${margin.bottom}`,
	marginLeft: `${margin.left}`,
});
