import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";

import {PageBox, DisplayPanel, PageStack} from '../Common/CommonElements';

export default function Projects() {

  const theme = useTheme();

  return (
    <PageBox>
        
        <PageStack>
          
          <Paper/>

          <DisplayPanel>

            <Typography variant='h1'>
              Projects
            </Typography>

            <Typography variant='body1'>
              I'm just projecting
            </Typography>

          </DisplayPanel>

        </PageStack>

    </PageBox>
  );
  }