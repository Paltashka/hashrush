import React, {useEffect, useState} from 'react';
import './index.scss';
import visa from '../../../assets/bundle-page/visa.svg';
import mastercard from '../../../assets/bundle-page/mastercard.svg';
import bitcoin from '../../../assets/bundle-page/bitcoin.svg';
import ethereum from '../../../assets/bundle-page/ethereum.svg';
import PaymentItem from './PaymentItem';
import BundleDetailsItem from './BundleDetailsItem';
import Button from '../../Button';
import {useDispatch, useSelector} from 'react-redux';
import {useAlert} from 'react-alert';
import Modal from 'react-modal';
import {CardElement, CardNumberElement, useElements, useStripe} from '@stripe/react-stripe-js';
import StripeModal from './StripeModal';
import {stripePayment} from '../../../actions/purchase';
import {getBundleById, getStripePaymentStatus} from '../../../reducers/purchase';
import {useHistory} from 'react-router-dom';

const Purchase = ({id, heroName, heroImg, price}) => {
    const [payment, setPayment] = useState('');
    const alert = useAlert();
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const history = useHistory();
    const bundle = useSelector(state => getBundleById(state, id));
    const spritePaymentStatus = useSelector(state => getStripePaymentStatus(state));
    const splittedPrice = price.split('.');

    useEffect(() => {

    }, [spritePaymentStatus])

    const handleStripePayment = async () => {
        if (!payment) {
            alert.show('Choose payment method', {type: 'error'});
        }

        if (!stripe || !elements) {
            return;
        }

        const priceToSend = splittedPrice[0].replace('$', '');
        const cardElement = elements.getElement(CardNumberElement);

        dispatch(stripePayment(stripe, cardElement, bundle, priceToSend));
    };

    const handleModal = () => {
        if (payment !== 'card') {
            alert.show('Choose payment method', {type: 'error'});
            return;
        }
        history.push({
            pathname: '/payment/card',
            state: {
                handleStripePayment,
            }
        });
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
