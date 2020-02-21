import React, { useContext } from 'react';
import TextLink, { TextLinkProps } from './TextLink';
import {
  GlobalStateContext,
  SiteFocus,
  State,
} from '../context/GlobalContextProvider';
import HeroLink from './HeroLink/HeroLink';

interface Props {
  className: string;
  codeLinks: TextLinkProps[];
  codeClassName: string;
  musicLinks: TextLinkProps[];
  musicClassName: string;
  showLongText?: boolean;
}

const MarkdownLinkContainer: React.FC<Props> = ({
  className,
  codeLinks,
  codeClassName,
  musicLinks,
  musicClassName,
  showLongText,
}) => {
  const state: State = useContext(GlobalStateContext);

  return (
    <div className={className}>
      {codeLinks && musicLinks ? (
        state.siteFocus === SiteFocus.Code ? (
          codeLinks.map(link => {
            if (showLongText) {
              return <HeroLink className={codeClassName} link={link} />;
            } else {
              return (
                <TextLink
                  className={codeClassName}
                  link={link}
                  showLongText={showLongText}
                />
              );
            }
          })
        ) : (
          musicLinks.map(link => {
            if (showLongText) {
              return <HeroLink className={codeClassName} link={link} />;
            } else {
              return (
                <TextLink
                  className={musicClassName}
                  link={link}
                  showLongText={showLongText}
                />
              );
            }
          })
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default MarkdownLinkContainer;
