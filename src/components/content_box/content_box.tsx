import React from 'react';
import NavbarTop from '../navbar_top/navbar_top';
import Section from '../section/section';

import styles from './content_box.module.css'



const ContentBox = () => {

  return <section className={styles.content_box}>
  <div className={styles.navbar_top}><NavbarTop/></div>
  <div className={styles.section}><Section/></div>
  

  </section>



}

export default ContentBox;