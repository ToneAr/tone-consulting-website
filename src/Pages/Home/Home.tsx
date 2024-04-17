import React, { useState } from 'react';
import logo from './logo.svg';
import { Box, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import { useSpring, animated, useSprings } from "react-spring";

import {
  PageBox,
  DisplayPanel,
  PageStack,
  OutlinedPaper
} from '../Common/CommonElements';

function Home() {

  window.scroll(0, 100);
  document.title = "TONE";

  const theme = useTheme();
  
  const [displayText, setDisplayText] = useState("Adapting to");

  function incrementInline () {
    setDisplayText({
      'Adapting to': 'Learning in',
      'Learning in': 'Growing despite',
      'Growing despite' : 'Adapting to',
    }[displayText] ?? 'Adapting');
  };

  const props = useSpring({ 
    from:{ 
      opacity: 0,
      y: -50 },
    to: [{
      opacity: 1,
      y: 0
    },{
      opacity: 0,
      y: 30
    },],
    reset: true,
    onRest: () => {
      incrementInline();
    },
    
    config: {
      mass: 5,
      friction: 200,
      tension: 500
    }
  });

  const AnimatedTypography = animated(Typography);


  return (
    <PageBox>
        <PageStack>
          
          <Paper/>

          <DisplayPanel>
            
            <AnimatedTypography variant='h1' >
              Pursuing Perfection
            </AnimatedTypography>

            <br />

              <Grid container spacing={1} sx={{ maxWidth:'80%', textAlign: 'center'}} >
                <Grid item xs={4.3} >
                  <AnimatedTypography variant='h5' sx={{color:theme.palette.text.secondary, textAlign: 'right'}} style={props}>
                    {displayText}
                  </AnimatedTypography>
                </Grid>
                <Grid item xs={7.7} >
                  <Typography variant='h6' sx={{color:theme.palette.text.secondary, textAlign: 'left' }}>a turbulent today, in the pursuit of a peaceful tomorrow</Typography>
                </Grid>
              </Grid>

            <br />
            
            <Typography variant='body1' sx={{justifyContent:'center', textAlign:'center', maxWidth: '70vw'}}>
              The world is in constant flux. Knowledge allows the traversal of its ever changing landscapes,
              shining a light at it's darkest corners.
            </Typography>
            
            <br />

          </DisplayPanel>

        </PageStack>

    </PageBox>
  );
}

export default Home;
