import React, {useState} from 'react';
import './index.scss';
import cross from '../../../assets/forms/cross.svg';
import Input from '../../LoginModal/Input';
import Button from '../../Button';
import muskernack from '../../../assets/forms/3-muskernack-smaller-size.png';

const ChangePassword = ({ setChangePassword }) => {
  const [isSent, setIsSent] = useState(false);

  return (
    <div className="change-email change-password">
      <div className="change-email__message-border">
        <div className="change-email__message">
          <img
            className="change-email__cross"
            src={cross} alt="cross"
            onClick={() => setChangePassword(false)}
          />

          {!isSent
            ? (
              <>
                <h1 className="change-email__title">Change password</h1>
                <div className="change-email__content">
                  <Input type="password" placeholder="Current password" />
                  <Input type="password" placeholder="New password" />
                  <Button text="change password" onClick={() => setIsSent(true)} />
                </div>
              </>)
            : (
              <>
                {/* <img className="change-email__img" src={emails} alt="sent email" /> */}
                <h1 className="change-email__title">Password changed!</h1>
                <img className="change-email__img" src={muskernack} alt="sent password" />

              </>
            )}
         

        </div>
      </div>
    </div>
  );
};

export default ChangePassword;