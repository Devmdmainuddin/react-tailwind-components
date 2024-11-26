import Blog from "../components/Blog/Blog";
import Button from "../components/Button/Button";
import Cart1 from "../components/Cart/Cart1";
import Faq1 from "../components/FAQ/Faq1";
import Faq2 from "../components/FAQ/Faq2";
import Filter1 from "../components/Filter/Filter1";
import Hero1 from "../components/Hero/Hero1";
import Hero2 from "../components/Hero/Hero2";
import Modal1 from "../components/modal/Modal1";
import Team1 from "../components/team/Team1";
import Team2 from "../components/team/Team2";
import Team3 from "../components/team/Team3";
import Team4 from "../components/team/Team4";

const Home = () => {
    return (
        <div>
           <Hero1/>
           <Hero2/>
           <Button/>
            <div>

                <Blog/>
                <div className="flex flex-wrap gap-6 p-9">
                <Team1/>
                <Team2/>
                <Team3/>
                <Team4/>
                </div>
                <Faq1/>
                <Faq2/>
                <Cart1/>
                <Modal1/>
                <Filter1/>
            </div>
        </div>
    );
};

export default Home;