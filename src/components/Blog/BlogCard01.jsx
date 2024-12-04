import PropTypes from 'prop-types';
import { Link } from 'react-router';

const BlogCard01 = ({ item }) => {
    return (
        <div className='group'>
            <div className='shadow-[0px_4px_12px_rgba(0,0,0,0.1)] group-hover:shadow-[0px_3px_8px_rgba(0,0,0,0.24)] transition-all duration-300' >
                <div className="image relative">
                    <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={item.image} alt="" />

                    <div className="absolute bottom-0 flex p-3 bg-[#f3fdfb] dark:bg-gray-900 rounded-tr-lg">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">{item.author}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
                        </div>
                    </div>
                </div>
                <div className="content px-3 py-6">
                    <h1 className=" text-xl font-semibold text-gray-800 dark:text-white">
                        {item.title}
                    </h1>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-400"> {item.body} </p>

                    <Link to="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">Read more</Link>
                </div>

            </div>
        </div>

    );
};

BlogCard01.propTypes = {
    item: PropTypes.object,
}
export default BlogCard01;