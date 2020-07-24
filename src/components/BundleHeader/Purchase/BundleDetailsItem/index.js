import React from 'react';
import './index.scss';
import tick from '../../../../assets/bundle-page/tick_gold.svg';

const BundleDetailsItem = ({name}) => {
    return (
        <div className="purchase__bundle-details">
            <img src={tick} alt=""/>
            <p className="purchase__bundle-details__text">{name}</p>
        </div>
    );
};

export default BundleDetailsItem;