/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";

const Redirect = () => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate("/");
    }
    return (
        <div className="p-15 flex flex-col items-center justify-center">
            <p className="dark:text-white text-center text-5xl m-3">Page doesn't exists </p>
            <button className="px-4 py-2 bg-[#0c34b9] my-6 text-white text-2xl rounded-lg"
                onClick={redirect}>
                Home
            </button>
        </div>
    )
};

export default Redirect;
