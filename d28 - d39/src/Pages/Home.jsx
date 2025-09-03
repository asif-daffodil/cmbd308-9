import { Helmet } from "react-helmet";
import Hero from "../Components/HomeCompo/Hero";
import Statics from "../Components/HomeCompo/Statics";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useLocation } from "react-router";

const Home = () => {
    // check ?login with react-router
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const navigate = useNavigate();
    const loginSuccess = query.get("login");
    if (loginSuccess === "success") {
        toast.success("Login successful!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            style: { top: "50px" }
        });
        setTimeout(() => {
            navigate("/");
        }, 2000);
    }

    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <ToastContainer />
            <Hero />
            <Statics />
        </div>
    );
};

export default Home;