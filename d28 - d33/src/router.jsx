import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Gallery from "./Components/Gallery";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/contact',
            element: <Contact />
        },
        {
            path: '/blog',
            element: <Blog />
        },
        {
            path: '/gallery',
            element: <Gallery />
        }
    ]
  }
]);

export default router;