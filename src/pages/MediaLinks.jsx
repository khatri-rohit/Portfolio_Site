import Github from "../components/Github";
import DisplayMap from "../components/DIsplayMap";
import Instagram from "../components/Instagram";
import LinkedIn from "../components/LinkedIn";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Spotify from "../components/Spotify";
import Twitter from "../components/Twitter";
import Blog from "../components/Projects/Blog";
import Hackerrank from "../components/Hackerrank";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import '../style/Media.css';

export const MediaLinks = () => {

    const twitterRef = useRef();
    const linkedInRef = useRef();
    const githubRef = useRef();
    const playerRef = useRef();
    const instagramRef = useRef();
    const hackerrankRef = useRef();


    const animate = (element, direction, delay = 0, label) => ({
        from: {
            [direction.includes('x') ? 'x' : 'y']: direction.includes('-') ? '-100%' : '100%',
            opacity: 0
        },
        to: {
            [direction.includes('x') ? 'x' : 'y']: 0,
            opacity: 1,
            delay,
            ease: "steps(1)"
        },
        label
    });

    useEffect(() => {
        const tl = gsap.timeline();

        // Main components
        const mainAnimations = [
            [twitterRef, '-x', 0.5],
            [githubRef, 'x'],
            [linkedInRef, '-x'],
            [playerRef, '-x'],
            [hackerrankRef, 'x'],
            [instagramRef, '-x'],
        ].forEach(([ref, dir, delay]) =>
            tl.fromTo(ref.current, animate(ref, dir, delay).from, animate(ref, dir, delay).to)
        );

    }, []);

    return (
        <div className="mediaLayout container mx-auto overflow-hidden">

            <div ref={twitterRef} className="box twitter h-full">
                <Twitter />
            </div>
            <div ref={linkedInRef} className="box linkedIn h-full">
                <LinkedIn />
            </div>
            <div ref={githubRef} className="box github h-full">
                <Github />
            </div>
            <div ref={playerRef} className="box spotify h-full">
                <Spotify />
            </div>
            <div ref={instagramRef} className="box insta h-full">
                <Instagram />
            </div>
            <div ref={hackerrankRef} className="box insta h-full">
                <Hackerrank />
            </div>

            <div className="box box2 md:opacity-20 opacity-50 map h-full">
                <DisplayMap />
            </div>
            <div className="box box4 md:opacity-20 opacity-50">
                <Skills />
            </div>
            <div className="box box1 md:opacity-20 opacity-50">
                <Profile />
            </div>
            <div className="box media-probox md:opacity-20 opacity-50">
                <Blog />
            </div>
        </div>
    )
};
