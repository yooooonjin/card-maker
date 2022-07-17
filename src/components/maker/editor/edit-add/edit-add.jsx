import React, { useRef } from 'react';
import Button from '../../../button/button';
import ImageFileInput from '../../../image_file_input/image_file_input';
import styles from './edit-add.module.css';

const EditAdd = ({ CreateOrUpdateCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value,
      theme: themeRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };
    CreateOrUpdateCard(card);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className={styles.editForm}>
      <input
        ref={nameRef}
        className={styles.input}
        type='text'
        name='name'
        placeholder='name'
      />
      <input
        ref={companyRef}
        className={styles.input}
        type='text'
        name='company'
        placeholder='company'
      />
      <select ref={themeRef} className={styles.select} name='theme'>
        <option defaultValue='Dark'>Dark</option>
        <option defaultValue='White'>White</option>
        <option defaultValue='Colorful'>Colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type='text'
        name='title'
        placeholder='title'
      />
      <input
        ref={emailRef}
        className={styles.input}
        type='text'
        name='email'
        placeholder='email'
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name='message'
        placeholder='message'
      />
      <div className={styles.fileInput}>
        <ImageFileInput fileName='image' />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
};

export default EditAdd;
