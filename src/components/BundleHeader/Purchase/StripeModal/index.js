import React, {useEffect} from 'react';
import {CardElement} from '@stripe/react-stripe-js';
import './index.scss';
import Button from '../../../Button';
import {useSelector} from 'react-redux';
import {getStripePaymentStatus} from '../../../../reducers/purchase';
import {useHistory} from 'react-router-dom';

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
    const paymentStatus = useSelector(state => getStripePaymentStatus(state));
    const history = useHistory();

    useEffect(() => {
        if (paymentStatus) {
            history.push('/thank-you');
        }
    }, [paymentStatus])

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
