import { Helmet } from "react-helmet";
import Feature from "../Components/AboutCompo/Feature";
import Team from "../Components/AboutCompo/Team";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About Page</title>
            </Helmet>
            <Feature />
            <Team />
        </div>
    );
};

export default About;