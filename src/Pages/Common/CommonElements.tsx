import { Box, Grow, Paper, Stack, useTheme } from "@mui/material";

type props = {
  children: JSX.Element[] | JSX.Element,
  className?: any,
  sx?: Object,
  in? : boolean,
  spacing?: number | string
};

function PageBox ( {className = "background-box", ...props}:props ) {
    const theme = useTheme();
    return (
        <Box className={className} sx={{
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            ...props.sx
        }}>
            {props.children}
        </Box>
    );
};

function PageStack ( props:props ) {
        return (
        <Stack direction="column" spacing={props.spacing} sx={props.sx}>
            {props.children}
        </Stack> 
    );
};

function DisplayPanel ( {className = "paper", ...props}: props ) {
    const theme = useTheme();
    return (
        <Grow in={ props.in ?? true } appear={ true }  >
          <Paper className={className} elevation={10} sx={{
            background: theme.palette.mode === 'dark' ? "#212121" : "#eeeeee",
            padding:2,
            ...props.sx
          }}
        >
            {props.children}
          </Paper>
        </Grow>
    );
};

function OutlinedPaper ( {className = "paper-outlined", ...props}: props ) {
    const theme = useTheme();
    return (
        <Paper className={className} variant='outlined' sx={{
            background: theme.palette.mode === 'dark' ? "#111111" : "#e9e9e9",
            padding:2,
            ...props.sx
          }}
        >
          {props.children}
        </Paper>
    );

};

export {
    PageBox,
    DisplayPanel,
    PageStack,
    OutlinedPaper
};