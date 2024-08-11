
const Skills = () => {

    const skills = [
        { name: "JS", img: "/img/skills/js.png" },
        { name: "React JS", img: "/img/skills/react.png" },
        { name: "TS", img: "/img/skills/ts.png" },
        { name: "Git", img: "/img/skills/git.png" },
        { name: "Tailwind CSS", img: "/img/skills/tailwind.png" },
        { name: "CSS", img: "/img/skills/css.png" },
        { name: "HTML", img: "/img/skills/html.png" },
    ]

    return (
        <div className="bg-white rounded-3xl p-2">
            <div className="flex">
                {
                    skills.map((skill, _) => (
                        <div className="p-2 skill" key={_}>
                            <img src={skill.img} />
                            <p className="text-lg">{skill.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Skills;
