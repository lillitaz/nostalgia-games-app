import { Outlet, Link } from "react-router-dom";

import "./Layout.css";

const Layout = () => (
    <div className="Layout">
        <nav>
            <ul>
                <li className="grow">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/account">
                        <button type="button">Your Account</button>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <button type="button">About</button>
                    </Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
);

export default Layout;
