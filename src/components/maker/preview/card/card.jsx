import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = ({ card }) => {
  const { name, company, title, email, message, fileURL, theme } = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <section className={`${styles.card} ${getStyles(theme)}`}>
      <div>
        <img className={styles.file} src={url}></img>
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{name}</div>
        <div className={styles.company}>{company}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.email}>{email}</div>
        <div className={styles.message}>"{message}"</div>
      </div>
    </section>
  );
};

function getStyles(theme) {
  switch (theme) {
    case 'Dark':
      return styles.dark;
      break;
    case 'White':
      return styles.white;
      break;
    case 'Colorful':
      return styles.colorful;
      break;
  }
}
export default Card;
