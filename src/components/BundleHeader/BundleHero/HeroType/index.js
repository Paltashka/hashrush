import React from 'react';
import './index.scss'

const HeroType = ({type}) => {
    return (
        <div className="hero-type">
            <p className="hero-type__text">{type}</p>
        </div>
    );
};

export default HeroType;
