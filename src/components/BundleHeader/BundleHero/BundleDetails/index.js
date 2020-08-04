import React from 'react';
import './index.scss';
import HeroType from '../HeroType';
import { HashLink as Link } from 'react-router-hash-link';

const BundleDetails = ({id, heroName, heroImg, heroType, heroDetailText, items}) => {
    return (
        <div className="bundle-details">
            <div className="bundle-details__image">
                <img src={heroImg}/>
            </div>
            <div className="bundle-details__info">
                <h1 className="bundle-details__info__heading">{heroName}</h1>
                <div className="bundle-details__info__type">
                    <h2 className="bundle-details__info__type__subheading">{heroType}</h2>
                    <HeroType
                        type="Grandmaster hero"
                    />
                </div>
                <p className="bundle-details__info__text">
                    {heroDetailText}
                </p>
                <div className="bundle-details__info__items">
                    <p className="bundle-details__info__type__subheading">
                        Included in the bundle
                    </p>
                    <div className="bundle-details__info__items__images">
                        {items.map((item, index) => {
                            return <Link to={`#${index}`}><img src={item}/></Link>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BundleDetails;
