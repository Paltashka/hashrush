import React from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
import brownUrsara from '../../assets/bundle-page/brown-ursara-min.png';

const PurchaseThanksModal = ({heroImage, images}) => {
    return (
        <div className="thanks-modal">
            <div className="thanks-modal__content">
                <h1 className="thanks-modal__heading">Thank you for your support!</h1>
                <p className="thanks-modal__text">All items will be available in your game inventory shortly.
                    Estimated delivery of the hero system <span className="thanks-modal__text--bold">01 | 11 | 2020</span></p>
                <div className="thanks-modal__images">
                    <img className="thanks-modal__images__hero" src={heroImage} />
                    <div className="thanks-modal__images__items">
                        {images.map(item => {
                            return <img src={item}/>
                        })}
                        <img src={brownUrsara} alt="brown ursara"/>
                    </div>
                </div>
                <div className="bought-bundle__button__wrapper">
                    <div className="header__register button__border">
                        <Link to="/"><span className="button">back to home page</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseThanksModal;
