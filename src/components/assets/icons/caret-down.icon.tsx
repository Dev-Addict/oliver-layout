import {forwardRef, SVGProps} from 'react';
import {useTheme} from 'styled-components';

import {Theme} from '../../../types/theme/theme.type.ts';

interface Props extends SVGProps<SVGSVGElement> {
	size?: number | string;
}

export const CaretDownIcon = forwardRef<SVGSVGElement, Props>(
	function CaretDownIcon({
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
					d='m213.66 101.66-80 80a7.986 7.986 0 0 1-5.66 2.346 8 8 0 0 1-5.66-2.346l-80-80a8.004 8.004 0 1 1 11.32-11.32L128 164.69l74.34-74.35a8.002 8.002 0 0 1 11.32 0 8.005 8.005 0 0 1 0 11.32Z'
				/>
			</svg>
		);
	});
