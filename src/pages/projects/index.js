import React from 'react';

import Layout from '../../components/Layout';
import ProjectRoll from '../../components/ProjectRoll';
import classes from './projects.module.scss';

const ProjectPage = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <h1 className={classes.pageTitle}>Projects</h1>
        <ProjectRoll />
      </div>
    </Layout>
  );
};

export default ProjectPage;
