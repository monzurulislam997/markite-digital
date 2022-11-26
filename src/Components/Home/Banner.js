import React, { useContext } from 'react';
import './Banner.css'
import hero from '../../assets/image/hero-triangle.png'
import circle from '../../assets/image/hero-circle.png'
import heroSquire from '../../assets/image/hero-square-2.png'
import hero1 from '../../assets/image/hero-1.jpg'
import hero2 from '../../assets/image/hero-2.jpg'
import hero3 from '../../assets/image/hero-3.jpg'
import heroCircle from '../../assets/image/hero-circle-2.png'
import { BiSearchAlt2 } from "react-icons/bi";
import Bounce from 'react-reveal/Bounce';
import { ThemContext } from '../../App';
const Banner = () => {

    const { theme } = useContext(ThemContext)
    console.log(theme)
    return (

        <div style={theme === 'night' ? { backgroundColor: '#0f0826' } : { backgroundColor: '#eeedf2' }} className={theme === 'night' ? ' py-10 flex flex-col text-white  lg:flex-row ' : ' py-10 flex flex-col lg:flex-row '}>
            <Bounce >
                <div className='lg:w-1/2 w-full ml-3 lg:order-1 p-8   lg:p-20 order-1'>

                    <h1 className='text-3xl lg:text-6xl  '>The World’s largest

                        <div class="box w-16 absolute ">
                            <img className='w-8' src={hero} alt="" />

                        </div>
                        <span className='font-black  leading-tight '> PreBuild  Templets Collection.</span>
                    </h1>
                    <p>Here you find all the premium pre build HTML templets</p>

                    <div className=' flex w-full mt-8    '>

                        <div className={theme === 'night' ? 'flex justify-center  input-bordered rounded-md  bg-slate-500 w-5/6 mr-3  items-center' : 'flex justify-center  bg-slate-500 input-bordered rounded-md  w-5/6 mr-3  items-center'} >
                            <span className={theme === "night" ? 'text-white text-xl' : 'text-slate-500 text-xl'}>< BiSearchAlt2 /> </span>
                            <input type="search" placeholder="Search for templates" className={theme === "night" ? " py-7  input focus:outline-0 w-full bg-slate-500 max-w-xs" : " py-7  input focus:outline-0 w-full  max-w-xs"} />
                        </div>

                        <button className=" border-none hover:bg-violet-800 text-white rounded-lg lg:px-8  px-3 bg-indigo-700">Search</button>
                    </div>
                </div>

            </Bounce>

            <div className='w-1/2  order-1 lg:order-2 '>
                <div className='flex '>
                    <img className='w-2/6 absolute opacity-10 ml-16 mt-16' src={circle} alt="" />
                    <div className='lg:w-3/4 w-full lg:mt-20 mt-10  relative'>
                        <img className='box absolute mt-16 ' src={heroSquire} alt="" />
                        <img className='hero-1 w-full ml-7' src={hero1} alt="" />
                    </div>
                    <div className='z-10 relative mt-5 hidden lg:block right-20'>
                        <img className='w-96 h-72 ' src={hero2} alt="" />
                        <img className='w-10 left-64 animate-bounce  relative z-10  ' src={heroCircle} alt="" />
                        <img className='w-72 right-12 mt-8 relative z-10  ' src={hero3} alt="" />

                    </div>
                </div>

            </div>
        </div >
    );
};

export default Banner;