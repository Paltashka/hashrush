import React from 'react';
import './index.scss';

const Button = ({ classPosition, text }) => {
  return (
    <div className={`button__border-black ${classPosition}`}>
      <div className="button__border-black-inside">
        <div className="button__border">
          <span className="button welcome__button">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Button;