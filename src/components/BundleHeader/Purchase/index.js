import React, {useState} from 'react';
import './index.scss';
import visa from '../../../assets/bundle-page/visa.svg';
import mastercard from '../../../assets/bundle-page/mastercard.svg';
import paypal from '../../../assets/bundle-page/paypal.svg';
import bitcoin from '../../../assets/bundle-page/bitcoin.svg';
import ethereum from '../../../assets/bundle-page/ethereum.svg';
import PaymentItem from './PaymentItem';
import BundleDetailsItem from './BundleDetailsItem';
import Button from '../../Button';
import {useSelector} from 'react-redux';
import {getUserData} from '../../../reducers/userInfoReducer';
import {useAlert} from 'react-alert';
import Modal from 'react-modal';
import axios from 'axios';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import StripeModal from './StripeModal';
import {stripePayment} from '../../../actions/purchase';
import {getStripePaymentStatus} from '../../../reducers/purchase';
import {FAILED, STRIPE_PAYMENT, SUCCESS} from '../../../types';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%, 100%',
        padding: '100px',
        width: '50%',
        background: 'none',
    },
    overlay: {
        backgroundColor: 'rgba(1, 1, 1, 0.56)',
    },
};

const Purchase = ({heroName, heroImg, price}) => {
    const [payment, setPayment] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const alert = useAlert();
    const stripe = useStripe();
    const elements = useElements();
    const spritePaymentStatus = useSelector(state => getStripePaymentStatus(state));
    const splittedPrice = price.split('.');

    const handleStripePayment = async (e) => {
        if (!payment) {
            alert.show('Choose payment method', {type: 'error'});
        }

        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const priceToSend = splittedPrice[0].replace('$', '');
        const cardElement = elements.getElement(CardElement);

        try {
            const {data} = await axios.post(`http://localhost:3002/getStripeToken`, JSON.stringify({
                amount: priceToSend,
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

            // stripePayment(stripe, cardElement, priceToSend);

            if (result.paymentIntent.status === 'succeeded') {
                alert.show('Payment is successful', {type: 'success'});
            } else {
                alert.show('Error when processing payment', {type: 'error'});
            }
        } catch (e) {
            console.log(e);
        }
    };

    const handleModal = () => {
        if (payment !== 'card') {
            alert.show('Choose payment method', {type: 'error'});
            return;
        }
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className="purchase">
            <h1 className="purchase__heading">Purchase bundle</h1>
            <div className="purchase__content">
                <div className="purchase__content__bundle">
                    <img src={heroImg} alt=""/>
                    <div className="purchase__content__bundle__details">
                        <p className="purchase__content__heading">{heroName} founder bundle</p>
                        <BundleDetailsItem
                            name="Grandmaster hero"
                        />
                        <BundleDetailsItem
                            name="3x Heroic Gear"
                        />
                        <BundleDetailsItem
                            name="1x Worker skin"
                        />
                        <BundleDetailsItem
                            name="“Leave your mark” option"
                        />
                    </div>
                </div>
                <div className="purchase__content__payments" onChange={(e) => {
                    setPayment(e.target.value);
                }}>
                    <p className="purchase__content__payments__heading">Select payment method</p>
                    <PaymentItem
                        name="Card payment"
                        images={[visa, mastercard]}
                        value="card"
                    />
                    <PaymentItem
                        name="Paypal"
                        images={[paypal]}
                        value="paypal"
                    />
                    <PaymentItem
                        name="Bitcoin"
                        images={[bitcoin]}
                        value="bitcoin"
                    />
                    <PaymentItem
                        name="Ethereum"
                        images={[ethereum]}
                        value="ethereum"
                    />
                </div>
                <div className="purchase__content__buy">
                    <div className="purchase__content__buy__wrapper">
                        <span className="purchase__content__buy__price">
                            {splittedPrice[0]}
                            <span className="purchase__content__buy__price--small">.{splittedPrice[1]}</span>
                        </span>
                        <div>
                            <Button text="Purchase" style={{width: '250px'}} width="220px" onClick={handleModal}/>
                        </div>
                    </div>
                    <p className="purchase__content__buy__terms">By clicking “Purchase” I approve the
                        <span className="purchase__content__buy__terms--underlined">terms and
                        conditions</span>
                    </p>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                style={customStyles}
                onRequestClose={handleModal}
            >
                <StripeModal handleStripePayment={handleStripePayment}/>
            </Modal>
            {/*<Modal*/}
            {/*    isOpen={isModalOpen}*/}
            {/*    style={customStyles}*/}
            {/*>*/}
            {/*    <PurchaseThanksModal*/}
            {/*        heroImage={heroImg}*/}
            {/*        images={items}*/}
            {/*    />*/}
            {/*    <img src={close} onClick={closeModal} className="thanks-modal__close-modal"/>*/}
            {/*</Modal>*/}
        </div>
    );
};

export default Purchase;
