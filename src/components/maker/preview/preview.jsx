import React from 'react';
import Card from './card/card';
import styles from './preview.module.css';

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <div className={styles.title}>Card Preview</div>
    <section>
      {Object.keys(cards).map((key) => (
        <Card card={cards[key]} key={key} />
      ))}
    </section>
  </section>
);

export default Preview;
