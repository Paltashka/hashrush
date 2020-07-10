import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '../components/Header';
import Overview from '../components/Overview';
import Basics from '../components/Basics';
import GalaxyPoints from '../components/GalaxyPoints';
import HeroStrategic from '../components/HeroStrategic';
import Heroes from '../components/Heroes';
import System from '../components/System';
import Footer from '../components/Footer';

const AboutPage = () => {

  const [isReadyFirstPart, setReadyFirstPart] = useState(false);
  const [isReadySecondPart, setReadySecondPart] = useState(false);

  setTimeout(() => {
    setReadyFirstPart(true);
  }, 5000);

  setTimeout(() => {
    setReadySecondPart(true);
  }, 8000);

  return (
    <ParallaxProvider>
      <Header isLogin={true} />
      <Overview />
      <Basics />
      {isReadyFirstPart === true && (
        <div>
          <GalaxyPoints />
          <HeroStrategic />
        </div>
      )}
      {isReadySecondPart === true && (
        <div>
          <Heroes />
          <System />
        </div>
      )}
      <Footer />
    </ParallaxProvider>
  );
};

export default AboutPage;