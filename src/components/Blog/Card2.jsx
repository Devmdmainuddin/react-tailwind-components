

const Card2 = () => {
    return (
        <div className="w-fit">
            <div className="w-[400px] relative group bg-gray-200 h-[400px] shadow-lg rounded-2xl overflow-hidden">
                <img className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f014625e-1a1d-4944-8395-46a07841a794/JORDAN+SPIZIKE+LOW.png" />
                <div className="bg-gray-100 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease dark:bg-gray-700">
                    <div className="p-6">
                        <div className="capitalize flex items-center justify-between gap-4">
                            <div>
                                <h2 className="text-red-600 text-lg font-bold">jordan spizike low</h2>
                                <p className="dark:text-gray-100">men{`'`}s shoes</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold dark:text-gray-100">$160</p>
                            </div>
                        </div>
                        <div className="block mt-4">
                            <div className="absolute bottom-2 left-5">
                                <button className="bg-red-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl opacity-90 hover:opacity-100">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card2;