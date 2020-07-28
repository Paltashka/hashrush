import React from 'react';
import './index.scss';
import BundleItem from '../PreOrder/Bundles/BundleItem';

const OtherBundles = ({bgImg, otherBundles}) => {
    return (
        <div className="other-bundles" style={bgImg && {backgroundImage: `url('${bgImg}'`}}>
            <h1 className="heading">Explore other bundles</h1>
            <div className="other-bundles__items">
                {otherBundles.map(bundle => {
                    return <BundleItem
                        heroName={bundle.name}
                        heroImage={bundle.img}
                        items={bundle.items}
                        price="$20"
                    />
                })}
            </div>
        </div>
    );
};

export default OtherBundles;
