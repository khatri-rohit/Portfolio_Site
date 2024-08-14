import { FaArrowRight } from "react-icons/fa6";

const Twitter = () => {
    return (
        <>
            <div className="h-full relative flex items-center rounded-3xl bg-[#F5F7F8] drop-shadow-lg">
                <img src="/img/twitter.png"
                    className="w-44 mx-auto my-5" />
                <button className="absolute bottom-3 right-4 bg-gray-500 p-2 rounded-3xl">
                    <FaArrowRight className="text-white text-lg" />
                </button>
            </div>
        </>
    )
};

export default Twitter;
