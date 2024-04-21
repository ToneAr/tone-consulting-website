import { Box, ButtonBase, Grid, Paper, Stack, Typography, duration, styled, useTheme } from "@mui/material";
import { useSpring, animated, useScroll, useSpringValue, SpringValue } from '@react-spring/web';

import {PageBox, DisplayPanel, PageStack, OutlinedPaper} from '../Common/CommonElements';
import { Component, useEffect, useRef, useState } from "react";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import phoneIcon from'../../Resources/telephone.png';
// import linkedInIcon from'../../Resources/social.png';
import mailIcon from'../../Resources/mail.png';
import linkedInIcon from'../../Resources/linkedin.png';
import githubIcon from '../../Resources/github.png';
import { useGesture } from '@use-gesture/react';

import phoneIconDark from'../../Resources/dark-telephone.png';
import linkedInIconDark from'../../Resources/dark-social.png';
import mailIconDark from'../../Resources/dark-mail.png';
import { Handshake, Opacity } from "@mui/icons-material";
import AnimatedButton from "../Common/AnimatedButton";
// import linkedInIconDark from'../../Resources/dark-linkedin.png';
// import githubIconDark from '../../Resources/dark-github.png';

function TitleCard ( props: any ) {
  
  const theme = useTheme();
  const AnimatedTypography = animated(Typography);
  const AnimatedBox = animated(Box);

  const { scrollYProgress } = useScroll();
  const scrollSpring: any = useSpring({
    from: {
      opacity: 0.0
    }
    ,
    to: [{
      opacity: 0.5
    },{
      opacity: 0.0
    }],
    loop: true,
    delay: 5000,
    config: {
      duration: 2000
    }
  });

  function incrementSubtitle () {
    setDisplayText({
      'Software Development': 'Consulting',
      'Consulting'          : 'Theoretical Physics',
      'Theoretical Physics' : 'Optimization',
      'Optimization'        : 'Software Development'
    }[displayText] ?? 'Software Development');
  };

  const [displayText, setDisplayText] = useState("Software Development");
  const spring = useSpring({
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

  return <>
    <Box className={props.className} sx={{textAlign:'center', ...props.sx}}>
      <DisplayPanel>

        <Typography variant='h1'>
          Antonis Aristeidou
        </Typography>

        <br />

        <Typography>
          <AnimatedTypography variant='h4' sx={{color:theme.palette.text.secondary}} style={spring}>
            {displayText}
          </AnimatedTypography>
        </Typography>

        <br />

        {/* <OutlinedPaper> */}
          <Typography variant='body1' sx={{justifyContent:'center', textAlign:'center', width: '70vw'}}>
            Harnessing a rich blend of theoretical physics and multifaceted professional expertise,
            I am a dynamic consultant and developer committed to crafting innovative software solutions,
            underscored by a relentless pursuit of excellence and growth across a diverse range of sectors.
          </Typography>
        {/* </OutlinedPaper> */}

        <br />

      </DisplayPanel>
    </Box>
  </>
};

function ContactCard ( props: any ) {
  const theme = useTheme();
  
  interface IContactObj {
    text: string,
    href: string,
    icon: {
      default: string,
      dark: string
    }
  };
  interface IContactColumn {
    title: string,
    data: IContactObj[],
  };
  interface IContactsGrid {
    details : IContactColumn,
    links : IContactColumn,
  };

  const contactsObjectArray: IContactsGrid = {
    details : {
      title: "Contact Details",
      data: [{text: 'tonyaris@outlook',
        href: 'mailto:tonyaris@outlook.com',
        icon: {
          default: mailIcon,
          dark: mailIconDark
        }
      },
      {text: '+(44) 747 868 2747',
        href: 'tel:+447478682747',
        icon: {
          default: phoneIcon,
          dark: phoneIconDark
        }
      }],
    },
    links : {
      title:"Links",
      data:[{text: 'Antonis Aristeidou',
        href: 'https://www.linkedin.com/in/antonis-aristeidou',
        icon: {
          default: linkedInIcon,
          dark: linkedInIconDark
        }
      },
      {text: 'ToneAr',
        href: 'https://www.github.com/ToneAr',
        icon: {
          default: githubIcon,
          dark: githubIcon
        }
      }],
    }
  };
  
  return <DisplayPanel>
    <Typography variant='h2'>
      Details
    </Typography>
    <br/>
    <Grid container spacing={10} direction='row' justifyContent='space-around' sx={{maxWidth: '75vw', textAlign: 'center'}}>
        {
          Object.values(contactsObjectArray).map( (values) => {
              return <Grid item xs={6}>
                <OutlinedPaper className='paper-row'>
                  <Stack spacing={2} >

                    <Typography variant='h5' sx={{color: theme.palette.text.secondary}}>
                      {`${values.title}`}
                    </Typography>

                    <br/>

                    <Grid container spacing={2} sx={{justifyContent:'center', textAlign: 'center',}}>
                      {
                        values.data.map( (obj: IContactObj) => {
                            return<>
                              <Grid item xs={3.5} sx={{ textAlign: 'right'}} >
                                <Typography variant='body1'>
                                  <img src={theme.palette.mode==='dark' ? obj.icon.dark : obj.icon.default} width={30}/>
                                </Typography>
                              </Grid>
                              <Grid item xs={8.5} sx={{textAlign: 'left'}}>
                                <Typography variant='body1'>
                                  <a  className='link' href='mailto:tonyaris@outlook.com' >
                                    {`${obj.text}`}
                                  </a>
                                </Typography>
                              </Grid>
                            </>
                          }
                        )
                      }
                    </Grid>

                  </Stack>
                </OutlinedPaper>
              </Grid>
            }
          )
        }
    </Grid>
    <br/>
  </DisplayPanel>
}; 

export default function About() {

  const theme = useTheme();
  const AnimatedBox = animated(Box);

  useEffect(() => {
    document.title = "TONE : About me";
    window.scrollBy(0, 70);
  }, []);

  return (
    <PageBox>
      <PageStack spacing='5vh'>

          <Box sx={{height: '5vh'}}/>
        
          <TitleCard />

          <Box sx={{textAlign:'center'}}>
            <DisplayPanel>

            <Typography variant='h2'>
              Competencies
            </Typography>
            
            <br/>
            
            <Grid container direction='row' justifyContent='space-evenly'>
              {tmpButtonObj.map(
                text => {return (
                  <AnimatedButton>
                    {text}
                  </AnimatedButton>
                );
              }
              )}
            </Grid>

            <br/>

            </DisplayPanel>
          </Box>
          
          <AnimatedBox sx={{textAlign: 'center'}}>
              <Typography>
                <KeyboardArrowDownIcon sx={{height:100}}/>
              </Typography>
          </AnimatedBox>

          <ContactCard />
        
        <Paper/>

      </PageStack>
    </PageBox>
  );
}

const tmpButtonObj = ['Full-Stack Development', 'Teaching & Presentations', 'Modeling & Optimization'];