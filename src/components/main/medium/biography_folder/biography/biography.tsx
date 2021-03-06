import React from 'react';
import styles from './biography.module.css'
import BiographyPicture from '../biography_picture/biography_picture';
import { Outlet } from 'react-router-dom';


const Biography = () => {

  return <section className={styles.biography}>
    <div className={styles.bio_words_container}>
  
    <Outlet/>
    </div>


    <div className={styles.bio_picture_container}>
    <BiographyPicture/>
    </div>
  </section>

}

export default Biography;














