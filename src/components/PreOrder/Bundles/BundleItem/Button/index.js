import React from 'react';
import './index.scss';

const Button = ({price}) => {
    return (
        <div className="bundles-item__btn">
            <button className="bundles-item__btn">
                <span>{price}</span>
                <div className="bundles-item__btn__dash">
                    <div className="bundles-item__btn__dash--dark"/>
                    <div className="bundles-item__btn__dash--light"/>
                </div>
                <span>Explore</span>
            </button>
        </div>
    )
}

export default Button;