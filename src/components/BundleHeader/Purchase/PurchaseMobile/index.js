import React from 'react';
import './index.scss';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getBundleById} from '../../../../reducers/purchase';

const PurchaseMobile = ({id}) => {
    const history = useHistory();
    const bundle = useSelector(state => getBundleById(state, id));

    const handleClick = () => {
        localStorage.setItem('selectedBundle', JSON.stringify(bundle));
        history.push('/purchase');
    }

    return (
        <div className="purchase-mobile__wrapper">
            <div className='purchase-mobile'>
            <span className='purchase-mobile__price'>$20
                <span className='purchase-mobile__price--small'>.00</span>
            </span>
                <button className='purchase-mobile__button' onClick={handleClick}>
                    <span>Purchase</span>
                </button>
            </div>
        </div>
    );
};

export default PurchaseMobile;
