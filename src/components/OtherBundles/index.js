import React from 'react';
import './index.scss';
import BundleItem from '../PreOrder/Bundles/BundleItem';
import melighar from '../../assets/bundle-page/melighar-grandmaster.jpg';
import melighar1 from '../../assets/bundle-page/offensive-staff-min.png';
import melighar2 from '../../assets/bundle-page/crystal-helm-min.png';
import melighar3 from '../../assets/bundle-page/lingering-hope-min.png';

const OtherBundles = ({bgImg}) => {
    return (
        <div className="other-bundles" style={bgImg && {backgroundImage: `url('${bgImg}'`}}>
            <h1 className="heading">Explore other bundles</h1>
            <div className="other-bundles__items">
                <BundleItem
                    heroName="Melighar"
                    heroImage={melighar}
                    items={[melighar1, melighar2, melighar3]}
                    price="$20"
                />
                <BundleItem
                    heroName="Melighar"
                    heroImage={melighar}
                    items={[melighar1, melighar2, melighar3]}
                    price="$20"
                />
            </div>
        </div>
    );
};

export default OtherBundles;
