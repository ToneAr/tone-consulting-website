import { Box, Grow, Paper, Stack, Typography, useTheme } from "@mui/material";
import { animated, easings, useInView, useSpring, useTransition } from "react-spring";
import dayForestImg from '../Resources/daytime-forest.jpg';
import nightForestImg from '../Resources/nighttime-forest.jpg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
              backgroundAttachment: 'fixed',
              backgroundSize: 'width',
              ...props.sx
          }}
        >
            {props.children}
        </AnimatedBox>
    );
};


function DownArrow ( props : any ) {
	const AnimatedBox = animated(Box);
	return <AnimatedBox sx={{textAlign: 'center'}}>
		<Typography>
			<KeyboardArrowDownIcon sx={{height:100}}/>
		</Typography>
	</AnimatedBox>
};

function PageStack ( props:props ) {
  return (
    <Stack direction="column" spacing={props.spacing ?? '5vh'} sx={props.sx}>
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
            textAlign: 'center',
            ...backgroundAnimation,
            ...styles,
            ...props.style
          }}
        >
          <Box
            sx={{width: '95%'}}
          >
            {props.children}
          </Box>
        </AnimatedPaper>
    );
};

function OutlinedPaper ( {className = "paper-outlined", ...props}: props ) {
    const theme = useTheme();
    const AnimatedPaper = animated(Paper);
    const backgroundAnimation = useSpring({
      background: theme.palette.mode === 'dark' ? "#000b" : "#fffb",
      config: {
        friction: 40
      }
    });
    return (
        <AnimatedPaper className={className}
          style={backgroundAnimation}
          variant='outlined'
          sx={{
            padding:2,
            textAlign: 'left',
            ...props.sx
          }}
        >
          <Box>
            {props.children}
          </Box>
        </AnimatedPaper>
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
    buildInteractionObserverThreshold,
    DownArrow
};