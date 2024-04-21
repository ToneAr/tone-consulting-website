import { Box, ButtonBase, Typography, useTheme } from "@mui/material";
import React from "react";
import { animated, useSpring } from "react-spring";

interface AnimatedButtonProps {

}

const AnimatedButton: React.FC<AnimatedButtonProps> = (props: any) => {

  const theme = useTheme();
    
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  // const [angle, setAngle] = React.useState<number>(30);

  const bgColor = theme.palette.mode === 'dark' ? '#1117' : '#e1e1e177';
  
  const borderColor =
    theme.palette.mode === 'dark'
      ? isHovered ? '#777' : '#333' //Dark
      : isHovered ? '#555' : '#aaa' //Light
  
  const backgroundAnimation = useSpring({
    background:
      `linear-gradient(
        30deg,
        ${theme.palette.primary.main} ${isHovered ? 0 : -100}%,
        ${bgColor} ${isHovered ? 200 : 0}%
      )`,
    // background: theme.palette.mode === 'dark' ? '#1117' : '#e1e1e177',
    borderColor: borderColor,
    config: {
      friction: 30
    }
  });

  const fontColor = theme.palette.mode === 'dark' ? '#eee' : '#777';
  const fontAnimation = useSpring({
    color: isHovered ? '#eee' : fontColor
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const AnimatedBox = animated(Box);
  const AnimatedTypography = animated(Typography);

  return (
    <AnimatedBox
      style={{
        borderStyle: 'solid',
        borderWidth: '1px',
        height: 50,
        borderRadius: 4,
        backgroundSize: '100% 100%',
        ...backgroundAnimation,
        ...props.style
      }}
    >
      <ButtonBase
        sx={{
          px: `10pt`,
          width: '100%',
          height: '100%',
          borderRadius: 'inherit',
          color: theme.palette.secondary.main,
          cursor: 'pointer',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatedTypography
          style={{
            ...fontAnimation
          }}
        >
          {props.children}
        </AnimatedTypography>
      </ButtonBase>
    </AnimatedBox>
  );
};

export default AnimatedButton;