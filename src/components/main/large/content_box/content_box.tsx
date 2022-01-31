import React from 'react';
import Biography from '../../medium/biography_folder/biography/biography';
import NavbarTop from '../navbar_top/navbar_top';

import styles from './content_box.module.css'
import { Outlet, Route, Routes } from 'react-router-dom';



const ContentBox = () => {


  return <section className={styles.content_box}>
  <div className={styles.navbar_top}><NavbarTop/></div>

  <Outlet/>
  

  </section>



}

export default ContentBox;



