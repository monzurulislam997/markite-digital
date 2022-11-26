import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [signInWithGoogle, googleUser, GoogleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const navigate = useNavigate()
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data.email, data.password);

    }


    if (user || googleUser) {
        return navigate(from, { replace: true })
    }





    return (
        <div className='lg:px-5 px-12' >
            <div className='flex lg:flex-row flex-col gap-9 justify-evenly mt-7'>
                <h1 className='lg:text-3xl text-2xl  font-bold'>Welcome back to Markite!
                </h1>
                <h1 className='my-2 lg:my-5'> Are You New Here?
                    <Link to="/signup" className=' hover:bg-sky-700 py-1 bg-primary text-white rounded-md  mx-2 px-3 '>Customer</Link>or<Link to="/signup/seller" className='  hover:bg-sky-700 py-1 rounded-md text-white bg-primary mx-2 px-3 '>Seller</Link>
                </h1>
            </div>
            <div className="hero -mt-24  min-h-screen ">
                <div className="hero-content w-full flex-col lg:flex-row ">
                    <div className="text-center hidden lg:block w-1/2 h-72 lg:text-left">

                        <video className='mt-5' src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/business-analysis-5583564-4655817.mp4" type="video/mp4" autoplay="autoplay" muted="muted" loop="loop" playsinline></video>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mt-5 bg-base-100">
                        <div>

                            <div className="card-body">
                                <h1 className="text-3xl text-center font-bold">Login now!</h1>
                                <form onSubmit={handleSubmit(onSubmit)} >

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email"
                                            {...register("email",
                                                {
                                                    required: {
                                                        value: true,
                                                        message: "Email is required"
                                                    },
                                                    pattern: {
                                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                                        message: "Email is not Valid"
                                                    }

                                                })}

                                            placeholder="email" className="input input-bordered" />
                                        <label className="label">
                                            <span className="label-text-alt"> <p className="text-error">{errors.email?.message}</p></span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password"    {...register("password",
                                            {
                                                required: {
                                                    value: true,
                                                    message: "password is required"
                                                }

                                            })}
                                            placeholder="password" className="input input-bordered" />

                                        <label className="label">
                                            <span className="label-text-alt"> <p className="text-error">{errors.password?.message}</p></span>
                                        </label>
                                        <label className="label">
                                            <Link to="/">Forgot password?</Link>
                                        </label>
                                    </div>

                                    <p className='text-red-500'>{error?.message}  {googleError?.message}</p>

                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>

                                <div>
                                    <button onClick={() => signInWithGoogle()} className='btn w-full  '>Google SignIn</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;