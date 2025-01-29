import DisplayMap from '../components/DIsplayMap';
import Profile from '../components/Profile';
import Github from '../components/Github';
import Instagram from '../components/Instagram';
import LinkedIn from "../components/LinkedIn";
import Blog from '../components/Projects/Blog';
import Skills from '../components/Skills';
import StaticPlayer from '../components/StaticPlayer';
import Twitter from '../components/Twitter';
import '../style/Home.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);


const Home = () => {

  const profileRef = useRef();
  const mapRef = useRef();
  const playerRef = useRef();
  const skillRef = useRef();
  const githubRef = useRef();
  const linkedInRef = useRef();
  const twitterRef = useRef();
  const instagramRef = useRef();
  const projectRef = useRef();

  const githubMobRef = useRef();
  const linkedinMobRef = useRef();
  const twitterMobRef = useRef();
  const instagramMobRef = useRef();

  gsap.registerPlugin(ScrollTrigger)

  const componentTimeLine = (tl) => {
    tl.fromTo(profileRef.current,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.5,
        // duration: 0.5,
        ease: "steps(1)",
      }
    );
    tl.fromTo(mapRef.current,
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        // duration: 0.5,
        ease: "steps(1)",
      }
    );
    tl.fromTo(skillRef.current,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        // duration: 0.5,
        ease: "steps(1)",
      }
    );
    tl.fromTo(playerRef.current,
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        // duration: 0.5,
        ease: "steps(1)",
      }
    );
    tl.fromTo(projectRef.current,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        // duration: 0.5,
        ease: "steps(1)",
      }
    );
    tl.fromTo(githubRef.current,
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        // duration: 0.5,
        ease: "steps(1)",
      }
    );
    tl.fromTo(linkedInRef.current,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.2,
        ease: "steps(1)",
        scrollTrigger: {
          trigger: linkedInRef.current,
          start: "top 100%",
          end: "top 100%",
          scrub: false,
        }
      }
    );
    tl.fromTo(twitterRef.current,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "steps(1)",
        scrollTrigger: {
          trigger: twitterRef.current,
          start: "top 100%",
          end: "top 100%",
          scrub: false,
        }
      }
    );
    tl.fromTo(instagramRef.current,
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "steps(1)",
        scrollTrigger: {
          trigger: instagramRef.current,
          start: "top 100%",
          end: "top 100%",
          scrub: false,
        }
      }
    );
  }

  useEffect(() => { // Use useEffect for one-time animation
    const tl = gsap.timeline();
    componentTimeLine(tl);
  }, []);

  return (
    <div className="layout lg:w-[80%] w-full mx-auto lg:p-[3.54em] md:p-[1.5em] p-[1em] overflow-hidden">
      <div ref={profileRef} className="box box1 profile h-full">
        <Profile />
      </div>
      <div ref={mapRef} className="box box2 media-map h-full">
        <DisplayMap />
      </div>
      <div ref={projectRef} className="box media-probox blog h-full">
        <Blog />
      </div>
      <div ref={playerRef} className="box box3 player h-full">
        <StaticPlayer />
      </div>
      <div ref={skillRef} className="box box4 skill h-full">
        <Skills />
      </div>
      <div ref={githubRef} className="box box3 github md:block hidden h-full">
        <Github />
      </div>
      <div ref={linkedInRef} className="box box3 linkedIn md:block hidden  h-full">
        <LinkedIn />
      </div>
      <div ref={twitterRef} className="box box2 twitter md:block hidden  h-full">
        <Twitter />
      </div>
      <div ref={instagramRef} className="box insta  md:block hidden  h-full">
        <Instagram />
      </div>

      <div className="col-4 social">
        <div ref={githubMobRef} className="box box3 github">
          <Github />
        </div>
        <div ref={linkedinMobRef} className="box box3 linkedIn">
          <LinkedIn />
        </div>
        <div ref={twitterMobRef} className="box box2 twitter">
          <Twitter />
        </div>
        <div ref={instagramMobRef} className="box insta">
          <Instagram />
        </div>
      </div>

    </div>
  )
};

export default Home;
