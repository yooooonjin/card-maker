import React, { useCallback, useEffect, useState } from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent) //
      .then((data) => {
        goToMaker(data.user.uid);
      });
  };
  const goToMaker = (userId) => {
    navigate('/maker', { state: { id: userId } });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.container}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.login}>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
