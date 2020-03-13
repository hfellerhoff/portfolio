import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  GlobalDispatchContext,
  GlobalStateContext,
  SiteFocus,
  Actions,
} from '../../context/GlobalContextProvider';
import PageTransition from 'gatsby-plugin-page-transitions';

import logo from '../../img/logo.svg';
import code from '../../img/icons/code.png';
import music from '../../img/icons/music.png';
import classes from './Navbar.module.scss';

const Navbar = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);
  console.log(state);

  return (
    <nav
      className={classes.container}
      role='navigation'
      aria-label='main-navigation'
    >
      <div className={classes.contentContainer}>
        <div className='navbar-brand'>
          <PageTransition>
            <Link to='/' className={classes.logo} title='Logo'>
              <img src={logo} alt='HF' className={classes.logoImage} />
            </Link>
          </PageTransition>
        </div>
        <div className={classes.switchContainer}>
          <img className={classes.switchIcon} src={code} alt='Code' />
          <label className={classes.switch}>
            <input
              className={classes.switchInput}
              type='checkbox'
              checked={state.siteFocus === SiteFocus.Music ? true : false}
              onClick={() => {
                dispatch({ type: Actions.ToggleSiteFocus });
              }}
            />
            <span className={classes.switchSphere}></span>
          </label>
          <img className={classes.switchIcon} src={music} alt='Music' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
