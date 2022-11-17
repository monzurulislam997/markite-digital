import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Hm = () => {
    const [value, setValue] = useState('');



    const change = (e) => {
        e.preventDefault();

        const inputValue = e.target.someText.value

        setValue(inputValue);
        window.localStorage.setItem("Input Value", inputValue);

        e.target.reset();
    }
    return (
        <div className='flex flex-col justify-center items-center py-10'>
            <h1>{value},</h1>
            <form onSubmit={change} className="flex justify-center items-center gap-3">
                <input type="text" name='someText' className='input input-bordered' placeholder='Input some text' />
                <button className='btn'>Submit</button>
            </form>
        </div>
    );
};

export default Hm;