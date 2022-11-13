import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png'
const Navbar = () => {

    const navbar = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/price">Pricing</Link></li>
        <li tabIndex={0}>
            <Link to="/shop">
                Themes
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2">
                <li><a>Product</a></li>
                <li><a>Product Details</a></li>
            </ul>
        </li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/buy">HTML</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
        <li tabIndex={0}>
            <Link to="/shop">
                Pages
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2">
                <li><Link to="/">About</Link> </li>
                <li><Link to='/documentation'>Documentaiton</Link></li>

            </ul>
        </li> </>
    return (
        <nav>
        <div className="flex justify-around bg-base-100 py-4">
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
                        <img className=' w-32 lg:mt-0 mt-2 lg:w-40' src={logo} alt="" />
                    </Link>
                
                  </div>
                        
                <div className="navbar-center hidden lg:flex">
                
                
                    <ul className="menu menu-horizontal mr-12    ">
                        {navbar}

                    </ul>
                  
                </div>

                <div className="">
                               
                   <Link  to='/login'  className="btn mr-4">Log In</Link>
                    <Link to='/signup' className="btn mr-4">Sign Up</Link> 
                    <span className='text-slate-300 mr-4 '>|</span>
                < AiOutlineShoppingCart className='text-3xl inline-block '/>
          <span className=' inline-block relative bg-indigo-500 text-white w-6 h-6 text-sm  text-center rounded-full  mr-4 bottom-3 -ml-2'>2 </span>
                   </div>

                </div>
            
                   </nav>
    );
};

export default Navbar;