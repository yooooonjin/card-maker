import React from 'react';
import Button from '../../../button/button';
import ImageFileInput from '../../../image_file_input/image_file_input';
import styles from './edit-form.module.css';

const EditForm = ({ card }) => {
  const { name, company, title, email, message, fileName, theme } = card;
  const onSubmit = () => {};
  return (
    <form className={styles.editForm}>
      <input
        className={styles.input}
        type='text'
        name='name'
        defaultValue={name}
      />
      <input
        className={styles.input}
        type='text'
        name='company'
        defaultValue={company}
      />
      <select className={styles.select} name='theme' defaultValue={theme}>
        <option defaultValue='Dark'>Dark</option>
        <option defaultValue='White'>White</option>
        <option defaultValue='Colorful'>Colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='title'
        defaultValue={title}
      />
      <input
        className={styles.input}
        type='text'
        name='email'
        defaultValue={email}
      />
      <textarea
        className={styles.textarea}
        name='message'
        defaultValue={message}
      />
      <div className={styles.fileInput}>
        <ImageFileInput fileName={fileName} />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default EditForm;
