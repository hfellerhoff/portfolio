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
import {
  GlobalStateContext,
  SiteFocus,
} from '../../context/GlobalContextProvider';

import MarkdownLinkContainer from '../MarkdownLinkContainer';

const Footer = () => {
  const state = useContext(GlobalStateContext);

  return (
    <StaticQuery
      query={graphql`
        query Footer {
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
          <div className={classes.socialContainer}>
            <a
              href='https://github.com/hfellerhoff'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img src={github} className={classes.socialIcon} />
            </a>
            <a
              href='https://www.linkedin.com/in/henry-fellerhoff-b43365174/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img src={linkedin} className={classes.socialIcon} />
            </a>
          </div>
        </footer>
      )}
    />
  );
};

export default Footer;
