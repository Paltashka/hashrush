import React from 'react';
import './index.scss';
import brownUrsara from '../../../../assets/bundle-page/brown-ursara-min.png';

const BundleItem = ({heroName, heroImage, items, price}) => {
    return (
        <div className="bundles-item">
            <div className="bundles-item__heading">
                <span>{heroName}</span>
            </div>
            <div className="bundles-item__images">
                <img className="bundles-item__images__hero" src={heroImage} alt={heroName}/>
                <div className="bundles-item__images__items">
                    {items.map(item => {
                        return <img src={item}/>
                    })}
                    <img className="bundles-item__images__items__fourth" src={brownUrsara} alt="brown ursara"/>
                </div>
            </div>
            <div className="bundles-item__btn">
                <button className="bundles-item__btn">
                    <span>{price}</span>
                    <div className="bundles-item__btn__dash">
                        <div className="bundles-item__btn__dash--dark"/>
                        <div className="bundles-item__btn__dash--light"/>
                    </div>
                    <span>Explore</span>
                </button>
            </div>
        </div>
    );
};

export default BundleItem;
