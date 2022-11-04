import React from 'react';
import './Banner.css'
import hero from '../../assets/image/hero-triangle.png'
import circle from '../../assets/image/hero-circle.png'
import heroSquire from '../../assets/image/hero-square-2.png'
import hero1 from '../../assets/image/hero-1.jpg'
import hero2 from '../../assets/image/hero-2.jpg'
import hero3 from '../../assets/image/hero-3.jpg'
import { BiSearchAlt2  } from "react-icons/bi";
const Banner = () => {
    return (

        <div style={{backgroundColor:'#eeedf2'}} className=' py-10 flex flex-col lg:flex-row '>
            <div className='w-1/2 ml-3 lg:order-1    lg:p-20 order-2'>

                <h1 className='text-3xl lg:text-6xl  '>The World’s largest 
                
                <div class="box w-16 absolute ">
                        <img className='w-8' src={hero} alt="" />
                
                    </div>
                <span className='font-black  leading-tight '> PreBuild  Templets Collection.</span> 
                     </h1>
                <p>Here you find all the premium pre build HTML templets</p>

               <div className=' flex w-full mt-8    '>
               
               <div className='flex justify-center  input-bordered rounded-md  bg-white w-5/6 mr-3  items-center' >
               <span className='text-slate-500 text-xl'>< BiSearchAlt2 /> </span>  <input type="search" placeholder="Search for templates"  className=" py-7  input focus:outline-0 w-full max-w-xs" />
               </div>

               <button className=" border-none hover:bg-violet-800 text-white rounded-lg px-8  bg-indigo-700">Search</button>
               </div>
            </div>

            <div className='w-1/2  order-1 lg:order-2 '>
               <div className='flex '>
               <img className='w-2/6 absolute opacity-10 ml-16 mt-16'   src={circle} alt="" />
               <div className='w-3/4 mt-20  relative'>
               <img className='box absolute mt-16 ' src={heroSquire} alt="" />
               <img className='hero-1 ml-7' src={hero1} alt="" />
               </div>
                <div className='z-10 relative mt-5 right-20'>
                    <img className='w-96 h-72 ' src={hero2} alt="" />
                    <img className='w-72 right-12 mt-8 relative z-10  ' src={hero3} alt="" />
                </div>
                </div>
               </div>
            </div >
    );
};

export default Banner;