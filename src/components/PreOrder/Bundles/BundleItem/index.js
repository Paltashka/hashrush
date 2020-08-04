import React from 'react';
import './index.scss';
import brownUrsara from '../../../../assets/bundle-page/brown-ursara-min.png';
import Button from './Button';
import {Link} from 'react-router-dom';

const BundleItem = ({id, heroName, image, items, price}) => {
    return (
        <div className="bundles-item">
            {heroName && (
                <div className="bundles-item__heading">
                    <span>{heroName}</span>
                </div>
            )}
            <div className="bundles-item__images">
                <img className="bundles-item__images__hero" src={image} alt={heroName}/>
                <div className="bundles-item__images__items">
                    {items.map(item => {
                        return <img src={item}/>
                    })}
                    <img src={brownUrsara} alt="brown ursara"/>
                </div>
            </div>
            {price && <Link to={`/bundle/${id}`}>
                <Button price={price} />
            </Link>}
        </div>
    );
};

export default BundleItem;
