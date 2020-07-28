import React from 'react';
import './index.scss';
import Purchase from './Purchase';
import BundleHero from './BundleHero';

const BundleHeader = ({heroName, heroText, heroImg, heroType, heroDetailText, items, bgImg}) => {
    return (
        <div className="bundle-header" style={{
            backgroundImage: `url('${bgImg}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        }}>
            <BundleHero heroName={heroName} heroText={heroText} heroImg={heroImg} heroType={heroType}
                        heroDetailText={heroDetailText} items={items}/>
            <Purchase heroName={heroName} heroImg={heroImg} />
        </div>
    );
};

export default BundleHeader;
