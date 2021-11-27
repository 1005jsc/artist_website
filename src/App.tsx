import React, { Component } from 'react';
import styles from "./app.module.css"
import ContentBox from './components/content_box/content_box';
import NabvarLeft from './components/navbar_left/navbar_left';


const App = () =>{




  return <section className={styles.myApp}>
    <div className={styles.left}><NabvarLeft/></div>
    <div className={styles.left_empty}></div>
    <div className={styles.content_box}><ContentBox/></div>
    


  </section> 


}

export default App;

