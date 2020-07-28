import React from 'react';
import './index.scss';
import visa from '../../../assets/bundle-page/visa.svg';
import mastercard from '../../../assets/bundle-page/mastercard.svg';
import paypal from '../../../assets/bundle-page/paypal.svg';
import bitcoin from '../../../assets/bundle-page/bitcoin.svg';
import ethereum from '../../../assets/bundle-page/ethereum.svg';
import PaymentItem from './PaymentItem';
import BundleDetailsItem from './BundleDetailsItem';
import Button from '../../Button';

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//         background: 'none',
//         border: 'none',
//         backgroundImage: `url('${bg}`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: '100%, 100%',
//         padding: '100px',
//     },
//     overlay: {
//         backgroundColor: 'rgba(1, 1, 1, 0.56)',
//     },
// };

const Purchase = ({heroName, heroImg}) => {
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
                    console.log(e.target.value);
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
                            $20
                            <span className="purchase__content__buy__price--small">.00</span>
                        </span>
                        <div>
                            <Button text="Purchase" style={{width: '250px'}} width="220px"/>
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
