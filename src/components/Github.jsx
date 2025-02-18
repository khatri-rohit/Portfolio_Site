import { FaArrowRight } from "react-icons/fa6";

const Github = () => {
    return (
        <a className="h-full w-full flex items-center rounded-3xl bg-[#f8f8f8] drop-shadow-lg md:p-9 py-5 duration-300" href="https://github.com/khatri-rohit" target="_blank">
            <img src="/img/github.png"
                className="w-52 mx-auto" />
            <button className="absolute bottom-3 right-4 bg-[#1e201e71] p-2 rounded-3xl">
                <FaArrowRight className="text-white text-lg" />
            </button>
        </a>
    );
};

export default Github;