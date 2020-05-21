import React from 'react';
import './index.scss';
import ButtonRounded from './ButtonRounded';
import facebook from '../../assets/social-media/facebook.svg';
import tw from '../../assets/social-media/twitter.svg';
import discord from '../../assets/social-media/discord.svg';
import telegram from '../../assets/social-media/tlgrm.svg';

import bg from '../../assets/images/fores.png';

import { Parallax } from 'react-scroll-parallax';

const ParallaxImg = () => {
  return (
    <Parallax y={[40, -5]}>
      <img className="community__bg" src={bg} />
    </Parallax>
  );
};

const Community = () => {
  return (
    <div className="community">
      <ParallaxImg />

      <div className="community__content">
        <h1 className="community__heading heading">join our community</h1>
        <div className="community__buttons">
          <ButtonRounded imgUrl={facebook} alt="face" />
          <ButtonRounded imgUrl={tw} alt="twitt" />
          <ButtonRounded imgUrl={discord} alt="discord" />
          <ButtonRounded imgUrl={telegram} alt="telegram" />
        </div>
      </div>
      <h1 className="community__about heading">About Hash Rush</h1>

    </div>
  )
};

export default Community;



