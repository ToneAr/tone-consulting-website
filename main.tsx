import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ErrorPage from './Common/ErrorPage.tsx';
import Home from './Pages/Home/Home.tsx';
import About from './Pages/About/About.tsx';
import Projects from './Pages/Projects/Projects.tsx';
import Blog from './Pages/Blog/Blog.tsx';
import Music from './Pages/Music/Music.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{path: "",
				element: <Home />
			},
			{path: "about",
				element: <About />
			},
			{path: "projects",
					element: <Projects />
			},
			{path: "blog",
					element: <Blog />
			},
			{path: "music",
				element: <Music />
			}
		]
	},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
