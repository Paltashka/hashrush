import React, {useEffect, useState} from 'react';
import './index.scss'
import Button from '../../PreOrder/Bundles/BundeItem/Button';

const Bundle = ({heroName, heroType, description, image, isReversed}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [handleResize, screenWidth]);

    return (
        <div className="choose-hero-bundle" style={isReversed && screenWidth > 1144 ? {flexDirection: 'row-reverse'} : {}}>
            <div className={"choose-hero-bundle__information " + isReversed && 'choose-hero-bundle--reversed'}
                 >
                <h1 className="choose-hero-bundle__information__heading">{heroName}</h1>
                <h2 className="choose-hero-bundle__information__type">{heroType}</h2>
                <p className="choose-hero-bundle__information__text">{description}</p>
                <div className="choose-hero-bundle__information__buttons">
                    <Button price="$20"/>
                    <p className="choose-hero-bundle__information__buttons__read-more">Read more</p>
                </div>
            </div>
            <div className="choose-hero-bundle__hero-image">
                <img src={image}/>
            </div>
        </div>
    );
};

export default Bundle;
