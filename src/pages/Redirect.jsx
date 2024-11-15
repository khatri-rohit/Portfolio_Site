import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useTheme from "../context/theme";

const Redirect = () => {
    const navigate = useNavigate();
    const { themeMode } = useTheme();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 5000);
    }, [])

    return (
        <div className="p-10 flex flex-col items-center h-screen w-full">
            <img src={`${themeMode === "dark" ? " /img/rb_7888.png" : "/img/rb_67437.png"}`} className="lg:w-[35%] md:w-[35%] " />
            <p className="md:text-2xl dark:text-white">
                You will Redirect to Home Page in a moment
            </p>
        </div>
    )
};

export default Redirect;
