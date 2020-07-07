import React from 'react';
import './index.css';

const Preloader = () => {
    return (
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export  default  Preloader;
