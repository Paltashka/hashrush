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
    <Parallax y={[40, -5]} styleInner={{transform: 'translate3d(0%, 39.5825%, 0px)'}}>
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

      <div className="community__about-pos">
        <h1 className="community__about heading">About Hash Rush</h1>
        <p className="about__text">
            An online sci-fi/fantasy RTS set in the fictional Hermeian galaxy, Hash Rush sees players build,
            fight and trade their way to victory as they grow and manage their small mining colony, battle monsters, and trade valuable items and resources.
            Tasked with accumulating the much sought-after Crypto Crystals on their planet, successful players will earn themselves tokenized blockchain rewards as well
            as in-game items, bonuses and other prizes.
          </p>
      </div>
    </div>
  )
};

export default Community;



