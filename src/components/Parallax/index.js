import React from 'react';
import { useHistory } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import Button from '../Button';
import './index.scss';

import far from '../../assets/images/far-view.png';
import near from '../../assets/images/near-view.png';
import moon from '../../assets/images/moon.png';
import logo from '../../assets/images/logo-planet.png';
import sky from '../../assets/images/sky.jpg';


const Parallax = () => {
  const history = useHistory();

  return (
    <ParallaxBanner
      className="parallax__start"
      layers={[
        {
          image: sky,
          amount: 0.8,
          props: { style: { top: '-55px', bottom: '0', zIndex: 2, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', overflow: 'hidden' } }

        },
        {
          image: far,
          amount: 0.3,
          props: { style: { bottom: '0', top: '-3%', zIndex: 2 } }//12

        },
        {
          image: moon,
          amount: 0.45,
          props: { style: { top: '11%', zIndex: 3, width: '400px', height: '400px', right: '23%', left: 'initial' } }
        },
        {
          image: near,
          amount: 0,
          props: { style: { bottom: '-50%', top: '30%', zIndex: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' } }
        },
      ]}
      style={{
        height: '100vh',
      }}
    >
      <div className="welcome">
        <img className="welcome__logo" src={logo} alt="logo with planet" />
        <a onClick={() => history.push('/createaccount')}><Button classPosition="welcome__button--position" text="play now for free" /></a>
        <div className="welcome__border">
          <div className="welcome__inside">
            <span>soft beta coming soon</span>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default Parallax;