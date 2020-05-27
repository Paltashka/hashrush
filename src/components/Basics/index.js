import React from 'react';
import './index.scss';
import Block from './Block';

import combat from '../../assets/about/combat.png';
import building from '../../assets/about/building.png';
import exploring from '../../assets/about/exploring.png';
import leaderboard from '../../assets/about/leadervboards.png';

const Basics = () => {
  const text = 'The Crystal Scourge has mutated and corrupted the wildlife. Creatures that were once peace';
  const title = 'Combat';

  return (
    <div className="basics"> 
      <div className="container"> 
        <h1 className="heading">basics</h1>
        <p className="basics__subtitle">
          The core features of Hash Rush are:
        </p>

        <div className="basics__content">
          <div className="basics__blocks">
            <div className="basics__cross">
              <div className="cross-horizontal"></div>
              <div className="cross-vertical"></div>
            </div>

            <Block position="left" img={combat} text={text} title={title} />
            <Block position="right" img={building} text={text} title={title} />
            <Block position="left" img={exploring} text={text} title={title} />
            <Block position="right" img={leaderboard} text={text} title={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basics;