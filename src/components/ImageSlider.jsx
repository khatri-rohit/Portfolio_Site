/* eslint-disable no-unused-vars */
import { useState } from "react";

const ImageSlider = () => {
    const [count, setCount] = useState(2);

    return (
        <>
            <div className="border-2">
                <img src={`/img/${count}.jpg`} alt="" className="h-fit" />
            </div>
        </>
    )
};

export default ImageSlider;
