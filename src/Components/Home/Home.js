import React from 'react';
import Categories from '../Categories/Categories';
import FeatureTemplates from '../FeatureTemplates/FeatureTemplates';
import Banner from './Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <FeatureTemplates></FeatureTemplates>
        </div>
    );
};

export default Home;