import React, { useEffect, useState } from 'react';
import styles from './works.module.css'
import Work from '../work/work';
import WorkYear from '../work_year/work_year';
import WorkSize from '../work_size/work_size';
import WorkExhibition from '../work_exhibition/work_exhibition';
import WorkExhibitionWorks from '../work_exhibition_works/work_exhibition_works';
import { Outlet, useNavigate } from 'react-router-dom';
import { myFunctions} from './../../../../../common/project_functions';
import Database from '../../../../../services/database';
import { myLogics } from '../../../../../common/project_logics';

type WorksProps = {
  databaseService:Database;
}


const Works = ({databaseService}:WorksProps) => {

  const navigate = useNavigate()
  const [url, setUrl] = useState<string|null>()

  useEffect(() => {
    setUrl(window.location.href)
  })
  

  const navigateTo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.path
    if(path){
      navigate(`/main/works/${path}`)
    }
  }
  
  const urlWordSearchRegex = myLogics.urlWordSearchRegex
  const urlNow = window.location.href 
  
  const result = urlNow.match(urlWordSearchRegex)
  let yes
  if(result![1]=='/works'&&result![2]==undefined){
    yes=true
  }
  
  const array1 = ['year', 'larger', 'smaller']
  
  const array2 = array1.map((word)=> {return myFunctions.checkWordFromUrl(word, url)})

//  useOutletContext 를 맞춰줘야하기 때문에 이걸 임시로 넣음 
  const backgroundImageUpdate = (backgroundImageUrl:string) => {      
    }
// 이 함수에 손대지 마시오

    const [buttonClickTarget, setButtonClickTarget] = useState<string|undefined>('year')
    const [datasetValue, setDatasetValue] = useState<string|undefined>(undefined)
    const handleClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault()
      if(e.currentTarget.dataset.path){
        setDatasetValue(e.currentTarget.dataset.path)
      }
      
    }
    
    useEffect(() => {
      if(datasetValue){

        myFunctions.useWordFromUrl(datasetValue, url, (value)=> setButtonClickTarget(value.substring(1,value.length)))
      }
    
    
    
    
      }, [url])
    

  return <section className={styles.container}>
    {array2.includes(true)&&<div className={styles.background_img}>
    <img src="/img/artist_img/old_img/cho_yong_nam10.jpg" alt=""/>
      </div>}
    {yes&&<div className={styles.background_img}>
      <img src="/img/artist_img/old_img/cho_yong_nam10.jpg" alt=""/></div>}
    
    <div className={styles.container2}>
    <div className={styles.title_container}>
    <span className={styles.title}>작품</span>
    </div>
    <div className={styles.works_button_container}>
      <div className={styles.works_sort}>
        <button className={buttonClickTarget=='year'?`${styles.works_buttons} ${styles.works_buttons_onclick}`
        :`${styles.works_buttons} ` }data-path="year" onClick={(e) => {
          navigateTo(e)
          handleClick(e)
          }}>연도별</button>
        <button className={buttonClickTarget=='larger'?`${styles.works_buttons} ${styles.works_buttons_onclick}`:`${styles.works_buttons}`} 
        data-path="larger" onClick={(e) => {
          navigateTo(e)
          handleClick(e)
          }}>크기가 큰 순</button>
        <button className={buttonClickTarget=='smaller'?`${styles.works_buttons} ${styles.works_buttons_onclick}`:`${styles.works_buttons}`} 
        data-path="smaller" onClick={(e) => {
          navigateTo(e)
          handleClick(e)
          }}>크기가 작은 순</button>
        <button className={buttonClickTarget=='exhibition'?`${styles.works_buttons} ${styles.works_buttons_onclick}`:`${styles.works_buttons}`} 
        data-path="exhibition" onClick={(e) => {
          navigateTo(e)
          handleClick(e)
          }}>전시 출품작</button>
      </div>

      <button className={styles.fullscreen_button}>풀스크린으로 모든 작품 보기</button>
    </div>
    <div className={styles.works}>

      <Outlet context={{databaseService, backgroundImageUpdate}}/>
    </div>
    </div>
    
  </section>

}

export default Works;
