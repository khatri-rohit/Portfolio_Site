import { useEffect } from 'react';
import '../style/skill.css'

const Skills = () => {

    const skills = [
        { name: "Tailwind CSS", img: "/img/skills/tailwind.png" },
        { name: "CSS", img: "/img/skills/css.png" },
        { name: "JS", img: "/img/skills/js.png" },
        { name: "React JS", img: "/img/skills/react.png" },
        { name: "TS", img: "/img/skills/ts.png" },
        { name: "Git", img: "/img/skills/git.png" },
        { name: "HTML", img: "/img/skills/html.png" },
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
        <div className="bg-white rounded-3xl p-6 scroller w-full">
            <div className="skills p-2 scroller__inner">
                {
                    skills.map((skill, _) => (
                        <div className="skill mx-4" key={_}>
                            <img src={skill.img}
                                className="max-w-32 h-[100px]" />
                            <p className="text-lg font-bold text-center mt-3">
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
