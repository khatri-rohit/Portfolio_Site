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
  

  return (
    <div className="layout lg:w-[80%] w-full mx-auto lg:p-[4em] md:p-[1.5em] p-[1em]">
      
      <div className="box box1 rounded-3xl shadow-xl h-full">
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

      <div className="box box3 rounded-3xl shadow-xl md:opacity-20 opacity-50 md:block hidden h-full">
        <Github />
      </div>
      <div className="box box3 rounded-3xl shadow-xl md:opacity-20 opacity-50 md:block hidden h-full">
        <LinkedIn />
      </div>
      <div className="box box2 rounded-3xl shadow-xl md:opacity-20 opacity-50 md:block hidden h-full">
        <Twitter />
      </div>
      <div className="box insta rounded-3xl shadow-xl md:opacity-20 opacity-50 md:block hidden h-full">
        <Instagram />
      </div>

      <div className="col-4 social">
        <div className="box box3 rounded-3xl shadow-xl md:opacity-20 opacity-50 github">
          <Github />
        </div>
        <div className="box box3 rounded-3xl shadow-xl md:opacity-20 opacity-50 linkedIn">
          <LinkedIn />
        </div>
        <div className="box box2 rounded-3xl shadow-xl md:opacity-20 opacity-50 twitter">
          <Twitter />
        </div>
        <div className="box insta rounded-3xl shadow-xl md:opacity-20 opacity-50">
          <Instagram />
        </div>
      </div>

    </div>
  )
};

export default About;