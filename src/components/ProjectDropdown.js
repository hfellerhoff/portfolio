import React, { useState, useEffect } from 'react';
import plus from '../img/icons/plus.png';
import minus from '../img/icons/minus.png';
import classes from './ProjectDropdown.module.scss';

const ProjectDropdown = ({ dropdown: { title, text } }) => {
  const [isDroppedDown, setIsDroppedDown] = useState(false);

  return (
    <div className={classes.container}>
      <div
        className={classes.dropdownContainer}
        onClick={() => setIsDroppedDown(!isDroppedDown)}
      >
        <h2 className={classes.dropdownTitle}>{title}</h2>
        <img
          className={classes.dropdownIcon}
          src={isDroppedDown ? minus : plus}
          alt={isDroppedDown ? 'Minus' : 'Plis'}
        />
      </div>
      <p
        className={classes.dropdownText}
        style={{
          visibility: isDroppedDown ? 'visible' : 'hidden',
          display: isDroppedDown ? 'block' : 'none',
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default ProjectDropdown;
