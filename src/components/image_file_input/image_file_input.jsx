import React from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ fileName }) => (
  <button className={styles.button}>{fileName}</button>
);

export default ImageFileInput;
