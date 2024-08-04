import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Home = () => {

    return (
        <>
            <div className="mx-auto">
                <Navigation />
                <Outlet />
            </div>
        </>
    )
};

export default Home;
