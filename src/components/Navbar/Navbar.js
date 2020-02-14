import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import logo from '../../img/logo.svg';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [navbarRef, setNavbarRef] = useState(null);

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
        <div className={styles.menu}>
          {/* <Link className={styles.link} to='/about'>
            About
          </Link>
          <div className={styles.linkSpacer} /> */}
          <Link className={styles.link} to='/projects'>
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
