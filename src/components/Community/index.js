import React, { useState, useEffect } from 'react';
import './index.scss';
import ButtonRounded from './ButtonRounded';
import facebook from '../../assets/social-media/facebook.svg';
import tw from '../../assets/social-media/twitter.svg';
import discord from '../../assets/social-media/discord.svg';
import telegram from '../../assets/social-media/tlgrm.svg';

import bg from '../../assets/images/fores.png';

import { Parallax } from 'react-scroll-parallax';

import NewsBlock from '../News/NewsBlock';
import readMore1 from '../../assets/images/readMore1.png';
import readMore2 from '../../assets/images/readMore2.png';
import readMore3 from '../../assets/images/readMore3.png';


const ParallaxImg = () => {
  return (
    <Parallax y={[25, -5]} styleInner={{transform: 'translate3d(0%, 24.1057%, 0px)'}}>
      <img className="community__bg" src={bg} />
    </Parallax>
  );
};

const Community = () => {
  const [screnWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [handleResize, screnWidth])

  return (
    <div className="community">
      <div className="news__blocks">
          <NewsBlock imgUrl={readMore1} date={'6 Jun 2020'} title={'Hash Rush Progress Update — May 2020'} text={'It has been quite a while since we last wrote to you talking about what we’ve been working on...'} href={'https://medium.com/@Hash_Rush/hash-rush-progress-update-may-2020-1d205d9112f8'} />
          <NewsBlock imgUrl={readMore2} date={'28 Feb 2020'} title={'Hash Rush February update'} text={'February has almost ended so we are back with a look at what we’ve been working on during this month.'} href={'https://medium.com/@Hash_Rush/hash-rush-february-update-e44a253e8b72?source=---------3------------------'} />
          {(screnWidth > 1024 || screnWidth < 415) && <NewsBlock imgUrl={readMore3} date={'31 Jan 2020'} title={'Hash Rush in 2020'} text={'Hello everyone and welcome to our first news blast of 2020! With our last update — the Rise of the Crystal Titan...'} href={'https://medium.com/@Hash_Rush/hash-rush-in-2020-4efec0ffaa11?source=---------4------------------'} />}
        </div>
      <ParallaxImg />

      <div className="community__content">
        <h1 className="community__heading heading">join our community</h1>
        <div className="community__buttons">
          <ButtonRounded url={'https://www.facebook.com/HashRushGame/'} imgUrl={facebook} alt="face" />
          <ButtonRounded url={'https://twitter.com/PlayHashRush'} imgUrl={tw} alt="twitt" />
          <ButtonRounded url={'http://discord.gg/4YMBHbw'} imgUrl={discord} alt="discord" />
          <ButtonRounded url={'https://t.me/hashrushofficial'} imgUrl={telegram} alt="telegram" />
        </div>
      </div>

      <div className="community__about-pos">
        <h1 className="community__about heading">About Hash Rush</h1>
        <p className="about__text">
            An online sci-fi/fantasy RTS set in the fictional Hermeian galaxy, Hash Rush sees players build,
            fight and trade their way to victory as they grow and manage their small mining colony, battle monsters, and trade valuable items and resources.
            Tasked with accumulating the much sought-after Crypto Crystals on their planet, successful players will earn themselves tokenized blockchain rewards as well
            as in-game items, bonuses and other prizes.
          </p>
      </div>
    </div>
  )
};

export default Community;



