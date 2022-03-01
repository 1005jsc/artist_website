import React, { useEffect, useState } from 'react';
import styles from './works.module.css'
import Work from '../work/work';
import WorkYear from '../work_year/work_year';
import WorkSize from '../work_size/work_size';
import WorkExhibition from '../work_exhibition/work_exhibition';
import WorkExhibitionWorks from '../work_exhibition_works/work_exhibition_works';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { myFunctions} from './../../../../../common/project_functions';
import Database from '../../../../../services/database';
import { myLogics } from '../../../../../common/project_logics';
import WorksNav from '../works_nav/works_nav';

type WorksProps = {
  databaseService:Database;
}


const Works = ({databaseService}:WorksProps) => {


  const [showBackgroundPic, setShowBackgroundPic] = useState<boolean>(false)
  const location = useLocation()
  
  
  const urlNow = location.pathname
  

  useEffect(() => {
    if(urlNow === '/main/works'||urlNow === '/main/works/year'||urlNow === '/main/works/larger'||urlNow === '/main/works/smaller'){
      setShowBackgroundPic(true)
    }else{
      setShowBackgroundPic(false)
    }
  })
    

  // 조건 2. works_nav 에 전달해주가 
  //배경그림 보여주기 
  



  

//  useOutletContext 를 맞춰줘야하기 때문에 이걸 임시로 넣음 
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
    
    {/* {!wordWorkCheck&&<WorksNav getUrl={handleGetUrl} />} */}
    <WorksNav getUrl={urlNow}/>

    <div className={styles.works}>

      <Outlet context={{databaseService, backgroundImageUpdate}}/>
    </div>
    </div>
    
  </section>

}

export default Works;
