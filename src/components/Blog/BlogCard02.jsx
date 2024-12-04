import { Link } from "react-router";
import PropTypes from 'prop-types';

const BlogCard02 = ({item}) => {
    return (
        <div>
        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={item.image} alt=""/>

        <div className="mt-8">
            <span className="text-blue-500 uppercase">{item.category}</span>

            <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            {item.title}
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
            {item.body}
            </p>

            <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                <div>
                    <Link to="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                    {item.author}
                    </Link>

                    <p className="text-sm text-gray-500 dark:text-gray-400">February 1, 2022</p>
                </div>
                </div>
                

                <Link to="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</Link>
            </div>

        </div>
    </div>
    );
};
BlogCard02   .propTypes = {
    item: PropTypes.object,
}
export default BlogCard02;