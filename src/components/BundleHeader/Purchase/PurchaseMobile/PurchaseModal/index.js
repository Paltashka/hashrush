import React, {useEffect, useState} from 'react';
import './index.scss';
import {useHistory} from 'react-router-dom';
import Purchase from '../../index';

const PurchaseModal = () => {
    const history = useHistory();
    const [bundle, setBundle] = useState();

    useEffect(() => {
        const savedBundle = JSON.parse(localStorage.getItem('selectedBundle'));
        setBundle(savedBundle);
    }, []);

    return (
        <div className='purchase-modal'>
            <span className="purchase-modal__back" onClick={() => history.goBack()}>back</span>
            <div className="purchase-modal__purchase__wrapper">
                {bundle && (
                    <Purchase
                        id={bundle.id}
                        heroName={bundle.name}
                        heroImg={bundle.image}
                        price={bundle.price}
                    />
                )}
            </div>
        </div>
    );
};

export default PurchaseModal;