import React, {useEffect, useState} from 'react';
import './index.scss';
import Purchase from './Purchase';
import BundleHero from './BundleHero';
import Sticky from 'react-stickynode';
import {useSelector} from 'react-redux';
import {getBundleById} from '../../reducers/purchase';
import PurchaseMobile from './Purchase/PurchaseMobile';

const BundleHeader = ({id}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);

    const bundle = useSelector(state => getBundleById(state, id))

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [handleResize, screenWidth]);

    return (
        <div className="bundle-header" style={{
            // backgroundImage: `url('${bundle.bgImg}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        }}>
            <BundleHero id={id} heroName={bundle.name} heroText={bundle.text} heroImg={bundle.image} heroType={bundle.type}
                        heroDetailText={bundle.detailText} items={bundle.items} sharedItems={bundle.sharedItems}/>
            <div className="purchase__wrapper">
                {screenWidth > 1468 ? (
                    <Sticky enabled={true} top='.header' bottomBoundary={2600}>
                        <Purchase id={id} heroName={bundle.name} heroImg={bundle.image} price={bundle.price}/>
                    </Sticky>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default BundleHeader;
