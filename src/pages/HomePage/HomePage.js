import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '../../components/Header';
import Parallax from '../../components/Parallax';
import News from '../../components/News';
import Community from '../../components/Community';
import About from '../../components/About';
import Questions from '../../components/Questions';
import Footer from '../../components/Footer';

import './index.scss';

const HomePage = () => {
  return (
    <ParallaxProvider>
      <Header />
      <Parallax />
      <News />
      <Community />
      <About />
      <Questions />
      <Footer />
    </ParallaxProvider>
  );
}; 

export default HomePage;