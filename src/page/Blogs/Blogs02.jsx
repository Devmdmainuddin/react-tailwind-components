import BlogCard02 from "../../components/Blog/BlogCard02";
import Container from "../../components/shared/Container";
import useBlogs from "../../hooks/useBlogs";


const Blogs02 = () => {
    const [blogs] = useBlogs();
    return (
        <div className="mt-[120px]">
            <Container>
                <section className="bg-white dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">recent posts </h1>

                        <button className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    {blogs.slice(0,3).map((item,idx)=><BlogCard02 key={idx} item={item}></BlogCard02>)}
                    </div>
                </section>
            </Container>

        </div>
    );
};

export default Blogs02;