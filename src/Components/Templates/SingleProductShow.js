
import { Link, useParams } from 'react-router-dom';
import useSignlnProduct from '../../hooks/useSingleProduct';
import done from '../../assets/image/done.png'
const SingleProductShow = () => {
    const { id } = useParams();
    const { productDetails } = useSignlnProduct(id)
    const { price, name, img, author } = productDetails

 const handleCart =()=>{

     const cartItems= [price,name, img,author]
    localStorage.setItem("productDetails",JSON.stringify(cartItems))
 }

 

    return (
        <div className='bg-gradient-to-r from-cyan-50 to-pink-50 py-20  px-16'>
            <div className="text-sm breadcrumbs pt-10">
                <h1 className='text-5xl font-black ml-16 my-3'>{name}</h1>
                <ul className='my-3 ml-16'>
                    <li><a>Home</a></li>
                    <li><a>Documents</a></li>
                    <li>Add Document</li>
                </ul>
            </div>
            <div className='container  flex mx-auto'>
                <img className='w-2/3 px-16' src={img} alt="" />

                <div className="card w-3/4 6  mx-6 shadow-2xl	 ">
                    <div className="card-body  ">

                        <div className='flex justify-between'>
                            <div className='flex justify-center items-center'>
                                <img src="https://placeimg.com/192/192/people" className='rounded-full w-16' alt="" />
                                <div className='ml-2 my-2'>
                                    <h3 className='font-bold'>{author}</h3>
                                    <button className='text-sm '>View profile</button>
                                </div>

                            </div>
                            <h2 className="card-title text-3xl   text-primary">${price}</h2>
                        </div>
                        <div className="divider mt-[-10px] "></div>
                        <div className='flex gap-12 my-2'>
                            <p>Downloads: <br /> 44</p>
                            <p>Release On : <br /> 11 Nov, 2022</p>
                        </div>
                        <div className='flex gap-12 my-2'>
                            <p>Version: <br /> 1.1</p>
                            <p>Compatibility:: <br /> React v6.3.1</p>
                        </div>
                        <div className=" ">
                            <p className=' font-bold'>Framework : <br />
                                Elementor, Redux, Kirki</p>
                        </div>
                        <div className='mt-6'>
                            <label htmlFor="addCartModal" onClick={handleCart} className="btn w-full  mb-3 bg-primary" > Add To Cart </label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="addCartModal" className="modal-toggle" />
                            <div className="modal opacity-100 modal-bottom sm:modal-middle mx-auto">
                                <div className="modal-box  ">

                                    <div className='text-center py-4'>
                                        <img className='w-16 mx-auto  text-center' src={done} alt="" />
                                        <h3 className="font-black text-2xl ">Item added to your cart</h3>
                                    </div>


                                    <div className='flex bg-slate-100' >
                                        <div className='flex gap-3'>

                                            <img src={img} className="w-24 rounded-md" alt="" />
                                            <div>
                                                <h2 className='text-sm font-black'>{name}</h2>
                                                <p className='text-sm'>{author}</p>
                                            </div>

                                        </div>
                                        <div>
                                            <h2 className='text-xl text-indigo-600 ml-7 font-bold'> Price: ${price}</h2>
                                            <h3><span className='font-bold text-slate-700'>Licesnse</span>: Regular</h3>
                                            <h1 > <span className='font-bold text-slate-700'>Support</span>: 6 Months</h1>
                                        </div>
                                    </div>


                                    <div className="modal-action flex justify-between">
                                        <label htmlFor="addCartModal" className="btn btn-outline btn-info text-indigo-800 hover:bg-slate-400">Keep Browsing</label>
                                        <Link className='btn  bg-primary hover:bg-emerald-600"' to="/cart">Go to Cheack Out</Link>
                                    </div>
                                </div>
                            </div>




                            <button className="border-2 py-3 hover:bg-primary hover:text-white rounded-md w-full ">Prview Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>






    );
};

export default SingleProductShow;