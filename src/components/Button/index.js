import React from 'react';
import './index.scss';

const Button = ({ classPosition, text, layout, type, onClick, isVerified, width }) => {
  return (
    <a href={isVerified ? `${process.env.REACT_APP_ProdUrl}/HashRush` : null} style={{ display: 'contents'}} download>
      <div onClick={onClick} className={`button__border-black ${classPosition ? classPosition : ''}`}>
        <div className="button__border-black-inside">
          <button type={type} className="button__border" style={width ? {width: width} : {}}>
            <span className="button welcome__button">{layout}{text}</span>
          </button>
        </div>
      </div>
    </a>
  );
};

export default Button;