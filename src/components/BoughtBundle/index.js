import React from 'react';
import './index.scss';
import melighar from '../../assets/bundle-page/melighar-grandmaster.jpg';
import melighar1 from '../../assets/bundle-page/offensive-staff-min.png';
import melighar2 from '../../assets/bundle-page/crystal-helm-min.png';
import melighar3 from '../../assets/bundle-page/lingering-hope-min.png';
import BundleItem from '../PreOrder/Bundles/BundleItem';
import {Link} from 'react-router-dom';

const BoughtBundle = () => {
    return (
        <div className="bought-bundle">
            <h1 className="heading">Thank you for your support!</h1>
            <p className="bought-bundle__text">All items will be available in your game inventory shortly.
                Estimated delivery of the hero system <span className="bought-bundle__text--bold">01 | 11 | 2020</span></p>
            <BundleItem
                heroName="Melighar"
                heroImage={melighar}
                items={[melighar1, melighar2, melighar3]}
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
