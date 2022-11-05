import React from 'react';
import Categories from '../Categories/Categories';
import FeatureTemplates from '../FeatureTemplates/FeatureTemplates';
import Pricing from '../Pricing/Pricing';
import Banner from './Banner';


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Categories></Categories>
            <FeatureTemplates></FeatureTemplates>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;