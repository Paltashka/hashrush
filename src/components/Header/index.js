import React, { useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import logo from '../../assets/images/logo.png';
import DropDown from './DropDown';
import ava from '../../assets/about/ava.png';
import download from '../../assets/about/download.svg';

const Header = ({ isLogin }) => {
  // const [isVisible, setIsVisible] = useState(false);
  const [choice, setChoice] = useState(true);

  return  (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__left">
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
            {/* {isVisible && <DropDown />} */}
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

                  <div className="header__user user">
                    <div className="user__img--wrapper">
                      <img className="user__img" src={ava} alt="user avatar"/>
                    </div>
                    <span className="user__name">username__88</span>
                    <div className="triangle"></div>
                  </div>

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