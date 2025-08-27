import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import auth from "../firebase";
import { useEffect } from "react";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();

    const [checkUser] = useAuthState(auth);
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [signInWithGoogle] = useSignInWithGoogle(auth);


    useEffect(() => {
        if (checkUser) {
            navigate("/");
        }
    }, [checkUser, navigate]);

    const onSubmit = (data) => {
        createUserWithEmailAndPassword(data.email, data.password);
        reset();
    };

    return (
        <div>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <div className="w-max border border-gray-400 mx-auto my-10 p-5 rounded-md shadow-sm shadow-blue-300">
                <h2 className="text-2xl font-semibold mb-5">Sign Up</h2>
                <form action="" className="mb-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="block">Your Name :</label>
                        <input type="text" id="name" className="border border-gray-400 rounded px-2 w-xs py-1 focus:outline-0 focus:shadow-sm focus:shadow-blue-300" autoComplete="random-string" {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required"
                            },
                            minLength: {
                                value: 3,
                                message: "Name must be at least 3 characters long"
                            }
                        })} />
                        {errors.name && <p className="text-red-500 w-xs">{errors.name.message}</p>}
                    </div>
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
                            }, pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                                message: "Password must be at least 8 characters long and contain at least one letter, one number, and one special character"
                            }
                        })} />
                        {errors.password && <p className="text-red-500 w-xs">{errors.password.message}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm-password" className="block">Confirm Password</label>
                        <input type="password" id="confirm-password" className="border border-gray-400 rounded px-2 w-xs py-1 focus:outline-0 focus:shadow-sm focus:shadow-blue-300" autoComplete="random-string" {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: "Confirm Password is required"
                            }, validate: (value) => value === getValues("password") || "Passwords do not match"
                        })} />
                        {errors.confirmPassword && <p className="text-red-500 w-xs">{errors.confirmPassword.message}</p>}
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Sign Up</button>
                    </div>
                </form>
                <div className="mb-3">
                    <button className="bg-red-500 text-white rounded px-4 py-2" onClick={() => signInWithGoogle()}>Login with Google</button>
                </div>
                <p>
                    Already have an account? <Link to="/sign-in" className="text-blue-500">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;