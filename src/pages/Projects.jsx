import DisplayMap from "../components/DIsplayMap";
import Github from "../components/Github";
import Instagram from "../components/Instagram";
import LinkedIn from "../components/LinkedIn";
import Profile from "../components/Profile";
import Blog from "../components/Projects/Blog";
import Skills from "../components/Skills";
import Spotify from "../components/Spotify";
import Twitter from "../components/Twitter";

const Projects = () => {
  
  return (
    <div className="layout lg:w-[80%] w-full mx-auto lg:p-[4em] md:p-[1.5em] p-[1em]">
      <div className="box probox blog h-full">
        <Blog />
      </div>
      <div className="box box1 profile h-full">
        <Profile />
      </div>

      <div className="box box3 w-full github h-full md:block hidden">
        <Github />
      </div>
      <div className="box box3 w-full linkedIn h-full md:block hidden">
        <LinkedIn />
      </div>

      <div className="project-grid">
        <div className="box box3 w-full github h-full">
          <Github />
        </div>
        <div className="box box3 w-full linkedIn h-full">
          <LinkedIn />
        </div>
      </div>

      <div className="box box2 md:opacity-20 opacity-50 map">
        <DisplayMap />
      </div>
      <div className="box spotify box2 md:opacity-20 opacity-50  h-full">
        <Spotify />
      </div>
      <div className="box box2 md:opacity-20 opacity-50 skill h-full">
        <Skills />
      </div>

      <div className="box md:opacity-20 opacity-50 h-full md:block hidden">
        <Twitter />
      </div>
      <div className="box insta md:opacity-20 opacity-50 h-full md:block hidden">
        <Instagram />
      </div>

      <div className="project-grid">
        <div className="box md:opacity-20 opacity-50 h-full">
          <Twitter />
        </div>
        <div className="box insta md:opacity-20 opacity-50 block  h-full">
          <Instagram />
        </div>
      </div>
    </div>
  )
};

export default Projects;
