import React from 'react';
import styles from './Hero.module.scss';
import { Link } from 'gatsby';

const Hero = ({ logo, pretitle, subtitle, subtitleEmphasis }) => {
  const addSubtitleEmphasis = text => {
    const words = [];
    let word = '';

    // Loop through text in the subtitle
    for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i);

      // If punctuation, process previous word
      if (char === ' ' || char === ',' || char === '.') {
        words.push(word);
        words.push(char);
        word = '';
      } else {
        word += char;
      }
    }

    let isPrimaryEmphasis = true;
    for (const i in subtitleEmphasis) {
      const emphasis = subtitleEmphasis[i];
      const index = words.indexOf(emphasis.word);

      if (index >= 0) {
        if (isPrimaryEmphasis) {
          words[index] = (
            <Link
              className={`${styles.heroEmphasis} ${styles.heroEmphasisBlue}`}
              to={emphasis.destination}
            >
              {emphasis.word}
            </Link>
          );
        } else {
          words[index] = (
            <Link
              className={`${styles.heroEmphasis} ${styles.heroEmphasisGreen}`}
              to={emphasis.destination}
            >
              {emphasis.word}
            </Link>
          );
        }
        isPrimaryEmphasis = !isPrimaryEmphasis;
      }
    }

    return words;
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
