import React from 'react';
import './index.scss';
import BundleDetails from './BundleDetails';

const BundleHero = () => {
    return (
        <div className="bundle-hero">
            <h1 className="heading">Farion founder bundle</h1>
            <p className="bundle-hero__text">
                Shield your allies with Farion and his unique Hero Items, along with a limited edition skin for your Ernack workers.
            </p>
            <BundleDetails/>
        </div>
    );
};

export default BundleHero;
