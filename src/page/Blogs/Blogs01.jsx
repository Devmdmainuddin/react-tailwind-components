import BlogCard01 from "../../components/Blog/BlogCard01";
import Container from "../../components/shared/Container";
import useBlogs from "../../hooks/useBlogs";


const Blogs01 = () => {
    const [blogs] = useBlogs();
    return (
  
            <section className="bg-white dark:bg-gray-900">
                <Container>
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1>

                        <p className="max-w-lg mx-auto mt-4 text-gray-500">
                            Salami mustard spice tea fridge authentic Chinese food dish salt tasty liquor. Sweet savory foodtruck
                            pie.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    {blogs.slice(0,3).map((item,idx)=><BlogCard01 key={idx} item={item}></BlogCard01>)}
                    </div>
                </Container>
               
            </section>
    
    );
};

export default Blogs01;