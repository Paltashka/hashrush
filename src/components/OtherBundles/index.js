import React from 'react';
import './index.scss';
import BundleItem from '../PreOrder/Bundles/BundleItem';
import {useSelector} from 'react-redux';
import {getBundleById} from '../../reducers/purchase';

const OtherBundles = ({id, bgImg}) => {
    const bundle = useSelector(state => getBundleById(state, id));
    return (
        <div className="other-bundles" style={bgImg && {backgroundImage: `url('${bgImg}'), linear-gradient(to bottom, #06121d, #02080e 97%)`}}>
            <h1 className="heading">Explore other bundles</h1>
            <div className="other-bundles__items">
                {bundle.otherBundles.map(bundle => {
                    return <BundleItem
                        id={bundle.id}
                        heroName={bundle.name}
                        image={bundle.img}
                        items={bundle.items}
                        price="$20"
                    />
                })}
            </div>
        </div>
    );
};

export default OtherBundles;
