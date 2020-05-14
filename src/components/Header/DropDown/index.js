import React from 'react';
import './index.scss';
import facebook from '../../../assets/social-media/facebook.svg';
import tw from '../../../assets/social-media/twitter.svg';
import discord from '../../../assets/social-media/discord.svg';
import telegram from '../../../assets/social-media/tlgrm.svg';

const DropDown = () => {
  return (
    <div className="dropdown">
      <span className="dropdown__item">
        <img className="dropdown__icon" src={facebook} alt="face" />Facebook
      </span>
      <span className="dropdown__item">
        <img className="dropdown__icon" src={tw} alt="twit" />Twitter
      </span>
      <span className="dropdown__item">
        <img className="dropdown__icon" src={discord} alt="discord" />Discord
      </span>
      <span className="dropdown__item">
        <img className="dropdown__icon" src={telegram} alt="telegram" />Telegram
      </span>
    </div>
  );
};

export default DropDown;