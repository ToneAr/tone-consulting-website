import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";

import {PageBox, DisplayBox} from '../Common/CommonElements';

export default function Projects() {

  const theme = useTheme();

  return (
    <PageBox>
        
        <Stack direction="column" spacing='20vh'>
          
          <Paper/>

          <DisplayBox>

            <Typography variant='h1'>
              Projects
            </Typography>

            <Typography variant='body1'>
              I'm just projecting
            </Typography>

          </DisplayBox>

        </Stack>

    </PageBox>
  );
  }