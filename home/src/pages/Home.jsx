import React from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Cradvideo from '../components/Cradvideo';

import Picban from '../components/Picban';
import Vacabs from '../components/Vacabs';

import About from './About'
import  Contact  from './Contact';

const Home = () => {
  return (
    <div>
      <Banner />
      <Picban />
      <Vacabs />
      <Cards />
      <Cradvideo />
        <About />
        <Contact />
    </div>
  );
};

export default Home;
