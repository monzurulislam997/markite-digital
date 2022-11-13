import React from 'react';

const Cart = () => {


    return (
        <div className='w-full'>


            <h3 className='text-4xl font-black'> Shopping Cart </h3>
            <div className='flex  py-10'>
                <div className="overflow-x-auto w-2/3 px-5">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>Product Info</th>
                                <th>Price</th>
                                <th>Quantiy</th>
                                <th>Subtotal</th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <h2>$1500</h2>
                                </td>
                                <td>

                                    <input className='w-16 px-2 border-2 rounded-md' min={1} type="number" />
                                </td>
                                <td>
                                    <h2>1500</h2>
                                </td>

                            </tr>


                        </tbody>



                    </table>
                </div>
                <div className='w-1/4 bg-slate-100 px-5' >
                    <div className='text-center py-10'>
                        <h1 className='text-xl font-semibold'>Your Cart Total</h1>
                        <h1 className='text-3xl py-2 font-black'>US${ }</h1>
                        <button className='btn hover:bg-emerald-500 btn-primary px-12 py-4 border-none'>Secure Checkout</button>
                        <p className='text-sm m-4'>Price displayed excludes any applicable</p>
                    </div>
                </div>
            </div>
plo


        </div>
    );
};

export default Cart;