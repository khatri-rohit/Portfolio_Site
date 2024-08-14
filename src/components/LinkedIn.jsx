import { FaArrowRight } from "react-icons/fa6";

const LinkedIn = () => {
    return (
        <div className="h-full relative flex items-center rounded-3xl bg-[#0387c9] drop-shadow-lg">
            <img src="/img/linkedIn.png"
                className="w-64 mx-auto" />
            <button className="absolute bottom-3 right-4 bg-[#1e201e71] p-2 rounded-3xl">
                <FaArrowRight className="text-white text-lg" />
            </button>
        </div>
    )
};

export default LinkedIn;
