import React, { useEffect, useState } from "react"
import { TypeOfWorks } from '../../../../../../common/project_types';
import Database from '../../../../../../services/database';
import WorkFixSelectionBundleContainer from '../work_fix_selection_bundle_container_year/work_fix_selection_bundle_container_year';
import styles from "./work_fix_selection_year.module.css";

type WorkFixSelectionYearProps = {
  databaseService:Database;
}



const WorkFixSelectionYear = ({databaseService}:WorkFixSelectionYearProps) => {
  const [works, setWorks] = useState<TypeOfWorks|null>(null)
  useEffect(() => {
    const yes = databaseService.getWorkData((data) => {
      setWorks(data)
      
    })
    return () => yes()
  }, [])

  let worksKeys
  let workYears: string[] 
  let worksYears: string[] 
  let worksDates
  workYears=[]
  worksYears= []
  if(works){
    let yes 
    worksKeys = Object.keys(works)
    worksDates = worksKeys.map((key) => { return works[parseInt(key)][`workCompletionDate`]}) 
    for(let i = 0; i< worksDates.length; i++){
      yes =worksDates[i] as string
      workYears.push(yes.substring(0,4))
    } 
    worksYears = [... new Set(workYears)]
    worksYears.sort((a,b) => parseInt(b)-parseInt(a))
  }

  
  // 1) worksByYear 만들기 
  let worksByYear = [] as any[]
  let worksByYearFilter = [] as any[]
  let worksByYearFilter2 = [] as any[]
  let worksByYearFilter3 = [] as any[]
  let worksByYearFilter4 = [] as any[]
  {for(let i = 0; i< worksYears.length; i++){
      worksByYear.push(worksYears[i])
      if(works){
        worksByYearFilter = Object.values(works).filter((work) => 
        work[`workCompletionDate`]?.toString().substring(0,4) === worksYears[i] )
      }
      worksByYearFilter2.push(worksByYearFilter)
    }
    for(let i = 0; i< worksByYear.length; i++){
      worksByYearFilter3= [worksByYear[i], ...worksByYearFilter2[i]]
      worksByYearFilter4.push(worksByYearFilter3)
    }
  }

console.log(worksByYearFilter4)

  return <div className={styles.container3}>



{worksByYearFilter4&&worksByYearFilter4.map((array, index) => 
    {return <WorkFixSelectionBundleContainer key={index} arrayAboutWorkYearAndWork={array}/>})}



  

 


  
</div>

}
export default WorkFixSelectionYear;