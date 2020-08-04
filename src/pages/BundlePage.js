import React from 'react';
import Header from '../components/Header';
import BundleHeader from '../components/BundleHeader';
import BundleIncluded from '../components/BundleIncluded';
import OtherBundles from '../components/OtherBundles';
import Footer from '../components/Footer';
import otherBundleBG from '../assets/bundle-page/3-heroes-bw.png';

const BundlePage = ({match}) => {
    const id = Number.parseInt(match.params.id);

    return (
        <>
            <Header isLogin={true}/>
            <BundleHeader id={id}/>
            <BundleIncluded id={id}/>
            <OtherBundles id={id} bgImg={otherBundleBG}/>
            <Footer/>
        </>
    );
};

export default BundlePage;
