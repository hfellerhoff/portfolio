import React from 'react';
import Layout from '../../components/Layout';
import Helmet from 'react-helmet';
import classes from './contact.module.scss';
import ContactCard from '../../components/ContactCard/ContactCard';

const ContactPage = () => {
  return (
    <Layout>
      <section className={classes.contact}>
        <Helmet titleTemplate='%s | Henry Fellerhoff'>
          <title>Contact</title>
        </Helmet>
        <div className={classes.container}>
          <h1 className={classes.pageTitle}>Contact</h1>
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
