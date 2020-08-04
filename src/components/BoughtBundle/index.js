import React from 'react';
import './index.scss';
import BundleItem from '../PreOrder/Bundles/BundleItem';
import {Link} from 'react-router-dom';

const BoughtBundle = ({id, heroName, image, items}) => {
    return (
        <div className="bought-bundle">
            <h1 className="heading">Thank you for your support!</h1>
            <p className="bought-bundle__text">All items will be available in your game inventory shortly.
                Estimated delivery of the hero system <span className="bought-bundle__text--bold">01 | 11 | 2020</span></p>
            <BundleItem
                id={id}
                heroName={heroName}
                image={image}
                items={items}
            />
            <div className="bought-bundle__button__wrapper">
                <div className="header__register button__border">
                    <Link to="/"><span className="button">back to home page</span></Link>
                </div>
            </div>
            <div className="bought-bundle__dash"/>
        </div>
    );
};

export default BoughtBundle;
