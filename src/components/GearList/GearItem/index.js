import React from 'react';
import './index.scss';

const GearItem = ({type, images}) => {
    return (
        <div className="gear-item">
            {images.map(img => {
                return <img src={img}/>
            })}
            <p className="gear-item__text">{type}</p>
        </div>
    );
};

export default GearItem;
