import { Outlet } from "react-router-dom";

import Navbar from './Pages/Common/Navbar';

export default function App () {
    return <>
        <Navbar />
        <Outlet />
    </>
};

