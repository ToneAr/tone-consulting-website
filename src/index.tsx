import React from 'react';
import ReactDOM from 'react-dom/client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
	createBrowserRouter,
    BrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

import './CSS/index.css';
import App from './App';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Common/Navbar';
import ErrorPage from "./Pages/Common/ErrorPage";
import CV from "./Pages/CV/CV";
import Projects from "./Pages/Projects/Projects";
import Blog from "./Pages/Blog/Blog";


const router = createBrowserRouter([
	{path: "/",
		element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {path: "",
        element: <Home />
      },
      {path: "cv",
        element: <CV />
      },
      {path: "projects",
          element: <Projects />
      },
      {path: "blog",
          element: <Blog />
      }
    ]
	},
]);

const theme: any = createTheme({
  palette: {
    primary: {
      main: '#126b68',
    },
    secondary: {
      main: '#113769',
      light: '#194d91',
      contrastText: '#47008F',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(

    <ThemeProvider theme={theme}> 
      <RouterProvider router={router} />
    </ThemeProvider>

);

