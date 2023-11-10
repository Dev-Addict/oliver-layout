import {CSSProperties} from 'react';

import {ItemValueUnit} from '../../../types/enums/item-value-unit.enum.ts';

export interface ItemFields {
	name: string;
	text: string;
	width: string;
	widthUnit: ItemValueUnit;
	height: string;
	heightUnit: ItemValueUnit;
	display: CSSProperties['display'];
	position: CSSProperties['position'];
	color: string;
	paddingTop: string;
	paddingTopUnit: ItemValueUnit;
	paddingRight: string;
	paddingRightUnit: ItemValueUnit;
	paddingBottom: string;
	paddingBottomUnit: ItemValueUnit;
	paddingLeft: string;
	paddingLeftUnit: ItemValueUnit;
	marginTop: string;
	marginTopUnit: ItemValueUnit;
	marginRight: string;
	marginRightUnit: ItemValueUnit;
	marginBottom: string;
	marginBottomUnit: ItemValueUnit;
	marginLeft: string;
	marginLeftUnit: ItemValueUnit;
}

export const itemFields: {[k in keyof ItemFields]: k} = {
	name: 'name',
	text: 'text',
	width: 'width',
	widthUnit: 'widthUnit',
	height: 'height',
	heightUnit: 'heightUnit',
	display: 'display',
	position: 'position',
	color: 'color',
	paddingTop: 'paddingTop',
	paddingTopUnit: 'paddingTopUnit',
	paddingRight: 'paddingRight',
	paddingRightUnit: 'paddingRightUnit',
	paddingBottom: 'paddingBottom',
	paddingBottomUnit: 'paddingBottomUnit',
	paddingLeft: 'paddingLeft',
	paddingLeftUnit: 'paddingLeftUnit',
	marginTop: 'marginTop',
	marginTopUnit: 'marginTopUnit',
	marginRight: 'marginRight',
	marginRightUnit: 'marginRightUnit',
	marginBottom: 'marginBottom',
	marginBottomUnit: 'marginBottomUnit',
	marginLeft: 'marginLeft',
	marginLeftUnit: 'marginLeftUnit',
}
