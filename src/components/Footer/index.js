import React from 'react'
import './index.scss';

import logo from '../../assets/images/logo.png';
import fb from '../../assets/footer_social-media/fb.svg';
import tw from '../../assets/footer_social-media/tw.svg';
import discord from '../../assets/footer_social-media/discord.svg';
import tlgrm from '../../assets/footer_social-media/tlgrm.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__border"></div>
      <div className="container footer__wrapper">
        <div className="footer__left">
          <img className="footer__logo" src={logo} alt="logo" />
          <ul className="footer__nav">
            <li className="footer__nav-item">about</li>
            {/* <li className="footer__nav-item">store</li>
            <li className="footer__nav-item">leaderboard</li> */}
          </ul>

          <ul className="footer__nav">
            <li className="footer__nav-item footer__nav-item--thin">Read us on Medium</li>
            <li className="footer__nav-item footer__nav-item--thin">Contact Support</li>
            <li className="footer__nav-item footer__nav-item--thin">Potentialy third</li>
          </ul>
        </div>

        <div className="footer__right">
          <span className="footer__headline">join our community</span>
          <div className="footer__medias">
            <a href="https://www.facebook.com/HashRushGame/" target="_blank"><img className="footer__icon" src={fb} alt="face" /></a>
            <a href="https://twitter.com/PlayHashRush" target="_blank"><img className="footer__icon" src={tw} alt="twitt" /></a>
            <a href="https://t.me/hashrushofficial" target="_blank"><img className="footer__icon" src={discord} alt="discord" /></a>
            <a href="http://discord.gg/4YMBHbw" target="_blank"><img className="footer__icon" src={tlgrm} alt="telegram" /></a>
          </div>
          <span className="footer__copyright">@ Hash Rush 2020</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;