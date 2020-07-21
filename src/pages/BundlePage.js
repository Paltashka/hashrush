import React, {useState} from 'react';
import {ParallaxProvider} from 'react-scroll-parallax/cjs';
import Header from '../components/Header';
import LimitedEdition from '../components/LimitedEdition';
import PreOrder from '../components/PreOrder';

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
            <PreOrder/>
        </ParallaxProvider>
    )
}

export default BundlePage;
