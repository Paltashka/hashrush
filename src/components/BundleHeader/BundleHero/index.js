import React from 'react';
import './index.scss';
import BundleDetails from './BundleDetails';

const BundleHero = ({id, heroName, heroText, heroImg, heroType, heroDetailText, items, sharedItems}) => {
    const allItems = [...items, ...sharedItems];
    return (
        <div className="bundle-hero">
            <h1 className="heading">{heroName} founder bundle</h1>
            <p className="bundle-hero__text">
                {heroText}
            </p>
            <BundleDetails id={id} heroName={heroName} heroImg={heroImg} heroType={heroType} heroDetailText={heroDetailText} items={allItems}/>
        </div>
    );
};

export default BundleHero;
