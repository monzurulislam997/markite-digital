import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from "firebase/auth";
import Dashbord from './../dashboard/Dashbord';
import { useLocation } from 'react-router-dom';
import Loadder from '../Lodder/Loadder';
import { useState, useEffect, useContext } from 'react';
import useCartNumber from './../../hooks/useCartNumber';
import { ThemContext } from './../../App';
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
const Navbar = () => {
    const [user, loading] = useAuthState(auth)
    const [isDark, setIsDark] = useState(true)

    const [cartProductNumber] = useCartNumber()
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('product')))
    const { theme, setTheme } = useContext(ThemContext)


    if (loading) {
        return <Loadder></Loadder>
    }

    const navbar = <>
        <li><Link to="/home">Home</Link></li>
        {/* <li><Link to="/price">Pricing</Link></li> */}
        {/* <li tabIndex={0}>
            <Link to="/shop">
                Themes
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-1">
                <li><a>Product</a></li>
                <li><a>Product Details</a></li>
            </ul>
        </li> */}
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/templates">Templates</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/dashboard">Dashbord</Link></li>

        <li tabIndex={0}>
            <Link to="/shop">
                Pages
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-1">
                <li><Link to="/">About</Link> </li>
                <li><Link to='/documentation'>Documentaiton</Link></li>

            </ul>
        </li> </>

    //theme change

    // const themeChange = () => {
    //     if (isDark) {
    //         localStorage.setItem('theme', 'dark')
    //         setIsDark(false)
    //     }
    //     else {
    //         localStorage.setItem('theme', 'light')
    //         setIsDark(true)
    //     }
    // }


    const themeChange = () => {

        if (isDark) {
            setTheme('night')
            localStorage.setItem('theme', "night")
            setIsDark(false)
        }
        else {
            setTheme('light')
            localStorage.setItem('theme', 'light')
            setIsDark(true)
        }

    }


    return (
        <nav className='sticky top-0 px-5 z-50'>
            <div className="flex justify-evenly bg-base-100 py-4">
                <div className='flex '>
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>

                    </div>
                    <Link to='/home' className=" lg:ml-20">
                        <img className=' w-32 lg:mt-0 mt-2 hidden lg:block lg:w-40' src={logo} alt="" />
                    </Link>

                </div>

                <div className="navbar-center hidden lg:flex">


                    <ul className="menu menu-horizontal    ">
                        {navbar}

                    </ul>

                </div>

                {
                    user ? <>
                        {/* <div className="avatar   online">
                            <div className="w-12 ring ring-primary rounded-full">
                                <img src="https://placeimg.com/192/192/people" alt='' />
                               
                            </div>
                        </div> */}

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="cursor-pointer" ><div className="avatar   online">
                                <div className="w-12 ring ring-primary rounded-full">
                                    <img src=" https://placeimg.com/192/192/people" alt='' />


                                </div>
                            </div> </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow-xl bg-base-100 rounded-box w-52">
                                <li><Link to='/'>Profile</Link></li>
                                <li> <button onClick={() => {
                                    signOut(auth)
                                    localStorage.removeItem('accessToken')
                                }}>Sign Out</button></li>
                            </ul>
                        </div>


                    </> : <>
                        <div className="">

                            <Link to='/login' className=" font-semibold hover:bg-sky-700 hover:text-white hover:font-thin px-1   text-xl py-1 rounded-md ">Log In</Link>

                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className=" btn btn-primary text-white">
                                    Get Started{" "}
                                    <MdOutlineKeyboardArrowRight className="text-2xl" />
                                </label>
                                <ul
                                    tabIndex="0"
                                    className="dropdown-content menu p-2 shadow-xl bg-base-100 rounded-box w-52"
                                >
                                    <li className="py-2">
                                        <Link
                                            to="signUp/customer"
                                            className="font-semibold hover:text-primary hover:font-bold hover:ease-in-out duration-300"
                                        >
                                            As a Customer
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="signUp/seller"
                                            className="font-semibold hover:text-primary hover:font-bold hover:ease-in-out duration-300"
                                        >
                                            As a seller
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* <Link to='/signup' className="font-semibold hover:bg-sky-700 hover:text-white hover:font-thin   py-1  mr-4">Sign Up</Link>  */}



                        </div></>
                }
                <button className='text-2xl' onClick={themeChange}> {theme === "night" ? <BsFillMoonFill /> : <BsFillSunFill />}</button>

                <div className="dropdown dropdown-bottom dropdown-end  ">

                    <div tabIndex={0} className='cursor-pointer'>
                        < AiOutlineShoppingCart className='text-3xl inline-block ' />
                        {/* <span className=' inline-block relative bg-indigo-500 text-white w-6 h-6 text-sm  text-center rounded-full   bottom-5 -ml-3 '>0 </span> */}
                        <span className=' inline-block relative bg-indigo-500 text-white w-6 h-6 text-sm  text-center rounded-full   bottom-5 -ml-3 '>{cartProductNumber ? cartProductNumber.length : 0} </span>
                    </div>


                    <ul tabIndex={0} className="dropdown-content menu shadow h-32  bg-base-100 rounded-box w-96 mr-20">

                        {
                            cartProducts && cartProducts.map(singleProduct => {
                                const { name, img, price } = singleProduct;
                                return <div className=''>
                                    <div className="flex   mb-1  items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask  mask-squircle w-10 h-12">
                                                <img src={img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <h2>{name}</h2>
                                        <h2>${price}</h2>
                                    </div>


                                </div>
                            })


                        }


                    </ul>
                </div>





            </div>

        </nav>
    );
};

export default Navbar;