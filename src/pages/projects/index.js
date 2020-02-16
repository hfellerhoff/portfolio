import React from 'react';

import Layout from '../../components/Layout';
import ProjectRoll from '../../components/ProjectRoll';
import classes from './projects.module.scss';
import Helmet from 'react-helmet';

const ProjectPage = () => {
  return (
    <Layout>
      <Helmet titleTemplate='%s | Henry Fellerhoff'>
        <title>Projects</title>
      </Helmet>
      <div className={classes.container}>
        <h1 className={classes.pageTitle}>Projects</h1>
        <ProjectRoll />
      </div>
    </Layout>
  );
};

export default ProjectPage;
