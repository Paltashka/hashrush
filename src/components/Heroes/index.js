import React from 'react';
import './index.scss';

import melighar from '../../assets/about/melighar.jpg';
import carax from '../../assets/about/carax.jpg';
import fario from '../../assets/about/fario.jpg';
import weapon from '../../assets/about/Weapon.jpg';
import defence from '../../assets/about/Defence.jpg';
import support from '../../assets/about/Support.jpg';

const Heroes = () => {
  return (
    <div className="heroes">
      <div className="heroes__content">

        <div className="heroes__block block">
          <h1 className="heading block__heading">heroes</h1>
          <p className="block__text">
            Players have access to special summonable heroes to act as their avatars in-game. Each hero comes with a special ability,
            and can also be customized with Heroic Gear to make them even stronger
          </p>

          <div className="block__row"> 
            <div className="block__hero">
              <img src={fario} className="block__img" alt="farion" />
              <span>farion, the crystal shield</span>
            </div>

            <div className="block__hero">
              <img src={melighar} className="block__img" alt="melighar" />
              <span>melighar, the grand sage</span>
            </div>

            <div className="block__hero">
              <img src={carax} className="block__img" alt="carax" />
              <span>carax, the Conjuror</span>
            </div>      
          </div>

        </div>

        <div className="heroes__block block">
          <h1 className="heading block__heading">gear</h1>
          <p className="block__text">
            Summoning a hero is just half of the task! Once you have a hero you can equip it with three
            special items one for offense, one for defense, and one for support. 
          </p>

          <div className="block__row"> 
            <div className="block__hero block__hero--locked">
              <img src={weapon} alt="traveller" />
              <span>offensive item</span>
            </div>

            <div className="block__hero block__hero--locked">
              <img src={defence} alt="traveller" />
              <span>defensive item</span>
            </div>

            <div className="block__hero block__hero--locked">
              <img src={support} alt="traveller" />
              <span>support item</span>
            </div>      
          </div>

        </div>
      </div>
    </div>
  );
};

export default Heroes;