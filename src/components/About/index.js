import React, { useRef, useState } from 'react';
import SliderItem from './SliderItem';
import Slider from "react-slick";
import SliderArrow from './SliderArrow';

import './index.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import video from '../../assets/video/hash-rush trailer.mp4';
import play from '../../assets/images/play.svg';
import img from '../../assets/slider/img.png';


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <SliderArrow direction="left" />,
  prevArrow: <SliderArrow direction="right" />
};

const About = () => {
  const [isVideoPlay, setIsVideoPlay] = useState(false);
  const videoRef = useRef();

  const toggleVideo = () => {
    setIsVideoPlay(!isVideoPlay);

    !isVideoPlay ? videoRef.current.play() : videoRef.current.pause();
  };

  return (
    <div className="about">
      <div className="about__shadow"></div>
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
        <video ref={videoRef} className="about__video">
          <source src={video} type="video/mp4" />
        </video> 
      </div>

      <Slider {...settings}>
        <SliderItem imgUrl={img} />
        <SliderItem imgUrl={img} />
        <SliderItem imgUrl={img} />
      </Slider>

    </div>
  );
};

export default About;