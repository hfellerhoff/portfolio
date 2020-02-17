import React from 'react';
// @ts-ignore
import classes from './ContactCard.module.scss';

interface Props {}

const ContactCard: React.FC<Props> = () => {
  return <div className={classes.card}></div>;
};

export default ContactCard;
