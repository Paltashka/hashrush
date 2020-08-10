import React from 'react';
import './index.scss';
import FounderBundles from './FounderBundles';
import Bundles from './Bundles';

const PreOrder = ({headerText, subtext, date, isFounderBundles, bgColor}) => {
    return (
        <div className="pre-order" style={{
            background: bgColor,
        }}>
            <div className="pre-order_title">
                <h1 className="heading">{headerText}</h1>
                <div className="pre-order__text__wrapper">
                    <p className="pre-order__text">{subtext}<span className="pre-order__text--bold">{date}</span>
                    </p>
                </div>
                {
                    isFounderBundles && (
                        <FounderBundles/>
                    )
                }
                <Bundles/>
            </div>
        </div>
    );
};

export default PreOrder;