import React from 'react';
import './index.scss'
import melighar from '../../../assets/bundle-page/melighar-grandmaster.jpg';
import carax from '../../../assets/bundle-page/carax-grandmaster.jpg';
import farion from '../../../assets/bundle-page/fario-grandmaster.jpg';

import melighar1 from '../../../assets/bundle-page/offensive-staff-min.png';
import melighar2 from '../../../assets/bundle-page/crystal-helm-min.png';
import melighar3 from '../../../assets/bundle-page/lingering-hope-min.png';

import carax1 from '../../../assets/bundle-page/defensive-chainmail-min.png';
import carax2 from '../../../assets/bundle-page/support-chalice-min.png';
import carax3 from '../../../assets/bundle-page/vanguard-lance-min.png';

import farion1 from '../../../assets/bundle-page/defensive-shield-min.png';
import farion2 from '../../../assets/bundle-page/offensive-hammer-min.png';
import farion3 from '../../../assets/bundle-page/support-stew-min.png';

import BundleItem from './BundleItem';

const Bundles = () => {
    return (
        <div className="bundles-list">
            <BundleItem
                id={1}
                heroName="Melighar"
                image={melighar}
                items={[melighar1, melighar2, melighar3]}
                price="$20"
            />
            <BundleItem
                id={2}
                heroName="Carax"
                image={carax}
                items={[carax1, carax2, carax3]}
                price="$20"
            />
            <BundleItem
                id={3}
                heroName="Farion"
                image={farion}
                items={[farion1, farion2, farion3]}
                price="$20"
            />
        </div>
    )
}

export default Bundles;
