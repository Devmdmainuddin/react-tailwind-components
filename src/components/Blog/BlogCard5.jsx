

const BlogCard5 = () => {
    return (
        <div>
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">

                <div className="relative pt-10 px-10 flex items-center justify-center">
                    {/* <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;">
                    </div> */}
                    <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png" alt="" />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Outdoor</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Monstera</span>
                        <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none ">$45.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard5;