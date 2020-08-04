import React, {useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OtherBundles from '../components/OtherBundles';
import BoughtBundle from '../components/BoughtBundle';
import otherBundleBG from '../assets/bundle-page/3-heroes-bw.png';
import {useSelector} from 'react-redux';
import {getPurchasedBundle} from '../reducers/purchase';

const ThankYouPage = () => {
    const purchased = useSelector(state => getPurchasedBundle(state));
    return (
        <>
            <Header isLogin={true}/>
            <BoughtBundle id={purchased.id} heroName={purchased.heroName} items={purchased.items} image={purchased.image}/>
            <OtherBundles id={purchased.id} bgImg={otherBundleBG} />
            <Footer/>
        </>
    );
};

export default ThankYouPage;
