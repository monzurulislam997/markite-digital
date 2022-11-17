import React from 'react';
import Categories from '../Categories/Categories';
import FeatureTemplates from '../FeatureTemplates/FeatureTemplates';
import Footer from '../Footer/Footer';
import Hm from '../Login/hm';
import Pricing from '../Pricing/Pricing';
import Banner from './Banner';


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Categories></Categories>
            <FeatureTemplates></FeatureTemplates>
            <Pricing></Pricing>
            <Footer />
            <Hm></Hm>
        </div>
    );
};

export default Home;