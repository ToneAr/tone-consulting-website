import { Box, ButtonBase, Typography, useTheme } from "@mui/material";
import React from "react";
import { animated, useSpring } from "react-spring";

interface AnimatedButtonProps {

}

const AnimatedButton: React.FC<AnimatedButtonProps> = (props: any) => {

  const theme = useTheme();
    
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  // const [angle, setAngle] = React.useState<number>(30);

  const bgColor = theme.palette.mode === 'dark' ? '#1110' : '#e1e1e100';
  const borderColor =
    isHovered
      ? theme.palette.mode === 'dark' ? '#777' : '#fff'
      : theme.palette.mode === 'dark' ? '#333' : '#999'

  const backgroundAnimation = useSpring({
    backgroundImage:
      `linear-gradient(
        30deg,
        ${theme.palette.primary.main} ${isHovered ? 0 : -100}%,
        ${bgColor} ${isHovered ? 200 : 0}%
      )`,
    borderColor: isHovered ? '#777' : '#333',
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const AnimatedBox = animated(Box);

  return (
    <AnimatedBox
      style={{
        borderStyle: 'solid',
        borderWidth: '1px',
        background: theme.palette.mode === 'dark' ? '#1117' : '#e1e1e177',
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
        <Typography
          style={{
            color: 'red',
          }}
        >
          {props.children}
        </Typography>
      </ButtonBase>
    </AnimatedBox>
  );
};

export default AnimatedButton;