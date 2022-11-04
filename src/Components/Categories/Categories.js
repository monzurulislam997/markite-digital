import React from 'react';
import cat1 from '../../assets/image/cat-1.png'
import cat2 from '../../assets/image/cat-2.png'
import cat3 from '../../assets/image/cat-3.png'
import cat4 from '../../assets/image/cat-4.png'
import { AiFillCaretRight } from "react-icons/ai";
import Fade from 'react-reveal/Fade';

const Categories = () => {
    const catagories = [
        {
            name: "Construction templates",
            img: cat1
        },
        {
            name: "Site  templates",
            img: cat2
        },
        {
            name: "UI templates",
            img: cat3
        },
        {
            name: "Digital templates",
            img: cat4
        },

    ]

    return (
        <div className=' p-16'>

            <div className='text-center py-8'>
                <h1 className=' text-4xl font-black'>Browse <br />  Popular Categories</h1>
                <p className='text-slate-500 mt-1'>Find over 7000 website templates and themes.</p>
            </div>
                <Fade left>
            <div className='grid grid-cols-4 py-5 mx-12'>

                    {

                        catagories.map(catagorie => <>

                            <div className="card w-64 bg-base-100 px-5 hover:border-2 hover:border-indigo-600 drop-shadow-2xl">
                                <figure className="px-2 pt-10">
                                    <img src={catagorie.img} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body card-actions text-center justify-center ">
                                    <h1 className='card-title'>{catagorie.name}</h1>
                                    <button className="flex ml-2     hover:text-indigo-600 hover:font-bold">Explore More

                                        <span className="mt-1  " ><AiFillCaretRight /></span>
                                    </button>

                                </div>
                            </div>
                        </>)
                    }
            </div>
                </Fade>
            <div className='text-center'>
                <button className="py-3 px-8 hover:drop-shadow-2xl rounded-lg my-3 hover:text-cyan-400	 btn-primary">View All Catagories</button>

            </div>

        </div>
    );
};

export default Categories;