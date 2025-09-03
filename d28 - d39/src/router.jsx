import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Gallery from "./Components/Gallery";
import SinglePost from "./Components/BlogCompo/SinglePost";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";


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
        },
        {
            path: '/blog/:id',
            element: <SinglePost />
        }, 
        {
            path: '/sign-in',
            element: <SignIn />
        },
        {
            path: '/sign-up',
            element: <SignUp />
        }
    ]
  }
]);

export default router;