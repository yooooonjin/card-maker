import React from 'react';
import EditAdd from './edit-add/edit-add';
import EditForm from './edit-form/edit-form';
import styles from './editor.module.css';

const Editor = ({ cards, deleteCard, CreateOrUpdateCard }) => (
  <section className={styles.editor}>
    <div className={styles.title}>Card Maker</div>
    <section>
      {Object.keys(cards).map((key) => (
        <EditForm
          card={cards[key]}
          key={key}
          deleteCard={deleteCard}
          CreateOrUpdateCard={CreateOrUpdateCard}
        />
      ))}
      <EditAdd CreateOrUpdateCard={CreateOrUpdateCard} />
    </section>
  </section>
);

export default Editor;
