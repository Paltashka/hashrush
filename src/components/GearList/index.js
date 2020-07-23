import React from 'react';
import './index.scss';
import GearItem from './GearItem';
import farion2 from '../../assets/bundle-page/offensive-hammer-min.png';
import melighar1 from '../../assets/bundle-page/offensive-staff-min.png';
import carax3 from '../../assets/bundle-page/vanguard-lance-min.png';

import farion1 from '../../assets/bundle-page/defensive-shield-min.png';
import carax1 from '../../assets/bundle-page/defensive-chainmail-min.png';
import melighar2 from '../../assets/bundle-page/crystal-helm-min.png';

import carax2 from '../../assets/bundle-page/support-chalice-min.png';
import melighar3 from '../../assets/bundle-page/lingering-hope-min.png';
import farion3 from '../../assets/bundle-page/support-stew-min.png';

const GearList = () => {
    return (
        <div className="gear-list">
            <div className="gear-list-title">
                <h1 className="heading">Equip your hero with gear!</h1>
                <p className="choose-hero__title__text">
                    Add up to three items to each of your hero to make them more powerful.
                </p>
            </div>
            <div className="gear-list__content">
                <GearItem
                    type="Offensive"
                    images={[farion2, melighar1, carax3]}
                />
                <GearItem
                    type="Defensive"
                    images={[farion1, carax1, melighar2]}
                />
                <GearItem
                    type="Support"
                    images={[carax2, melighar3, farion3]}
                />
            </div>
        </div>
    );
};

export default GearList;
