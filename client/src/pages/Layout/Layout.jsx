import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Layout = () => (
    <div className="Layout">
        <Navbar></Navbar>
        <Outlet />
    </div>
);

export default Layout;
