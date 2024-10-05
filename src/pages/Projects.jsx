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
    <div className="layout container mx-auto">
      <div className="box probox border-4">
        <Blog />
      </div>
      <div className="box box1">
        <Profile />
      </div>
      <div className="box box3">
        <Github />
      </div>
      <div className="box box3">
        <LinkedIn />
      </div>
      <div className="box box2 opacity-20">
        <DisplayMap />
      </div>
      <div className="box spotify box2 opacity-20">
        <Spotify />
      </div>
      <div className="box box2 opacity-20">
        <Skills />
      </div>
      <div className="box box2 opacity-20">
        <Twitter />
      </div>
      <div className="box insta opacity-20">
        <Instagram />
      </div>
    </div>
  )
};

export default Projects;
