import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import burgerIcon from '../../img/menu-bar.png';
import magnumLogo from '../../img/M-letter.svg'
import './Header.css'

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '80px',
    backgroundImage: `url(${burgerIcon})`,
    backgroundPosition: 'center', // Center the background image
    backgroundSize: 'cover', // Cover the entire area of the button
    backgroundRepeat: 'no-repeat' // Do not repeat the image
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    top: '80px',
    right: '36px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#8566FF',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    height: '90%',
    display: 'flex',
    marginTop: '50px',
    flexDirection: 'column',
  },
  bmItem: {
    display: 'inline-block',
    textDecoration: 'none',
    color: 'white'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.5)'
  }
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const handleStateChange = (state) => {
      setMenuOpen(state.isOpen);
    };
  
    return (
      <header className='header'>
        <Menu
          styles={styles} 
          right
          isOpen={menuOpen}
          onStateChange={handleStateChange}
        >
          <a id="home" className="menu-item" href="/">Услуги</a>
          <a id="meetup" className="menu-item" href="/meetup">Портфолио</a>
        </Menu>
        {/* <div className='header__title'>MAGNUM</div> */}
        <img className='header__img-logo' src={magnumLogo} alt='magnum digital studio'/>
      </header>
    );
  };
  
  export default Header;
