import { Helmet } from "react-helmet";
import Blogs from "../Components/BlogCompo/Blogs";

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Blog Page</title>
            </Helmet>
            <Blogs />
        </div>
    );
};

export default Blog;