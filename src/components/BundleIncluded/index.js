import React from 'react';
import './index.scss';

import carax1 from '../../assets/bundle-page/defensive-chainmail-min.png';
import carax2 from '../../assets/bundle-page/support-chalice-min.png';
import carax3 from '../../assets/bundle-page/vanguard-lance-min.png';

import farion1 from '../../assets/bundle-page/defensive-shield-min.png';
import farion2 from '../../assets/bundle-page/offensive-hammer-min.png';
import IncludedItem from './IncludedItem';

const BundleIncluded = () => {
    return (
        <div className="bundle-included">
            <h1 className="bundle-included__heading">Included in the bundle</h1>
            <IncludedItem
                name="Crystal shield"
                description="Issued to all Trinell Citadel Guard members, believed to be near indestructable. "
                img={carax1}
                specialEffect="Increases the Heros Slashing Damage Resistance by 10%"
            />
            <IncludedItem
                name="Crystal shield"
                description="Issued to all Trinell Citadel Guard members, believed to be near indestructable. "
                img={carax1}
                specialEffect="Increases the Heros Slashing Damage Resistance by 10%"
            />
            <IncludedItem
                name="Crystal shield"
                description="Issued to all Trinell Citadel Guard members, believed to be near indestructable. "
                img={carax1}
                specialEffect="Increases the Heros Slashing Damage Resistance by 10%"
            />
            <div className="bundle-included__dash"/>
        </div>
    );
};

export default BundleIncluded;
