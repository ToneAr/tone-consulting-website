import { Box, Grow, Paper, useTheme } from "@mui/material";

type props = {
  children: JSX.Element[] | JSX.Element
}

function PageBox ( {children}:props ) {
    
    const theme = useTheme();
    
    return (
        <Box className='background-box' sx={{
            background: theme.palette.background.default,
            color: theme.palette.text.primary
        }}>
            {children}
        </Box>
    );
};

function DisplayBox (  {children}:props ) {
    return (
        <Grow in={ true } appear={ true } >
          <Paper className='paper' elevation={10} >
            {children}
          </Paper>
        </Grow>
    );
};

export {
    PageBox,
    DisplayBox
};