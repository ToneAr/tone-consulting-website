import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import './CSS/index.css';

import App from './App';
import Home from './Pages/Home/Home';
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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<RouterProvider router={router} />
);

