import React from 'react';
import './index.scss';
import Purchase from './Purchase';
import BundleHero from './BundleHero';

const BundleHeader = () => {
    return (
        <div className="bundle-header">
            <BundleHero/>
            <Purchase/>
        </div>
    );
};

export default BundleHeader;
