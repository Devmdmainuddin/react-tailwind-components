import Container from "../shared/Container";


const Hero05 = () => {
    return (
        <div>
            <Container>
                <div className="flex gap-6 flex-col lg:flex-row">
                <div className="h-auto md:h-[424px] w-full lg:w-2/3 bg-slate-100 flex gap-6 flex-col ">
                    <div className="flex gap-6 flex-col sm:flex-row">
                        <div className="w-full md:w-2/3 h-[200px]">
                            <img className="w-full h-full object-cover"
                                src="/hb1.jpeg" alt="" />
                        </div>
                        <div className="w-full md:w-1/3 h-[200px]">
                            <img className="w-full h-full object-cover"
                                src="/hb2.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="flex gap-6 flex-col sm:flex-row">
                        <div className="w-full md:w-1/3 h-[200px]">
                            <img className=" w-full h-full object-cover"
                                src="/hb3.jpeg" alt="" />
                        </div>
                        <div className="w-full md:w-2/3 h-[200px]">
                            <img className=" w-full h-full object-cover"
                                src="/hb4.jpeg" alt="" />
                        </div>
                    </div>

                </div>
                <div className="w-full lg:w-1/3 h-[300px] lg:h-[424px]">
                            <img className=" w-full h-full object-cover"
                                src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                        </div>
                </div>
                
            </Container>
        </div>
    );
};

export default Hero05;