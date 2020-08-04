import React, {useEffect} from 'react';
import './index.scss';

import IncludedItem from './IncludedItem';
import {useSelector} from 'react-redux';
import {getBundleById} from '../../reducers/purchase';

const BundleIncluded = ({id}) => {
    const bundle = useSelector(state => getBundleById(state, id));
    return (
        <div className="bundle-included" style={{
            backgroundImage: `url('${bundle.bgImg}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        }}>
            <h1 className="bundle-included__heading">Included in the bundle</h1>
            {bundle.bundleIncluded.map((item, i) => {
                return <IncludedItem
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    img={item.img}
                    specialEffect={item.specialEffect}
                    type={item.type}
                    subheader={item.subheader}
                    isLastChild={i === bundle.items.length - 1}
                />
            })}
            <div className="bundle-included__dash"/>
        </div>
    );
};

export default BundleIncluded;
