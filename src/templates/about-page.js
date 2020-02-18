import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import classes from './about-page.module.scss';
import {
  GlobalStateContext,
  SiteFocus,
} from '../context/GlobalContextProvider';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const state = useContext(GlobalStateContext);
  const titleClassName =
    state.siteFocus === SiteFocus.Code ? classes.blueText : classes.greenText;

  return (
    <section className={classes.about}>
      <div className={classes.container}>
        <h1 className={`${classes.title} ${titleClassName}`}>{title}</h1>
        <div className={classes.card}></div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
