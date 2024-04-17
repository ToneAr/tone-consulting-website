import { Outlet } from "react-router-dom";
import Navbar from './Pages/Common/Navbar';
import { ThemeProvider, createTheme, useMediaQuery, useTheme } from "@mui/material";
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
                },
                secondary: {
                    main: '#113769',
                    light: '#194d91',
                    contrastText: '#47008F',
                },
            },
            typography: {
                fontFamily: "\"Urbanist\"",
                body1 : {
                    fontSize: 20
                }
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

                {/* <div className='video'>
                  <video autoPlay muted loop>
                      <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  </video>
                </div> */}

            </ThemeProvider>
        </ColorModeContext.Provider>
    );


};

