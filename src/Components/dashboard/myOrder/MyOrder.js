import React from 'react';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const MyOrder = () => {
    const [ordered, setOrdered] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/order")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrdered(data)
            })
    }, [])


    const deleteOrder = (id) => {

        fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE",
            'content-type': "application/json"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {

                    const remainingOrders = ordered.filter(order => order._id !== id)

                    setOrdered(remainingOrders)
                    toast.success("Successfully Deleted")
                }


            })

    }

    return (
        <div>
            <h2>My order</h2>

            {
                ordered.map(item => {
                    return <div className='w-3/4 flex bg-slate-100 mb-3 mx-auto' >
                        <div className='w-1/2'>
                            <div className='flex border-t-2  drop-shadow-xl mb-4  gap-3'>

                                <img src={item.img} className="w-36" alt="" />
                                <h1 className='mt-10 '>{item.name}</h1>
                            </div>
                        </div>

                        <div className='w-1/2 mt-10 gap-3'>
                            <div className='flex  gap-10'>
                                <h1>Quantity:1</h1>
                                <span className='bg-red-500 text-white px-2 py-1 hover:bg-primary  cursor-pointer' onClick={() => { deleteOrder(item._id) }}  >Delete Order</span>
                            </div>
                        </div>
                    </div>



                })
            }
        </div>
    );
};

export default MyOrder;