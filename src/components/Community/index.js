import React from 'react';
import './index.scss';
import ButtonRounded from './ButtonRounded';
import facebook from '../../assets/social-media/facebook.svg';
import tw from '../../assets/social-media/twitter.svg';
import discord from '../../assets/social-media/discord.svg';
import telegram from '../../assets/social-media/tlgrm.svg';

const Community = () => {
  return (
    <div className="community">
      <div className="community__content">
        <h1 className="community__heading heading">join our community</h1>
        <div className="community__buttons">
          <ButtonRounded imgUrl={facebook} alt="face" />
          <ButtonRounded imgUrl={tw} alt="twitt" />
          <ButtonRounded imgUrl={discord} alt="discord" />
          <ButtonRounded imgUrl={telegram} alt="telegram" />
        </div>
      </div>
    </div>
  )
};

export default Community;