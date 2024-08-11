/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

const ImageSlider = () => {
    const [count, setCount] = useState(1);

    const handleCountPlus = () => {
        if (count < 2)
            setCount(prev => prev + 1)
        else setCount(1)
    }

    const handleCountMinus = () => {
        if (count == 1)
            setCount(2)
        else setCount(prev => prev - 1)
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (count < 2)
                setCount(prev => prev + 1)
            else setCount(1)
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [count])

    return (
        <>
            <div className="relative drop-shadow-lg">
                <img src={`/img/${count}.jpg`} alt=""
                    className="rounded-3xl shadow-xl" />
                <div className="absolute flex justify-between items-center p-5 inset-0">
                    <button
                        className="bg-[#1d1c1c56] p-1 rounded-full hover:bg-[#ffffffb7]"
                        onClick={handleCountMinus}>
                        <RiArrowLeftWideFill
                            className="text-white text-2xl" />
                    </button>
                    <button
                        className="bg-[#1d1c1c56] p-1 rounded-full hover:bg-[#ffffffb7]"
                        onClick={handleCountPlus}>
                        <RiArrowRightWideFill
                            className="text-white text-2xl" />
                    </button>
                </div>
                <div
                    className="z-10 flex justify-around items-center absolute bottom-1 left-[29%]">
                    <p className={`${count == 1 ? "bg-white" : "bg-slate-400"} h-3 w-3 rounded-full  mx-8 my-2 opacity-80`}></p>
                    <p className={`${count == 2 ? "bg-white" : "bg-slate-400"} h-3 w-3 rounded-full  mx-8 my-2 opacity-80`}></p>
                    {/* <p className={`${count == 3 ? " mx-5 my-2 bg-white" : " mx-5 my-2 bg-slate-400"} h-3 w-3 rounded-full`}></p> */}
                </div>
            </div>
        </>
    )
};

export default ImageSlider;
