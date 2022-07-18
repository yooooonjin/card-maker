import React from 'react';
import Button from '../../../button/button';
import styles from './edit-form.module.css';

const EditForm = ({ FileInput, card, deleteCard, createOrUpdateCard }) => {
  const { name, company, title, email, message, fileName, theme } = card;

  const onFileChange = (file) => {
    createOrUpdateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget.name === null) {
      return;
    }
    event.preventDefault();
    createOrUpdateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    deleteCard(card);
  };

  return (
    <form className={styles.editForm}>
      <input
        className={styles.input}
        type='text'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='text'
        name='company'
        value={company}
        onChange={onChange}
      />
      <select className={styles.select} name='theme' value={theme}>
        <option value='Dark'>Dark</option>
        <option value='White'>White</option>
        <option value='Colorful'>Colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='title'
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='text'
        name='email'
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name='message'
        value={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} fileName={fileName} />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default EditForm;
