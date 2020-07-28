import React from 'react';
import './index.scss';

import IncludedItem from './IncludedItem';

const BundleIncluded = ({items, bgImg}) => {
    return (
        <div className="bundle-included" style={{
            backgroundImage: `url('${bgImg}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        }}>
            <h1 className="bundle-included__heading">Included in the bundle</h1>
            {items.map((item, i) => {
                return <IncludedItem
                    name={item.name}
                    description={item.description}
                    img={item.img}
                    specialEffect={item.specialEffect}
                    type={item.type}
                    subheader={item.subheader}
                    isLastChild={i === items.length - 1}
                />
            })}
            <div className="bundle-included__dash"/>
        </div>
    );
};

export default BundleIncluded;
