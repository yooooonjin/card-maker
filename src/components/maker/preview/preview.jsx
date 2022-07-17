import React from 'react';
import Card from './card/card';
import styles from './preview.module.css';

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <div className={styles.title}>Card Preview</div>
    <section>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </section>
  </section>
);

export default Preview;
