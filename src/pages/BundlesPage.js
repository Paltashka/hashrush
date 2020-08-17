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
    }, 1000);

    setTimeout(() => {
        setReadySecondPart(true);
    }, 3000);

    return (
        <ParallaxProvider>
            {isReadyFirstPart && (
                <>
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
                </>
            )}
            {isReadySecondPart && (
                <>
                    <BundlesBackground/>
                    <PreOrder
                        headerText='Pre-order your hero now!'
                        subtext='Estimated delivery of the hero system'
                        date='01 | 11 | 2020'
                        isFounderBundles={false}
                        bgColor='linear-gradient(to bottom, #06121d, #02080e 97%)'
                    />
                    <Footer/>
                </>
            )}
        </ParallaxProvider>
    )
}

export default BundlesPage;
