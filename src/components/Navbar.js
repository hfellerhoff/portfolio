import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [navbarRef, setNavbarRef] = useState(document.createElement('div'));

  const checkForScroll = () => {
    if (window.pageYOffset > 0) {
      navbarRef.className = `${styles.container} ${styles.containerScrolled}`;
    } else {
      navbarRef.className = styles.container;
    }
  };

  window.onscroll = checkForScroll;
  useEffect(() => checkForScroll(), []);

  return (
    <nav
      className={styles.container}
      role='navigation'
      aria-label='main-navigation'
      ref={navbar => setNavbarRef(navbar)}
    >
      <div className={styles.contentContainer}>
        <div className='navbar-brand'>
          <Link to='/' className={styles.logo} title='Logo'>
            <img src={logo} alt='HF' className={styles.logoImage} />
          </Link>
        </div>
        <div id='navMenu' className={styles.menu}>
          <div className='navbar-start has-text-centered'>
            <Link className={styles.link} to='/about'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
