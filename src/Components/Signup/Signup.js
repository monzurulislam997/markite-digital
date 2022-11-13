import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/image/signup.gif'
const Signup = () => {
    const [isSeller, setIsSeller] = useState(false)

    const activateLasers=()=>{
       
        console.log("hello");
    }

    return ( 
        <div>
        
        <div className='flex gap-9 justify-evenly mt-7'>
                <div>
                    <h1 className='text-3xl font-bold inline-block '>Welcome to Markite!  </h1> <br />
                    <button className='btn bg-emerald-500 border-none mr-3'>Customer Account</button>
                    <button onClick={activateLasers} className='btn btn-primary'>Seller Account </button >
                </div> <h1   > Already Have An Account?<Link to="/login" className='text-xl font-bold rounded-md text-indigo-700 px-5 '>Please, Log In </Link> </h1>  </div>
            <div className="hero -mt-16  min-h-screen ">
                <div className="hero-content w-full flex-col lg:flex-row ">
                    <div className="text-center w-1/2 h-72 lg:text-left">

                        <img src={img} className="h-80 w-3/4" alt="" />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div>

                            <div className="card-body">
                                <h1 className="text-3xl text-center font-bold">Register now!<span>{isSeller === true ? "seller" : "customer"}</span> </h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                {
                                    !isSeller && <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Catagory</span>
                                        </label>
                                        <select className="select select-bordered text-slate-600 font-thin w-full max-w-xs">

                                            <option>HTML+ CSS</option>
                                            <option>HTML, CSS, JavaScript</option>
                                            <option>React, JavaScript</option>
                                            <option>Laravel, PHP</option>
                                        </select>     </div>
                                }
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="https://google.com" className="label-text-alt link text-sm link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        

    );
};

export default Signup;