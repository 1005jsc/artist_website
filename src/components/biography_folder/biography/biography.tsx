import React from 'react';
import BiographyBio from '../biography_bio/biography_bio';
import BiographyWords from '../biography_words/biography_words';
import styles from './biography.module.css'
import BiographyPicture from '../biography_picture/biography_picture';


const Biography = () => {

  return <section className={styles.biography}>
    {/* <div className={styles.bio_words_container}>
    <BiographyWords/>
    </div> */}
    <div className={styles.bio_words_container}>
    <BiographyBio/>
    </div>

    <div className={styles.bio_picture_container}>
    <BiographyPicture/>
    </div>
  </section>

}

export default Biography;