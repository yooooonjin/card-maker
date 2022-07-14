import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import Maker from './components/maker/maker';
import Login from './components/login/login';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login authService={authService} />} />
          <Route path='/login' element={<Login authService={authService} />} />
          <Route path='/maker' element={<Maker authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
