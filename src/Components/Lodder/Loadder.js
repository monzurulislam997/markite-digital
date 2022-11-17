import React from 'react';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Dna } from 'react-loader-spinner'

const Loadder = () => {
    return (
        <div>
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    );
};

export default Loadder;