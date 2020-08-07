import React, {useState} from 'react';
import {ParallaxProvider} from 'react-scroll-parallax/cjs';
import Header from '../components/Header';
import LimitedEdition from '../components/LimitedEdition';
import PreOrder from '../components/PreOrder';
import ChooseHero from '../components/ChooseHero';
import Footer from '../components/Footer';
import BundlesBackground from '../components/ChooseHero/Background';

const BundlesPage = () => {
    const [isReadyFirstPart, setReadyFirstPart] = useState(false);
    const [isReadySecondPart, setReadySecondPart] = useState(false);

    setTimeout(() => {
        setReadyFirstPart(true);
    }, 5000);

    setTimeout(() => {
        setReadySecondPart(true);
    }, 8000);

    return (
        <ParallaxProvider>
            <Header isLogin={true}/>
            <LimitedEdition/>
            <PreOrder
                headerText='SUPPORT HASH RUSH'
                subtext='Purchase hero founder bundle and support Hash Rush!
                         Estimated delivery of the hero system'
                date='01 | 11 | 2020'
                isFounderBundles={true}
            />
            <ChooseHero/>
            <BundlesBackground/>
            <PreOrder
                headerText='Pre-order your hero now!'
                subtext='Estimated delivery of the hero system'
                date='01 | 11 | 2020'
                isFounderBundles={false}
            />
            <Footer/>
        </ParallaxProvider>
    )
}

export default BundlesPage;
