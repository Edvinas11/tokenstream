import React from 'react';

import Hero from '../../components/Hero/Hero';
import Market from '../../components/Market/Market';
import Benefits from '../../components/Benefits/Benefits';
import Discord from '../../components/Discord/Discord';

const Home = () => {
  return (
    <div className='home-container'>
      <Hero />
      <Market />
      <Benefits />
      <Discord />
    </div>
  )
}

export default Home;