import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

import logo from '../img/logo-long.svg';
import Hero from '../components/Hero/Hero';
import PageTransition from 'gatsby-plugin-page-transitions';

export const IndexPageTemplate = ({
  pretitle,
  subtitle,
  subtitleEmphasis,
  codeLinks,
  musicLinks,
}) => (
  <div>
    <Hero
      logo={logo}
      pretitle={pretitle}
      subtitle={subtitle}
      subtitleEmphasis={subtitleEmphasis}
      codeLinks={codeLinks}
      musicLinks={musicLinks}
    />
  </div>
);

IndexPageTemplate.propTypes = {
  pretitle: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleEmphasis: PropTypes.array,
  codeLinks: PropTypes.array,
  musicLinks: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PageTransition>
        <IndexPageTemplate
          pretitle={frontmatter.pretitle}
          subtitle={frontmatter.subtitle}
          subtitleEmphasis={frontmatter.subtitleEmphasis}
          codeLinks={frontmatter.codeLinks}
          musicLinks={frontmatter.musicLinks}
        />
      </PageTransition>
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
        codeLinks {
          text
          shortText
          isExternal
          destination
          icon
        }
        musicLinks {
          text
          shortText
          isExternal
          destination
          icon
        }
      }
    }
  }
`;
