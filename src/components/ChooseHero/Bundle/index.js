import React, {useEffect, useRef, useState} from 'react';
import './index.scss'
import Button from '../../PreOrder/Bundles/BundleItem/Button';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getBundleById} from '../../../reducers/purchase';
import play from '../../../assets/images/play.svg';
import prevideo from '../../../assets/forms/prevideo.jpg';
import video from '../../../assets/video/hash-rush trailer.mp4';

const Bundle = ({id, articleText, isReversed}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isVideoPlay, setIsVideoPlay] = useState(false);
    const [times, setTimes] = useState(0);
    const videoRef = useRef();
    const handleResize = () => setScreenWidth(window.innerWidth);
    const bundle = useSelector(state => getBundleById(state, id));

    const toggleVideo = () => {
        setIsVideoPlay(!isVideoPlay);
        setTimes(times + 1);

        !isVideoPlay ? videoRef.current.play() : videoRef.current.pause();
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [handleResize, screenWidth]);

    return (
        <div className="choose-hero-bundle"
             style={isReversed && screenWidth > 1144 ? {flexDirection: 'row-reverse'} : {}}>
            <div className={!isReversed ? 'choose-hero-bundle__information' : 'choose-hero-bundle__information--reversed'}>
                <h1 className="choose-hero-bundle__information__heading">{bundle.name}</h1>
                <h2 className="choose-hero-bundle__information__type">{bundle.type}</h2>
                <p className="choose-hero-bundle__information__text">{articleText}</p>
                <div className="choose-hero-bundle__information__buttons">
                    <Link to={`/bundle/${id}`}><Button price="$20" /></Link>
                    <p className="choose-hero-bundle__information__buttons__read-more">Read more</p>
                </div>
            </div>
            <div onClick={toggleVideo} className="choose-hero-bundle__hero-image">
                {!isVideoPlay && <img className="about__video-play" style={{ width: '200px', position: 'absolute', zIndex: '2' }} src={play} alt="play" />}
                {!isVideoPlay && times < 1 && <img style={{ position: 'absolute' }} src={bundle.articleImg} alt="pre video" />}
                {/*<img src={bundle.articleImg}/>*/}
                <video ref={videoRef} className="choose-hero-bundle__hero-image__video">
                    <source src={bundle.video} type="video/mp4" />
                </video>
            </div>
            {/*<div className="choose-hero-bundle__hero-image">*/}
            {/*    <img src={bundle.articleImg}/>*/}
            {/*</div>*/}
        </div>
    );
};

export default Bundle;
