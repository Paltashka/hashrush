import React, { useState, useRef } from 'react';
import './index.scss';
import logo from '../../assets/images/logo.png';
import DropDown from './DropDown';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  return  (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__left">
          <div className="header__logo-wrapper">
            <img className="header__logo" src={logo} alt="logo" />
          </div>
          <ul className="header__navigation navigation">
            <li className="navigation__item">about</li>
            <li className="navigation__item">store</li>
            <li className="navigation__item">leaderboard</li>
            <li className="navigation__item" onClick={() => setIsVisible(!isVisible)}>
              community<div className="triangle"></div>
            </li>
            {isVisible && <DropDown />}
          </ul>
        </div>

        <div className="header__right">
          <span className="header__login">login</span>
          <div className="header__register button__border">
            <span className="button">register now</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;