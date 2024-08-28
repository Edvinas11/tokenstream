import React, { useState } from 'react';
import './Navbar.css';

import DiscordLogo from '../../assets/logo/logo-discord.svg';
import TwitterLogo from '../../assets/logo/logo-twitter.svg';
import BurgerIcon from '../../assets/logo/icon-burger.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <a href='/'>TokenStream</a>
      </div>
      <div className='navbar-burger' onClick={toggleMenu}>
        <img src={BurgerIcon} alt='Menu' />
      </div>
      <ul className={`navbar-links ${isOpen ? 'navbar-links-open' : ''}`}>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>Market</a></li>
        <li><a href='/'>Choose Us</a></li>
        <li><a href='/'>Join</a></li>
      </ul>
      <ul className='navbar-social-links'>
        <li><a href='/'><img src={DiscordLogo} alt='Discord' className='navbar-social-logo'/></a></li>
        <li><a href='/'><img src={TwitterLogo} alt='Twitter' className='navbar-social-logo'/></a></li>
      </ul>
    </nav>
  )
}

export default Navbar;