import React from 'react';
import Fade from 'react-reveal/Fade';


const FeatureTemplates = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl  font-black '>Fea<span className='text-orange-600'>tu</span>red <br /> Templates  <span className='text-indigo-600'> of The Month</span> </h1>
                <p className='text-slate-600 mt-1'>All the templates are selected by customer preferences</p>
            </div>

            {/* card  */}
            <div className='grid w-full grid-cols-3 '>
                <Fade left>

                    <div className="card w-5/6 bg-base-100 shadow-xl">
                        <figure><img className='p-3' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-5/6 bg-base-100 shadow-xl">
                        <figure><img className='p-3' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                    
               




            </Fade>

        </div>
        </div>
    );
};

export default FeatureTemplates;