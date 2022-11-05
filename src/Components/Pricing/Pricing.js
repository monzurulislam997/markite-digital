import React from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { Fade } from 'react-reveal';
const Pricing = () => {
    return (

        <div className=''>
            <div className='text-center py-8'>
                <h1 className=' text-4xl font-black'>Our Pricing <br /> We provide flexible plan
                </h1>
                <p className='text-slate-500 mt-1'>Thousands of Markit Brands have made the swich.</p>

            </div>
            <div className='grid grid-cols-1  lg:grid-cols-4 px-24 ml-5'>

                <Fade left>
                    <div className="card w-64  mb-4 bg-indigo-500 border-1 text-neutral-content">

                        <div className="card-body  ">
                            <div className='text-center pb-3'>
                                <h2 className=" text-2xl ">Personal</h2>
                                <p className='text-sm '>What You Are Looking For!</p>
                                <div className='flex py-3 justify-center'>
                                    <span >$</span><h1 className='text-4xl fonst-bold'>44</h1>
                                </div>
                            </div>
                            <p className='text-sm'>Switch to yearly Biling</p>
                            <button className='text-blue-400 px-12 
hover:text-white hover:bg-indigo-600
py-3 border-2'>Buy Now</button>
                            <div className='flex mt-5'>

                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'>  Powerful Admin Panel</p>
                            </div>

                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'>  1 Native Android App</p>
                            </div>

                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'> Multi-Language Support</p>
                            </div>
                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'> Free SSL Certificate</p>
                            </div>
                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'>1X Allocated Resources
                                </p>
                            </div>

                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>

                    {/* second option */}
                    <div className="card w-64  mb-4  border-2 border-slate-300 ">

                        <div className="card-body  ">
                            <div className='text-center pb-3'>
                                <h2 className=" text-2xl ">Professional</h2>
                                <p className='text-sm '>What You Are Looking For!</p>
                                <div className='flex py-3 justify-center'>
                                    <span >$</span><h1 className='text-4xl font-bold'>59</h1>
                                </div>
                            </div>
                            <p className='text-sm'>Switch to yearly Biling</p>
                            <button className='text-blue-400 px-12 hover:text-white hover:bg-indigo-600 py-3 border-2'>Buy Now</button>
                            <div className='flex mt-5'>

                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'>  Powerful Admin Panel</p>
                            </div>

                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'>  1 Native Android App</p>
                            </div>

                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'> Multi-Language Support</p>
                            </div>
                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'> Free SSL Certificate</p>
                            </div>
                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'>1X Allocated Resources
                                </p>
                            </div>

                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade right>
                    {/* third  */}
                    <div className="card w-64  mb-4 border-2 border-slate-300">

                        <div className="card-body  ">
                            <div className='text-center pb-3'>
                                <h2 className=" text-2xl ">Pro Store</h2>
                                <p className='text-sm '>What You Are Looking For!</p>
                                <div className='flex py-3 justify-center'>
                                    <span >$</span><h1 className='text-4xl font-bold'>71</h1>
                                </div>
                            </div>
                            <p className='text-sm'>Switch to yearly Biling</p>
                            <button className='text-blue-400 px-12 hover:text-white hover:bg-indigo-600 py-3 border-2'>Buy Now</button>
                            <div className='flex mt-5'>

                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'>  Powerful Admin Panel</p>
                            </div>

                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'>  1 Native Android App</p>
                            </div>

                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'> Multi-Language Support</p>
                            </div>
                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'> Free SSL Certificate</p>
                            </div>
                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'>1X Allocated Resources
                                </p>
                            </div>

                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>

                    {/* 4rth */}
                    <div className="card w-64  mb-4 border-2 border-slate-300">

                        <div className="card-body  ">
                            <div className='text-center pb-3'>
                                <h2 className=" text-2xl ">Bussiness</h2>
                                <p className='text-sm '>What You Are Looking For!</p>
                                <div className='flex py-3 justify-center'>
                                    <span >$</span><h1 className='text-4xl font-bold'>99</h1>
                                </div>
                            </div>
                            <p className='text-sm ml-4'>Switch to yearly Biling</p>
                            <button className='text-blue-600 px-12 py-3 rounded-md border-2 hover:text-white hover:bg-indigo-600'>Buy Now</button>
                            <div className='flex mt-5'>

                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'>  Powerful Admin Panel</p>
                            </div>

                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'>  1 Native Android App</p>
                            </div>

                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'> Multi-Language Support</p>
                            </div>
                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'> Free SSL Certificate</p>
                            </div>
                            <div className='flex'>
                                <span className='mr-2 text-slate-500 bg-slate-300 rounded-lg w-4  h-4 ' ><AiOutlineCheck />  </span>   <p className='flex  text-sm'>1X Allocated Resources
                                </p>
                            </div>

                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </Fade>


            </div>
        </div>


    );
};

export default Pricing;