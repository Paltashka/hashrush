import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import moment from 'moment';

import ButtonRounded from './ButtonRounded';
import NewsBlock from '../News/NewsBlock';

import facebook from '../../assets/social-media/facebook.svg';
import tw from '../../assets/social-media/twitter.svg';
import discord from '../../assets/social-media/discord.svg';
import telegram from '../../assets/social-media/tlgrm.svg';
import readMore1 from '../../assets/images/readMore1.png';
import readMore2 from '../../assets/images/readMore2.png';
import readMore3 from '../../assets/images/readMore3.png';

import bg from '../../assets/images/fores.png';

import './index.scss';

const ParallaxImg = () => {
  return (
    <Parallax y={[25, -5]} styleInner={{ transform: 'translate3d(0%, 24.1057%, 0px)' }}>
      <img className="community__bg" src={bg} />
    </Parallax>
  );
};

function toText(node) {
  let tag = document.createElement('div');
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}

function shortenText(text, startingPoint, maxLength) {
  return text.length > maxLength ?
    text.slice(startingPoint, maxLength) :
    text;
}

const Community = () => {
  const [screnWidth, setScreenWidth] = useState(window.innerWidth);
  const [posts, setPosts] = useState();

  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [handleResize, screnWidth]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=http://medium.com/feed/vz-games')
      .then((res) => res.json())
      .then((data) => {
        const res = data.items;
        const posts = res.filter(item => item.categories.length > 0);
        setPosts(posts.slice(0, 3));
      });
  }, []);

  return (
    <div className="community">
      <div className="news__blocks">
        {posts && posts.map((item, index) => (
          <div key={index}>
            <NewsBlock imgUrl={item.thumbnail} date={moment(item.pubDate).format('ll')} title={item.title} text={shortenText(toText(item.content), 0, 90) + '...'} href={item.link} />
          </div>
        ))}
        {/* {(screnWidth > 1024 || screnWidth < 415) && <NewsBlock imgUrl={readMore3} date={'31 Jan 2020'} title={'Hash Rush in 2020'} text={'Hello everyone and welcome to our first news blast of 2020! With our last update — the Rise of the Crystal Titan...'} href={'https://medium.com/@Hash_Rush/hash-rush-in-2020-4efec0ffaa11?source=---------4------------------'} />} */}
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



