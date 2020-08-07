import React from 'react';
import './index.scss';
import GearList from '../../GearList';
import Bundle from '../Bundle';

const BundleBackground = () => {
    return (
        <div className='background'>
            <Bundle
                id={1}
                articleText='Master of the Arcane arts, Melighar casts destructive spells and aids his magic using counterparts.'
                isReversed={false}
            />
            <GearList/>
        </div>
    )
}

export default BundleBackground;