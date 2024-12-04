import Container from "../../components/shared/Container";


const Blogs03 = () => {
    return (
        <div className="mt-[120px]">
            <Container>
                <div>

                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Latest Work </h1>
                    <div className="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
                        <button  className="h-12 px-8 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base  whitespace-nowrap focus:outline-none">  Animation </button>

                        <button className="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700  border-b-2  sm:text-base  whitespace-nowrap  focus:outline-none  border-gray-200 hover:border-gray-400 transition-all duration-500"> Web design  </button>

                        <button className="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700  border-b-2  sm:text-base  whitespace-nowrap  focus:outline-none  border-gray-200 hover:border-gray-400 transition-all duration-500">  App design  </button>

                        <button  className="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700  border-b-2  sm:text-base  whitespace-nowrap  focus:outline-none  border-gray-200 hover:border-gray-400 transition-all duration-500">  Branding </button>
                    </div>

                </div>
            </Container>

        </div>
    );
};

export default Blogs03;