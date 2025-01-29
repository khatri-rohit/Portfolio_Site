import { FaArrowRight } from "react-icons/fa6";

const Hackerrank = () => {
    return (
        <a className="h-full w-full flex items-center rounded-3xl bg-[#0e141e] drop-shadow-lg md:p-9 py-5 duration-300"
            href="https://www.hackerrank.com/profile/rohit_khatri302" target="_blank">
            <img src="/img/hackerrank_logo.png" className="w-52 mx-auto" />
            <button className="absolute bottom-3 right-4 bg-[#1e201e71] p-2 rounded-3xl">
                <FaArrowRight className="text-white text-lg" />
            </button>
        </a>
    );
};

export default Hackerrank;