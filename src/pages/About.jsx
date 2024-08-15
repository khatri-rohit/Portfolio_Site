import { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import DisplayMap from "../components/DIsplayMap";
import ImageSlider from "../components/ImageSlider";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import StaticPlayer from "../components/StaticPlayer";
import Github from '../components/Github';
import LinkedIn from '../components/LinkedIn';
import Twitter from '../components/Twitter';
import Instagram from '../components/Instagram';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/about");
    setTimeout(() => {
      setLoading(false);
    }, 250)
  }, [])

  if (loading) {
    return (
      <div
        className="absolute top-[50%] md:right-[50%] right-[40%] z-10">
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
      <div className="layout container mx-auto">
        <div className="box box1">
          <Profile />
        </div>
        <div className="box box2 rounded-3xl shadow-xl h-fit">
          <DisplayMap />
        </div>
        <div className="box box3 rounded-3xl shadow-xl h-fit">
          <ImageSlider />
        </div>
        <div className="box box3 rounded-3xl shadow-xl h-fit">
          <StaticPlayer />
        </div>
        <div className="box box4 rounded-3xl shadow-xl h-fit">
          <Skills />
        </div>
        <div className="box box3 rounded-3xl shadow-xl h-fit opacity-20">
          <Github />
        </div>
        <div className="box box3 rounded-3xl shadow-xl h-fit opacity-20">
          <LinkedIn />
        </div>
        <div className="box box2 rounded-3xl shadow-xl h-fit opacity-20">
          <Twitter />
        </div>
        <div className="box insta rounded-3xl shadow-xl h-fit opacity-20">
          <Instagram />
        </div>
      </div>
    </>
  )
};

export default About;