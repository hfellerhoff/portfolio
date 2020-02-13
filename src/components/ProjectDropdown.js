import React, { useState, useEffect } from 'react';
import plus from '../img/icons/plus.png';
import minus from '../img/icons/minus.png';
import classes from './ProjectDropdown.module.scss';

const ProjectDropdown = ({ dropdown: { title, text } }) => {
  const [isDroppedDown, setIsDroppedDown] = useState(false);
  const [textRef, setTextRef] = useState(null);
  const [offsetHeight, setOffsetHeight] = useState(0);

  const updateOffsetHeight = () => {
    if (textRef) {
      setOffsetHeight(textRef.offsetHeight);
    }
  };

  useEffect(() => {
    updateOffsetHeight();
  }, [isDroppedDown]);

  return (
    <div className={classes.container}>
      <div className={classes.dropdownContainer}>
        <h2
          className={classes.dropdownTitle}
          onClick={() => setIsDroppedDown(!isDroppedDown)}
        >
          {title}
        </h2>
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
          marginTop: isDroppedDown ? 0 : -offsetHeight,
        }}
        ref={p => {
          setTextRef(p);
          updateOffsetHeight();
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default ProjectDropdown;
