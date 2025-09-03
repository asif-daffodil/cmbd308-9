import axios from "axios";
import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => setBlog(res.data));
    }, [blog]);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {blog.map(item => (
                    <Blog key={item.id} item={item} />
                ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;