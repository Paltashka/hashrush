import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';
import './index.scss';
import Button from '../../../Button';

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: '#32325d',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    }
};

const StripeModal = ({handleStripePayment}) => {
    return (
        <form className="purchase__strapi__modal">
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_ELEMENT_OPTIONS} />
                </div>
            </fieldset>
            <div className="purchase__strapi__modal__button">
                <Button text="Purchase" width="220px" onClick={handleStripePayment}/>
            </div>
        </form>
    )
}

export default StripeModal;
