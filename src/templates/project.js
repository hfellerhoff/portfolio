import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import classes from './project.module.scss';
import Helmet from 'react-helmet';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Content, { HTMLContent } from '../components/Content';

import externalLink from '../img/external-link.png';
import code from '../img/code.png';
import ProjectDropdown from '../components/ProjectDropdown';

const ProjectTemplate = ({
  content,
  contentComponent,
  title,
  type,
  description,
  url,
  github,
  image,
  technologies,
  tools,
  dropdowns,
  helmet,
}) => {
  const ProjectContent = contentComponent || Content;

  return (
    <section className={classes.container}>
      {helmet || ''}
      <div className={classes.initialContainer}>
        <div className={classes.projectDetailsContainer}>
          <div>
            <h1 className={classes.projectTitle}>{title}</h1>
            <h3 className={classes.projectType}>{type}</h3>
            <div style={{ marginTop: 20 }}>
              <ul className={classes.projectBubbleContainer}>
                {technologies.map(technology => {
                  return (
                    <li
                      className={`${classes.projectBubble} ${classes.projectTechnology}`}
                    >
                      {technology}
                    </li>
                  );
                })}
              </ul>
              <ul className={classes.projectBubbleContainer}>
                {tools.map(tool => {
                  return (
                    <li
                      className={`${classes.projectBubble} ${classes.projectTool}`}
                    >
                      {tool}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <h3 className={classes.projectSubtitle}>{description}</h3>
          <div className={classes.projectLinks}>
            {url ? (
              <a
                className={`${classes.projectLink} ${classes.projectLinkVisit}`}
                href={url}
                target='_blank'
                rel='noreferrer noopener'
              >
                <img className={classes.projectLinkImage} src={externalLink} />
                Visit
              </a>
            ) : (
              <></>
            )}
            {github ? (
              <a
                className={`${classes.projectLink} ${classes.projectLinkCode}`}
                href={github}
                target='_blank'
                rel='noreferrer noopener'
              >
                <img className={classes.projectLinkImage} src={code} />
                Code
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={classes.imageContainer}>
          <div className={classes.image}>
            <PreviewCompatibleImage imageInfo={image} />
          </div>
        </div>
      </div>
      <div className={classes.dropdownContainer}>
        {dropdowns.map((dropdown, index) => {
          return <ProjectDropdown dropdown={dropdown} key={index} />;
        })}
      </div>
      <div className={classes.projectContent}>
        <ProjectContent content={content} />
      </div>
    </section>
  );
};

ProjectTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  github: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  technologies: PropTypes.array,
  tools: PropTypes.array,
  dropdowns: PropTypes.array,
  helmet: PropTypes.object,
};

const Project = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: {
        title,
        type,
        description,
        url,
        github,
        image,
        technologies,
        tools,
        dropdowns,
      },
    },
  } = data;

  return (
    <Layout>
      <ProjectTemplate
        content={html}
        contentComponent={HTMLContent}
        title={title}
        type={type}
        description={description}
        url={url}
        github={github}
        image={image}
        technologies={technologies}
        tools={tools}
        dropdowns={dropdowns}
        helmet={
          <Helmet titleTemplate='%s | Projects'>
            <title>{`${title}`}</title>
            <meta name='description' content={`${description}`} />
          </Helmet>
        }
      />
    </Layout>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Project;

export const pageQuery = graphql`
  query Project($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        type
        description
        url
        github
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        technologies
        tools
        dropdowns {
          title
          text
        }
      }
    }
  }
`;
