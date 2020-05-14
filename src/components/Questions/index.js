import React from 'react';
import Button from '../Button';
import './index.scss';

import discord from '../../assets/images/discord.svg';
import discordIcon from '../../assets/social-media/discord.svg';

const Questions = () => {
  return (
    <div className="questions">
      <Button text="discover" classPosition="questions__button" />

      <div className="questions__content">
        <h1 className="questions__heading heading">questions?</h1>
        <span className="questions__text">Let's chat on<img className="questions__img" src={discord} alt="discord" /></span>
        <div className="button__border questions__button-bottom">
            <span className="button">
              <img className="questions__icon"  src={discordIcon} alt="discord icon" />chat now
            </span>
          </div>
      </div>
    </div>
  );
};

export default Questions;