import React from 'react'

import './Benefits.css';
import BoltLogo from '../../assets/logo/logo-bolt.svg';
import KnightLogo from '../../assets/logo/logo-knight.svg';
import WalletLogo from '../../assets/logo/logo-wallet.svg';

import BenefitCard from '../BenefitCard/BenefitCard';

const Benefits = () => {
  return (
    <section className='benefits'>
      <div className='benefits-content'>
        <h1>WHY <span>CHOOSE US</span></h1>

        <div className='benefits-content-cards'>
          <BenefitCard img={WalletLogo} title="CONNECT YOUR WALLET" text="Use Trust Wallet, Metamask or to connect to the app."/>
          <BenefitCard img={KnightLogo} title="TAKE A MARKET TO SELL" text="Discover, collect the right crypto collections to buy or sell."/>
          <BenefitCard img={BoltLogo} title="CONFIRM TRANSACTION" text="Earn by selling your crypto on our marketplace."/>
        </div>
      </div>
    </section>
  )
}

export default Benefits