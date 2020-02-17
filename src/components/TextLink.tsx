import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

export interface TextLinkProps {
  text: string;
  shortText: string;
  isExternal: boolean;
  destination: string;
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
      <a
        className={className}
        href={link.destination}
        target='_blank'
        rel='noreferrer noopener'
      >
        {text}
      </a>
    );
  }

  // If the link is internal (within the site)
  return (
    <GatsbyLink className={className} to={link.destination}>
      {text}
    </GatsbyLink>
  );
};

export default Link;
