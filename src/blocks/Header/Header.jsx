import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import burgerIcon from '../../img/menu-bar.png';

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px',
    backgroundImage: `url(${burgerIcon})`,
    backgroundPosition: 'center', // Center the background image
    backgroundSize: 'cover', // Cover the entire area of the button
    backgroundRepeat: 'no-repeat' // Do not repeat the image
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
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
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const handleStateChange = (state) => {
      setMenuOpen(state.isOpen);
    };

    useEffect(() => {
        // When the menu is open, prevent scrolling
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
    
        // Clean up the style
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [menuOpen]); // Only re-run the effect if menuOpen changes
  
    return (
      <header>
        <Menu
        styles={styles} 
          right // Добавлено свойство для открытия с правой стороны
          isOpen={menuOpen}
          onStateChange={handleStateChange}
        >
          <a id="home" className="menu-item" href="/">На главную</a>
          <a id="meetup" className="menu-item" href="/meetup">Meetup Week:</a>
          <a id="wait" className="menu-item" href="/wait">Что вас ждет</a>
          <a id="access" className="menu-item" href="/access">Как попасть</a>
          <a id="schedule" className="menu-item" href="/schedule">Расписание</a>
          {/* Добавьте дополнительные пункты меню */}
        </Menu>
        {/* Остальная часть заголовка */}
        <div>Young && Yandex</div>
      </header>
    );
  };
  
  export default Header;
