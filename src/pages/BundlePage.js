import React from 'react';
import Header from '../components/Header';
import BundleHeader from '../components/BundleHeader';
import BundleIncluded from '../components/BundleIncluded';
import OtherBundles from '../components/OtherBundles';
import Footer from '../components/Footer';
import otherBundleBG from '../assets/bundle-page/3-heroes-bw.png';

const BundlePage = () => {
    return (
        <>
            <Header isLogin={true}/>
            <BundleHeader/>
            <BundleIncluded/>
            <OtherBundles bgImg={otherBundleBG}/>
            <Footer/>
        </>
    );
};

export default BundlePage;
