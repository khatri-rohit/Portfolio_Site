import { FaArrowRight } from "react-icons/fa6";

const Github = () => {
    return (
        <div className="h-full flex items-center rounded-3xl bg-[#F5F7F8] drop-shadow-lg">
            <img src="/img/github.png"
                className="w-52 mx-auto" />
            <button className="absolute bottom-3 right-4 bg-gray-500 p-2 rounded-3xl">
                <FaArrowRight className="text-white text-lg" />
            </button>
        </div>
    );
};

export default Github;
