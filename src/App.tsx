import { Outlet } from "react-router-dom";
import Navbar from './Pages/Common/Navbar';
import { ThemeProvider, createTheme, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './CSS/App.css';
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App () {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const storedTheme = localStorage.getItem('theme') === 'dark' ? 'dark' : (prefersDarkMode ? 'dark' : 'light');

    const [mode, setMode] = React.useState<'light'|'dark'>(storedTheme);
    
    const theme = React.useMemo(() => 
        createTheme({
            palette: {
                mode,
                primary: {
                    main: '#126b68',
                },
                secondary: {
                    main: '#113769',
                    light: '#194d91',
                    contrastText: '#47008F',
                },
            },
            typography: {
                fontFamily: "\"Urbanist\""
            }
        }),
        [mode]
    );

    const colorMode = React.useMemo(
        () => (
            {
                toggleColorMode: () => {
                    setMode((prevMode) => 
                        (prevMode === 'light' ? 'dark' : 'light')
                    );
                },
            }
        ),
        [],
    );

    console.log("Color mode:", mode);

    return ( 
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Navbar colorMode={colorMode} />
                <Outlet />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );


};

