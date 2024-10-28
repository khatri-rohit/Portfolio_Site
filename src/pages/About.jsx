import { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import DisplayMap from "../components/DIsplayMap";
import Github from '../components/Github';
import Instagram from '../components/Instagram';
import LinkedIn from '../components/LinkedIn';
import Profile from "../components/Profile";
import Blog from '../components/Projects/Blog';
import Skills from "../components/Skills";
import StaticPlayer from "../components/StaticPlayer";
import Twitter from '../components/Twitter';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    <div className="layout lg:w-[80%] w-full mx-auto lg:p-[4em] md:p-[1.5em] p-[1em]">
      <div className="box box1">
        <Profile />
      </div>
      <div className="box box2 rounded-3xl shadow-xl map h-full">
        <DisplayMap />
      </div>
      <div className="box probox blog h-full">
        <Blog />
      </div>
      <div className="box box3 rounded-3xl shadow-xl player h-full">
        <StaticPlayer />
      </div>
      <div className="box box4 rounded-3xl shadow-xl skill h-full">
        <Skills />
      </div>

      <div className="box box3 rounded-3xl shadow-xl opacity-20 md:block hidden h-full">
        <Github />
      </div>
      <div className="box box3 rounded-3xl shadow-xl opacity-20 md:block hidden h-full">
        <LinkedIn />
      </div>
      <div className="box box2 rounded-3xl shadow-xl opacity-20 md:block hidden h-full">
        <Twitter />
      </div>
      <div className="box insta rounded-3xl shadow-xl opacity-20 md:block hidden h-full">
        <Instagram />
      </div>

      <div className="col-4 social">
        <div className="box box3 rounded-3xl shadow-xl opacity-20 github">
          <Github />
        </div>
        <div className="box box3 rounded-3xl shadow-xl opacity-20 linkedIn">
          <LinkedIn />
        </div>
        <div className="box box2 rounded-3xl shadow-xl opacity-20 twitter">
          <Twitter />
        </div>
        <div className="box insta rounded-3xl shadow-xl opacity-20">
          <Instagram />
        </div>
      </div>

    </div>
  )
};

export default About;