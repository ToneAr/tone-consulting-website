import { Box, Grow, Paper, Stack, useTheme } from "@mui/material";
import { animated, useSpring } from "react-spring";

type props = {
  children?: JSX.Element[] | JSX.Element,
  className?: any,
  sx?: Object,
  in? : boolean,
  spacing?: number | string,
  elevation?: number
};

function PageBox ( {className = "background-box", ...props}:props ) {
    const theme = useTheme();
    
    const backgroundAnimation = useSpring({
      background: `${theme.palette.mode === 'dark' ? '#111' : '#fff'}`
    });

    const AnimatedBox = animated(Box);
    
    return (
        <AnimatedBox className={className}
          style={{
            ...backgroundAnimation
          }}
          sx={{
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              ...props.sx
          }}
        >
            {props.children}
        </AnimatedBox>
    );
};

function PageStack ( props:props ) {
  
  return (
    <Stack direction="column" spacing={props.spacing} sx={props.sx}>
        {props.children}
    </Stack> 
  );
}

function DisplayPanel ( {className = "paper", elevation = 10, ...props}: props ) {
    const theme = useTheme();
    
    const backgroundAnimation = useSpring({
      background: theme.palette.mode === 'dark' ? "#212121" : "#e1e8e9",
      config: {
        friction: 40
      }
    });
    const AnimatedPaper = animated(Paper);
  


    return (
        <Grow in={ props.in ?? true } appear={ true }  >
          <AnimatedPaper
          className={className}
          elevation={elevation}
          style={{
            padding:2,
            ...backgroundAnimation,
            ...props.sx
          }}
        >
            {props.children}
          </AnimatedPaper>
        </Grow>
    );
};

function OutlinedPaper ( {className = "paper-outlined", ...props}: props ) {
    const theme = useTheme();
    return (
        <Paper className={className} variant='outlined' sx={{
            background: theme.palette.mode === 'dark' ? "#111111" : "#e9e9e9",
            padding:2,
            ...props.sx
          }}
        >
          {props.children}
        </Paper>
    );

};

export {
    PageBox,
    DisplayPanel,
    PageStack,
    OutlinedPaper
};