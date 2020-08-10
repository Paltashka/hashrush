import React, {useState} from 'react';
import {ParallaxProvider} from 'react-scroll-parallax/cjs';
import Header from '../components/Header';
import LimitedEdition from '../components/LimitedEdition';
import PreOrder from '../components/PreOrder';
import ChooseHero from '../components/ChooseHero';
import Footer from '../components/Footer';
import BundlesBackground from '../components/ChooseHero/Background';

const BundlesPage = () => {
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
                bgColor='#06121E'
            />
            <ChooseHero/>
            <BundlesBackground/>
            <PreOrder
                headerText='Pre-order your hero now!'
                subtext='Estimated delivery of the hero system'
                date='01 | 11 | 2020'
                isFounderBundles={false}
                bgColor='#06111C'
            />
            <Footer/>
        </ParallaxProvider>
    )
}

export default BundlesPage;
