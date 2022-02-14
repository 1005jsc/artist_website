import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthService from './services/auth';
import Database from './services/database';
import ImageUpload from './services/image_uploads';

const authService = new AuthService()
const databaseService = new Database()
const imageUploadService = new ImageUpload()


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App authService={authService} databaseService={databaseService} imageUploadService={imageUploadService}/>
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);
