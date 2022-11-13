import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
const onSubmit = data => console.log(data);
const CheackOut = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [cartProduct, setCartProduct]=useState([])
    

    return (

        <div className=' w-full flex ' >
            

            <div className=" w-1/2 border px-10 py-5 m-5 ">
                <h2 className='text-2xl font-black'>Billing Details</h2>
                <p className='text-sm'>Envato collects and uses personal data in accordance with our <a target="_blank" className='text-blue-500' href="/legal/market">Terms and Conditions</a> . By creating an account, you agree to our Terms and Conditions.</p>
                <form className='py-5'>

                    <div className='flex gap-2 '>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">First Name</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Last Name</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs" />

                        </div>
                    </div>

                    {/* email */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Type here" className="input input-sm input-bordered  w-full" />


                    </div>
                    {/* company */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Type here" className="input input-sm input-bordered  w-full" />


                    </div>
                    {/* country */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Country</span>

                        </label>
                        <select className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>

                    </div>

                    <div className='flex gap-2  '>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">City</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-sm  input-bordered w-full max-w-xs" />

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">State/Region</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Zip/Postal Code</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs" />

                        </div>
                    </div>
                    {/* Address  */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="email" placeholder="Type here" className="input input-sm input-bordered   w-full" />


                    </div>
                    <input type="submit" className='bg-primary w-full mt-5 text-white py-2 rounded-md' value="Save and continue" />


                </form>

            </div>

            <div className='w-1/2'>
                <h2>Order Summary</h2>
            </div>
        </div>

    );
};

export default CheackOut;