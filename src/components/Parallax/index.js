import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import Button from '../Button';
import './index.scss';

import far from '../../assets/images/far-view.png';
import near from '../../assets/images/near-view.png';
import moon from '../../assets/images/moon.png';
import logo from '../../assets/images/logo-planet.png';

const Parallax = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: far,
          amount: 0.5,
          props: { style: { bottom: '30%', top: '17%', zIndex: 2 }}
        },
        {
          image: moon,
          amount: 0.7,
          props: { style: { top: '9%', zIndex: 3, width: '400px', height: '400px', right: '20%', left: 'initial' }}
        },
        {
          image: near,
          amount: 0,
          props: { style: { bottom: '-30%', top: '20%', zIndex: 4 }}
        },
      ]}
      style={{
          height: '850px',
      }}
    >
      <div className="welcome">
        <img className="welcome__logo" src={logo} alt="logo with planet" />
        
        <Button classPosition="welcome__button--position" text="play now"/>
      </div>
    </ParallaxBanner>
  );
};

export default Parallax;