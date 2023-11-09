import {forwardRef, SVGProps} from 'react';
import {useTheme} from 'styled-components';

import {Theme} from '../../../types/theme/theme.type.ts';

interface Props extends SVGProps<SVGSVGElement> {
	size?: number | string;
}

export const PlusIcon = forwardRef<SVGSVGElement, Props>(
	function PlusIcon({
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
					d='M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 1 1-16 0v-80H40a8.001 8.001 0 0 1-5.657-13.657A8.001 8.001 0 0 1 40 120h80V40a8.001 8.001 0 0 1 13.657-5.657A8.001 8.001 0 0 1 136 40v80h80a8 8 0 0 1 8 8Z'
				/>
			</svg>
		);
	});
