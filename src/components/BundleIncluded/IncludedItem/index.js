import React from 'react';
import './index.scss';
import HeroType from '../../BundleHeader/BundleHero/HeroType';
import SpecialEffect from './SpecialEffect';

const IncludedItem = ({name, img, description, type, specialEffect}) => {
    return (
        <>
            <div className="bundle-included__item">
                <img src={img} className="bundle-included__item__img"/>
                <div className="bundle-included__item__data">
                    <div className="bundle-included__item__data__header">
                        <h1 className="bundle-included__item__data__heading">{name}</h1>
                        <HeroType img={type}/>
                    </div>
                    <p className="bundle-included__item__data__text">{description}</p>
                    {specialEffect ? (
                        <SpecialEffect text={specialEffect}/>
                    ) : <></>}
                </div>
            </div>
            <div className="bundle-included__item__dash"/>
        </>
    );
};

export default IncludedItem;
