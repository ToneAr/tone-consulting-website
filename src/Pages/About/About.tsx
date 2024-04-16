import { Grid, Paper, Stack, Typography, useTheme } from "@mui/material";
import { useSpring, animated } from '@react-spring/web';

import {PageBox, DisplayPanel, PageStack, OutlinedPaper} from '../Common/CommonElements';
import { useState } from "react";

import phoneIcon from'../../Resources/telephone.png';
// import linkedInIcon from'../../Resources/social.png';
import mailIcon from'../../Resources/mail.png';
import linkedInIcon from'../../Resources/linkedin.png';
import githubIcon from '../../Resources/github.png';

import phoneIconDark from'../../Resources/dark-telephone.png';
import linkedInIconDark from'../../Resources/dark-social.png';
import mailIconDark from'../../Resources/dark-mail.png';
// import linkedInIconDark from'../../Resources/dark-linkedin.png';
// import githubIconDark from '../../Resources/dark-github.png';

export default function CV() {
  const AnimatedTypography = animated(Typography);
  const theme = useTheme();
  const [displayText, setDisplayText] = useState("Software Development");
  const props = useSpring({
    from:{ 
      opacity: 0,
      x: -200 },
    to: [{
      opacity: 1,
      x: 0
    },{
      opacity: 0,
      x: 200
    },],
    reset: true,
    onRest: () => {
      incrementSubtitle();
    },
    config: {
      mass: 5,
      friction: 200,
      tension: 500
    }
  });
  const spring: any = useSpring({
    from: 0
    ,
    to: 10,
  })
  function incrementSubtitle () {
    setDisplayText({
      'Software Development': 'Consulting',
      'Consulting'          : 'Physics',
      'Physics'             : 'Math',
      'Math'                : 'Software Development'
    }[displayText] ?? 'Software Development');
  };
  return (
    <PageBox className='background-box'>
      
      

      <PageStack spacing='35vh'>
        
        <Paper/>

        <DisplayPanel>

          <Typography variant='h1'>
            Antonis Aristeidou
          </Typography>

          <br />
            
           <Typography>
            <AnimatedTypography variant='h4' sx={{color:theme.palette.text.secondary}} style={props}>
              {displayText}
            </AnimatedTypography>
          </Typography>

          <br />

          <OutlinedPaper>
            <Typography variant='body1' sx={{justifyContent:'center', textAlign:'center', width: '70vw'}}>
              Harnessing a rich blend of theoretical physics and multifaceted professional expertise,
              I am a dynamic consultant and developer committed to crafting innovative software solutions,
              underscored by a relentless pursuit of excellence and growth across a diverse range of sectors.
            </Typography>
          </OutlinedPaper>
          
          <br />
          </DisplayPanel>


          <DisplayPanel>

            <Typography variant='h2'>
              Details
            </Typography>

            <br/>

            <Grid container spacing={10} direction='row' justifyContent='space-around' sx={{maxWidth: '75vw', textAlign: 'center'}}>
              
              <Grid item xs={6}>
                <OutlinedPaper className='paper-row'>
                  <Stack spacing={2} >
                    
                    <Typography variant='h5' sx={{color: theme.palette.text.secondary}}>
                      Contact Details
                    </Typography>
                    <br/>

                    <Grid container spacing={2} sx={{justifyContent:'center', textAlign: 'center',}}>
                        
                          <Grid item xs={2} sx={{ width:'1vw',textAlign: 'right'}} >
                            <Typography variant='body1'>
                              <img src={theme.palette.mode==='dark' ? mailIconDark : mailIcon} width={30}/>
                            </Typography>
                          </Grid>
                          <Grid item xs={10} sx={{width:'1vw' ,textAlign: 'left'}}>
                            <Typography variant='body1'>
                              <a  className='link' href='mailto:tonyaris@outlook.com' >
                                tonyaris@outlook.com
                              </a>
                            </Typography>
                          </Grid>
                     
                          <Grid item xs={2} sx={{textAlign: 'right'}} >
                            <Typography variant='body1'>
                              <img src={theme.palette.mode==='dark' ? phoneIconDark : phoneIcon} width={30}/>
                            </Typography>
                          </Grid>
                          <Grid item xs={10} sx={{textAlign: 'left'}}>
                            <Typography variant='body1'>
                              <a className='link' href='tel:+447478682747'>+(44) 747 868 2747</a>
                            </Typography>
                          </Grid>

                    </Grid>

                  </Stack>
                </OutlinedPaper>
              </Grid>

              <Grid item xs={6}>
                <OutlinedPaper className='paper-row'>
                  
                  <Stack spacing={2}>
                    
                    <Typography variant='h5' sx={{color: theme.palette.text.secondary}}>Links</Typography>
                    <br/>

                    <Grid container spacing={2} sx={{justifyContent:'center', textAlign: 'center',}}>
                      
                      <Grid item xs={2} sx={{textAlign: 'right'}} >
                        <Typography variant='body1'>
                          <img src={theme.palette.mode==='dark' ? linkedInIconDark : linkedInIcon} width={30}/>
                        </Typography>
                      </Grid>

                      <Grid item xs={10} sx={{textAlign: 'left'}}>
                        <Typography variant='body1'>
                          <a className='link' href='https://www.linkedin.com/in/antonis-aristeidou'>Antonis Aristeidou</a>
                        </Typography>
                      </Grid>

                      <Grid item xs={2} sx={{textAlign: 'right'}} >
                        <Typography variant='body1'>
                          <img src={theme.palette.mode==='dark' ? linkedInIconDark : githubIcon} width={33}/>
                        </Typography>
                      </Grid>
                      <Grid item xs={10} sx={{textAlign: 'left'}}>
                        <Typography variant='body1'>
                          <a className='link' href='https://www.github.com/ToneAr'>ToneAr</a>
                        </Typography>
                      </Grid>
                      
                    </Grid>

                    
                  </Stack>

                </OutlinedPaper>
              </Grid>
              
            </Grid>

            <br/>
        </DisplayPanel>

        <Paper/>

      </PageStack>
    </PageBox>
  );
}