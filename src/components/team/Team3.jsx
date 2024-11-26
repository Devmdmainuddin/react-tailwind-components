import { Link } from "react-router";


const Team3 = () => {
    return (
        <div className="w-[425px]  mx-4 max-w-sm mb-8  pb-6 shadow-md">
            <div className="w-full rounded h-56">
                <img src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif" alt='image' role="img" className="object-cover h-full w-full overflow-hidden rounded shadow" />
            </div>
            <div className="flex w-full items-center justify-between pt-6 pb-1">
                <p className="text-xl font-normal text-gray-800 dark:text-white ">Silene Tokyo</p>
                <div className="flex justify-center">
                    <Link   className="mx-2">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/white-bg-with-description-svg1.svg" alt="github" />
                    </Link>
                    <Link   className="mx-2">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/white-bg-with-description-svg2.svg" alt="twitter" />
                    </Link>
                    <Link  className="mx-2">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/white-bg-with-description-svg3.svg" alt="instagram" />
                    </Link>
                </div>
            </div>
            <p className="text-base text-gray-600 dark:text-gray-200 pb-3">VP Operations</p>
            <p className="text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">The Vice President, Operations is responsible for planning, directing, and overseeing finance and operations activities in the organization, and ensuring development.</p>
        </div>
    );
};

export default Team3;