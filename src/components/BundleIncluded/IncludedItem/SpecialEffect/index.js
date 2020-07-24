import React from 'react';
import './index.scss';

const SpecialEffect = ({text}) => {
    return (
        <div className="special-effect">
            <p className="special-effect__heading">Special Effect</p>
            <p className="special-effect__text">{text}</p>
        </div>
    )
}

export default SpecialEffect;
