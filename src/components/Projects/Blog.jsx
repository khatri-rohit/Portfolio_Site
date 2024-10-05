import { NavLink } from "react-router-dom";

const Blog = () => {
    return (
        <div className="p-3 border bg-white dark:bg-[#222831] rounded-3xl drop-shadow-lg">
            <p className="uppercase dark:text-slate-300 text-gray-700 font-bold opacity-80">project</p>
            <p className="font-medium text-xl dark:text-gray-300 my-2">DiscussDev</p>
            <div>
                <p className="text-xs uppercase font-bold text-[#5b5d5e] dark:text-[#B3C8CF] mb-1" style={{ letterSpacing: "1.5px" }}>built with</p>
                <div className="images flex items-center">
                    <img src="/img/skills/react.png" className="w-10 me-1" />
                    <img src="/img/skills/js.png" className="w-10 mx-1" />
                    <img src="/img/skills/tailwind.png" className="w-10 mx-1" />
                    <img src="/img/skills/supabase.jpg" className="w-10 mx-1" />
                </div>
            </div>
            <div className="flex items-center justify-center my-4">
                <img src="/img/project/blog_1.png" className="w-[80%] object-cover h-72 rounded-2xl" />
            </div>
            <div className="flex flex-col items-center">
                <a href="https://discussdev.vercel.app/" target="_blank" className="my-1 px-4 py-2 bg-slate-300 hover:bg-slate-600 duration-150 hover:text-white rounded-full font-semibold text-[1em] hover:text-[1.08rem]">
                    View Project
                </a>
                <NavLink to={'/project/blog'} className="my-1 px-4 py-2 bg-slate-300 text-[1em] hover:text-[1.08rem] rounded-full font-medium hover:text-white hover:bg-gray-500">
                    About Project
                </NavLink>
            </div>
        </div>
    )
};

export default Blog;
