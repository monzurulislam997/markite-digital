import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartRow from './CartRow';
import cartEmpty from '../../assets/image/cartEmpty.jpg'


const Cart = () => {
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('product')))
    const [isEmpty, setIsEmpty] = useState(JSON.stringify(cartProducts) === '[]')


    // const cartProducts = JSON.parse(localStorage.getItem('product'))


    let total = 0;
    if (cartProducts) {
        cartProducts.map(product => {
            total += parseInt(product.price)
            return console.log(product.price)
        }
        )

    }
    const [subTotal, setSubTotal] = useState(total)
    console.log(subTotal);

    const saveAmount = () => {
        localStorage.setItem('amount', JSON.stringify(subTotal))
    }


    return (
        <div className='flex p-10'>
            <div className='w-3/4  border-2'>
                {
                    !isEmpty ? <div >
                        <h3 className='text-4xl  ml-6 font-black'> Shopping Cart </h3>
                        <div className=' py-10'>
                            <div className="overflow-x-auto px-5">
                                <table className="table w-full">

                                    <thead>
                                        <tr>
                                            <th>Product Info</th>
                                            <th>Price</th>
                                            <th>Quantiy</th>
                                            <th>Subtotal</th>
                                            <th>Remove Item</th>

                                        </tr>
                                    </thead>
                                    <tbody className='w-full'>


                                        {
                                            cartProducts && cartProducts.map(singleProduct => <CartRow

                                                singleProduct={singleProduct} subTotal={subTotal}
                                                setSubTotal={setSubTotal} cartProducts={cartProducts} setCartProducts={setCartProducts}
                                            ></CartRow>)


                                        }


                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                        : <div className=' flex flex-col justify-center items-center'>
                            <img src={cartEmpty} className="w-96 block" alt="" />
                            <h2 className='text-2xl font-bold'>Your Cart is empty</h2>

                        </div>
                }
            </div>



            <div className='w-1/4 bg-slate-100 px-5' >
                <div className='text-center py-10'>
                    <h1 className='text-xl font-semibold'>Your Cart Total</h1>
                    <h1 className='text-3xl py-2 font-black'> {!isEmpty ? ` $${subTotal}` : 0}</h1>
                    <Link onClick={saveAmount} to='/checkout' className='btn hover:bg-emerald-500 btn-primary px-12 py-4 border-none' >Secure Checkout</Link>
                    <p className='text-sm m-4'>Price displayed excludes any applicable</p>
                </div>
            </div>
        </div>


    );
};

export default Cart;