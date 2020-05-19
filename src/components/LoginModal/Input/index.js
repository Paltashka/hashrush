import React from 'react';
import './index.scss';

const Input = ({ type, placeholder }) => {
  return (
    <section className="input__wrapper">
      <div className="input__bg"></div>
      <input className="input" type={type} placeholder={placeholder} />
    </section>
  );
};

export default Input;