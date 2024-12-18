import { Link, NavLink } from "react-router";
import Container from "../shared/Container";


const Navbar2 = () => {
    return (

        <Container>
            <nav className="flex justify-between">
                <div className="flex w-full items-center py-6">
                    <Link to="">
                        <img className="h-12 w-10" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                    </Link>
                    <ul className="hidden xl:flex gap-6 px-4 ml-20 2xl:ml-40 mr-auto">
                        <li className=""><a className="font-medium hover:text-darkBlueGray-400" href="#">Stories</a></li>
                        <li className="relative ">
                            <NavLink className="flex items-center font-medium hover:text-darkBlueGray-400" href="#">
                                <span className="mr-4">Products</span>
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z"
                                        fill="currentColor"></path>
                                </svg>
                            </NavLink>
                            
                        </li>
                        <li><NavLink className="font-medium hover:text-darkBlueGray-400" href="#">Outlet</NavLink></li>
                    </ul>
                    <div className="hidden xl:block flex-shrink-0 w-px h-12 bg-gray-100 ml-12 mr-12"></div>
                    <div className="hidden xl:flex items-center">
                        <Link className="inline-block mr-10 text-gray-400 hover:text-gray-500" to="">
                            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.4998 20.2059L2.70115 10.925C1.92859 10.1441 1.41864 9.13717 1.24355 8.04689C1.06847 6.95661 1.23713 5.83827 1.72563 4.8503V4.8503C2.09464 4.10439 2.63366 3.45781 3.29828 2.96383C3.9629 2.46985 4.73408 2.14261 5.5483 2.00908C6.36252 1.87555 7.19647 1.93955 7.98144 2.1958C8.7664 2.45205 9.47991 2.89322 10.0632 3.48296L11.4998 4.93554L12.9364 3.48296C13.5197 2.89322 14.2332 2.45205 15.0182 2.1958C15.8031 1.93955 16.6371 1.87555 17.4513 2.00908C18.2655 2.14261 19.0367 2.46985 19.7013 2.96383C20.3659 3.45781 20.905 4.10439 21.274 4.8503V4.8503C21.7625 5.83827 21.9311 6.95661 21.756 8.04689C21.581 9.13717 21.071 10.1441 20.2984 10.925L11.4998 20.2059Z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </Link>
                        <Link className="relative inline-block text-gray-400 hover:text-gray-500" href="#">
                            <div
                                className="absolute bottom-0 right-0 flex items-center justify-center -mb-4 -mr-4 w-6 h-6 text-sm text-white bg-blue-500 rounded-full">
                                3</div>
                            <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.1159 8.72414H2.50427C1.99709 8.72414 1.58594 9.12657 1.58594 9.62299V21.308C1.58594 21.8045 1.99709 22.2069 2.50427 22.2069H18.1159C18.6231 22.2069 19.0342 21.8045 19.0342 21.308V9.62299C19.0342 9.12657 18.6231 8.72414 18.1159 8.72414Z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                                <path
                                    d="M6.34473 6.34483V4.9569C6.34473 3.85259 6.76252 2.79352 7.5062 2.01265C8.24988 1.23179 9.25852 0.793106 10.3102 0.793106C11.362 0.793106 12.3706 1.23179 13.1143 2.01265C13.858 2.79352 14.2758 3.85259 14.2758 4.9569V6.34483"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </Link>
                        <div className="flex-shrink-0 w-px h-12 bg-gray-100 ml-9 mr-10"></div>
                        <Link className="flex items-center text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                            <span className="font-medium">Sona</span>
                            <img className="ml-5 w-8 rounded-full" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                            <svg className="ml-4" width="8" height="5" viewBox="0 0 8 5" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z"
                                    fill="currentColor"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
                <button className="navbar-burger self-center xl:hidden">
                    <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="25" height="2" fill="currentColor"></rect>
                        <rect y="14" width="25" height="2" fill="currentColor"></rect>
                    </svg>
                </button>
            </nav>
        </Container>
    );
};

export default Navbar2;