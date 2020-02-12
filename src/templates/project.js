import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const ProjectTemplate = () => {
  return (
    <section>
      <div></div>
    </section>
  );
};

ProjectTemplate.propTypes = {};

const Project = ({ data }) => {
  // const { markdownRemark: post } = data;
  return (
    <Layout>
      <ProjectTemplate />
    </Layout>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Project;

// export const pageQuery = graphql`
//   query BlogPostByID($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       html
//       frontmatter {
//         title
//         description
//         technologies
//         tools
//       }
//     }
//   }
// `;
