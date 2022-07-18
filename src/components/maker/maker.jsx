import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Editor from './editor/editor';
import Preview from './preview/preview';
import userEvent from '@testing-library/user-event';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const location = useLocation();
  const locationState = location?.state;

  const navigate = useNavigate();
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(locationState && locationState.id);

  const onLogout = () => {
    authService.logout();
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const deleted = { ...cards };
      delete deleted[card.id];
      return deleted;
    });
    cardRepository.removeCard(userId, card);
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCard(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  }, [authService, userId, navigate]);
  return (
    <section className={styles.container}>
      <Header onLogout={onLogout} />
      <section className={styles.maker}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          setCards={setCards}
          deleteCard={deleteCard}
          createOrUpdateCard={createOrUpdateCard}
        />
        <div className={styles.line}></div>
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
