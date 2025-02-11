import * as React from 'react';
import { IconProps } from '../../types';
import { IconWrapper } from '../IconWrapper';

const SSS = (allProps: IconProps) => {
	const { svgProps: props, ...restProps } = allProps;
	return (
		<IconWrapper
			icon={
				<svg
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					{...props}
				>
					<g
						clipPath="url(#prefix__clip0_33717_341)"
						fill={allProps.color ? allProps.color : 'currentColor'}
					>
						<path d="M9.232 3.63a1.841 1.841 0 00-2.556 2.65l3.022 3.023a2.414 2.414 0 01.711 1.787 2.441 2.441 0 01-2.476 2.364 2.444 2.444 0 01-2.386-2.431c0-.543.181-1.07.516-1.499l-.34-.34a2.91 2.91 0 104.313-.22L7.014 5.943a1.363 1.363 0 011.898-1.957 1.368 1.368 0 01.43.993c0 .26-.074.513-.215.732l.345.344c.227-.313.349-.69.347-1.077a1.848 1.848 0 00-.587-1.348z" />
						<path d="M8.187 10.812a.295.295 0 11-.416.417l-.506-.505a.768.768 0 00.167.84c.137.138.32.22.514.229a.773.773 0 00.58-1.32l-3.023-3.02a3.488 3.488 0 01-.967-3.123 3.48 3.48 0 012.727-2.78 3.521 3.521 0 012.932.721 3.496 3.496 0 01.458 4.965l.34.338a3.98 3.98 0 00-3.16-6.571 3.995 3.995 0 00-3.829 3.79A3.942 3.942 0 005.165 7.79l3.022 3.021z" />
						<path d="M10.793 8.21l-.01-.009-.006-.008L7.77 5.187a.295.295 0 01.416-.417l.505.505a.773.773 0 10-1.26.25l3.022 3.023a3.487 3.487 0 01.967 3.123 3.48 3.48 0 01-2.727 2.78 3.52 3.52 0 01-2.931-.722 3.497 3.497 0 01-.458-4.964l-.34-.34a3.978 3.978 0 106.992 2.684 3.948 3.948 0 00-1.15-2.885l-.013-.013z" />
						<path d="M9.982 2.87a2.91 2.91 0 00-4.06 4.166l3.02 3.021a1.363 1.363 0 01-1.897 1.958 1.368 1.368 0 01-.216-1.726l-.345-.344a1.841 1.841 0 103.336 1.051 1.862 1.862 0 00-.438-1.153l-.104-.127L6.26 6.697a2.411 2.411 0 01-.711-1.787 2.44 2.44 0 012.476-2.364 2.445 2.445 0 012.386 2.432c0 .543-.181 1.07-.516 1.498l.34.34a2.906 2.906 0 00-.252-3.946z" />
					</g>
					<defs>
						<clipPath id="prefix__clip0_33717_341">
							<path
								fill="#fff"
								transform="translate(4 1)"
								d="M0 0h7.957v14H0z"
							/>
						</clipPath>
					</defs>
				</svg>
			}
			{...restProps}
		/>
	);
};
export default SSS;
