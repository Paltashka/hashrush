import React from 'react';
import './index.scss';

const PaymentItem = ({name, images, value}) => {
    return (
        <div>
            <div className="payment-item">
                <input type="radio" value={value} name="payment"/>
                <p className="payment-item__text">{name}</p>
                <div className="payment-item__images">
                    {images.map(img => {
                        return <img src={img} alt=""/>
                    })}
                </div>
            </div>
            <div className="purchase-dash"/>
        </div>
    );
};

export default PaymentItem;
