import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OtherBundles from '../components/OtherBundles';
import BoughtBundle from '../components/BoughtBundle';
import {useSelector} from 'react-redux';
import {getPurchasedBundle} from '../reducers/purchase';

const ThankYouPage = () => {
    const purchased = useSelector(state => getPurchasedBundle(state));
    return (
        <>
            <Header isLogin={true}/>
            <BoughtBundle id={purchased.id} heroName={purchased.name} items={purchased.items} image={purchased.image}/>
            <OtherBundles id={purchased.id} />
            <Footer/>
        </>
    );
};

export default ThankYouPage;
