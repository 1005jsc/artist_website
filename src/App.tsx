import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from "./app.module.css"
import ContentBox from './components/main/large/content_box/content_box';
import BackgroundImage from './components/front_door/background_image/background_image';
import NabvarLeft from './components/main/large/navbar_left/navbar_left';
import Main from './components/main/large/main/main';
import Biography from './components/main/medium/biography_folder/biography/biography';
import Works from './components/main/medium/works_folder/works/works';
import Exhibition from './components/main/medium/exhibitions_folder/exhibition/exhibition';
import Critics from './components/main/medium/critics_folder/critics/critics';
import Contacts from './components/main/medium/contacts_folder/contacts/contacts';
import BiographyWords from './components/main/medium/biography_folder/biography_words/biography_words';
import BiographyBio from './components/main/medium/biography_folder/biography_bio/biography_bio';
import WorkYear from './components/main/medium/works_folder/work_year/work_year';
import WorkSize from './components/main/medium/works_folder/work_size/work_size';
import WorkExhibition from './components/main/medium/works_folder/work_exhibition/work_exhibition';
import WorkExhibitionWorks from './components/main/medium/works_folder/work_exhibition_works/work_exhibition_works';
import Exhibitions from './components/main/medium/exhibitions_folder/exhibitions/exhibitions';
import Private from './components/main/medium/private_folder/private/private';
import PrivateLogin from './components/main/medium/private_folder/private_login/private_login';
import LoggedIn from './components/main/medium/private_folder/logged_in/logged_in';
import AuthService from './services/auth';



type AppProps = {
  authService : AuthService
}


const App = ({authService}:AppProps) =>{


  

  return <section className={styles.myApp}>
      
      
    <Routes>




    
      <Route index element={<BackgroundImage/>}/>

      <Route path="/main" element={<Main authService={authService}/>} >

        <Route path='' element={<Biography/>}>
          <Route path="" element={<BiographyWords/>}/>
        </Route>
        
        <Route path='biography' element={<Biography/>}>
          <Route path="" element={<BiographyWords/>}/>
          <Route path="note" element={<BiographyWords/>}/>
          <Route path="bio" element={<BiographyBio/>}/>
        </Route>
          
        
        <Route path="works" element={<Works/>}>
          <Route path="" element={<WorkYear/>}/>
          <Route path="year" element={<WorkYear/>}/>
          <Route path="larger" element={<WorkSize/>}/>
          <Route path="smaller" element={<WorkSize/>}/>
          <Route path="exhibition" element={<WorkExhibition/>}/>
          <Route path="exhibition_works" element={<WorkExhibitionWorks/>}/>
        </Route>

        
        <Route path="exhibitions" element={<Exhibitions/>}>
          <Route path="" element={<WorkExhibition/>}/>
          <Route path="exhibition_works" element={<WorkExhibitionWorks/>}/>
        </Route>


        <Route path="critics" element={<Critics/>}>
          <Route path="" element={<Critics/>}/>

        </Route>



        <Route path="contacts" element={<Contacts/>}/>
        
        <Route path="private" element={<Private authService={authService} />}>
          <Route path="" element={<PrivateLogin authService={authService}/>}/>
          <Route path="loggedin" element={<LoggedIn/>}/>
          
        </Route>
        
      
      </Route>
    
      













    </Routes>


  </section> 


}

export default App;

