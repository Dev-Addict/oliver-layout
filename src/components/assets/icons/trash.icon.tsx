import {forwardRef, SVGProps} from 'react';
import {useTheme} from 'styled-components';

import {Theme} from '../../../types/theme/theme.type.ts';

interface Props extends SVGProps<SVGSVGElement> {
	size?: number | string;
}

export const TrashIcon = forwardRef<SVGSVGElement, Props>(
	function TrashIcon({
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
					d="M216 48h-40v-8a24.003 24.003 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16.002 16.002 0 0 0 16 16h128c4.243 0 8.313-1.686 11.314-4.686 3-3.001 4.686-7.071 4.686-11.314V64h8a8 8 0 1 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96v-8Zm96 168H64V64h128v144Zm-80-104v64a8 8 0 1 1-16 0v-64a8 8 0 1 1 16 0Zm48 0v64a8 8 0 1 1-16 0v-64a8 8 0 0 1 16 0Z"
				/>
			</svg>
		);
	});
