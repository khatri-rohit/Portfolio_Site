import { useEffect } from 'react';
import { IoMdArrowDropup } from "react-icons/io";
// import '../style/skill.css';

const Skills = () => {

    const skills = [
        { name: "Tailwind", img: "/img/skills/tailwind.png", height: "80" },
        { name: "Bootstrap", img: "/img/skills/bootstrap.png" },
        { name: "JS", img: "/img/skills/js.png" },
        { name: "React JS", img: "/img/skills/react.png" },
        { name: "TS", img: "/img/skills/ts.png" },
        { name: "Supabase", img: "/img/skills/supabase.jpg" },
        { name: "Firebase", img: "/img/skills/firebase.png" },
        { name: "React Router", img: "https://ultimatecourses.com/assets/category/react-router-9c0bb349a7ca8d699e4dcd1ebcdd21dda7198447dfcef928f9cbb0748e1f0ad5.svg" },
        { name: "Git", img: "/img/skills/git.png" },
        { name: "Github", img: "/img/skills/github.png" },
        { name: "Redux", img: "/img/skills/redux.png" },
        { name: "HTML", img: "/img/skills/html.png" },
        { name: "CSS", img: "/img/skills/css.png" },
    ];

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);
                const scorllerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scorllerInner.children);

                scrollerContent.forEach(item => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute('aria-hidden', true);
                    scorllerInner.append(duplicatedItem);
                });
            });
        }

    }, [])

    return (
        <div className="scroller bg-white dark:bg-[#222831] rounded-3xl p-2 w-full drop-shadow-2xl relative h-full duration-300 flex flex-col justify-around">
            <p className="text-2xl text-center font-bold mb-2 dark dark:text-indigo-300">
                Skills
            </p>
            <div className="skills scroller__inner p-2 ">
                {
                    skills.map((skill, _) => (
                        <div className="skill mx-4 flex flex-col items-center justify-evenly" key={_}>
                            <img src={skill.img}
                                className={`max-w-28 ${skill?.height ? "h-[80px]" : "h-[100px]"} my-3`} />
                            <p className="text-[0.85em] md:text-[1.2em] font-bold text-center mt-2 uppercase dark:text-white">
                                {skill.name}
                            </p>
                        </div>
                    ))
                }
            </div>
            <IoMdArrowDropup className='dark:text-white text-2xl md:text-4xl mx-auto my-0' />
        </div>
    )
};

export default Skills;
