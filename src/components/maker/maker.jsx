import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Editor from './editor/editor';
import Preview from './preview/preview';

const Maker = ({ authService }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });
  return (
    <section className={styles.container}>
      <Header onLogout={onLogout} />
      <section className={styles.maker}>
        <Editor />
        <div className={styles.line}></div>
        <Preview />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
