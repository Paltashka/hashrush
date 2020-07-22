import React from 'react';
import './index.scss'
import Button from '../../PreOrder/Bundles/BundeItem/Button';

const Bundle = ({heroName, heroType, description, image, isReversed}) => {
    return (
        <div className="choose-hero-bundle" style={isReversed ? {flexDirection: 'row-reverse'} : {}}>
            <div className="choose-hero-bundle__information"
                 style={isReversed ? {marginLeft: '90px'} : {marginRight: '90px'}}>
                <h1 className="choose-hero-bundle__information__heading">{heroName}</h1>
                <h2 className="choose-hero-bundle__information__type">{heroType}</h2>
                <p className="choose-hero-bundle__information__text">{description}</p>
                <div className="choose-hero-bundle__information__buttons">
                    <Button price="$20"/>
                    <p className="choose-hero-bundle__information__buttons__read-more">Read more</p>
                </div>
            </div>
            <div className="hero-image">
                <img src={image}/>
            </div>
        </div>
    );
};

export default Bundle;
