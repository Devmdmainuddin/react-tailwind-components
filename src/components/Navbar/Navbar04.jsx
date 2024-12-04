import { useState } from "react";

const Navbar04 = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative   bg-gray-200">


            <div className="bg-white shadow  w-full">

                <div className="flex justify-between items-center py-4 px-2">
                    <h1 className="text-xl font-semibold">Animated Drawer</h1>

                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-600" id="open-sidebar">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

            </div>
            <div className={`absolute top-0 bg-gray-800 text-white w-56 z-30  transition-transform transform  ease-in-out duration-300 ${isOpen ? '' : '-translate-x-full'}`} >

                <div className="p-4">
                    <h1 className="text-2xl font-semibold">Sidebar</h1>
                    <ul className="mt-4">
                        <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Home</a></li>
                        <li className="mb-2"><a href="#" className="block hover:text-indigo-400">About</a></li>
                        <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Services</a></li>
                        <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar04;