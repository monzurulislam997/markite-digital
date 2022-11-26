import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Bounce from 'react-reveal/Bounce';
import { AiOutlineShoppingCart } from "react-icons/ai";

const FeatureTemplates = () => {
    const [features, setFeatures] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])


    return (
        <div className='px-14 ml-10' >
            <div className='text-center'>
                <h1 className='text-4xl  font-black '>Featu<span className='text-orange-600'>re</span> <br /> Templates  <span className='text-indigo-600'> of The Month</span> </h1>
                <p className='text-slate-600 mt-1'>All the templates are selected by customer preferences</p>
            </div>

            {/* card  */}
            <Bounce >
                <div className='grid w-full mb-6  lg:grid-cols-3  my-3    '>
                    {
                        features.slice(0, 6).map(feature => <>
                            <div className="card lg:w-5/6 w-full bg-base-100 mb-4 drop-shadow-2xl">
                                <figure>
                                    <img className='p-3 rounded-lg transiton ease-in-out duration-1000	 hover:scale-150 hover:duration-1000' src={feature.img} alt="Shoes" />
                                </figure>

                                <div className="card-body">
                                    <h2 className="text-xl font-semibold">
                                        {feature.name}</h2>
                                    <p className='mb-1'>By {feature.author}  <span className='bg-slate-200 ml-8 px-2'>{feature.type}</span> </p>
                                    <div className='flex justify-between'>
                                        <div className='justify-start'>
                                            <h1 className='text-xl font-bold'>$ {feature.price}</h1>
                                            <p>{feature.sale} sales</p>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <p className='bg-indigo-800 px-5 mt-1 py-1 rounded-md    hover:bg-cyan-600  text-white'>Preview </p>
                                            <button className='text-2xl px-2 py-1 mt-1  hover:bg-green-600  rounded-sm bg-indigo-600 text-white'> <AiOutlineShoppingCart /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>)
                    }


                </div>
            </Bounce>
        </div>

    );
};

export default FeatureTemplates;