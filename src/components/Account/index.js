import React from 'react';
import './index.scss';
import ava from '../../assets/about/ava.png';

const Account = () => {
  return (
    <div className="account">
      <h1 className="heading account__heading">my account</h1>

      <div className="account__content-border">
        <div className="account__content">
          <div className="account__img-border">
            <div className="account__img-wrapper">
              <img className="account__img" src={ava} alt="user avatar"/>
            </div>
          </div>

          <span className="account__name">Username</span>

          <div className="account__email-wrapper">
            <span className="account__email">username@gmail.com</span>
            <span className="account__email-change">change email</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Account;