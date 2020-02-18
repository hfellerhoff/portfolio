import React from 'react';
// @ts-ignore
import classes from './AboutCard.module.scss';

interface Props {
  element: {
    icon: string;
    pretext: string;
    title: string;
    subtitlePretext: string;
    subtitle: string;
  };
  titleIsBlue: boolean;
}

const AboutCard: React.FC<Props> = ({ element, titleIsBlue }) => {
  const src = require(`../../img/icons/${element.icon}`);
  return (
    <div className={classes.card}>
      <div className={classes.iconContainer}>
        <img className={classes.icon} src={src} alt={classes.cardMethod} />
      </div>
      <div className={classes.textContainer}>
        <h3 className={classes.pretext}>{element.pretext}</h3>
        <h1
          className={`${classes.cardTitle} ${
            titleIsBlue ? classes.blueText : classes.greenText
          }`}
        >
          {element.title}
        </h1>
        <h5 className={classes.subtitlePretext}>{element.subtitlePretext}</h5>
        <h3
          className={`${classes.subtitle} ${
            titleIsBlue ? classes.blueSubtitleText : classes.greenSubtitleText
          }`}
        >
          {element.subtitle}
        </h3>
      </div>
    </div>
  );
};

export default AboutCard;
