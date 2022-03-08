import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { myLogics } from '../../../../../common/project_logics';
import { TypeOfWork } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import styles from "./works_nav.module.css";


type WorksNavProps = {
  getUrl: string
  databaseService: Database
}


const WorksNav = ({getUrl, databaseService}:WorksNavProps) => {

  const [works, setWorks] = useState<TypeOfWork[]>([])

  const [searchParams, setSearchParams] = useSearchParams()

  const [toggleFullscreen, setToggleFullscreen] = useState<boolean>(true) 

  useEffect(() => {
    const work_id = searchParams.get('work_id')
    if(work_id){
      setToggleFullscreen(false)
    }
    return () => {setToggleFullscreen(true)}
  })



  useEffect(() => {
    const yes = databaseService.getWorkData((data) => {
      const yearAndWorksSortedByYearResult = myLogics.yearAndWorksSortedByYear(data)
    setWorks(myLogics.worksSortedByYear(yearAndWorksSortedByYearResult))
    })
    return () => yes()
  }, [])
  
  const navigate = useNavigate()
  
  const navigateTo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.path
    if(path){
      navigate(`/main/works/${path}`)
    }
  }

  const [buttonClickTarget, setButtonClickTarget] = useState<string|null>(null)
  useEffect(() => {
    const url = getUrl.split('/')
  if(url.includes('year')){
    setButtonClickTarget('year')
  }else if (url.includes('larger')){
    setButtonClickTarget('larger')
  }else if (url.includes('smaller')){
    setButtonClickTarget('smaller')
  }else if (url.includes('exhibition')){
    setButtonClickTarget('exhibition')
  }
  

  })

  const navigateToFullscreen:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    navigate(`/main/works/fullscreen`,{
      state:[works, null]
    } )





  }
  

  

  return<div className={styles.works_button_container}>
  <div className={styles.works_sort}>
    <button className={buttonClickTarget=='year'||buttonClickTarget==null?`${styles.works_buttons} ${styles.works_buttons_onclick}`
    :`${styles.works_buttons} ` }data-path="year" onClick={(e) => {
      navigateTo(e)
      }}>연도별</button>
    <button className={buttonClickTarget=='larger'?`${styles.works_buttons} ${styles.works_buttons_onclick}`:`${styles.works_buttons}`} 
    data-path="larger" onClick={(e) => {
      navigateTo(e)
      }}>크기가 큰 순</button>
    <button className={buttonClickTarget=='smaller'?`${styles.works_buttons} ${styles.works_buttons_onclick}`:`${styles.works_buttons}`} 
    data-path="smaller" onClick={(e) => {
      navigateTo(e)
      }}>크기가 작은 순</button>
    <button className={buttonClickTarget=='exhibition'?`${styles.works_buttons} ${styles.works_buttons_onclick}`:`${styles.works_buttons}`} 
    data-path="exhibition" onClick={(e) => {
      navigateTo(e)
      }}>전시 출품작</button>
  </div>

    {toggleFullscreen&&<button className={styles.fullscreen_button} data-path="fullscreen"onClick={(e) => {
      navigateToFullscreen(e)
      }} >풀스크린으로 모든 작품 보기</button>}
  
</div>




}
export default WorksNav;