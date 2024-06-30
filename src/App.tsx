import { Outlet } from "react-router-dom";
import Navbar from './Common/Navbar';
import { CssBaseline, ScopedCssBaseline, ThemeProvider, createTheme, darkScrollbar, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

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
                    light: '#bae3d8',
                },
                secondary: {
                    main: '#2db5a3',
                    light: '#194d91',
                    contrastText: '#47008F',
                },
            },
            typography: {
                fontFamily: "\"Urbanist\"",
                body1 : {
                    fontSize: 20
                }
            },
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

