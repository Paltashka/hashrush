import axios from 'axios';
import {ADD_PURCHASED_BUNDLE, FAILED, STRIPE_PAYMENT, SUCCESS} from '../types';

export const stripePayment = (stripe, cardElement, bundle, price) => {
    return async dispatch => {
        const {data} = await axios.post(`${process.env.REACT_APP_ProdUrl}/getStripeToken`, JSON.stringify({
            amount: price,
        }), {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await stripe.confirmCardPayment(`${data.secretToken}`, {
            payment_method: {
                card: cardElement,
            }
        });

        if (result.paymentIntent.status === 'succeeded') {
            dispatch({type: ADD_PURCHASED_BUNDLE, payload: bundle});
            dispatch({type: STRIPE_PAYMENT + SUCCESS, payload: true});
        } else {
            dispatch({type: STRIPE_PAYMENT + FAILED, payload: false});
        }
    }
}