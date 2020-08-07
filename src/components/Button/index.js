import React from 'react';
import './index.scss';

const Button = ({classPosition, text, layout, type, onClick, isVerified, width}) => {
    const handleClick = () => {
       if (isVerified) {
           setTimeout(() => {
               window.location.href = `${process.env.REACT_APP_ProdUrl}/HashRush`;
           }, 500)
       }
    }
    return (
        <a onClick={handleClick} style={{ display: 'contents'}}>
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