import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Editor from './editor/editor';
import Preview from './preview/preview';

const Maker = ({ authService }) => {
  const navigate = useNavigate();

  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

  const onLogout = () => {
    authService.logout();
  };

  const CreateOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const deleted = { ...cards };
      delete deleted[card.id];
      return deleted;
    });
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
        <Editor
          cards={cards}
          setCards={setCards}
          deleteCard={deleteCard}
          CreateOrUpdateCard={CreateOrUpdateCard}
        />
        <div className={styles.line}></div>
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
