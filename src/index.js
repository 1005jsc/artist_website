import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthService from './services/auth';
import Database from './services/database';
import WorkImageUpload from './services/work_image_uploads';
import ExhibitionImageUpload from './services/exhibition_image_uploads';

const authService = new AuthService()
const databaseService = new Database()
const workImageUploadService = new WorkImageUpload()
const exhibitionImageUploadService = new ExhibitionImageUpload()
export const totalIntroductionPageCount = 21
// export const totalIntroductionPageCount = 23

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App 
    authService={authService} 
    databaseService={databaseService} 
    workImageUploadService={workImageUploadService}
    exhibitionImageUploadService={exhibitionImageUploadService}/>
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);
