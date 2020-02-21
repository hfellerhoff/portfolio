import React from 'react';

import Layout from '../../components/Layout';
import ProjectRoll from '../../components/ProjectRoll';
import classes from './projects.module.scss';
import Helmet from 'react-helmet';
import PageTransition from 'gatsby-plugin-page-transitions';

const ProjectPage = () => {
  return (
    <Layout>
      <PageTransition>
        <Helmet titleTemplate='%s | Henry Fellerhoff'>
          <title>Portfolio</title>
        </Helmet>
        <div className={classes.container}>
          <h1 className={classes.pageTitle}>Portfolio</h1>
          <ProjectRoll />
        </div>
      </PageTransition>
    </Layout>
  );
};

export default ProjectPage;
