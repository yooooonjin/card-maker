import React, { useState } from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src='/images/logo.png' alt='logo' />
      <p>Business Card Maker</p>
    </header>
  );
};

export default Header;
