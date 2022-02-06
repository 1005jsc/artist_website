import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthService from './services/auth';

const authService = new AuthService()



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App authService={authService}/>
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);
