import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './index.scss';
import logo from '../../assets/images/logo.png';

const ThanksModal = ({ img, title, text }) => {
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
          <h2 className="login__subheading">Problems?</h2>

          <div className="account__button">
            <div className="account__border-top"></div>
            <a href="http://discord.gg/4YMBHbw" target="_blank" ><span className="account__text">we are here to help</span></a>
            <div className="account__border-bottom"></div>
          </div>
          <div className="account__button">
            <div className="account__border-top"></div>
            <a onClick={() => history.push('/')} ><span className="account__text">Return to our Homepage</span></a>
            <div className="account__border-bottom"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ThanksModal;