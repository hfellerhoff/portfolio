import React from 'react';
import styles from './Hero.module.scss';
import { Link } from 'gatsby';

const Hero = ({ logo, pretitle, subtitle, subtitleEmphasis }) => {
  const addSubtitleEmphasis = text => {
    const elementsToReturn = [];
    let word = '';
    // Loop through text in the subtitle
    for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i);

      // If punctuation, process previous word
      if (char === ' ' || char === ',' || char === '.') {
        if (word.toLowerCase() === subtitleEmphasis[0][0]) {
          elementsToReturn.push(
            <Link
              className={`${styles.heroEmphasis} ${styles.heroEmphasisBlue}`}
              to={`/${subtitleEmphasis[0][1]}`}
            >
              {word}
            </Link>
          );
        } else if (word.toLowerCase() === subtitleEmphasis[1][0]) {
          elementsToReturn.push(
            <Link
              className={`${styles.heroEmphasis} ${styles.heroEmphasisGreen}`}
              to={`/${subtitleEmphasis[0][1]}`}
            >
              {word}
            </Link>
          );
        } else {
          elementsToReturn.push(<span>{word}</span>);
        }
        elementsToReturn.push(<span>{char}</span>);
        word = '';
      } else {
        word += char;
      }
    }
    return elementsToReturn;
  };

  return (
    <div className={styles.hero}>
      <h3 className={styles.heroPretitle}>{pretitle}</h3>
      <img src={logo} alt='Henry Fellerhoff' className={styles.heroLogo} />
      <h3 className={styles.heroSubtitle}>{addSubtitleEmphasis(subtitle)}</h3>
    </div>
  );
};

export default Hero;

/*
A self-driven student and developer passionate about{' '}
        <span className={`${styles.heroEmphasis} ${styles.heroEmphasisBlue}`}>
          technology
        </span>{' '}
        and{' '}
        <span className={`${styles.heroEmphasis} ${styles.heroEmphasisGreen}`}>
          music
        </span>
        .
*/
