import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '../components/Header';
import Overview from '../components/Overview';
import Basics from '../components/Basics';
import ChooseRace from '../components/ChooseRace';

const AboutPage = () => {
  return (
    <ParallaxProvider>
      <Header isLogin={true} />
      <Overview />
      <Basics />
      <ChooseRace />
    </ParallaxProvider>
  );
};

export default AboutPage;