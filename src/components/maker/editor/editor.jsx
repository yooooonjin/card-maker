import React from 'react';
import EditAdd from './edit-add/edit-add';
import EditForm from './edit-form/edit-form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard }) => (
  <section className={styles.editor}>
    <div className={styles.title}>Card Maker</div>
    <section>
      {cards.map((card) => (
        <EditForm card={card} key={card.id} />
      ))}
      <EditAdd addCard={addCard} />
    </section>
  </section>
);

export default Editor;
