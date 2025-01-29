import { useEffect, useRef } from "react";
import DisplayMap from "../components/DIsplayMap";
import Github from '../components/Github';
import Instagram from '../components/Instagram';
import LinkedIn from '../components/LinkedIn';
import Profile from "../components/Profile";
import Blog from '../components/Projects/Blog';
import Skills from "../components/Skills";
import StaticPlayer from "../components/StaticPlayer";
import Twitter from '../components/Twitter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {

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

  gsap.registerPlugin(ScrollTrigger);

  const animate = (element, direction, delay = 0, label) => ({
    from: {
      [direction.includes('x') ? 'x' : 'y']: direction.includes('-') ? '-150%' : '150%',
      opacity: 0
    },
    to: {
      [direction.includes('x') ? 'x' : 'y']: 0,
      opacity: 1,
      delay,
      ease: "steps(1)",
      scrollTrigger: element.current?.classList?.contains('md:block') ? {
        trigger: element.current,
        start: "top 90%",
        end: "top 90%"
      } : null
    },
    label
  });

  useEffect(() => {
    const tl = gsap.timeline();

    // Main components
    const mainAnimations = [
      [profileRef, '-x', 0.5],
      [mapRef, 'x'],
      [skillRef, '-x'],
      [githubRef, 'x'],
      [projectRef, '-y'],
      [linkedInRef, 'x']
    ].forEach(([ref, dir, delay]) =>
      tl.fromTo(ref.current, animate(ref, dir, delay).from, animate(ref, dir, delay).to)
    );

    // Social components
    const socialRefs = [
      [playerRef, '-x'],
      [twitterRef, 'y'], [instagramRef, 'x'],
      [githubMobRef, '-x', 0, 'left'], [linkedinMobRef, 'x', 0.2, 'right'],
      [twitterMobRef, '-x', 0, 'left'], [instagramMobRef, 'x', 0, 'right']
    ].forEach(([ref, dir, delay, label]) =>
      tl.fromTo(ref.current, animate(ref, dir, delay, label).from, animate(ref, dir, delay, label).to)
    );
  }, []);

  return (
    <div className="layout lg:w-[80%] w-full mx-auto lg:p-[4em] md:p-[1.5em] p-[1em] overflow-hidden">

      <div ref={profileRef} className="box box1 rounded-3xl shadow-xl h-full">
        <Profile />
      </div>
      <div ref={mapRef} className="box box2 rounded-3xl shadow-xl map h-full">
        <DisplayMap />
      </div>
      <div ref={projectRef} className="box probox blog h-full">
        <Blog />
      </div>
      <div ref={githubRef} className="box box3 rounded-3xl shadow-xl md:block hidden h-full w-full">
        <Github />
      </div>
      <div ref={skillRef} className="box box4 rounded-3xl shadow-xl skill h-full">
        <Skills />
      </div>
      <div ref={linkedInRef} className="box box3 rounded-3xl shadow-xl md:block hidden h-full">
        <LinkedIn />
      </div>

      {/* Hidden Items */}
      <div ref={playerRef} className="box box3 rounded-3xl shadow-xl !opacity-50 md:block hidden player h-full">
        <StaticPlayer />
      </div>
      <div ref={twitterRef} className="box box2 rounded-3xl shadow-xl !opacity-50 md:block twitter hidden h-full">
        <Twitter />
      </div>
      <div ref={instagramRef} className="box insta rounded-3xl shadow-xl !opacity-50 md:block hidden h-full">
        <Instagram />
      </div>

      <div className="col-4 social">
        <div ref={githubMobRef} className="box box3 rounded-3xl shadow-xl github">
          <Github />
        </div>
        <div ref={linkedinMobRef} className="box box3 rounded-3xl shadow-xl linkedIn">
          <LinkedIn />
        </div>
      </div>

      {/* <div ref={playerRef} className="box box3 rounded-3xl shadow-xl md:opacity-20 !opacity-50 md:hidden block player h-full">
        <StaticPlayer />
      </div> */}

      <div className="col-4 social">
        <div ref={twitterMobRef} className="box box2 rounded-3xl shadow-xl !opacity-50 twitter">
          <Twitter />
        </div>
        <div ref={instagramMobRef} className="box insta rounded-3xl shadow-xl !opacity-50">
          <Instagram />
        </div>
      </div>

    </div>
  )
};

export default About;