import React from 'react';
import { templateTypeList } from '../../data';
import bg from "../../assets/image/shape-1.png"
import { useEffect, useState, useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Loadder from '../Lodder/Loadder';
import useCartNumber from './../../hooks/useCartNumber';
import Swal from 'sweetalert2';
import 'animate.css';
import { ThemContext } from '../../App';
const TemplatesDashboard = () => {
    const [user, loading] = useAuthState(auth)
    const [allTemplates, setAllTemplates] = useState([])
    const [isAdded, setIsAdded] = useState(false)
    const [setCartProductNumber] = useCartNumber()
    const { theme, setCartNumber } = useContext(ThemContext)
    // const [template, setTemplate] = useState({})
    // console.log(template);
    // ---------------------------------------------------------------------

    useEffect(() => {
        fetch('http://localhost:5000/alltemplates')
            .then(res => res.json())
            .then(data => setAllTemplates(data))
    }, [])

    // const { productDetails } = useSignlnProduct(template._id)

    if (loading) {
        return <Loadder></Loadder>
    }

    //----add to cart






    return (
        <div style={{ backgroundImage: `url(${bg}`, backgroundSize: "cover" }} className='py-6 ' >
            <div className='ml-10'>
                <h1 className='text-4xl  font-black'>Templates</h1>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Documents</a></li>
                        <li>Add Document</li>
                    </ul>
                </div>
            </div>
            <div className='grid lg:py-10 py-5  grid-cols-4 '>
                <div className={theme === "night" ? ' bg-sky-900 drop-shadow-2xl lg:block hidden h-96 ml-0 lg:ml-10 py-7 rounded-md px-5' : ' bg-white drop-shadow-2xl lg:block hidden h-96 ml-0 lg:ml-10 py-7 rounded-md px-5'}>
                    <h4 className='text-md text-xl  font-semibold  pb-2 text-black'>Catagory </h4>
                    <hr className='mb-3 ' />


                    {
                        templateTypeList?.map(templateType => {
                            return <div >

                                <label  > <input type="checkbox" className='mr-1 mt-2 text-3xl ' value={templateType.label} /> {templateType?.label}</label>
                                {/* <label className=' cursor-pointer ' htmlFor={templateType.id}> <input type="checkbox" className='mr-1 mt-2 text-3xl  ' value={templateType.label} /> {templateType?.label}</label> */}
                            </div>

                        }
                        )
                    }

                </div>
                <div className='col-span-3 w-11/12 lg:mx-20 mx-10 grid lg:grid-cols-2 grid-cols-1 '>

                    {

                        allTemplates.map(allTemplate => {
                            // setTemplate(allTemplate)
                            const { _id, img, name, price, sale } = allTemplate


                            //add to cart
                            const handleCart = (id) => {
                                const cart = []
                                const storedCart = localStorage.getItem('product')
                                if (storedCart) {
                                    const productCart = JSON.parse(storedCart);
                                    console.log(productCart, typeof productCart);
                                    if (_id) {
                                        for (const product of productCart) {
                                            if (product._id === _id) {
                                                // return setIsAdded(true)
                                                return Swal.fire({
                                                    title: 'Already Added',
                                                    showClass: {
                                                        popup: 'animate__animated animate__fadeInDown'
                                                    },
                                                    hideClass: {
                                                        popup: 'animate__animated animate__fadeOutUp'
                                                    }
                                                })
                                            }
                                        }
                                    }

                                    cart.push(...productCart, allTemplate)

                                    localStorage.setItem('product', JSON.stringify(cart))

                                    return Swal.fire({
                                        title: 'Added To Your Cart',
                                        imageUrl: img,
                                        imageWidth: 200,
                                        imageHeight: 150,
                                        imageAlt: 'image',

                                    })
                                    // setCartProductNumber(newCartItems)
                                }
                                else {
                                    cart.push(allTemplate)

                                    localStorage.setItem("product", JSON.stringify(cart))

                                }
                            }






                            return <div className=''>
                                <div className="card w-5/6 bg-base-100 mb-4 mx-3 drop-shadow-2xl">
                                    <figure className=''>
                                        <img className='p-3 rounded-lg transiton ease-in-out duration-1000	 hover:scale-110 hover:duration-1000' src={img} alt="Shoes" />
                                    </figure>

                                    <div className="card-body">
                                        <h2 className="text-xl font-semibold">
                                            {name}</h2>

                                        <div className='flex justify-between'>
                                            <div className='justify-start'>
                                                <h1 className='text-xl font-bold'>$ {price}</h1>
                                                <p>{sale} sales</p>
                                            </div>
                                            <div className="card-actions justify-end">
                                                <Link to={`/singleproduct/${_id}`} className='bg-indigo-800 px-5 mt-1 py-1 rounded-md  hover:bg-cyan-600  text-white'>Preview </Link>
                                                {/* <button className='text-2xl px-2 py-1 mt-1  hover:bg-green-600  rounded-sm bg-indigo-600 text-white'> <AiOutlineShoppingCart /></button> */}
                                                <button className='text-2xl px-2 py-1 mt-1  hover:bg-green-600  rounded-sm bg-indigo-600 text-white'> <AiOutlineShoppingCart onClick={() => handleCart(_id)} /></button>

                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default TemplatesDashboard;