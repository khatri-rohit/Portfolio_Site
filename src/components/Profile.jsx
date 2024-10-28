/* eslint-disable react/no-unescaped-entities */

const Profile = () => {
    return (
        <div className="p-3 bg-white dark:bg-[#222831] rounded-3xl drop-shadow-lg h-full duration-300">
            <img src="/img/hellocopy.png" alt="img" className="mx-auto md:m-0" />
            <div className="aboutme p-3 flex flex-col items-center">

                <p className="md:text-4xl text-2xl font-sans dark:text-[#F5F5F7] translate duration-300">
                    Hey👋🏻! My name is
                </p>
                <p className="name font-extrabold">
                    Rohit Khatri
                </p>
                <p className="font-change md:text-3xl md:my-3 text-2xl my-0.5 leading-tight text-slate-700 text-left translate duration-300 text-pretty dark:text-[#F5F5F7]">
                    I'm <span className="border-slate-400 hover:border-b-2 font-semibold dark:text-slate-300">Rohit Khatri</span> from Ajmer. My Goal is to work in a company where I can deliver business value while also leveling up my skills as a developer.
                </p>
                <div className="py-[0.5em] px-[0.3em] rounded-full drop-shadow-lg mt-4 mb-2 w-fit bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] animate-gradient">
                    <a className="bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full w-full h-full dark:text-[#F5F5F7] tracking-[0.11em] font-semibold"
                        href="mailto:rohitkhatri.dev@gmail.com">
                        Let's Connect
                    </a>
                </div>

            </div>
        </div>
    )
};
export default Profile;