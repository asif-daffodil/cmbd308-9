import { Helmet } from "react-helmet";
import Hero from "../Components/HomeCompo/Hero";
import Statics from "../Components/HomeCompo/Statics";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Hero />
            <Statics />
        </div>
    );
};

export default Home;