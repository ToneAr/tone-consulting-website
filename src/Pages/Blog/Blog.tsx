import { Box, Paper, Stack, Typography, useTheme } from '@mui/material';
import {PageBox, DisplayBox} from '../Common/CommonElements';


export default function Blog() {

  const theme = useTheme();

  return (
    <PageBox>
        
        <Stack direction="column" spacing='20vh'>
          
          <Paper/>

          <DisplayBox>

            <Typography variant='h1'>
              Blog
            </Typography>

            <Typography variant='body1'>
              Rambling on and on
            </Typography>

          </DisplayBox>

        </Stack>

    </PageBox>
  );
  }