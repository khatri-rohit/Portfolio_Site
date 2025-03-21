import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { useEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export const Footer = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from("footer", {
            scrollTrigger: {
                trigger: "footer",
                start: "top 98%",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power1.in"
        });

        gsap.from(".border-t-2", {
            scrollTrigger: {
                trigger: "footer",
                start: "top 98%",
            },
            width: 0,
            duration: 1,
            ease: "power2.in"
        });
    }, []);

    return (
        <footer>
            <div className="border-t-2 container mx-auto dark:border-white border-black flex justify-between px-5 items-center duration-300 overflow-hidden">
                <p className="md:text-lg text-xs font-light dark:text-white my-3 duration-300">
                    .Rohit Khatri
                </p>
                <div className="flex items-center justify-between dark:text-white px-7">
                    <a href="https://www.linkedin.com/in/rohitkhatri302"
                        target="_blank"
                        className="md:mx-3 mx-1 my-1 md:text-xl duration-200">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.github.com/khatri-rohit"
                        target="_blank"
                        className="md:mx-3 mx-1 my-1 md:text-xl duration-150">
                        <FaGithub />
                    </a>
                    <a href="https://x.com/Rohit_Khatri302"
                        target="_blank"
                        className="md:mx-3 mx-1 my-1 md:text-xl duration-100">
                        <BsTwitterX />
                    </a>
                    <a href="mailto:rohitkhatri.dev@gmail.com"
                        target="_blank"
                        className="md:mx-3 mx-1 my-1 md:text-xl duration-75">
                        <MdAlternateEmail />
                    </a>
                </div>
            </div>
        </footer>
    )
};
