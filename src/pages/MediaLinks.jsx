import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import Github from "../components/Github";
import ImageSlider from "../components/ImageSlider";
import Twitter from "../components/Twitter";
import Spotify from "../components/Spotify";
import Instagram from "../components/Instagram";
import LinkedIn from "../components/LinkedIn";
import Profile from "../components/Profile";
import DisplayMap from "../components/DIsplayMap";
import Skills from "../components/Skills";
import '../style/Media.scss';

export const MediaLinks = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 250)
    })

    if (loading) {
        return (
            <div className="absolute top-[50%] md:right-[50%] right-[40%] z-10">
                <BounceLoader
                    color="#4d91bed2"
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
                <div className="box insta h-72 rounded-3xl">
                    <Instagram />
                </div>
                <div className="box box1 opacity-20">
                    <Profile/>
                </div>
                <div className="box box2 opacity-20">
                    <DisplayMap />
                </div>
                <div className="box box4 opacity-20">
                    <Skills />
                </div>
            </div>
        </>
    )
};
