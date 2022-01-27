import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from "./app.module.css"
import ContentBox from './components/content_box/content_box';
import BackgroundImage from './components/full_screen/background_image/background_image';
import NabvarLeft from './components/navbar_left/navbar_left';


const App = () =>{




  return <section className={styles.myApp}>
      
      {/* <div className={styles.left}><NabvarLeft/></div>
    <div className={styles.left_empty}></div>
    <div className={styles.content_box}><ContentBox/></div> */}
     <Routes>
    
    {/* <Route index element={<BackgroundImage/>}/> */}
    <Route path="/home" element={<div className={styles.left}><NabvarLeft/></div>} >


    </Route>
    

     </Routes>


  </section> 


}

export default App;

