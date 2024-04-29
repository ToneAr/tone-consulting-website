import { Box, Grow, Paper, Stack, useTheme } from "@mui/material";
import { animated, easings, useInView, useSpring, useTransition } from "react-spring";
import dayForestImg from '../../Resources/daytime-forest.jpg';
import nightForestImg from '../../Resources/nighttime-forest.jpg';
import { useState } from "react";

type props = {
  children?: JSX.Element[] | JSX.Element,
  className?: any,
  sx?: Object,
  in? : boolean,
  spacing?: number | string,
  elevation?: number,
  style?: any
};

function PageBox ( {className = "background-box", ...props}:props ) {
    const theme = useTheme();
    
    const backgroundAnimation = useSpring({
      // background: `${theme.palette.mode === 'dark' ? '#111' : '#fff'}`
      // backgroundImage: `url(${theme.palette.mode === 'dark' ? nightForestImg : dayForestImg})`
    });

    const AnimatedBox = animated(Box);
    
    return (
        <AnimatedBox className={className}
          style={{
            ...backgroundAnimation,
            backgroundImage: `url(${theme.palette.mode === 'dark' ? nightForestImg : dayForestImg})`
          }}
          sx={{
              // background: theme.palette.background.default,
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

function DisplayPanel ( {className = "paper", elevation = 8, ...props}: any ) {
    const theme = useTheme();
    
    const [ref, isInView] = useInView({
      rootMargin: '-10% 0px -10% 0px',
      amount: buildInteractionObserverThreshold(),
    })
    const styles = useSpring({
      scale: isInView ? 1 : 0,
      opacity: isInView ? 1 : 0,
      // y: isInView ? 0 : 80,
      config: {
        duration: 200,
        easing: easings.easeInSine
      },
    })


    const backgroundAnimation = useSpring({
      background: theme.palette.mode === 'dark' ? "#212121aa" : "#ebfcf499",
      
      config: {
        friction: 40
      }
    });
    const AnimatedPaper = animated(Paper);
  


    return (
        <AnimatedPaper
          ref={ref}
          className={className}
          elevation={elevation}
          style={{
            padding:10,
            backdropFilter: `blur(10px)`,
            ...backgroundAnimation,
            ...styles,
            ...props.style
          }}
        >
          {props.children}
        </AnimatedPaper>
    );
};

function OutlinedPaper ( {className = "paper-outlined", ...props}: props ) {
    const theme = useTheme();
    return (
        <Paper className={className} variant='outlined' sx={{
            background: theme.palette.mode === 'dark' ? "#000b" : "#fffb",
            padding:2,
            ...props.sx
          }}
        >
          {props.children}
        </Paper>
    );

};


const buildInteractionObserverThreshold = (count = 100) => {
  const threshold = []

  const parts = 1 / count

  for (let i = 0; i <= count; i++) {
    threshold.push(parseFloat((parts * i).toFixed(2)))
  }

  return threshold
};


export {
    PageBox,
    DisplayPanel,
    PageStack,
    OutlinedPaper,
    buildInteractionObserverThreshold
};