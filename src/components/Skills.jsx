import { useEffect } from 'react';
import '../style/skill.css';

const Skills = () => {

    const skills = [
        { name: "Git", img: "/img/skills/git.png" },
        { name: "Github", img: "/img/skills/github.png" },
        { name: "HTML", img: "/img/skills/html.png" },
        { name: "CSS", img: "/img/skills/css.png" },
        { name: "Tailwind CSS", img: "/img/skills/tailwind.png" },
        { name: "Bootstrap", img: "/img/skills/bootstrap.png" },
        { name: "JS", img: "/img/skills/js.png" },
        { name: "React JS", img: "/img/skills/react.png" },
        { name: "TS", img: "/img/skills/ts.png" },
        { name: "Firebase", img: "/img/skills/firebase.png" },
        { name: "React Router", img: "https://ultimatecourses.com/assets/category/react-router-9c0bb349a7ca8d699e4dcd1ebcdd21dda7198447dfcef928f9cbb0748e1f0ad5.svg" },
    ]

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
                console.log(scrollerContent);

                scrollerContent.forEach(item => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute('aria-hidden', true);
                    scorllerInner.append(duplicatedItem);
                });
            });
        }

    }, [])

    return (
        <div className="bg-white rounded-3xl p-4 scroller w-full drop-shadow-2xl relative z-10">
            <p className="text-3xl text-center font-bold mb-2 underline">
                Skills
            </p>
            <div className="absolute h-44 border-4 border-gray-700 w-32 top-[25%] left-[40%]">
            </div>
            <div className="skills p-2 scroller__inner">
                {
                    skills.map((skill, _) => (
                        <div className="skill mx-4" key={_}>
                            <img src={skill.img}
                                className="max-w-32 h-[100px]" />
                            <p className="text-xl font-bold text-center mt-3 uppercase">
                                {skill.name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Skills;
