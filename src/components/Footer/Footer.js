import React from 'react';

import logo from '../../img/logo.svg';
import classes from './Footer.module.scss';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className={classes.container}>
        <div>
          <img src={logo} alt='HF' style={{ width: '4em' }} />
        </div>
      </footer>
    );
  }
};

export default Footer;
