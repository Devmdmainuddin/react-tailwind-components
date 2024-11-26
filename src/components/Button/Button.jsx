import React from 'react';
import { Link } from 'react-router';

const Button = () => {
    return (
        <div className='flex gap-6 flex-wrap my-[50px]'>

            {/* btn 1 */}

            <Link className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring" >
                <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                <span className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1" >
                    button-1
                </span>
            </Link>

            {/* btn 2 */}

            <Link className="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500" >
                <span className="absolute inset-0 border border-current"></span>
                <span className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" >
                    button-2
                </span>
            </Link>

            {/* btn 3 */}


            <Link
                className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring">
                <span className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>
                <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                    button-3
                </span>
            </Link>

            {/* btn 4 */}

            <Link className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring" >
                <span className="absolute inset-y-0 right-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500" ></span>
                <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white" >
                    button-4
                </span>
            </Link>

            {/* btn 5 */}

            <Link className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"  >
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>
                <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                    button-5
                </span>
            </Link>

            {/* btn 6 */}

            <Link className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring" >
                <span className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500" ></span>
                <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white" >
                    button-6
                </span>
            </Link>

            {/* btn 7 */}

            <Link className="group relative inline-block focus:outline-none focus:ring" href="#">
                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span
                    className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                >
                    button-7
                </span>
            </Link>

            {/* btn 8 */}

            <Link className="group relative inline-block focus:outline-none focus:ring" href="#">
                <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5" ></span>
                <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                    button-8
                </span>
            </Link>
            {/* btn 9 */}
            <Link className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500">
                <span className="absolute -end-full transition-all group-hover:end-4 duration-500">
                    <svg
                        className="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:me-4"> button-9 </span>
            </Link>

            {/* btn 10 */}

            <Link className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" >
                <span className="absolute -end-full transition-all group-hover:end-4 duration-500">
                    <svg
                        className="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:me-4">  button-10</span>
            </Link>
            {/* btn 11 */}
            <Link className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 transition-all duration-500">
                <span className="sr-only">  button-11 </span>

                <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                </svg>
            </Link>
            {/* btn 12 */}
            <Link className="inline-flex items-center gap-2 rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 transition-all duration-500">
                <span className="text-sm font-medium">  button-12 </span>

                <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </Link>
            {/* btn 2 */}

        </div>
    );
};

export default Button;