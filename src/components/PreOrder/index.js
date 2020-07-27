import React from 'react';
import './index.scss';
import FounderBundles from './FounderBundles';
import Bundles from './Bundles';

const PreOrder = ({isFounderBundles}) => {
    return (
        <div className="pre-order">
            <div className="pre-order_title">
                <h1 className="heading">SUPPORT HASH RUSH</h1>
                {
                    isFounderBundles && (
                        <>
                            <div className="pre-order__text__wrapper">
                                <p className="pre-order__text">Purchase hero founder bundle and support Hash Rush!
                                    Estimated delivery of the hero system <span className="pre-order__text--bold">01 | 11 | 2020</span>
                                </p>
                            </div>
                            <FounderBundles/>
                        </>
                    )
                }
                <Bundles/>
            </div>
        </div>
    );
};

export default PreOrder;