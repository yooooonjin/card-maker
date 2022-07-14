import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import firebaseApp from './service/firebase';
import AuthService from './service/auth-service';

const authService = new AuthService(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
