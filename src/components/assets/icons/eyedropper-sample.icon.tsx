import {forwardRef, SVGProps} from 'react';
import {useTheme} from 'styled-components';

import {Theme} from '../../../types/theme/theme.type.ts';

interface Props extends SVGProps<SVGSVGElement> {
	size?: number | string;
}

export const EyedropperSampleIcon = forwardRef<SVGSVGElement, Props>(
	function EyedropperSampleIcon({
																	size = 24,
																	width,
																	height,
																	color,
																	...props
																}, ref) {
		const theme = useTheme() as Theme;

		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={width || size}
				height={height || size}
				fill={color || theme.primary.m}
				viewBox='0 0 256 256'
				{...props}
				ref={ref}
			>
				<path
					d='M224 67.3a35.798 35.798 0 0 0-11.26-25.66c-14-13.28-36.72-12.78-50.62 1.13L142.8 62.2a24 24 0 0 0-33.14.77l-9 9a16 16 0 0 0 0 22.64l2 2.06-51 51a39.752 39.752 0 0 0-10.53 38l-8 18.41A13.65 13.65 0 0 0 36 219.29a15.898 15.898 0 0 0 17.71 3.36L71.24 215a39.896 39.896 0 0 0 37.05-10.75l51-51 2.06 2.06a16 16 0 0 0 22.62 0l9-9a24 24 0 0 0 .74-33.18l19.75-19.87A35.753 35.753 0 0 0 224 67.3ZM97 193a24.004 24.004 0 0 1-24 6 8.004 8.004 0 0 0-5.55.31l-18.1 7.9 7.65-17.8a8 8 0 0 0 .25-5.75 24 24 0 0 1 .1-15.69H122L97 193Zm41-41H70.07l44-44 33.94 34L138 152Zm64.18-70-25.37 25.52a8 8 0 0 0 0 11.31l4.89 4.88a7.986 7.986 0 0 1 2.346 5.66 8 8 0 0 1-2.346 5.66l-9 9L112 83.26l9-9a8 8 0 0 1 11.31 0l4.89 4.89a8 8 0 0 0 5.65 2.34 8 8 0 0 0 5.66-2.36l24.94-25.09c7.81-7.82 20.5-8.18 28.29-.81a19.996 19.996 0 0 1 4.791 22.08 20.002 20.002 0 0 1-4.401 6.62l.05.07Z'
				/>
			</svg>
		);
	});
