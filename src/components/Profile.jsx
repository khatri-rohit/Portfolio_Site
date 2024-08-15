/* eslint-disable react/no-unescaped-entities */

const Profile = () => {
    return (
        <div className="p-3 bg-white dark:bg-[#222831] rounded-3xl drop-shadow-lg">
            <img src="/img/hellocopy.png" alt="img" />
            <div className="aboutme p-3">
                <p className="md:text-4xl text-2xl font-mono dark:text-white">
                    Hello! My name is
                </p>
                <p className="name md:text-7xl font-bold w-fit">
                    Rohit Khatri
                </p>
                <p className="font-change md:text-3xl text-2xl my-2 font-medium leading-tight text-slate-700 text-left translate duration-1000 dark:text-white">
                    Hey👋🏻 I'm <span className="border-slate-400 hover:border-b-2 font-semibold">Rohit Khatri</span> from Ajmer. My Goal is to work in a company where I can deliver business value while also leveling up my skills as a developer.
                </p>
                <div className="p-2 rounded-full background-color drop-shadow-lg my-4 w-fit">
                    <a className="bg-white dark:bg-slate-500 px-3 py-1 rounded-full w-full h-full dark:text-white"
                        href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rohitkhatri.dev@gmail.com'>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Profile;