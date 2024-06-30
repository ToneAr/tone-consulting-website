import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";

import {PageBox, DisplayPanel, PageStack} from '../../Common/CommonElements';
import { useEffect } from "react";

export default function Projects() {
  const theme = useTheme();

  useEffect(() => {
    document.title = "TONE : Projects";
    window.scrollBy(0, 100);
  }, []);


  return (
    <PageBox>
        
        <PageStack>
          
          <Paper/>

          <DisplayPanel>

            <Typography variant='h1'>
              Projects
            </Typography>

            <Typography variant='body1'>
              Coming Soon
            </Typography>

          </DisplayPanel>

        </PageStack>

    </PageBox>
  );
  }