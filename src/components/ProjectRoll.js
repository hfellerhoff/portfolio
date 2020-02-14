import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery, Link } from 'gatsby';
import classes from './ProjectRoll.module.scss';
import projectClasses from '../templates/project.module.scss';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const ProjectRoll = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark;

  return (
    <div className={classes.container}>
      <div className={classes.cardContainer}>
        {projects &&
          projects.map(
            ({
              node: {
                id,
                fields: { slug },
                frontmatter: { title, type, description, image, technologies },
              },
            }) => (
              <Link key={id} className={classes.card} to={slug}>
                <div className={classes.cardImageContainer}>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: image,
                      alt: title,
                    }}
                  />
                </div>
                <div className={classes.cardContentContainer}>
                  <div className={classes.cardContentTextContainer}>
                    <h3 className={classes.cardTitle}>{title}</h3>
                    <h3 className={classes.cardType}>{type}</h3>
                    <p className={classes.cardDescription}>{description}</p>
                  </div>
                  <ul className={classes.cardBubbleContainer}>
                    {technologies.map(technology => {
                      return (
                        <li
                          className={`${projectClasses.projectBubble} ${projectClasses.projectTechnology}`}
                        >
                          {technology}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Link>
            )
          )}
      </div>
    </div>
  );
};

ProjectRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___title] }
          filter: { frontmatter: { templateKey: { eq: "project" } } }
        ) {
          edges {
            node {
              id
            }
          }
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                type
                description
                image {
                  childImageSharp {
                    fluid(maxWidth: 480, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                technologies
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProjectRoll data={data} count={count} />}
  />
);
