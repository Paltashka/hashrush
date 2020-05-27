import React, { useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import logo from '../../assets/images/logo.png';
import DropDown from './DropDown';
import ava from '../../assets/about/ava.png';
import download from '../../assets/about/download.svg';
import burger from '../../assets/responsive/burger.png';
import cross from '../../assets/forms/cross.svg';

import HeaderTablet from './HeaderTablet';

const Header = ({ isLogin }) => {
  const [choice, setChoice] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'initial';
  }

  return  (
    <header className="header">
      {isOpen && <HeaderTablet />}
      <div className="header__wrapper container">
        <div className="header__left">
          {isOpen
            ? <img className="header__burger" src={cross} alt="burger menu" onClick={() => setIsOpen(false)} />
            : <img className="header__burger" src={burger} alt="burger menu" onClick={() => setIsOpen(true)} />
          }

          <div className="header__logo-wrapper">
            <Link to="/">
              <img className="header__logo" src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="header__navigation navigation">
            <li className="navigation__item"><Link to="/about">about</Link></li>
            <li className="navigation__item">store</li>
            <li className="navigation__item">leaderboard</li>
            <li className="navigation__item">
              community<div className="triangle"></div>
              <DropDown />
            </li>
          </ul>
        </div>

        <div className="header__right">
          {isLogin
            ? (
                <>
                  <div className="header__choice">
                    <span
                      className={choice ? 'header__choice--active' : ''}
                      onClick={()=> setChoice(true)}
                    >rc</span>
                    <span>|</span>
                    <span
                      className={!choice ? 'header__choice--active' : ''}
                      onClick={()=> setChoice(false)}
                    >hc</span>
                  </div>

                  <Link to="/account">
                    <div className="header__user user">
                      <div className="user__img--wrapper">
                        <img className="user__img" src={ava} alt="user avatar"/>
                      </div>
                      <span className="user__name">username__88</span>
                      <div className="triangle"></div>
                    </div>
                  </Link>

                  <div className="header__register button__border">
                    <span className="button">
                      <img className="button__img" src={download} alt="download" /> download game
                    </span>
                  </div>
                </>
              ) 
            : (
              <>
                <Link to="/login"><span className="header__login">login</span></Link>
                <div className="header__register button__border">
                  <Link to="/createaccount"><span className="button">register now</span></Link>
                </div>
              </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;