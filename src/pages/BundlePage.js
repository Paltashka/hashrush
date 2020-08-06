import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import BundleHeader from '../components/BundleHeader';
import BundleIncluded from '../components/BundleIncluded';
import OtherBundles from '../components/OtherBundles';
import Footer from '../components/Footer';
import otherBundleBG from '../assets/bundle-page/3-heroes-bw.png';
import PurchaseMobile from '../components/BundleHeader/Purchase/PurchaseMobile';

const BundlePage = ({match}) => {
    const id = Number.parseInt(match.params.id);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [handleResize, screenWidth]);

    return (
        <>
            <Header isLogin={true}/>
            <BundleHeader id={id}/>
            <BundleIncluded id={id}/>
            <OtherBundles id={id} bgImg={otherBundleBG}/>
            <Footer/>
            {screenWidth <= 1468 && (
                <PurchaseMobile id={id}/>
            )}
        </>
    );
};

export default BundlePage;
