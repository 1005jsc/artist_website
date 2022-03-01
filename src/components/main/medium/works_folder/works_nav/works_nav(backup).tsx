import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { myFunctions } from '../../../../../common/project_functions';
import Database from '../../../../../services/database';
import styles from "./works_nav.module.css";


type WorksNavProps = {
  getUrl: () => void
}


const WorksNav = ({getUrl}:WorksNavProps) => {

  const [url, setUrl] = useState<string|null>()

  useEffect(() => {
    setUrl(window.location.href)
  })
  
  const navigate = useNavigate()
  
  const navigateTo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.path
    if(path){
      navigate(`/main/works/${path}`)
    }
  }

  const [buttonClickTarget, setButtonClickTarget] = useState<string|undefined>('year')
  const [datasetValue, setDatasetValue] = useState<string|undefined>(undefined)
  const handleClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    if(e.currentTarget.dataset.path){
      setDatasetValue(e.currentTarget.dataset.path)
    }
    getUrl()
  
  }



  
  
  useEffect(() => {
    if(datasetValue){
      myFunctions.useWordFromUrl(datasetValue, url, (value)=> setButtonClickTarget(value.substring(1,value.length)))
    }
  
  }, [url])


  

  return<div className={styles.works_button_container}>
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




}
export default WorksNav;