import { Outlet } from "react-router";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
    return (
        <>
            <Header />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;