import { useEffect, useState } from "react";
import Github from "../components/Github";
import ImageSlider from "../components/ImageSlider";
import LinkedIn from "../components/LinkedIn";
import Twitter from "../components/Twitter";
import '../style/Media.scss'
import { BounceLoader } from "react-spinners";
import Spotify from "../components/Spotify";

export const MediaLinks = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 250)
    }, [])

    if (loading) {
        return (
            <div className="absolute top-[50%] md:right-[50%] right-[40%] z-10">
                <BounceLoader
                    color="#5B99C2"
                    size={71}
                    speedMultiplier={2}
                />
            </div>
        )
    }
    return (
        <>
            <div className="mediaLayout container mx-auto">
                <div className="box twitter">
                    <Twitter />
                </div>
                <div className="box img">
                    <ImageSlider />
                </div>
                <div className="box linkedIn">
                    <LinkedIn />
                </div>
                <div className="box github h-72">
                    <Github />
                </div>
                <div className="box spotify h-72">
                    <Spotify />
                </div>
            </div>
        </>
    )
};
