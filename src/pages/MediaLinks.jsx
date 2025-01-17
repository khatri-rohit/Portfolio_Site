import Github from "../components/Github";
import DisplayMap from "../components/DIsplayMap";
import Instagram from "../components/Instagram";
import LinkedIn from "../components/LinkedIn";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Spotify from "../components/Spotify";
import Twitter from "../components/Twitter";
import '../style/Media.css';
import Blog from "../components/Projects/Blog";

export const MediaLinks = () => {


    return (
        <div className="mediaLayout container mx-auto">

            <div className="box twitter h-full">
                <Twitter />
            </div>
            <div className="box linkedIn h-full">
                <LinkedIn />
            </div>
            <div className="box github h-full">
                <Github />
            </div>
            <div className="box spotify h-full">
                <Spotify />
            </div>
            <div className="box insta h-full">
                <Instagram />
            </div>

            <div className="box box2 md:opacity-20 opacity-50 map h-full">
                <DisplayMap />
            </div>
            <div className="box box4 md:opacity-20 opacity-50">
                <Skills />
            </div>
            <div className="box box1 md:opacity-20 opacity-50">
                <Profile />
            </div>
            <div className="box media-probox md:opacity-20 opacity-50">
                <Blog />
            </div>
        </div>
    )
};
