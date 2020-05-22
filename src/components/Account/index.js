import React, {useState} from 'react';
import './index.scss';
import ava from '../../assets/about/ava.png';
import logo from '../../assets/images/logo-planet.png';
import emails from '../../assets/forms/emails.svg';

import Button from '../Button';
import ChangeEmail from './ChangeEmail';
import ChangePassword from './ChangePassword';

const Account = () => {
  const [changeEmail, setChangeEmail] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [isVerified, setIsVerified] = useState(true);

  return (
    <div className="account">
      {changeEmail && <ChangeEmail setChangeEmail={setChangeEmail} />}
      {changePassword && <ChangePassword setChangePassword={setChangePassword} />}

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
            <span className="account__email-change" onClick={() => setChangeEmail(true)}>change email</span>
          </div>

          <div onClick={() => setChangePassword(true)} className="account__button button__border">
            <span className="button">
              change password
            </span>
          </div>

        </div>
      </div>

      {isVerified
        ? (
          <>
            <img className="account__logo" src={logo} alt="logo with planet" />
            <Button
              type="button"
              text="download game"
              classPosition="account__btn"
              onClick={() => setIsVerified(false)}
            />
          </>)
        : (
          <>
            <img className="change-email__img" src={emails} alt="emails" />
            <div className="account__verify">
              <h2 className="account__verify-title">Please verify your email</h2>
              <p className="account__verify-text">
                Your email address has not been validated, you will not be able to play
                the game until you have done so. Please check your mailbox for the validation mail.
                If you are encountering difficulties with this, please <span>contact our support</span>.
              </p>

              <div className="account__button button__border">
                <span className="button">
                  resend validation email
                </span>
              </div>
            </div>
          </>
        )}
      
    </div>
  );
};

export default Account;