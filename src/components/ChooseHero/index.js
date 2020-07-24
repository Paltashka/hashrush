import React from 'react';
import './index.scss';
import Button from '../Button';
import Bundle from './Bundle';
import carax from '../../assets/bundle-page/carax-article.png';
import melighar from '../../assets/bundle-page/melighar-article.png';
import farion from '../../assets/bundle-page/farion-article.png';

const ChooseHero = () => {
    return (
        <div className="choose-hero">
            <div className="choose-hero__title">
                <h1 className="heading">Choose your hero</h1>
                <p className="choose-hero__title__text">
                    Be the first to claim a powerful hero to bolster your forces with their abilities and tougher stats. There are many heroes in the Hermeian Galaxy each with their own set of skills and buffs that can help your other units on the battlefield to perform better.
                </p>
                <a target="_blank" href="https://www.youtube.com/watch?v=AY3lz9TERck">
                    <Button
                        text="watch trailer"
                        layout={
                            <div className="play-round">
                                <div className="play-triangle"></div>
                            </div>
                        }
                    />
                </a>
            </div>
            <div className="choose-hero__content">
                <Bundle
                    heroName="Carax"
                    heroType="The Conjuror"
                    description="Wielder of the Braces of Cryptar, Carax can conjur a spiritual manifestation of him to wreak Havok on the battlefiend."
                    image={carax}
                    isReversed={false}
                />
                <Bundle
                    heroName="Farion"
                    heroType="the Crystal Shield"
                    description="Wielder of the Braces of Cryptar, Carax can conjur a spiritual manifestation of him to wreak Havok on the battlefiend."
                    image={farion}
                    isReversed={true}
                />
                <Bundle
                    heroName="Melighar"
                    heroType="The grand sage"
                    description="Wielder of the Braces of Cryptar, Carax can conjur a spiritual manifestation of him to wreak Havok on the battlefiend."
                    image={melighar}
                    isReversed={false}
                />
            </div>
        </div>
    );
};

export default ChooseHero;
