import React, { useEffect, useState } from "react"
import {  useOutletContext } from 'react-router-dom';
import { myLogics } from '../../../../../common/project_logics';
import { TypeOfExhibition, TypeOfExhibitions } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import ExhibitionBundleContainer from '../../exhibitions_folder/exhibition_bundle_container/exhibition_bundle_container';
import styles from "./work_exhibition.module.css";

export type ContextType = {databaseService:Database, backgroundImageUpdate: (backgroundImageUrl:string) => void }

const WorkExhibition = () => {
  const [exhibitions, setExhibitions] = useState<TypeOfExhibitions|null>(null)
  const {databaseService, backgroundImageUpdate}= useOutletContext<ContextType>();

  useEffect(() => {
    const yes = databaseService.getExhibitionData((data) => {
      setExhibitions(data)
      
    })
    return () => yes()
  }, [])



  const exhibitionsByYearFilter4 = myLogics.returnExhibitionWorkAndYearArray(exhibitions)


  return <div className={styles.container3}>
      <p className={styles.poster_click_please}>- 포스터를 클릭하시면 전시된 작품들을 확인하실 수 있습니다 -</p>



      {exhibitionsByYearFilter4&&exhibitionsByYearFilter4.map((array, index) => 
    {return <ExhibitionBundleContainer key={index} arrayAboutWorkYearAndWork={array}/>})}





  </div>

}
export default WorkExhibition;