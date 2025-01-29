import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Footer } from "../components/Footer";

export const Layout = () => {
    return (
        <div className="mx-auto overflow-x-hidden">
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
};
