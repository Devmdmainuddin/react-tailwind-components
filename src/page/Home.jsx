import Blog from "../components/Blog/Blog";
import BlogCard1 from "../components/Blog/BlogCard1";
import BlogCard2 from "../components/Blog/BlogCard2";
import BlogCard3 from "../components/Blog/BlogCard3";
import BlogCard4 from "../components/Blog/BlogCard4";
import BlogCard5 from "../components/Blog/BlogCard5";
import BlogCard6 from "../components/Blog/BlogCard6";
import Card1 from "../components/Blog/Card1";
import Card2 from "../components/Blog/Card2";
import Card3 from "../components/Blog/Card3";
import Card4 from "../components/Blog/Card4";
import Card5 from "../components/Blog/Card5";
import Card6 from "../components/Blog/Card6";
import Card7 from "../components/Blog/Card7";
import Card8 from "../components/Blog/Card8";
import Card9 from "../components/Blog/Card9";
import Button from "../components/Button/Button";
import Cart1 from "../components/Cart/Cart1";
import Contact from "../components/Contact/Contact";
import Faq1 from "../components/FAQ/Faq1";
import Faq2 from "../components/FAQ/Faq2";
import Filter1 from "../components/Filter/Filter1";
import Footer1 from "../components/Footer/Footer1";
import Footer2 from "../components/Footer/Footer2";
import Hero1 from "../components/Hero/Hero1";
import Hero2 from "../components/Hero/Hero2";
import Modal1 from "../components/modal/Modal1";
import Section1 from "../components/Section/Section1";
import Table1 from "../components/Table/Table1";
import Team1 from "../components/team/Team1";
import Team2 from "../components/team/Team2";
import Team3 from "../components/team/Team3";
import Team4 from "../components/team/Team4";

const Home = () => {
    return (
        <div>
            <Hero1 />
            <Hero2 />
            <Button />
            <div>
                <div className="flex flex-wrap gap-6 p-9">
                    <Card9/>
                    <Card8/>
                    <Card2 />
                    <Card3 />
                    <Card4 />
                    <Card5 />
                    <Card6 />
                    <BlogCard4 />
                    <BlogCard5 />
                    <BlogCard6 />
                    <Card1 />
                    <BlogCard3 />
                    <BlogCard1 />
                    <BlogCard2 />
                </div>
                <Contact />

                <Blog />
                <div className="flex flex-wrap gap-6 p-9">
                    <Team1 />
                    <Team2 />
                    <Team3 />
                    <Team4 />
                </div>
                <Card7 />
                <Faq1 />
                <Faq2 />
                <Cart1 />
                <Modal1 />
                <Filter1 />
            </div>
            <Section1/>
            <Table1/>
            <Footer1/>
            <Footer2/>
        </div>
    );
};

export default Home;