import React from 'react';
import { TextLinkProps } from '../TextLink';
import { Link } from 'gatsby';
import PageTransition from 'gatsby-plugin-page-transitions';
import classes from './HeroLink.module.scss';

interface Props {
  link: TextLinkProps;
  className: string;
}

const HeroLink: React.FC<Props> = ({ link, className }) => {
  // If the link is external
  if (link.isExternal) {
    return (
      <PageTransition>
        <a
          className={`${className} ${classes.heroLink}`}
          href={link.destination}
          target='_blank'
          rel='noreferrer noopener'
        >
          <img
            src={require(`../../img/icons/${link.icon}`)}
            alt={link.shortText}
            className={classes.icon}
          />
          <span>{link.shortText}</span>
        </a>
      </PageTransition>
    );
  }

  // If the link is internal (within the site)
  return (
    <PageTransition>
      <Link
        className={`${className} ${classes.heroLink}`}
        to={link.destination}
      >
        <img
          src={require(`../../img/icons/${link.icon}`)}
          alt={link.shortText}
          className={classes.icon}
        />
        <span>{link.shortText}</span>
      </Link>
    </PageTransition>
  );
};

export default HeroLink;
