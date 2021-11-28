import React from 'react';
import Biography from '../biography_folder/biography/biography';
import NavbarTop from '../navbar_top/navbar_top';

import styles from './content_box.module.css'



const ContentBox = () => {

  return <section className={styles.content_box}>
  <div className={styles.navbar_top}><NavbarTop/></div>
  <div className={styles.biography}><Biography/></div>
  

  </section>



}

export default ContentBox;