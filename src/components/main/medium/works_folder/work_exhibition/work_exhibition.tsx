import React, { useEffect, useState } from "react"
import {  useOutletContext } from 'react-router-dom';
import { TypeOfExhibition, TypeOfExhibitions } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import ExhibitionBundleContainer from '../../exhibitions_folder/exhibition_bundle_container/exhibition_bundle_container';
import styles from "./work_exhibition.module.css";

const WorkExhibition = () => {
  const [exhibitions, setExhibitions] = useState<TypeOfExhibitions|null>(null)
  const databaseService= useOutletContext<Database>();

  useEffect(() => {
    console.log('1')
    const yes = databaseService.getExhibitionData((data) => {
      setExhibitions(data)
      
    })
    return () => yes()
  }, [])

  console.log(exhibitions)

  let exhibitionsKeys
  let exhibitionYears: string[] 
  let exhibitionsYears: string[] 
  let exhibitionsDates
  exhibitionYears=[]
  exhibitionsYears= []
  if(exhibitions){
    let yes 
    exhibitionsKeys = Object.keys(exhibitions)
    exhibitionsDates = exhibitionsKeys.map((key) => { return exhibitions[parseInt(key)][`exhibitionStartDate`]}) 
    for(let i = 0; i< exhibitionsDates.length; i++){
      yes =exhibitionsDates[i] as string
      exhibitionYears.push(yes.substring(0,4))
    } 
    exhibitionsYears = [... new Set(exhibitionYears)]
    exhibitionsYears.sort((a,b) => parseInt(b)-parseInt(a))
  }
  console.log(exhibitionsYears)

  let exhibitionsByYear = [] as any[]
  let exhibitionsByYearFilter = [] as any[]
  let exhibitionsByYearFilter2 = [] as any[]
  let exhibitionsByYearFilter3 = [] as any[]
  let exhibitionsByYearFilter4 = [] as any[]
  {for(let i = 0; i< exhibitionsYears.length; i++){
      exhibitionsByYear.push(exhibitionsYears[i])
      if(exhibitions){
        exhibitionsByYearFilter = Object.values(exhibitions).filter((exhibition) => 
        exhibition[`exhibitionStartDate`]?.toString().substring(0,4) === exhibitionsYears[i] )
      }
      exhibitionsByYearFilter2.push(exhibitionsByYearFilter)
    }
    for(let i = 0; i< exhibitionsByYear.length; i++){
      exhibitionsByYearFilter3= [exhibitionsByYear[i], ...exhibitionsByYearFilter2[i]]
      exhibitionsByYearFilter4.push(exhibitionsByYearFilter3)
    }
  }
console.log(exhibitionsByYearFilter4)
















  return <div className={styles.container3}>
      <p className={styles.poster_click_please}>- 포스터를 클릭하시면 전시된 작품들을 확인하실 수 있습니다 -</p>



      {exhibitionsByYearFilter4&&exhibitionsByYearFilter4.map((array, index) => 
    {return <ExhibitionBundleContainer key={index} arrayAboutWorkYearAndWork={array}/>})}





  </div>

}
export default WorkExhibition;