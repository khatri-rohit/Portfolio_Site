import { FaArrowRight } from "react-icons/fa6";

const LinkedIn = () => {
    return (
        <a className="h-full relative flex items-center rounded-3xl bg-[#036cc2] drop-shadow-lg p-2 py-3.5" href="https://www.linkedin.com/in/rohitkhatri302" target="_blank">
            <img src="/img/linkedIn.png"
                className="w-64 mx-auto" />
            <button className="absolute bottom-3 right-4 bg-[#1e201e71] p-2 rounded-3xl">
                <FaArrowRight className="text-white text-lg" />
            </button>
        </a>
    )
};

export default LinkedIn;
