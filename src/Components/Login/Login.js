import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div >
               <div className='flex gap-9 justify-evenly mt-7'>
               <h1 className='text-3xl font-bold inline-block '>Welcome back to Markite!  </h1> <h1> Are You New Here?<Link to="/signup" className='text-xl font-bold rounded-md text-indigo-700 px-5 '>Please, Free Sign Up</Link> </h1>  </div>    
            <div   className="hero -mt-16  min-h-screen ">
                <div className="hero-content w-full flex-col lg:flex-row ">
                    <div   className="text-center w-1/2 h-72 lg:text-left">
                    
                        <video className='mt-5' src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/business-analysis-5583564-4655817.mp4" type="video/mp4" autoplay="autoplay" muted="muted" loop="loop" playsinline></video>
                       
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div>
                            
                        <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link text-sm link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
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