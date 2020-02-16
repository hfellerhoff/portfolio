import React, { useContext } from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

import logo from '../../img/logo-long.svg';
import github from '../../img/icons/github.png';
import linkedin from '../../img/icons/linkedin.png';
import classes from './Footer.module.scss';
import {
  GlobalStateContext,
  SiteFocus,
} from '../../context/GlobalContextProvider';

const Footer = () => {
  const state = useContext(GlobalStateContext);

  return (
    <StaticQuery
      query={graphql`
        query Footer {
          markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
              codeLinks {
                shortText
                destination
              }
              musicLinks {
                shortText
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
          <div className={classes.linkContainer}>
            {codeLinks && musicLinks ? (
              state.siteFocus === SiteFocus.Code ? (
                codeLinks.map(link => {
                  return (
                    <Link
                      className={`${classes.link} ${classes.linkBlue}`}
                      to={link.destination}
                    >
                      {link.shortText}
                    </Link>
                  );
                })
              ) : (
                musicLinks.map(link => {
                  return (
                    <Link
                      className={`${classes.link} ${classes.linkGreen}`}
                      to={link.destination}
                    >
                      {link.shortText}
                    </Link>
                  );
                })
              )
            ) : (
              <></>
            )}
          </div>
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
