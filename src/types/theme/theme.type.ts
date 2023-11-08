import {Color} from './color.type.ts';

export interface Theme {
	primary: Color;
	secondary: Color;
	foreground: Color;
	background: Color;
	neutral: Color;
}
