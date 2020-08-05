import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

import './index.scss';
import Login from './Login';
import ResetPassword from './ResetPassword';

import logo from '../../assets/images/logo.png';

const LoginModal = ({ setLoginShow }) => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const history = useHistory();

  return (
    <div className="modal">
      <span className="modal__back" onClick={() => history.goBack()}>back</span>
      <Link to="/"><img className="modal__logo" src={logo} alt="logo" /></Link>

      {forgotPassword
        ? (<ResetPassword />)
        : (<Login setForgotPassword={setForgotPassword} />)
      }
    </div>
  );
};

export default LoginModal;