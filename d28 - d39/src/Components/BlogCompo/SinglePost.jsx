import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router";

const SinglePost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [author, setAuthor] = useState();
    useEffect(() => {
        (async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setData(res.data);
        const authorRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`);
        setAuthor(authorRes.data);
        })();
    }, [id, data])

    return (
        <div className="w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <Helmet>
                <title>{data ? data.title : "Loading..."}</title>
            </Helmet>
            {data ? (
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
                    <p className="text-gray-600 mb-2">By {author ? author.name : "Loading..."}</p>
                    <p className="mb-4">{data.body}</p>
                    <button
                        className="px-4 py-1 bg-stone-300 rounded cursor-pointer hover:bg-blue-600 hover:text-white"
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SinglePost;