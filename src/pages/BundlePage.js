import React from 'react';
import {ParallaxProvider} from 'react-scroll-parallax/cjs';
import Header from '../components/Header';
import BundleHeader from '../components/BundleHeader';

const BundlePage = () => {
    return (
        <ParallaxProvider>
            <Header isLogin={true}/>
            <BundleHeader/>
        </ParallaxProvider>
    );
};

export default BundlePage;
