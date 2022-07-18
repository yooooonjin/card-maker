import React from 'react';
import EditAdd from './edit-add/edit-add';
import EditForm from './edit-form/edit-form';
import styles from './editor.module.css';

const Editor = ({ FileInput, cards, deleteCard, createOrUpdateCard }) => (
  <section className={styles.editor}>
    <div className={styles.title}>Card Maker</div>
    <section>
      {Object.keys(cards).map((key) => (
        <EditForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          deleteCard={deleteCard}
          createOrUpdateCard={createOrUpdateCard}
        />
      ))}
      <EditAdd FileInput={FileInput} createOrUpdateCard={createOrUpdateCard} />
    </section>
  </section>
);

export default Editor;
