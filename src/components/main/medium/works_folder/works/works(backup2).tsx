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

  const location = useLocation()
  console.log(location.pathname)


  
  const [url, setUrl] = useState<string|null>()







  // url불러오기
  useEffect(() => {
    setUrl(window.location.href)
  })

  const handleGetUrl = ()=> {
    setUrl(window.location.href)
  }

  //배경그림 보여주기 
  const urlWordSearchRegex = myLogics.urlWordSearchRegex
  const urlNow = window.location.href 
  
  const result = urlNow.match(urlWordSearchRegex)
  let yes
  if(result![1]=='/works'&&result![2]==undefined){
    
    yes=true
  }

const [array2, setArray2] = useState<any[]>([])
const [wordWorkCheck, setWordWorkCheck] = useState<boolean>(false)

  useEffect(() => {
    const array1 = ['year', 'larger', 'smaller']
    setArray2(array1.map((word)=> {return myFunctions.checkWordFromUrl(word, url)}))
  
    if(myFunctions.checkWordFromUrl('work', url)){
      setWordWorkCheck(true)
    }else{
      
      setWordWorkCheck(false)
    }
  
  
  }, [url])

  

//  useOutletContext 를 맞춰줘야하기 때문에 이걸 임시로 넣음 
  const backgroundImageUpdate = (backgroundImageUrl:string) => {      
    }
// 이 함수에 손대지 마시오
    
 




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
    
    {/* {!wordWorkCheck&&<WorksNav getUrl={handleGetUrl} />} */}


    <div className={styles.works}>

      <Outlet context={{databaseService, backgroundImageUpdate}}/>
    </div>
    </div>
    
  </section>

}

export default Works;
