import React, {useEffect, useState} from 'react';
import {CardCvcElement, CardElement, CardExpiryElement, CardNumberElement} from '@stripe/react-stripe-js';
import './index.scss';
import Button from '../../../Button';
import {useSelector} from 'react-redux';
import {getStripePaymentStatus} from '../../../../reducers/purchase';
import {Link, useHistory} from 'react-router-dom';
import logo from '../../../../assets/images/logo.png';
import stripe from '../../../../assets/card-payment/powered-by-stripe.svg';
import mastercard from '../../../../assets/card-payment/mastercard-secure.svg';
import visa from '../../../../assets/card-payment/visa-verified.svg';
import paysafe from '../../../../assets/card-payment/paysafe.svg';

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: 'rgba(255, 255, 255, 0.5)',
            fontSmoothing: 'antialiased',
            fontSize: '14px',
            fontWeight: '300',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.64',
            letterSpacing: 'normal',

            ':focus': {
                color: 'rgba(255, 255, 255, 0.5)',
            },

            '::placeholder': {
                color: 'rgba(255, 255, 255, 0.5)',
            },

            ':focus::placeholder': {
                color: 'rgba(255, 255, 255, 0.5)',
            },
        },
        invalid: {
            color: '#f66b5f',
            ':focus': {
                color: '#f66b5f',
            },
            '::placeholder': {
                color: 'rgba(255, 255, 255, 0.5)',
            },
        },
    }
};

const StripeModal = ({location}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const paymentStatus = useSelector(state => getStripePaymentStatus(state));
    const history = useHistory();
    const handleResize = () => setScreenWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [handleResize, screenWidth]);

    useEffect(() => {
        if (paymentStatus) {
            history.push('/thank-you');
        }
    }, [paymentStatus])

    const handleSubmit = () => {
        const {handleStripePayment} = location.state;
        handleStripePayment();
    }

    return (
        <div className="stripe__modal__wrapper">
            <div className="stripe__modal">
                <span className="modal__back" onClick={() => history.goBack()}>back</span>
                <Link to="/"><img className="stripe__modal__logo" src={logo} alt="logo"/></Link>
                <div className="stripe__modal__header">
                    <h1>Purchase bundle</h1>
                    <p>Farion founder bundle</p>
                </div>
                <fieldset className="stripe__modal__form">
                    <p className="stripe__modal__form__text">Card number</p>
                    <div className="FormGroup">
                        <div className="FormRow">
                            <CardNumberElement options={CARD_ELEMENT_OPTIONS}/>
                        </div>
                        <div className="stripe__modal__form__expire_cvc">
                            <div className="FormRow FormRow--small">
                                <p className="stripe__modal__form__text">Valid until</p>
                                <CardExpiryElement options={CARD_ELEMENT_OPTIONS}/>
                            </div>
                            <div className="FormRow FormRow--small">
                                <p className="stripe__modal__form__text">CVC</p>
                                <CardCvcElement options={CARD_ELEMENT_OPTIONS}/>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <Button
                    onClick={handleSubmit}
                    text="Purchase $20.00"
                    classPosition="modal__button"
                    width={screenWidth > 534 ? "534px" : "auto"}
                    type="submit"
                />
                <div className="stripe__modal__verified__labels">
                    <img src={stripe} alt=""/>
                    <img src={mastercard} alt=""/>
                    <img src={visa} alt=""/>
                    <img src={paysafe} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default StripeModal;
