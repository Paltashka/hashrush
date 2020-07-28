import React from 'react';
import './index.scss';
import farion from '../../../../assets/bundle-page/fario-grandmaster.jpg';
import HeroType from '../HeroType';

import carax1 from '../../../../assets/bundle-page/defensive-chainmail-min.png';
import carax2 from '../../../../assets/bundle-page/support-chalice-min.png';
import carax3 from '../../../../assets/bundle-page/vanguard-lance-min.png';

import farion1 from '../../../../assets/bundle-page/defensive-shield-min.png';
import farion2 from '../../../../assets/bundle-page/offensive-hammer-min.png';

const BundleDetails = ({heroName, heroImg, heroType, heroDetailText, items}) => {
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
                        {items.map(item => {
                            return <img src={item}/>
                        })}
                        {/*<img src={carax1} alt=""/>*/}
                        {/*<img src={carax2} alt=""/>*/}
                        {/*<img src={carax3} alt=""/>*/}
                        {/*<img src={farion1} alt=""/>*/}
                        {/*<img src={farion2} alt=""/>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BundleDetails;
