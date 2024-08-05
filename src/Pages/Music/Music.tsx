import { Box, ButtonBase, Paper, Stack, Typography, useTheme } from '@mui/material';
import {PageBox, DisplayPanel, PageStack, OutlinedPaper} from '../../Common/CommonElements';
import { useEffect } from 'react';
import React from 'react';
import { useSpring, animated } from 'react-spring';
import AnimatedButton from '../../Common/AnimatedButton';

export default function Music() {
  const theme = useTheme();

  useEffect(() => {
    document.title = "TONE : Music";
    window.scrollBy(0, 70);
  }, []);

  return (
    <PageBox>
        
        <PageStack>
          
          <Paper/>

          <DisplayPanel>

            <Typography variant='h1'>
                Music
            </Typography>

            <Typography variant='body1'>
              Coming Soon
            </Typography>

          </DisplayPanel>

        </PageStack>

    </PageBox>
  );
  }