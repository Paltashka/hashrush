import React, {useEffect, useState} from 'react';
import './index.scss'
import Button from '../../PreOrder/Bundles/BundleItem/Button';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getBundleById} from '../../../reducers/purchase';

const Bundle = ({id, isReversed}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    const bundle = useSelector(state => getBundleById(state, id));

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [handleResize, screenWidth]);

    return (
        <div className="choose-hero-bundle"
             style={isReversed && screenWidth > 1144 ? {flexDirection: 'row-reverse'} : {}}>
            <div className={'choose-hero-bundle__information ' + isReversed && 'choose-hero-bundle--reversed'}
            >
                <h1 className="choose-hero-bundle__information__heading">{bundle.name}</h1>
                <h2 className="choose-hero-bundle__information__type">{bundle.type}</h2>
                <p className="choose-hero-bundle__information__text">{bundle.text}</p>
                <div className="choose-hero-bundle__information__buttons">
                    <Link to={`/bundle/${id}`}><Button price="$20" /></Link>
                    <p className="choose-hero-bundle__information__buttons__read-more">Read more</p>
                </div>
            </div>
            <div className="choose-hero-bundle__hero-image">
                <img src={bundle.articleImg}/>
            </div>
        </div>
    );
};

export default Bundle;
