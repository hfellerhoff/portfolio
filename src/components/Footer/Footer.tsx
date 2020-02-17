import React, { useContext } from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

// @ts-ignore
import logo from '../../img/logo-long.svg';
// @ts-ignore
import github from '../../img/icons/github.png';
// @ts-ignore
import linkedin from '../../img/icons/linkedin.png';
// @ts-ignore
import classes from './Footer.module.scss';
import { GlobalStateContext } from '../../context/GlobalContextProvider';

import MarkdownLinkContainer from '../MarkdownLinkContainer';
import SocialLinkContainer from '../SocialLinkContainer/SocialLinkContainer';

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
              codeLinks {
                text
                shortText
                isExternal
                destination
              }
              musicLinks {
                text
                shortText
                isExternal
                destination
              }
            }
          }
        }
      `}
      render={({
        markdownRemark: {
          frontmatter: { codeLinks, musicLinks },
        },
      }) => (
        <footer className={classes.container}>
          <Link to='/' className={classes.logo}>
            <img src={logo} alt='HF' style={{ width: '16em' }} />
          </Link>
          <MarkdownLinkContainer
            className={classes.linkContainer}
            codeLinks={codeLinks}
            musicLinks={musicLinks}
            codeClassName={`${classes.link} ${classes.linkBlue}`}
            musicClassName={`${classes.link} ${classes.linkGreen}`}
          />
          <SocialLinkContainer />
        </footer>
      )}
    />
  );
};

export default Footer;
