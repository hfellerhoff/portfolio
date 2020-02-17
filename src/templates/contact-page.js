import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Helmet from 'react-helmet';
import classes from './contact.module.scss';
import ContactCard from '../components/ContactCard/ContactCard';
import {
  GlobalStateContext,
  SiteFocus,
} from '../context/GlobalContextProvider';

const ContactPageTemplate = ({
  title,
  codeContactMethods,
  musicContactMethods,
}) => {
  const state = useContext(GlobalStateContext);
  const titleClassName =
    state.siteFocus === SiteFocus.Code ? classes.blueText : classes.greenText;

  return (
    <section className={classes.contact}>
      <Helmet titleTemplate='%s | Henry Fellerhoff'>
        <title>{title}</title>
      </Helmet>
      <div className={classes.container}>
        <h1 className={`${classes.pageTitle} ${titleClassName}`}>{title}</h1>
        {codeContactMethods && musicContactMethods ? (
          state.siteFocus === SiteFocus.Code ? (
            codeContactMethods.map(contactMethod => {
              return <ContactCard details={contactMethod} titleIsBlue />;
            })
          ) : (
            musicContactMethods.map(contactMethod => {
              return <ContactCard details={contactMethod} />;
            })
          )
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
        codeContactMethods={frontmatter.codeContactMethods}
        musicContactMethods={frontmatter.musicContactMethods}
      />
    </Layout>
  );
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
        codeContactMethods {
          text
          method
          href
          iconName
        }
        musicContactMethods {
          text
          method
          href
          iconName
        }
      }
    }
  }
`;
