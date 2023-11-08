import {CSSProperties} from 'react';
import {ItemPadding} from './item-padding.type.ts';
import {ItemMargin} from './item-margin.type.ts';

export interface Item {
	id: number;
	name: string;
	width: number;
	height: number;
	display: CSSProperties['display'];
	position: CSSProperties['position'];
	color: CSSProperties['color'];
	padding: ItemPadding;
	margin: ItemMargin;
	text: string;
	children: Item[];
}
