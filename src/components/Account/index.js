import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { useAlert } from 'react-alert';

import { signOut } from '../../actions/authorizationFlow';

import './index.scss';

import ava from '../../assets/about/ava.png';
import logo from '../../assets/images/logo-planet.png';
import emails from '../../assets/forms/emails.svg';
import Button from '../Button';
import ChangeEmail from './ChangeEmail';
import ChangePassword from './ChangePassword';
import rc from '../../assets/about/rc.svg';
import hc from '../../assets/about/hc.svg';
import lock from '../../assets/about/lock.svg';
import star from '../../assets/about/star.svg';

const Account = ({ token, status, email, username, signOut }) => {
  const history = useHistory();
  const alert = useAlert();

  const [changeEmail, setChangeEmail] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [isVerified, setIsVerified] = useState(true);

  const handleResendValidationEmail = () => {
    axios.post(`${process.env.REACT_APP_ProdUrl}/resendValidationEmail`, { email: 'leonelluson+23@gmail.com', token }, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        return response;
      })
      .catch(err => {
        alert.show(err.response.data.Message, { type: 'error' });

        return err;
      });
  };

  const handleLogout = () => {
    signOut();

    history.push('/login');
  };

  return (
    <div className="account">
      {changeEmail && <ChangeEmail setChangeEmail={setChangeEmail} />}
      {changePassword && <ChangePassword setChangePassword={setChangePassword} />}

      <h1 className="heading account__heading">my account</h1>

      <div className="account__content-border">
        <div className="account__content">
          <div className="account__img-border">
            <div className="account__img-wrapper">
              <img className="account__img" src={ava} alt="user avatar" />
            </div>
          </div>

          <span className="account__name">{username}</span>

          <div className="account__email-wrapper">
            <span className="account__email">{email}</span>
            <span className="account__email-change" onClick={() => setChangeEmail(true)}>change email</span>
          </div>

          <div className="account__email-wrapper">
            <span className="account__email">{'●'.repeat(10)}</span>
            <span className="account__email-change" onClick={() => setChangePassword(true)}>change password</span>
          </div>

        </div>
      </div>

      {/* <div className="account__content-border">
        <div className="account__content account__content--medium">
          <span className="account__words">Balance</span>
          <div className="header__choice">
            <span
              className={'header__choice--active'}
            >
              <img className="header__choice-icon" src={rc} alt="rc" />23
              </span>
            <span
              className={'header__choice--active'}
            ><img className="header__choice-icon" src={hc} alt="hc" />142</span>
          </div>
          <div className="header__register button__border">
            <Link to="/createaccount"><span className="button">refill</span></Link>
          </div>
        </div>
      </div> */}

      {/* <div className="account__content-border">
        <div className="account__content account__content--small">
          <img src={star} alt="star" />
          <span className="account__words">my position in the leaderboard</span>
        </div>
      </div> */}
      {isVerified 
      &&
      <Button
              
              type="button"
              text="download game"
              classPosition="account__btn"
              onClick={() => {
                history.push('/thanks-download');
                setIsVerified(status === 1 ? true : false);
              }
              }
              isVerified={isVerified}
            />
            
}

      <div className="account__content-border">

        <div className="account__content account__content--small">
          <img src={lock} alt="lock" />
          <span className="account__words" onClick={handleLogout}>log out</span>
        </div>
      </div>

      {isVerified
        ? 
            <img className="account__logo" src={logo} alt="logo with planet" />

            
        : (
          <>
            <img className="change-email__img" src={emails} alt="emails" />
            <div className="account__verify">
              <h2 className="account__verify-title">Please verify your email</h2>
              <p className="account__verify-text">
                Your email address has not been validated, you will not be able to play
                the game until you have done so. Please check your mailbox for the validation mail.
                If you are encountering difficulties with this, please <a href="http://discord.gg/4YMBHbw" target="_blank"><span>contact our support</span></a>.
              </p>

              <div className="account__button button__border">
                <span className="button" onClick={() => handleResendValidationEmail()}>
                  resend validation email
                </span>
              </div>
            </div>
          </>
        )}

    </div>
  );
};

function mapStateToProps({ userInfo }) {
  return {
    username: userInfo.Name,
    email: userInfo.Email,
    status: userInfo.Status,
    token: userInfo.token
  };
}

const mapActionToProps = {
  signOut,
};

export default connect(mapStateToProps, mapActionToProps)(Account);