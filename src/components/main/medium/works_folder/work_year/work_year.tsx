import React, { useEffect, useState } from "react"
import { useOutletContext } from 'react-router-dom';
import { myLogics } from '../../../../../common/project_logics';
import { TypeOfWork, TypeOfWorks } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import WorkBundleContainerYear from '../work_bundle_container_year/work_bundle_container_year';
import { ContextType } from '../work_exhibition/work_exhibition';
import styles from "./work_year.module.css";



const WorkYear = () => {
  const [works, setWorks] = useState<TypeOfWorks|null>(null)
  const {databaseService}= useOutletContext<ContextType>();

  useEffect(() => {
    const yes = databaseService.getWorkData((data) => {
      setWorks(data)
      
    })
    return () => yes()
  }, [])



  const worksByYearFilter4 = myLogics.worksByYearSort(works)
  

  //// 일단 포기 


  let worksByYearFilter5 = [] as (string|TypeOfWork)[][]
  if(worksByYearFilter4){
    worksByYearFilter5 = [...worksByYearFilter4]
  }

  let okay = [] as  TypeOfWork[]
    if(worksByYearFilter5){

      worksByYearFilter5.forEach((cocopop) => {
        const array1 = cocopop.slice(1) as  TypeOfWork[]
        let array2 = [] as TypeOfWork[]
        if(okay){
          array2 = [...okay, ...array1]
        }else{
          array2=[...array1]
        }

        okay = array2
        
      })
    }
    
  
  
  return <div className={styles.container3}>

    {worksByYearFilter4&&worksByYearFilter4.map((array, index) => 
    {return <WorkBundleContainerYear key={index} arrayAboutWorkYearAndWork={array} worksYear={okay}/>})}

    
</div>

}
export default WorkYear;