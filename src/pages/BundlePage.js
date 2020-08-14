import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import BundleHeader from '../components/BundleHeader';
import BundleIncluded from '../components/BundleIncluded';
import OtherBundles from '../components/OtherBundles';
import Footer from '../components/Footer';
import otherBundleBG from '../assets/bundle-page/3-heroes-bw.png';
import PurchaseMobile from '../components/BundleHeader/Purchase/PurchaseMobile';
import {useSelector} from 'react-redux';
import {getBundleById} from '../reducers/purchase';
import Sticky from 'react-stickynode';

const BundlePage = ({match}) => {
    const id = Number.parseInt(match.params.id);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    const bundle = useSelector(state => getBundleById(state, id));

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [handleResize, screenWidth]);

    return (
        <>
            <Header isLogin={true}/>
            <div style={screenWidth > 375 ? {
                backgroundImage: `url('${bundle.bgImg}'), linear-gradient(to bottom, #06121d, #02080e 97%)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% auto',
            } : {

                background: 'linear-gradient(to bottom, #06121d, #02080e 97%)',
            }}>
                <BundleHeader id={id}/>
                <BundleIncluded id={id}/>
            </div>
            <OtherBundles id={id} bgImg={otherBundleBG}/>
            <Footer/>
            {screenWidth <= 1468 && (
                <PurchaseMobile id={id}/>
            )}
        </>
    );
};

export default BundlePage;
