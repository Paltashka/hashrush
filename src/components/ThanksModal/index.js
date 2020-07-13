import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../Header/index.scss';
import './index.scss';

import logo from '../../assets/images/logo.png';
import download from '../../assets/about/download.svg';

const ThanksModal = ({ verifying, img, title, text }) => {
  const history = useHistory();

  return (
    <div className="thanks">
      <Link to="/"><span className="modal__back">back</span></Link>
      <Link to="/"><img className="modal__logo" src={logo} alt="logo" /></Link>
      <div className="login__content">
        <h1 className="modal__heading">{title}</h1>
        {text && <p className="modal__text">
          Please check your email box for the verification email,
          you will not be able to play the game unless your email address is verified
        </p>}
        <img className="thanks__img" src={img} alt="Raken" />
        <div className="login__account">
          {verifying && <a href={`${process.env.REACT_APP_ProdUrl}/HashRush`} download>
            <span className="button">
              <img className="button__img" src={download} alt="download" />
              <span className="button__text-visible" style={{ color: 'white', fontWeight: '700', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.42px' }}>download game</span>
            </span>
          </a>}

          <h2 className="login__subheading">Problems?</h2>
          <div className="account__button">
            <div className="account__border-top"></div>
            <a href="http://discord.gg/4YMBHbw" target="_blank" ><span className="account__text" style={{ fontWeight: '700' }}>we are here to help</span></a>
            <div className="account__border-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksModal;