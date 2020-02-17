import React, { useContext } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import {
  GlobalStateContext,
  SiteFocus,
} from '../../context/GlobalContextProvider';
//@ts-ignore
import classes from './SocialLinkContainer.module.scss';

interface Props {}

const SocialLinkContainer: React.FC<Props> = () => {
  const state = useContext(GlobalStateContext);
  const colorClassName =
    state.siteFocus === SiteFocus.Code
      ? classes.blueHighlight
      : classes.greenHighlight;

  return (
    <div className={classes.socialContainer}>
      <StaticQuery
        query={graphql`
          query {
            markdownRemark(
              frontmatter: { templateKey: { eq: "contact-page" } }
            ) {
              frontmatter {
                codeContactMethods {
                  text
                  method
                  href
                  iconName
                }
                musicContactMethods {
                  text
                  method
                  href
                  iconName
                }
              }
            }
          }
        `}
        render={({
          markdownRemark: {
            frontmatter: { codeContactMethods, musicContactMethods },
          },
        }) =>
          codeContactMethods && musicContactMethods ? (
            state.siteFocus === SiteFocus.Code ? (
              codeContactMethods.map(method => {
                const icon = require(`../../img/icons/${method.iconName}`);
                return (
                  <a
                    href={method.href}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <img
                      src={icon}
                      className={`${classes.socialIcon} ${colorClassName}`}
                    />
                  </a>
                );
              })
            ) : (
              musicContactMethods.map(method => {
                const icon = require(`../../img/icons/${method.iconName}`);
                return (
                  <a
                    href={method.href}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <img
                      src={icon}
                      className={`${classes.socialIcon} ${colorClassName}`}
                    />
                  </a>
                );
              })
            )
          ) : (
            <></>
          )
        }
      />
    </div>
  );
};

export default SocialLinkContainer;
