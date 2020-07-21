import React from 'react';
import './index.scss';

const FounderBundles = () => {
    return (
        <div className="founder-list">
            <div className="founder-item">
                <h1 className="founder-item__header">
                    1x Grandmaster hero
                </h1>
                <p className="founder-item__text">
                    Grandmaster Hero card of your choice
                </p>
            </div>
            <div className="founder-item">
                <h1 className="founder-item__header">
                    3x Heroic gear
                </h1>
                <p className="founder-item__text">
                    Unique grandmaster heroic gear to support your hero
                </p>
            </div>
            <div className="founder-item">
                <h1 className="founder-item__header">
                    1x  Worker skin
                </h1>
                <p className="founder-item__text">
                    Limited edition worker skin. Only available <span>NOW!</span>
                </p>
            </div>
            <div className="founder-item">
                <h1 className="founder-item__header">
                    Leave your mark!
                </h1>
                <p className="founder-item__text">
                    Have your username on the “Thank you for supporting the Hero System!” banner
                </p>
            </div>
        </div>
    );
};

export default FounderBundles;
