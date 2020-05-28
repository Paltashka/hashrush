import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import lock from '../../../assets/about/lock.svg';
import star from '../../../assets/about/star.svg';
import avatar from '../../../assets/about/avatar.svg';

const AccountDropdown = () => {
  return (
    <div className="account-dropdown">
      <Link to="/account">
        <span className="dropdown__item">
          <img className="dropdown__icon" src={avatar} alt="avatar" />My Account
        </span>
      </Link>
      <span className="dropdown__item">
        <img className="dropdown__icon" src={star} alt="star" />My Position in the Leaderboard
      </span>
      <span className="dropdown__item">
        <img className="dropdown__icon" src={lock} alt="lock" />Log out
      </span>
    </div>
  );
};

export default AccountDropdown;