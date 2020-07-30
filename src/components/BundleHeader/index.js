import React, {useEffect, useState} from 'react';
import './index.scss';
import Purchase from './Purchase';
import BundleHero from './BundleHero';
import Sticky from 'react-stickynode';

const BundleHeader = ({heroName, heroText, heroImg, heroType, heroDetailText, items, bgImg, price}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [handleResize, screenWidth]);

    return (
        <div className="bundle-header" style={{
            backgroundImage: `url('${bgImg}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        }}>
            <BundleHero heroName={heroName} heroText={heroText} heroImg={heroImg} heroType={heroType}
                        heroDetailText={heroDetailText} items={items}/>
            <div className="purchase__wrapper">
                {screenWidth > 1442 ? (
                    <Sticky enabled={true} top='.header' bottomBoundary={2800}>
                        <Purchase heroName={heroName} heroImg={heroImg} price={price}/>
                    </Sticky>
                ) : (
                    <Purchase heroName={heroName} heroImg={heroImg} price={price}/>
                )}
            </div>
        </div>
    );
};

export default BundleHeader;
