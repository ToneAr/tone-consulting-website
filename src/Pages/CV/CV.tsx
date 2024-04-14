import { Box, Typography, useTheme } from "@mui/material";


export default function CV() {

  const theme = useTheme();

  return (
    <Box sx={{
      background: theme.palette.background.default,
      color: theme.palette.text.primary
    }}>
        
        <Typography variant='h2' className='App-header' >
          It's all about me
        </Typography>

    </Box>
  );
}