import React from 'react';
import Layout from '../../components/Layout';
import Helmet from 'react-helmet';
import classes from './contact.module.scss';

const ContactPage = () => {
  return (
    <Layout>
      <section className={classes.contact}>
        <Helmet titleTemplate='%s | Henry Fellerhoff'>
          <title>Contact</title>
        </Helmet>
        <div className={classes.container}>
          <h1 className={classes.pageTitle}>Contact</h1>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
