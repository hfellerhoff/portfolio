import React, { useContext } from 'react';
import Layout from '../components/Layout';
import classes from './404.module.scss';
import { Link } from 'gatsby';
import {
  GlobalStateContext,
  SiteFocus,
} from '../context/GlobalContextProvider';

const NotFoundPage = () => {
  const state = useContext(GlobalStateContext);
  const headingColorClass =
    state.siteFocus === SiteFocus.Code
      ? classes.headingBlue
      : classes.headingGreen;
  const buttonColorClass =
    state.siteFocus === SiteFocus.Code
      ? classes.buttonBlue
      : classes.buttonGreen;
  const subheadingColorClass =
    state.siteFocus === SiteFocus.Code
      ? classes.subheadingBlue
      : classes.subheadingGreen;

  return (
    <Layout>
      <div className={classes.container}>
        <h1 className={`${classes.heading} ${headingColorClass}`}>
          Page not found
        </h1>
        <Link className={`${classes.button} ${buttonColorClass}`} to='/'>
          Click Here
        </Link>
        <h3 className={`${classes.subheading} ${subheadingColorClass}`}>
          to return to home
        </h3>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
