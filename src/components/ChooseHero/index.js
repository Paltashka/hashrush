import React from 'react';
import './index.scss';
import Button from '../Button';
import Bundle from './Bundle';

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
                    id={2}
                    articleText='Wielder of the Braces of Cryptar, Carax can conjur a spiritual manifestation of him to wreak Havok on the battlefiend.'
                    isReversed={false}
                />
                <Bundle
                    id={3}
                    articleText='Using his trusty Hammer and Shield, Farion will thin the enemy ranks and will hold them back without breaking a sweat.'
                    isReversed={true}
                />
                <Bundle
                    id={1}
                    articleText='Master of the Arcane arts, Melighar casts destructive spells and aids his magic using counterparts.'
                    isReversed={false}
                />
            </div>
        </div>
    );
};

export default ChooseHero;
