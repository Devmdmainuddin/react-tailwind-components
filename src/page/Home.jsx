import Filter1 from "../components/Filter/Filter1";
import Modal1 from "../components/modal/Modal1";
import Team1 from "../components/team/Team1";
import Team2 from "../components/team/Team2";
import Team3 from "../components/team/Team3";
import Team4 from "../components/team/Team4";

const Home = () => {
    return (
        <div>
            home
            <div>
                <Team1/>
                <Team2/>
                <Team3/>
                <Team4/>
                <Modal1/>
                <Filter1/>
            </div>
        </div>
    );
};

export default Home;