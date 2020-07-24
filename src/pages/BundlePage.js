import React from 'react';
import {ParallaxProvider} from 'react-scroll-parallax/cjs';
import Header from '../components/Header';
import BundleHeader from '../components/BundleHeader';
import BundleIncluded from '../components/BundleIncluded';

const BundlePage = () => {
    return (
        <ParallaxProvider>
            <Header isLogin={true}/>
            <BundleHeader/>
            <BundleIncluded/>
        </ParallaxProvider>
    );
};

export default BundlePage;
