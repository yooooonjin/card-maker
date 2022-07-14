import React from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Login = ({ authService }) => {
  const onLogin = (event) => {
    console.log('textContent:' + event.currentTarget.textContent);
    authService.login(event.currentTarget.textContent);
  };

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
