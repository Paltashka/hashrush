import React from 'react';
import './index.scss';
import HeroType from '../../BundleHeader/BundleHero/HeroType';
import SpecialEffect from './SpecialEffect';

const IncludedItem = ({anchorId, name, img, description, type, specialEffect, isLastChild, subheader}) => {
    return (
        <>
            <div className="bundle-included__item" id={anchorId}>
                <img src={img} className="bundle-included__item__img"/>
                <div className="bundle-included__item__data">
                    <div className="bundle-included__item__data__header">
                        <h1 className="bundle-included__item__data__heading">{name}</h1>
                        {type && <HeroType type={type}/>}
                    </div>
                    {subheader && (
                        <p className="bundle-included__item__data__subheader">{subheader}</p>
                    )}
                    <p className="bundle-included__item__data__text">{description}</p>
                    {specialEffect && (
                        <SpecialEffect text={specialEffect}/>
                    )}
                </div>
            </div>
            {!isLastChild && <div className="bundle-included__item__dash"/>}
        </>
    );
};

export default IncludedItem;
