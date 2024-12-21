import Container from "../shared/Container";

const Hero04 = () => {
    return (
        <div>
            <Container>
                <div className="flex flex-wrap -mx-3 h-[400px] ">

                    <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0 h-[400px]">
                        <a className="group block h-full bg-blueGray-900 rounded-md relative" href="#">
                            <div
                                className="h-full w-full transform -translate-x-1 -translate-y-1  rounded-md  overflow-hidden transition duration-300">
                                <img className="img-fluid w-full h-full object-cover"
                                    src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                                <div className="absolute bottom-0 right-0 p-8 w-full">
                                    <span className="block text-xs text-white font-black">Banner label</span>
                                    <h4 className="text-2xl sm:text-4xl font-black text-white">Banner Hero</h4>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="w-full lg:w-1/2 px-3 ">

                        <div className="flex flex-wrap -mx-3 gap-y-6 h-[400px]">

                            <div className="w-full md:w-1/2 px-3  h-1/2">
                                <a className="group block h-full bg-blueGray-900 rounded-md relative" href="#">
                                    <div
                                        className="h-full w-full transform -translate-x-1 -translate-y-1  rounded-md  overflow-hidden transition duration-300">
                                        <img className="img-fluid w-full h-full object-cover"
                                            src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                                        <div
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 text-center w-full">
                                            <span className="block text-xs text-white font-black">Banner label</span>
                                            <h4 className="text-xl font-black text-white">Banner Hero</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="w-full md:w-1/2 px-3 h-1/2">
                                <a className="group block h-full bg-blueGray-900 rounded-md relative" href="#">
                                    <div
                                        className="h-full w-full transform -translate-x-1 -translate-y-1  rounded-md  overflow-hidden transition duration-300">
                                        <img className="img-fluid w-full h-full object-cover"
                                            src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                                        <div
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 text-center w-full">
                                            <span className="block text-xs text-white font-black">Banner label</span>
                                            <h4 className="text-xl font-black text-white">Banner Hero</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="w-full px-3 h-1/2">
                                <a className=" block h-full  rounded-md relative" href="#">
                                    <div
                                        className="h-full w-full transform -translate-x-1  rounded-md  overflow-hidden transition duration-300">
                                        <img className="img-fluid w-full h-full object-cover"
                                            src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                                        <div
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 text-center w-full">
                                            <span className="block text-xs text-white font-black">Banner label</span>
                                            <h4 className="text-xl font-black text-white">Banner Hero</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero04;