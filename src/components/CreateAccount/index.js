import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Input from '../LoginModal/Input';
import CheckBox from '../LoginModal/CheckBox';
import Button from '../Button';

import './index.scss';

const CreateAccount = () => {
  const history = useHistory();

  const showThanks = () => {
    if (true) {
      history.push('/thanks-register')
    }
  };

  return (
    <div className="modal register">
      <Link to="/"><span className="modal__back">back</span></Link>
      <Link to="/"><img className="modal__logo" src={logo} alt="logo" /></Link>

      <div className="register__content">
        <h1 className="modal__heading">Create account</h1>
        <p className="modal__text">Sign up to Hash Rush</p>

        <form onSubmit={showThanks}> 
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Repeat email" />
          <Input type="password" placeholder="Password" />

          <div className="modal__helpers">
            <CheckBox label="Subscribe to newsletter" id="subscribe" />
          </div>

          <Button text="create account" classPosition="modal__button" type="submit" />
        </form>

        <div className="login__account">
          <h2 className="login__subheading">Already have an account?</h2>

          <div className="account__button">
            <div className="account__border-top"></div>
            <Link to="/login"><span className="account__text">Log in</span></Link>
            <div className="account__border-bottom"></div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CreateAccount;