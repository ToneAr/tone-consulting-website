import { Paper, Stack, Typography } from "@mui/material";
import { useSpring, animated } from '@react-spring/web';

import {PageBox, DisplayBox} from '../Common/CommonElements';

export default function CV() {

  const spring: any = useSpring({
    from: 0
    ,
    to: 10,
  })
  
  return (
    <PageBox>
      <Stack direction="column" spacing='20vh'>
        
        <Paper/>

        <DisplayBox>

          <Typography variant='h1'>
            It's all about me
          </Typography>

          <Typography variant='body1'>
            Look at this
          </Typography>

        </DisplayBox>

      </Stack>
    </PageBox>
  );
}