import React, {useState} from 'react';
import {ParallaxProvider} from 'react-scroll-parallax';
import Header from '../components/Header';
import Parallax from '../components/Parallax';
import News from '../components/News';
import Community from '../components/Community';
import About from '../components/About';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PreOrder from '../components/PreOrder';

const HomePage = () => {
    const [isCookiesAgreed, setIsCookiesAgreed] = useState(false);
    const [isReadyFirstPart, setReadyFirstPart] = useState(false);
    const [isReadySecondPart, setReadySecondPart] = useState(false);

    setTimeout(() => {
        setReadyFirstPart(true);
    }, 5000);

    setTimeout(() => {
        setReadySecondPart(true);
    }, 7000);

    return (
        <ParallaxProvider>
            <Header isLogin={false}/>
            <Parallax/>
            {isReadyFirstPart === true && (
                <div>
                    <div className='pre-order__wrapper'>
                        <PreOrder
                            headerText='SUPPORT HASH RUSH'
                            subtext='Estimated delivery of the hero system'
                            date='01 | 11 | 2020'
                            isFounderBundles={true}
                        />
                    </div>
                    <News/>
                    <Community/>
                </div>
            )}
            {isReadySecondPart === true && (
                <div>
                    <About/>
                    <Questions/>
                </div>
            )}
            <Footer/>
            {!isCookiesAgreed && <Cookies setIsCookiesAgreed={setIsCookiesAgreed}/>}
        </ParallaxProvider>
    );
};

export default HomePage;