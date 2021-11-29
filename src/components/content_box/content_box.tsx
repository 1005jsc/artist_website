import React from 'react';
import Biography from '../biography_folder/biography/biography';
import Exhibitions from '../exhibitions_folder/exhibitions/exhibitions';
import NavbarTop from '../navbar_top/navbar_top';
import Works from '../works_folder/works/works';

import styles from './content_box.module.css'



const ContentBox = () => {

  return <section className={styles.content_box}>
  <div className={styles.navbar_top}><NavbarTop/></div>
  {/* <div className={styles.navbar_containers}><Biography/></div> */}
  <div className={styles.navbar_containers}><Exhibitions/></div>
  

  </section>



}

export default ContentBox;