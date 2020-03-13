import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import PageTransition from 'gatsby-plugin-page-transitions';

export interface TextLinkProps {
  text: string;
  shortText: string;
  isExternal: boolean;
  destination: string;
  icon: string;
}

interface Props {
  link: TextLinkProps;
  className: string;
  showLongText?: boolean;
}

const Link: React.FC<Props> = ({ link, className, showLongText }) => {
  const text = showLongText ? link.text : link.shortText;

  // If the link is external
  if (link.isExternal) {
    return (
      <PageTransition>
        <a
          className={className}
          href={link.destination}
          target='_blank'
          rel='noreferrer noopener'
        >
          {text}
        </a>
      </PageTransition>
    );
  }

  // If the link is internal (within the site)
  return (
    <PageTransition>
      <GatsbyLink className={className} to={link.destination}>
        {text}
      </GatsbyLink>
    </PageTransition>
  );
};

export default Link;
