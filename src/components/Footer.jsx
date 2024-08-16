import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

export const Footer = () => {
    return (
        <footer>
            <div className="border-t-2 container mx-auto dark:border-white border-black flex justify-between px-5 items-center">
                <p className="md:text-lg text-xs font-light dark:text-white my-3">
                    .Rohit Khatri
                </p>
                <div className="flex items-center justify-between dark:text-white px-7">
                    <a href="https://www.linkedin.com/in/rohitkhatri302"
                        target="_blank"
                        className="md:mx-3 mx-1 my-1 md:text-xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.github.com/khatri-rohit"
                        target="_blank"
                        className="md:mx-3 mx-1 my-1 md:text-xl">
                        <FaGithub />
                    </a>
                    <a href="https://x.com/Rohit_Khatri302"
                        target="_blank"
                        className="md:mx-3 mx-1 my-1 md:text-xl">
                        <BsTwitterX />
                    </a>
                    <a href="mailto:rohitkhatri.dev@gmail.com"
                        target="_blank"
                        className="md:mx-3 mx-1 my-1 md:text-xl">
                        <MdAlternateEmail />
                    </a>
                </div>
            </div>
        </footer>
    )
};
