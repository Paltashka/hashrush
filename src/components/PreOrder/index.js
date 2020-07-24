import React from 'react';
import './index.scss';
import FounderBundles from './FounderBundles';
import Bundles from './Bundles';

const PreOrder = ({isFounderBundles}) => {
    return (
        <div className="pre-order">
            <div className="pre-order_title">
                <h1 className="heading">Pre-order your hero now!</h1>
                {
                    isFounderBundles ? (
                        <>
                            <p className="pre-order__text">Hero founder bundles:</p>
                            <FounderBundles/>
                        </>
                    ) : <></>
                }
                <Bundles/>
            </div>
        </div>
    );
};

export default PreOrder;