import {forwardRef, SVGProps} from 'react';
import {useTheme} from 'styled-components';

import {Theme} from '../../../types/theme/theme.type.ts';

interface Props extends SVGProps<SVGSVGElement> {
	size?: number | string;
}

export const RadioButtonIcon = forwardRef<SVGSVGElement, Props>(
	function RadioButtonIcon({
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
					d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a87.996 87.996 0 0 1-81.301-54.324A88 88 0 1 1 216 128a88.095 88.095 0 0 1-25.804 62.196A88.095 88.095 0 0 1 128 216Zm0-152a63.999 63.999 0 1 0 64 64 64.069 64.069 0 0 0-64-64Zm0 112a48 48 0 1 1 48-48 48.054 48.054 0 0 1-14.073 33.927A48.054 48.054 0 0 1 128 176Z"
				/>
			</svg>
		);
	});
