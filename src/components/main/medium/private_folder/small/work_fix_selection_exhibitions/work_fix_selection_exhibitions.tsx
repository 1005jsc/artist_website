import React, { useEffect, useState } from "react"
import { useOutletContext } from 'react-router-dom';
import { TypeOfExhibitions } from '../../../../../../common/project_types';
import Database from '../../../../../../services/database';
import styles from "./work_fix_selection_exhibitions.module.css";
import WorkFixSelectionBundleContainerExhibition from '../work_fix_selection_bundle_container_exhibition/work_fix_selection_bundle_container_exhibition';

type WorkFixSelectionExhibitionsProps = {
  sendExhibitionToUpperComponent:(exhibitionSerialNumber:number) => void
}

const WorkFixSelectionExhibitions = ({sendExhibitionToUpperComponent}:WorkFixSelectionExhibitionsProps) => {

  const [exhibitions, setExhibitions] = useState<TypeOfExhibitions|null>(null)
  const databaseService= useOutletContext<Database>();

  useEffect(() => {
    const yes = databaseService.getExhibitionData((data) => {
      setExhibitions(data)
      
    })
    return () => yes()
  }, [])


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



  return <div className={styles.container3}>



      {exhibitionsByYearFilter4&&exhibitionsByYearFilter4.map((array, index) => 
    {return <WorkFixSelectionBundleContainerExhibition sendExhibitionToUpperComponent={sendExhibitionToUpperComponent}key={index} arrayAboutWorkYearAndWork={array}/>})}





  </div>

}
export default WorkFixSelectionExhibitions;