import React from 'react';
import './index.scss';
import farion from '../../../../assets/bundle-page/fario-grandmaster.jpg';
import HeroType from '../HeroType';

import carax1 from '../../../../assets/bundle-page/defensive-chainmail-min.png';
import carax2 from '../../../../assets/bundle-page/support-chalice-min.png';
import carax3 from '../../../../assets/bundle-page/vanguard-lance-min.png';

import farion1 from '../../../../assets/bundle-page/defensive-shield-min.png';
import farion2 from '../../../../assets/bundle-page/offensive-hammer-min.png';
import grandmaster from '../../../../assets/bundle-page/grandmaster-hero.svg';

const BundleDetails = () => {
    return (
        <div className="bundle-details">
            <div className="bundle-details__image">
                <img src={farion}/>
            </div>
            <div className="bundle-details__info">
                <h1 className="bundle-details__info__heading">Farion</h1>
                <div className="bundle-details__info__type">
                    <h2 className="bundle-details__info__type__subheading">The crystal shield</h2>
                    <HeroType
                        type="Grandmaster hero"
                    />
                </div>
                <p className="bundle-details__info__text">
                    Using his trusty Hammer and Shield, Farion will thin the enemy ranks and will hold them back without
                    breaking a sweat.
                </p>
                <div className="bundle-details__info__items">
                    <p className="bundle-details__info__type__subheading">
                        Included in the bundle
                    </p>
                    <div className="bundle-details__info__items__images">
                        <img src={carax1} alt=""/>
                        <img src={carax2} alt=""/>
                        <img src={carax3} alt=""/>
                        <img src={farion1} alt=""/>
                        <img src={farion2} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BundleDetails;
