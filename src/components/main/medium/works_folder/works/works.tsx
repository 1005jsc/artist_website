import React, { useEffect, useState } from 'react';
import styles from './works.module.css'
import { Outlet, useLocation } from 'react-router-dom';
import Database from '../../../../../services/database';
import WorksNav from '../works_nav/works_nav';

type WorksProps = {
  databaseService:Database;
}


const Works = ({databaseService}:WorksProps) => {


  const [showBackgroundPic, setShowBackgroundPic] = useState<boolean>(false)
  const location = useLocation()
  
  
  const urlNow = location.pathname
  

  useEffect(() => {
    if(urlNow === '/home/works'||urlNow === '/home/works/year'||urlNow === '/home/works/larger'||urlNow === '/home/works/smaller'){
      setShowBackgroundPic(true)
    }else{
      setShowBackgroundPic(false)
    }
  })
    



  

//  useOutletContext 형식을 맞춰줘야하기 때문에 이걸 임시로 넣음 
  const backgroundImageUpdate = (backgroundImageUrl:string) => {      
    }
// 이 함수에 손대지 마시오
    
 



  return <section className={styles.container}>
    
    {showBackgroundPic&&<div className={styles.background_img}>
      <img src="/img/artist_img/old_img/cho_yong_nam10.jpg" alt=""/></div>}
    
    <div className={styles.container2}>
    <div className={styles.title_container}>
    <span className={styles.title}>작품</span>
    </div>
    
    <WorksNav databaseService={databaseService} getUrl={urlNow}/>

    <div className={styles.works}>

      <Outlet context={{databaseService, backgroundImageUpdate}}/>
    </div>
    </div>
    
  </section>

}

export default Works;
