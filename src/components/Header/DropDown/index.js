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
        <img className="dropdown__icon" src={facebook} alt="face" /><a href="https://www.facebook.com/HashRushGame/" target="_blank">Facebook</a>
      </span>
      <span className="dropdown__item">
        <img className="dropdown__icon" src={tw} alt="twit" /><a href="https://twitter.com/PlayHashRush" target="_blank">Twitter</a>
      </span>
      <span className="dropdown__item">
        <img className="dropdown__icon" src={discord} alt="discord" /><a href="http://discord.gg/4YMBHbw" target="_blank">Discord</a>
      </span>
      <span className="dropdown__item">
        <img className="dropdown__icon" src={telegram} alt="telegram" /><a href="https://t.me/hashrushofficial" target="_blank">Telegram</a>
      </span>
    </div>
  );
};

export default DropDown;