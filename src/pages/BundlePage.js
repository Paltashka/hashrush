import React from 'react';
import {ParallaxProvider} from 'react-scroll-parallax/cjs';
import Header from '../components/Header';
import BundleHeader from '../components/BundleHeader';
import BundleIncluded from '../components/BundleIncluded';
import OtherBundles from '../components/OtherBundles';

const BundlePage = () => {
    return (
        <ParallaxProvider>
            <Header isLogin={true}/>
            <BundleHeader/>
            <BundleIncluded/>
            <OtherBundles/>
        </ParallaxProvider>
    );
};

export default BundlePage;
