import { FaArrowRight } from "react-icons/fa6";

const Twitter = () => {
    return (
        <>
            <a className="h-full relative flex items-center rounded-3xl bg-[#eeeeee] dark:bg-[#49a7ff] drop-shadow-lg p-5" 
                href="https://x.com/Rohit_Khatri302"
                target="_blank">
                <img src="/img/twitter.png"
                    className="w-44 mx-auto my-10" />
                <button className="absolute bottom-3 right-4 bg-[#1e201e71] p-2 rounded-3xl">
                    <FaArrowRight className="text-white text-lg" />
                </button>
            </a>
        </>
    )
};

export default Twitter;
