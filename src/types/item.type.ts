import {CSSProperties} from 'react';

import {ItemType} from './enums/item-type.enum.ts';
import {ItemPadding} from './item-padding.type.ts';
import {ItemMargin} from './item-margin.type.ts';
import {ItemValue} from './item-value.type.ts';

export interface Item {
	id: string;
	type: ItemType;
	name: string;
	width: ItemValue;
	height: ItemValue;
	display: CSSProperties['display'];
	position: CSSProperties['position'];
	color: CSSProperties['color'];
	padding: ItemPadding;
	margin: ItemMargin;
	text: string;
	children: Item[];
}
