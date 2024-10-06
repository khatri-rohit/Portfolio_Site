
export const Discussdev = () => {
    return (
        <div className="flex flex-col items-center mb-24">
            <p className="text-5xl font-bold dark:text-white">DiscussDev</p>
            <p className="text-2xl font-medium my-5 dark:text-white">Tech Blog Site</p>
            <div className="w-[70%] mb-5 flex flex-col items-center">
                <img src="/img/project/blog.png" className="rounded-3xl drop-shadow-lg dark:text-white lg:shadow-lg h-[35em] object-cover" />
            </div>

            <div className="mt-12">
                <p className="text-2xl font-bold dark:text-white">
                    Built and deployed with
                </p>
                <div className="images flex items-center my-1">
                    <img src="/img/skills/react.png" className="w-10 me-1" />
                    <img src="/img/skills/js.png" className="w-10 mx-1" />
                    <img src="/img/skills/tailwind.png" className="w-10 mx-1" />
                    <img src="/img/skills/supabase.jpg" className="w-10 mx-1" />
                    <img src="/img/skills/html.png" className="w-8 mx-1" />
                    <img src="/img/skills/css.png" className="w-11 mx-1" />
                    <img src="/img/skills/vercel.png" className="w-16 mx-1 bg-white h-11 px-1" />
                </div>
            </div>
            <div className="md:w-[50%] w-[80%] mt-14 dark:text-white flex flex-col items-start">
                <p className="text-xl mb-2 font-light">
                    <strong>DevDiscuss</strong> is a fully responsive blog platform where users can create, read, and interact with blogs. Built with <strong>React</strong> and styled using <strong>Tailwind CSS</strong>, this site offers a smooth and modern user experience. The platform leverages <strong>Supabase</strong> for authentication, user management, and database storage, ensuring secure and efficient handling of user data.
                </p>

                <p className="text-lg font-medium">
                    Key Features:
                </p>

                <ul className="my-2 w-[90%] mx-auto">
                    <li className="mb-1 tracking-wide">
                        <strong>User Authentication</strong>: Sign up, log in, and manage user accounts securely.
                    </li>
                    <li className="mb-1 tracking-wide">
                        <strong>Blog Creation</strong>: Registered users can write and upload their blogs with ease.
                    </li>
                    <li className="mb-1 tracking-wide">
                        <strong>Engagement Tools</strong>: Users can interact with content through likes, comments, and shares, fostering a collaborative and interactive community.
                    </li>
                    <li className="mb-1 tracking-wide">
                        <strong>Responsive Design</strong>: The platform is fully responsive, ensuring an optimal experience on both desktop and mobile devices.
                    </li>
                </ul>

                <p>Deployed on <strong>Vercel</strong>, the platform is optimized for fast load times and seamless performance.</p>
            </div>
        </div>
    )
};
