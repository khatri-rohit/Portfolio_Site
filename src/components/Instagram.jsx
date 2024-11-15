import { FaArrowRight } from "react-icons/fa6";

const Instagram = () => {
    return (
        <a className="h-full flex items-center rounded-3xl drop-shadow-lg p-10 duration-300"
            href="https://www.instagram.com/rohitkhatri.dev"
            target="_blank">
            <img src="/img/instagram.png"
                className="w-52 mx-auto" />
            <button className="absolute bottom-3 right-4 bg-[#1e201e71] p-2 rounded-3xl">
                <FaArrowRight className="text-white text-lg" />
            </button>
        </a>
    )
};

export default Instagram;
