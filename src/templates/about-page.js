import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import classes from './about-page.module.scss';
import {
  GlobalStateContext,
  SiteFocus,
} from '../context/GlobalContextProvider';
import AboutCard from '../components/AboutCard/AboutCard';
import PageTransition from 'gatsby-plugin-page-transitions';

export const AboutPageTemplate = ({ title, elements }) => {
  const state = useContext(GlobalStateContext);
  const titleClassName =
    state.siteFocus === SiteFocus.Code ? classes.blueText : classes.greenText;

  return (
    <section className={classes.about}>
      <div className={classes.container}>
        <h1 className={`${classes.title} ${titleClassName}`}>{title}</h1>
        {elements ? (
          elements.map(element => {
            return (
              <AboutCard
                element={element}
                titleIsBlue={state.siteFocus === SiteFocus.Code}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  elements: PropTypes.array,
};

const AboutPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter },
  } = data;

  return (
    <Layout>
      <PageTransition>
        <AboutPageTemplate
          title={frontmatter.title}
          elements={frontmatter.elements}
        />
      </PageTransition>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        elements {
          icon
          pretext
          title
          subtitlePretext
          subtitle
        }
      }
    }
  }
`;
