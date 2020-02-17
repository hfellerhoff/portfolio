import React from 'react';
// @ts-ignore
import classes from './ContactCard.module.scss';

interface Props {
  details: {
    text: string;
    method: string;
    href: string;
    iconName: string;
  };
  titleIsBlue: boolean;
}

const ContactCard: React.FC<Props> = ({
  details: { text, method, href, iconName },
  titleIsBlue,
}) => {
  const src = require(`../../img/icons/${iconName}`);
  return (
    <a
      className={classes.card}
      href={href}
      target='_blank'
      rel='noreferrer noopener'
    >
      <div className={classes.iconContainer}>
        <img className={classes.icon} src={src} alt={classes.cardMethod} />
      </div>
      <div className={classes.textContainer}>
        <p className={classes.cardText}>{text}</p>
        <h1
          className={`${classes.cardMethod} ${
            titleIsBlue ? classes.blueText : classes.greenText
          }`}
        >
          {method}
        </h1>
      </div>
    </a>
  );
};

export default ContactCard;
