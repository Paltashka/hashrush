import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '../components/Header';
import Overview from '../components/Overview';
import Basics from '../components/Basics';

const AboutPage = () => {
  return (
    <ParallaxProvider>
      <Header isLogin={true} />
      <Overview />
      <Basics />
    </ParallaxProvider>
  );
};

export default AboutPage;