import React from 'react';
import logo from './logo.svg';
import '../../CSS/Home.css';
import { Box, Typography, useTheme } from '@mui/material';

function Home() {

  const theme = useTheme();

  return (
    <Box sx={{
      background: theme.palette.background.default,
      color: theme.palette.text.primary
    }}>
        
        <Typography variant='h2' className='App-header' >
          I'm working on it
        </Typography>

    </Box>
  );
}

export default Home;
