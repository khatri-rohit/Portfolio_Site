import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <div className="p-3 border-2 flex justify-around items-center">
                <div className="theme hidden md:block p-1 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
                    <button className="bg-white px-3 py-1 rounded-full w-full h-full">
                        Dark 🌕
                    </button>
                </div>
                <div className="nav p-3">
                    <nav className="bg-slate-50 p-3 rounded-full text-gray-600 drop-shadow-md">
                        <NavLink to={"/"}
                            className={({ isActive }) => isActive ? 'bg-white rounded-3xl mx-2 py-2 px-6' : 'mx-2 py-2 px-6'}>
                            All
                        </NavLink>
                        <NavLink to={"/about"}
                            className={({ isActive }) => isActive ? 'bg-white rounded-3xl mx-2 py-2 px-6' : 'mx-2 py-2 px-6'}>
                            About
                        </NavLink>
                        <NavLink to={"/projects"}
                            className={({ isActive }) => isActive ? 'bg-white rounded-3xl mx-2 py-2 px-6' : 'mx-2 py-2 px-6'}>
                            Projects
                        </NavLink>
                    </nav>
                </div>
                <div className="hidden md:block p-1 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
                    <button className="bg-white px-3 py-1 rounded-full w-full h-full">
                        Contact
                    </button>
                </div>
            </div>

            <div className="theme p-1 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg md:hidden fixed bottom-0 right-0 m-4">
                <button className="bg-white px-3 py-1 rounded-full w-full h-full">
                    Dark 🌕
                </button>
            </div>
            <div className="p-1 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg  md:hidden fixed bottom-0 left-0 m-4">
                <button className="bg-white px-3 py-1 rounded-full w-full h-full">
                    Contact
                </button>
            </div>
        </>
    )
};

export default Navigation;
