import React from 'react';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle, Dna, Watch } from 'react-loader-spinner'

const Loadder = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>

            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4338ca"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
            {/* <Dna
                visible={true}
                height="90"
                width="90"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            /> */}
        </div>
    );
};

export default Loadder;