import React from 'react'

import './Hero.css'

import CryptoTop from '../../components/CryptoTop/CryptoTop';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1>TRACK AND TRADE <span>CRYPTO CURRENCIES</span></h1>

        <CryptoTop />
      </div>
    </section>
  )
}

export default Hero;