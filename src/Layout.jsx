import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

export const Layout = () => {
    return (
        <div className="mx-auto">
            <Navigation />
            <Outlet />
        </div>
    )
};
