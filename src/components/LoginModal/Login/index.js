import React from 'react';
import {Link} from 'react-router-dom';

import './index.scss';
import Button from '../../Button';
import Input from '../Input';
import CheckBox from '../CheckBox';

const Login = ({ setForgotPassword }) => {
  return (
    <div className="login__content">
      <h1 className="modal__heading">Welcome back!</h1>
      <p className="modal__text">Login to Hash Rush</p>

      <form>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />

        <div className="modal__helpers">
          <CheckBox label="Remember me" id="remember" />
          <span className="login__forget" onClick={() => setForgotPassword(true)}>Forgot password?</span>
        </div>

        <Button text="login" classPosition="modal__button" />
      </form>

      <div className="login__account">
        <h2 className="login__subheading">Don’t have an account yet?</h2>

        <div className="account__button">
          <div className="account__border-top"></div>
          <Link to="/createaccount"><span className="account__text">create account</span></Link>
          <div className="account__border-bottom"></div>
        </div>

      </div>
    </div>
  );
};

export default Login;