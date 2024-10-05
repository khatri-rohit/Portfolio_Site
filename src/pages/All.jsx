import { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import DisplayMap from '../components/DIsplayMap';
import Profile from '../components/Profile';
import Github from '../components/Github';
import Instagram from '../components/Instagram';
import LinkedIn from "../components/LinkedIn";
import Blog from '../components/Projects/Blog';
import Skills from '../components/Skills';
import StaticPlayer from '../components/StaticPlayer';
import Twitter from '../components/Twitter';
import '../style/All.scss';


const Home = () => {
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
    <div className="layout md:container mx-auto">
      <div className="box box1">
        <Profile />
      </div>
      <div className="box box2">
        <DisplayMap />
      </div>
      <div className="box probox border-4">
        <Blog />
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
  )
};

export default Home;
