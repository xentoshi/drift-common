import * as React from 'react';
import { IconProps } from '../../types';
import { IconWrapper } from '../IconWrapper';

const Points = (allProps: IconProps) => {
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
					<path
						d="M5.918 10.247a.834.834 0 001.273-.417l.358-1.098A1.869 1.869 0 018.73 7.549l1.113-.36a.836.836 0 00-.035-1.584l-1.1-.359a1.868 1.868 0 01-1.184-1.181l-.362-1.11a.835.835 0 00-1.578.013l-.366 1.12a1.869 1.869 0 01-1.152 1.16l-1.112.358a.836.836 0 00.013 1.579l1.1.356A1.866 1.866 0 015.25 8.73l.362 1.113a.833.833 0 00.305.403zm.068-5.932l.422-1.101.352 1.101a2.665 2.665 0 001.694 1.691l1.124.424-1.105.358A2.675 2.675 0 006.78 8.482l-.419 1.102-.359-1.103a2.669 2.669 0 00-.64-1.048 2.699 2.699 0 00-1.05-.65l-1.102-.417 1.109-.36c.39-.135.742-.358 1.032-.65a2.72 2.72 0 00.634-1.04zm4.842 9.166a.645.645 0 00.98-.319l.2-.61a.873.873 0 01.543-.543l.618-.202a.64.64 0 00-.019-1.216l-.61-.2a.86.86 0 01-.545-.542l-.201-.619a.64.64 0 00-1.215.008l-.197.61a.854.854 0 01-.532.543l-.619.202a.64.64 0 00.007 1.214l.61.198a.87.87 0 01.338.209c.095.095.165.21.206.337l.202.62a.64.64 0 00.234.31zm-.73-2.235l-.144-.046.148-.051a1.687 1.687 0 001.04-1.054l.046-.142.048.145a1.664 1.664 0 001.053 1.052l.156.05-.144.049a1.66 1.66 0 00-1.054 1.056l-.047.145-.046-.144a1.66 1.66 0 00-1.056-1.059"
						fill="url(#prefix__paint0_linear_33573_644)"
					/>
					<defs>
						<linearGradient
							id="prefix__paint0_linear_33573_644"
							x1={8}
							y1={2.399}
							x2={8}
							y2={13.598}
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#CED4FF" />
							<stop offset={1} stopColor="#9EA2FF" />
						</linearGradient>
					</defs>
				</svg>
			}
			{...restProps}
		/>
	);
};
export default Points;
