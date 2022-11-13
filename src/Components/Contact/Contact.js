import React from 'react';
import img from '../../assets/image/cat-3.png'
const Contact = () => {
    return (
        <div>
            <h1 className='text-4xl py-8 font-black ml-10'>Leave Us a Message.</h1>
                
            <div className='flex py-10 px-10' >
                    <div class="p-6 w-1/2 border-2 shadow-2xl sm:rounded-md">
                        <form>
                            <label class="block mb-6">
                                <span class="text-gray-700">Email address</span>
                                <input
                                    name="email"
                                    type="email"
                                    class=" block w-full mt-1 border-gray-300 rounded-md shadow-sm outline-none 
          "
                                    placeholder="joe.bloggs@example.com"
                                    required
                                />
                            </label>
                            <label class="block mb-6">
                                <span class="text-gray-700">Phone number</span>
                                <input
                                    name="phone"
                                    type="text"
                                    class="  block  w-full  mt-1 outline-none border-gray-300  rounded-md  shadow-sm  
          "
                                    placeholder="0123456789"
                                    required
                                />
                            </label>
                            <label class="block mb-6">
                                <span class="text-gray-700">Message</span>
                                <textarea
                                    name="message"
                                    class="  block  w-full  mt-1  border-gray-300  rounded-md  shadow-sm  p-2  border-2 outline-none  focus:ring-opacity-50
          "
                                    rows="5"
                                    placeholder="Any details?"
                                ></textarea>
                            </label>
                            <div class="mb-6">
                                <button
                                    type="submit"
                                    className="   h-10   px-5  border-2 hover:outline-none text-indigo-100   bg-indigo-700   rounded-lg   transition-colors   duration-150   focus:shadow-outline   hover:bg-indigo-800" >
                                    Submit
                                </button>
                            </div>
                            <div>
                               
                            </div>
                        </form>
                    </div>
            <div className='w-1/2 px-16'>
                <img src={img} alt="" />
                </div>
            </div>
            </div>
      
    );
};

export default Contact;