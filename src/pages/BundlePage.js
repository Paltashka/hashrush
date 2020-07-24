import React, {useState} from 'react';
import {ParallaxProvider} from 'react-scroll-parallax/cjs';
import Header from '../components/Header';
import LimitedEdition from '../components/LimitedEdition';
import PreOrder from '../components/PreOrder';
import ChooseHero from '../components/ChooseHero';
import GearList from '../components/GearList';
import Footer from '../components/Footer';

const BundlePage = () => {
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
            <PreOrder isFounderBundles={true}/>
            <ChooseHero/>
            <GearList/>
            <PreOrder isFounderBundles={false}/>
            <Footer/>
        </ParallaxProvider>
    )
}

export default BundlePage;
