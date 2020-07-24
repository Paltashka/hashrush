import React from 'react';
import './index.scss'

const HeroType = ({img}) => {
    return (
        <div className="hero-type">
            <img src={img}/>
        </div>
    );
};

export default HeroType;
