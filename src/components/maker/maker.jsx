import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Editor from './editor/editor';
import Preview from './preview/preview';

const Maker = ({ authService }) => {
  const navigate = useNavigate();

  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Yoonjin',
      company: 'Samsung Electronics',
      theme: 'Dark',
      title: 'Software Engineer',
      email: 'yoonjin950109@gmail.com',
      message: 'I love coding',
      fileName: 'yoonjin',
      fileURL: 'yoonjin.png',
    },
    {
      id: '2',
      name: 'Yoonjin',
      company: 'Samsung Electronics',
      theme: 'White',
      title: 'Software Engineer',
      email: 'yoonjin950109@gmail.com',
      message: 'I love coding',
      fileName: 'yoonjin',
      fileURL: 'yoonjin.png',
    },
    {
      id: '3',
      name: 'Yoonjin',
      company: 'Samsung Electronics',
      theme: 'Colorful',
      title: 'Software Engineer',
      email: 'yoonjin950109@gmail.com',
      message: 'I love coding',
      fileName: 'yoonjin',
      fileURL: 'yoonjin.png',
    },
  ]);

  const onLogout = () => {
    authService.logout();
  };

  const onAdd = (card) => {
    const add = [...cards, card];
    setCards(add);
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
        <Editor cards={cards} setCards={setCards} addCard={onAdd} />
        <div className={styles.line}></div>
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
