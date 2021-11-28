import React from 'react';
import styles from './works.module.css'
import Work from './../work/work';

const Works = () => {

  return <section className={styles.works_container}>
    <h1 className={styles.title}>작품</h1>
    <div className={styles.work_division_container}>
      <div className={styles.work_sort}>
        <button className={`${styles.work_sort_buttons} ${styles.year}`}>연도별</button>
        <button className={`${styles.work_sort_buttons} ${styles.bigger}`}>크기가 큰 순</button>
        <button className={`${styles.work_sort_buttons} ${styles.smaller}`}>크기가 작은 순</button>
        <button className={`${styles.work_sort_buttons} ${styles.exhibition}`}>전시 출품작</button>
      </div>
      <div className={styles.work_line_up}>
      
        <button className={`${styles.view} ${styles.two}`}>두줄보기</button>
        <button className={`${styles.view} ${styles.three}`}>세줄보기</button>
        <button className={`${styles.view} ${styles.four}`}>네줄보기</button>
      </div>

    </div>
    <p className={styles.year}>2021</p>
    <div className={`${styles.work_bundle}`}>
      <Work/>
      <Work/>
      <Work/>
      <Work/>
      <Work/>
    </div>
    <p className={styles.year}>2020</p>
    <div className={`${styles.work_bundle}`}></div>
    <p className={styles.year}>2019</p>
    <div className={`${styles.work_bundle}`}></div>
    <p className={styles.year}>1988</p>
    <div className={`${styles.work_bundle}`}></div>


  </section>

}

export default Works;
