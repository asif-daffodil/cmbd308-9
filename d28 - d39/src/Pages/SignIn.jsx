import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../firebase";
// import { useEffect } from "react";

const SignIn = () => {
    const [checkUser] = useAuthState(auth);
    const navigate = useNavigate();
    checkUser && navigate("/");

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const [signInWithEmailAndPassword, userData, checkingCredentials, loginError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
        reset();
        navigate("/?login=success");
    };

    return (
        <div>
            <Helmet>
                <title>{userData ? userData.displayName : "Sign In"}</title>
            </Helmet>
            <div className="w-max border border-gray-400 mx-auto my-10 p-5 rounded-md shadow-sm shadow-blue-300">
                <h2 className="text-2xl font-semibold mb-5">Sign In</h2>
                {checkingCredentials && <p>Loading...</p>}
                {loginError && <p className="text-red-500">{loginError.message}</p>}
                <form action="" className="mb-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="email" className="block">Your Email :</label>
                        <input type="text" id="email" className="border border-gray-400 rounded px-2 w-xs py-1 focus:outline-0 focus:shadow-sm focus:shadow-blue-300" autoComplete="random-string" {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                                message: "Invalid email address"
                            }
                        })} />
                        {errors.email && <p className="text-red-500 w-xs">{errors.email.message}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="block">Your Password</label>
                        <input type="password" id="password" className="border border-gray-400 rounded px-2 w-xs py-1 focus:outline-0 focus:shadow-sm focus:shadow-blue-300" autoComplete="random-string" {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required"
                            }
                        })} />
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Sign In</button>
                    </div>
                </form>
                {/* Login with google button */}
                <div className="mb-3">
                    <button className="bg-red-500 text-white rounded px-4 py-2" onClick={() => signInWithGoogle()}>Login with Google</button>
                </div>
                <p>
                    Don&apos;t have an account? <Link to="/sign-up" className="text-blue-500">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;