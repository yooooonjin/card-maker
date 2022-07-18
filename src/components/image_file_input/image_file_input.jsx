import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ fileName, onFileChange, imageUpLoader }) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const uploaded = await imageUpLoader.upload(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type='file'
        accept='image/*'
        name='file'
        onChange={onChange}
      ></input>
      <button className={styles.button} onClick={onButtonClick}>
        {fileName || 'No File'}
      </button>
    </div>
  );
};

export default ImageFileInput;
