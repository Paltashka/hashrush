import React, { useRef, useState, useEffect } from 'react';
import SliderItem from './SliderItem';
import Slider from "react-slick";
import SliderArrow from './SliderArrow';

import './index.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import video from '../../assets/video/hash-rush trailer.mp4';
import play from '../../assets/images/play.svg';

import prevideo from '../../assets/forms/prevideo.jpg';

import preview_A from '../../assets/slider/preview-A.png';
import preview_B from '../../assets/slider/preview-B.png';
import preview_C from '../../assets/slider/preview-C.png';
import preview_D from '../../assets/slider/preview-D.png';
import preview_E from '../../assets/slider/preview-E.png';
import preview_F from '../../assets/slider/preview-F.png';
import preview_G from '../../assets/slider/preview-G.png';
import preview_H from '../../assets/slider/preview-H.png';
import a from '../../assets/slider/a.jpg';
import b from '../../assets/slider/b.jpg';
import c from '../../assets/slider/c.jpg';
import d from '../../assets/slider/d.jpg';
import e from '../../assets/slider/e.jpg';
import f from '../../assets/slider/f.jpg';
import g from '../../assets/slider/g.jpg';
import h from '../../assets/slider/h.jpg';

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <SliderArrow direction="right" />,
  prevArrow: <SliderArrow direction="left" />,
};

const About = () => {
  const [isVideoPlay, setIsVideoPlay] = useState(false);
  const [times, setTimes] = useState(0);
  const [enlarge, setEnlarge] = useState(null);
  const videoRef = useRef();
  const [screnWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => setScreenWidth(window.innerWidth);
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [handleResize, screnWidth])

  if (screnWidth < 415) {
    settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: false,
      nextArrow: <SliderArrow direction="right" />,
      prevArrow: <SliderArrow direction="left" />,
    }
  }
  const toggleVideo = () => {
    setIsVideoPlay(!isVideoPlay);
    setTimes(times + 1);

    !isVideoPlay ? videoRef.current.play() : videoRef.current.pause();
  };

  return (
    <div className="about">
      <div className="about__content">
        <h1 className="heading about__heading">about hash rush</h1>
        <p className="about__text">
          An online sci-fi/fantasy RTS set in the fictional Hermeian galaxy, Hash Rush sees players build,
          fight and trade their way to victory as they grow and manage their small mining colony, battle monsters, and trade valuable items and resources.
          Tasked with accumulating the much sought-after Crypto Crystals on their planet, successful players will earn themselves tokenized blockchain rewards as well
          as in-game items, bonuses and other prizes.
        </p>
      </div>

      <div onClick={toggleVideo} className="about__video--wrapper">
        {!isVideoPlay && <img className="about__video-play" src={play} alt="play" />}
        {!isVideoPlay && times < 1 && <img className="about__video-pre" src={prevideo} alt="pre video" />}
        <video ref={videoRef} className="about__video">
          <source src={video} type="video/mp4" />
        </video> 
      </div>

      {enlarge && (
        <div className="about__enlarge" onClick={() => setEnlarge(null)}>
          <img src={enlarge} className="slide__img--large" />
        </div>
      )}

      <Slider {...settings}>
        <SliderItem imgUrl={preview_A} large={a} enlarge={setEnlarge} />
        <SliderItem imgUrl={preview_B} large={b} enlarge={setEnlarge} />
        <SliderItem imgUrl={preview_C} large={c} enlarge={setEnlarge} />
        <SliderItem imgUrl={preview_D} large={d} enlarge={setEnlarge} />
        <SliderItem imgUrl={preview_E} large={e} enlarge={setEnlarge} />
        <SliderItem imgUrl={preview_F} large={f} enlarge={setEnlarge} />
        <SliderItem imgUrl={preview_G} large={g} enlarge={setEnlarge} />
        <SliderItem imgUrl={preview_H} large={h} enlarge={setEnlarge} />
      </Slider>

    </div>
  );
};

export default About;