import {CSSProperties} from 'react';

export interface ItemFields {
	name: string;
	text: string;
	width: string;
	height: string;
	display: CSSProperties['display'];
	position: CSSProperties['position'];
	color: string;
	paddingTop: string;
	paddingRight: string;
	paddingBottom: string;
	paddingLeft: string;
	marginTop: string;
	marginRight: string;
	marginBottom: string;
	marginLeft: string;
}

export const itemFields: {[k in keyof ItemFields]: k} = {
	name: 'name',
	text: 'text',
	width: 'width',
	height: 'height',
	display: 'display',
	position: 'position',
	color: 'color',
	paddingTop: 'paddingTop',
	paddingRight: 'paddingRight',
	paddingBottom: 'paddingBottom',
	paddingLeft: 'paddingLeft',
	marginTop: 'marginTop',
	marginRight: 'marginRight',
	marginBottom: 'marginBottom',
	marginLeft: 'marginLeft',
}
