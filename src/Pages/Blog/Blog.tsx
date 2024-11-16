import { Paper, Typography } from '@mui/material';
import {PageBox, DisplayPanel, PageStack} from '../../Common/CommonElements';
import { useEffect } from 'react';
// import React from 'react';
// import { useSpring, animated } from 'react-spring';
// import AnimatedButton from '../../Common/AnimatedButton';

export default function Blog() {
  // const theme = useTheme();

  useEffect(() => {
    document.title = "TONE : Blog";
    window.scrollBy(0, 70);
  }, []);

  return (
    <PageBox>
        
        <PageStack>
          
          <Paper/>

          <DisplayPanel>

            <Typography variant='h1'>
              Blog
            </Typography>

            <Typography variant='body1'>
              Coming Soon
            </Typography>

          </DisplayPanel>

        </PageStack>

    </PageBox>
  );
  }