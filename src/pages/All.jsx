import { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import Profile from '../components/Profile';
import DisplayMap from '../components/DIsplayMap';
import ImageSlider from '../components/ImageSlider';
import StaticPlayer from '../components/StaticPlayer';
import Skills from '../components/Skills';
import LinkedIn from "../components/LinkedIn";
import Github from '../components/Github';
import Twitter from '../components/Twitter';
import Instagram from '../components/Instagram';
import '../style/All.scss';


const All = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 250)
  })

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
        <div className="box box2">
          <DisplayMap />
        </div>
        <div className="box box3">
          <ImageSlider />
        </div>
        <div className="box box3">
          <StaticPlayer />
        </div>
        <div className="box box4">
          <Skills />
        </div>
        <div className="box box3">
          <Github />
        </div>
        <div className="box box3">
          <LinkedIn />
        </div>
        <div className="box box2">
          <Twitter />
        </div>
        <div className="box insta">
          <Instagram />
        </div>
      </div>
    </>
  )
};

export default All;
