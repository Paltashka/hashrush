import React from 'react';
import './index.scss';
import Bundle from '../ChooseHero/Bundle';
import GearList from '../GearList';

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