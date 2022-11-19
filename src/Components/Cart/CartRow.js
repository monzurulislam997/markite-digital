import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";



const CartRow = ({ singleProduct, setSubTotal, subTotal, cartProducts, setCartProducts }) => {
    const { _id, name, img, price } = singleProduct;

    const [quantity, setQuantity] = useState(1)
    const total = price * quantity


    const inputQuantity = (e) => {
        setQuantity(e.target.value)

        if (quantity > 1) {
            const allTotal = parseInt(subTotal + parseInt(price));

            setSubTotal(allTotal)
        }

    }


    const deleteItem = (_id) => {

        const confirm = window.confirm("Ary you sure want to delete?")
        if (confirm) {
            const remainingProducts = cartProducts.filter(product => product._id !== _id)

            localStorage.setItem('product', JSON.stringify(remainingProducts))
            const getRemainigProduct = localStorage.getItem('product')
            setCartProducts(JSON.parse(getRemainigProduct))

        }
    }


    return (

        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <h2>${price}</h2>
            </td>
            <td>
                <input onChange={inputQuantity} min="1" placeholder="1" className='w-16   px-2 border-2 rounded-md' type="number" />

            </td>
            <td>
                <h2>{!quantity ? price : `$${total}`} </h2>
            </td>
            <td className='px-8'>
                <button onClick={() => deleteItem(_id)} className='text-2xl text-red-500'><FaTrashAlt /></button>
            </td>

        </tr>



    );
};

export default CartRow;