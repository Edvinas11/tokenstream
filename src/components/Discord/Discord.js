import React from 'react'

import './Discord.css'

import Button from '../../components/Button/Button';

const Discord = () => {
  return (
    <section className='discord'>
      <div className='discord-content'>
        <h1>JOIN US VIA <span>DISCORD</span></h1>

        <p>Invest and manage all your crypto at one place.</p>

        <Button text="Join via Discord" variant='primary' size='large' />

      </div>
    </section>
  )
}

export default Discord