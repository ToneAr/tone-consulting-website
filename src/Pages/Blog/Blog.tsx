import { Box, Paper, Stack, Typography, useTheme } from '@mui/material';
import {PageBox, DisplayPanel, PageStack} from '../Common/CommonElements';


export default function Blog() {

  const theme = useTheme();

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