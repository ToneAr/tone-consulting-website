import React from 'react';
import logo from './logo.svg';
import { Box, Paper, Stack, Typography, useTheme } from '@mui/material';

import {PageBox, DisplayBox} from '../Common/CommonElements';

function Home() {

  const theme = useTheme();

  return (
    <PageBox>
        <Stack direction="column" spacing='20vh'>
          
          <Paper/>

          <DisplayBox>
            
            <Typography variant='h1'>
              Welcome
            </Typography>

            <Typography variant='body1'>
              I'm working on it
            </Typography>

          </DisplayBox>

        </Stack>

    </PageBox>
  );
}

export default Home;
