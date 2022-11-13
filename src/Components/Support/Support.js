import React from 'react';
import img1 from '../../assets/image/suport-1.png'
import img2 from '../../assets/image/suport-2.png'
import img3 from '../../assets/image/suport-3.png'
import profile1 from '../../assets/image/s-p-1.jpg'
import profile2 from '../../assets/image/testi-1.jpg'
import profile3 from '../../assets/image/testi-2.jpg'
import profile4 from '../../assets/image/testi-4.jpg'
const Support = () => {
    return (
        <div>
            <div className='text-center py-16'>
                <h1 className='text-5xl font-black'>Welcome! <br />
                    How can we help?</h1>
                <p>Our support forums and make your support experience better.

                </p>
            </div>

            <div className='grid grid-cols-3 py-8 gap-4 px-20 mx-10'>
                <div className="card  bg-base-100 px-5 py-8 drop-shadow-2xl">
                    <figure className="px-2 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl animate-pulse " />
                    </figure>
                    <div className=" text-center py-6 ">
                        <h1 className=' text-2xl font-bold'>Customer Support
                        </h1>
                        <p className='py-4'>Customer support is a specific type of customer service involving skills such as documentation.</p>
                        <button className=" text-sm rounded-sm  bg-indigo-600 px-5 py-1   text-white hover:bg-blue-600">
                            Submit Ticket
                        </button>

                    </div>
                </div>
                <div className="card  bg-base-100 px-5 py-8 drop-shadow-2xl">
                    <figure className="px-2 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl animate-pulse " />
                    </figure>
                    <div className=" text-center py-6 ">
                        <h1 className=' text-2xl font-bold'>Need Customization
                        </h1>
                        <p className='py-4'>Oxford smashing Harry spend a penny get stuffed mate cup of char It's your round.</p>
                        <button className=" text-sm rounded-sm  bg-indigo-600 px-5 py-1   text-white hover:bg-blue-600">
                            Submit Ticket
                        </button>

                    </div>
                </div>
                <div className="card  bg-base-100 px-5 py-8 drop-shadow-2xl">
                    <figure className="px-2 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl animate-pulse " />
                    </figure>
                    <div className=" text-center py-6 ">
                        <h1 className=' text-2xl font-bold'>Support Includes
                        </h1>
                        <p className='py-4'>Website support requires a large range of services, focused not on his one aspect.</p>
                        <button className=" text-sm rounded-sm  bg-indigo-600 px-5 py-1   text-white hover:bg-blue-600">
                            Submit Ticket
                        </button>

                    </div>
                </div>
            </div>

            {/* pic many */}

            <div className='flex justify-center items-center flex-col'>
                <div className="avatar-group -space-x-6 ">
                    <div className="avatar">
                        <div className="w-16">
                            <img src={profile1} alt='' />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-16">
                            <img src={profile2} alt='' />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-16">
                            <img src={profile3} alt='' />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-16">
                            <img src={profile4} alt='' />
                        </div>
                    </div>
                </div>

                <p className='font-thin mt-3'>Contact us directly at web@markit.com</p>
            </div>


            {/* frequently */}
            <div className=' w-3/4 mx-auto py-20 my-8  px-14 bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-800 '>
                <div className='text-center'>
                    <h1 className='text-4xl text-white mb-3 font-black'>Join The Community</h1>
                    <p className='text-slate-200'>Thousands of Markit Brands have made the swich.Text marketing with the customer in mind!  </p>
                    <div className='py-3'> 
                        <button className='px-10 rounded-md mr-3 border-2 py-2 bg-white text-indigo-900'> Start 14 Days FREE Trail   </button>
                        <button className='px-10 border-2 py-2  text-white rounded-md  '>  Claim Free Demo  </button>
                        <p className='text-slate-200 py-4'>Start Sending Texts - No Credit Card Necessary </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Support;