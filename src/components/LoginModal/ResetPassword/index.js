import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from 'react-alert';

import './index.scss';

import Input from '../Input';
import Button from '../../Button';

const ResetPassword = () => {
  const history = useHistory();
  const alert = useAlert();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const { email } = e.target;

    if (!email.value) {
      alert.show('Complete all fields', { type: 'error' });

      return;
    }

    axios.post(`${process.env.REACT_APP_ProdUrl}/sendResetPasswordMail`, { email: email.value }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        history.push('/about');
      })
      .catch(err => {
        alert.show(err.response.data.message, { type: 'error' });
        console.log(err);
        return err;
      });
  };

  return (
    <div className="login__content">
      <h1 className="modal__heading reset__heading">Reset password</h1>
      <p className="modal__text">Password reset instructions will be sent to your registered email address.</p>

      <form onSubmit={handleSubmitForm}>
        <Input id="email" type="text" placeholder="Email address" />
        <Button text="submit" classPosition="modal__button" />
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

export default ResetPassword;