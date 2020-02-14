import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

import logo from '../img/logo-long.svg';
import Hero from '../components/Hero/Hero';

export const IndexPageTemplate = ({ pretitle, subtitle, subtitleEmphasis }) => (
  <div>
    <Hero
      logo={logo}
      pretitle={pretitle}
      subtitle={subtitle}
      subtitleEmphasis={subtitleEmphasis}
    />
  </div>
);

IndexPageTemplate.propTypes = {
  pretitle: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleEmphasis: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        pretitle={frontmatter.pretitle}
        subtitle={frontmatter.subtitle}
        subtitleEmphasis={frontmatter.subtitleEmphasis}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        pretitle
        subtitle
        subtitleEmphasis {
          word
          destination
        }
      }
    }
  }
`;
