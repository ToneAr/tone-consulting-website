import { Box, ButtonBase, Paper, Stack, Typography, useTheme } from '@mui/material';
import {PageBox, DisplayPanel, PageStack, OutlinedPaper} from '../Common/CommonElements';
import { useEffect } from 'react';
import React from 'react';
import { useSpring, animated } from 'react-spring';
import AnimatedButton from '../Common/AnimatedButton';

export default function Blog() {
  const theme = useTheme();

  useEffect(() => {
    document.title = "TONE : Other";
    window.scrollBy(0, 100);
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
              Rambling on and on
            </Typography>

          </DisplayPanel>

        </PageStack>

    </PageBox>
  );
  }