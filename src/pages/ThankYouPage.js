import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OtherBundles from '../components/OtherBundles';
import BoughtBundle from '../components/BoughtBundle';

const ThankYouPage = () => {
    return (
        <>
            <Header isLogin={true}/>
            <BoughtBundle/>
            <OtherBundles/>
            <Footer/>
        </>
    );
};

export default ThankYouPage;
