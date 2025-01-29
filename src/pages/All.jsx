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

  gsap.registerPlugin(ScrollTrigger);

  const animate = (element, direction, delay = 0, label) => ({
    from: {
      [direction.includes('x') ? 'x' : 'y']: direction.includes('-') ? '-50%' : '50%',
      opacity: 0
    },
    to: {
      [direction.includes('x') ? 'x' : 'y']: 0,
      opacity: 1,
      delay,
      ease: "steps(1)",
      scrollTrigger: element.current.classList.contains('md:block') ? {
        trigger: element.current,
        start: "top 95%",
        end: "top 95%"
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
      [playerRef, 'x'],
      [projectRef, '-y']
    ].forEach(([ref, dir, delay]) =>
      tl.fromTo(ref.current, animate(ref, dir, delay).from, animate(ref, dir, delay).to)
    );

    // Social components
    const socialRefs = [
      [githubRef, 'x'], [linkedInRef, '-x', 0.2],
      [twitterRef, 'y'], [instagramRef, 'x'],
      [githubMobRef, '-x', 0, 'left'], [linkedinMobRef, 'x', 0.2, 'right'],
      [twitterMobRef, '-x', 0, 'left'], [instagramMobRef, 'x', 0, 'right']
    ].forEach(([ref, dir, delay, label]) =>
      tl.fromTo(ref.current, animate(ref, dir, delay, label).from, animate(ref, dir, delay, label).to)
    );
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
