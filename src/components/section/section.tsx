import React from 'react';
import BiographyBio from '../biography_bio/biography_bio';
import BiographyPicture from '../biography_picture/biography_picture';
import BiographyWords from '../biography_words/biography_words';
import styles from './section.module.css'


const Section = () => {

  return <section className={styles.section}>
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

export default Section;