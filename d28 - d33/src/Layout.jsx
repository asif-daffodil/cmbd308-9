import { Outlet } from "react-router";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;