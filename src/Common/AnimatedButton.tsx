import { Box, ButtonBase, SxProps, Typography, useTheme } from "@mui/material";
import React, { CSSProperties, PropsWithChildren, ReactElement, useEffect, useState, useMemo } from "react";
import { animated, useSpring, useSpringRef } from "@react-spring/web";

interface IAnimatedButton extends PropsWithChildren {
	isSelected?: boolean;
	isCompSelected?: boolean;
	onClick?: () => void;
	label?: string;
	sx?: SxProps;
	style?: CSSProperties;
	textAlign?: 'center' | 'left' | 'right';
}
function AnimatedButton ( props : IAnimatedButton ) : ReactElement {

	const theme = useTheme();
	
	const [isHovered, setIsHovered] = React.useState<boolean>(false);
	// const [isInitialized, setIsInitialized] = React.useState<boolean>(false);
	// const [angle, setAngle] = React.useState<number>(30);
	const bgColor = theme.palette.mode === 'dark' ? '#01010177' : '#fff4';

	const isSelected = props.isSelected ?? false;

	const borderColor =
		theme.palette.mode === 'dark'
			? (isHovered || isSelected) ? '#777' : '#333' //Dark
			: (isHovered || isSelected) ? '#555' : '#aaa' //Light
	
	
	const bgAnimation = useSpring({
			background:
				`
					linear-gradient(
						45deg,
						${bgColor} ${ isSelected ? -500 : isHovered ? 0 : 0}%,
						${ theme.palette.mode ==='dark' ? theme.palette.primary.main : theme.palette.primary.light} ${isHovered ? 50 : 0}%,
						${bgColor} ${ isSelected ? 500 : isHovered ? 100 : 0}%
					)
				`,
			borderColor: borderColor,
		config: {
			friction: 30,
		} 
	});

	const api = useSpringRef()
	const staticBgAnimation = useSpring({
		ref: api,
		from:{
			background: `
				linear-gradient(
					45deg,
					${bgColor} ${ isSelected ? -500 : isHovered ? 0 : 0}%,
					${ theme.palette.mode ==='dark' ? theme.palette.primary.main : theme.palette.primary.light} ${isHovered ? 50 : 0}%,
					${bgColor} ${ isSelected ? -500 : isHovered ? 100 : 0}%
				)
			`,
			borderColor: borderColor
		},
		reset: true,
	});

	const fontColor = theme.palette.mode === 'dark' ? '#999' : '#777';
	const fontHoverColor = theme.palette.mode === 'dark' ? '#fff' : '#111';
	const fontAnimation = useSpring({
		color: (isHovered || props.isSelected) ? fontHoverColor : fontColor
	});
	const AnimatedBox = animated(Box);
	const AnimatedTypography = animated(Typography);

	function getBgAnimation () {
		return (init || isHovered || props.isCompSelected || props.isSelected)
			? bgAnimation
			: staticBgAnimation
	}

	const [init, setInit] = useState<boolean>(false);
	useEffect(() => {
			api.start({
				to:{
					background: `
						linear-gradient(
							45deg,
							${bgColor} ${ isSelected ? -500 : isHovered ? 0 : 100}%,
							${theme.palette.mode ==='dark' ? theme.palette.primary.main : theme.palette.primary.light} ${isHovered ? 50 : 150}}%,
							${bgColor} ${ isSelected ? -500 : isHovered ? 100 : 200}%
						)
					`,
					borderColor: borderColor
				},
				config: { duration: 1250 },
				onRest: () => setInit(true)
			});
		},
		[]
	);
	
	return (
		<AnimatedBox
			style={{
				display: 'flex',
				borderStyle: 'solid',
				borderWidth: '1px',
				height: 50,
				borderRadius: 4,
				backgroundSize: '100% 100%',
				...getBgAnimation(),
				...props.style,
				...props.sx as CSSProperties,
			}}
		>
			<ButtonBase
				sx={{
					top: 0,
					left: 0,
					// px: `10pt`,
					width: '100%',
					height: '100%',
					borderRadius: 'inherit',
					color: theme.palette.secondary.main,
					cursor: 'pointer',
					...props.sx
				}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={props.onClick}
			>
				<AnimatedTypography
					sx = {{
						px: '1%',
					}}
					style={{
						flex: 1,
						textAlign: props.textAlign ?? 'center',
						...fontAnimation
					}}
				>
					<Typography
						variant='subtitle2'
						color={theme.palette.text.disabled}
					>{props.label ?? ''}</Typography>{props.children}
				</AnimatedTypography>
			</ButtonBase>
		</AnimatedBox>
	);
};

export default AnimatedButton;