import React from 'react';
import styles from './works.module.css'
import Work from '../work/work';
import WorkYear from '../work_year/work_year';
import WorkSize from '../work_size/work_size';
import WorkExhibition from '../work_exhibition/work_exhibition';
import WorkExhibitionWorks from '../work_exhibition_works/work_exhibition_works';
import { Outlet, useNavigate } from 'react-router-dom';
import { myFunctions } from './../../../../../common/project_functions';

const Works = () => {

  const navigate = useNavigate()

  

  const navigateTo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.path
    if(path){
      navigate(`/main/works/${path}`)
    }
  }

  
  const array1 = ['year', 'larger', 'smaller']
  const array2 = array1.map((word)=> {return myFunctions.checkWordFromUrl(word)})


  console.log(array2)
  return <section className={styles.container}>
    {array2.includes(true)&&<div className={styles.background_img}></div>}
    
    <div className={styles.works_container}>
    <span className={styles.title}>작품</span>
    <div className={styles.works_button_container}>
      <div className={styles.works_sort}>
        <button className={`${styles.works_buttons} ${styles.works_buttons_onClick} ${styles.year}`}data-path="year" onClick={navigateTo}>연도별</button>
        <button className={`${styles.works_buttons} ${styles.bigger}`} data-path="larger" onClick={navigateTo}>크기가 큰 순</button>
        <button className={`${styles.works_buttons} ${styles.smaller}`} data-path="smaller" onClick={navigateTo}>크기가 작은 순</button>
        <button className={`${styles.works_buttons} ${styles.exhibition}`} data-path="exhibition" onClick={navigateTo}>전시 출품작</button>
      </div>

      <button className={styles.fullscreen_button}>풀스크린으로 모든 작품 보기</button>
    </div>
    <div className={styles.works}>

      <Outlet/>
      {/* 이동용 <WorkYear/><WorkSize/><WorkExhibition/> */}
    </div>
    </div>
    
  </section>

}

export default Works;
