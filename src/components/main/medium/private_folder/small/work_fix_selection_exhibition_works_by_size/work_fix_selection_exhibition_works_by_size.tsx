import React, { useEffect, useState } from "react"
import {  TypeOfWork, TypeOfWorks } from '../../../../../../common/project_types';
import Database from '../../../../../../services/database';
import styles from "./work_fix_selection_exhibition_works_by_size.module.css";
import WorkFixSelectionBundleContainerSize from '../work_fix_selection_bundle_container_size/work_fix_selection_bundle_container_size';
import { myLogics } from '../../../../../../common/project_logics';

type WorkFixSelectionExhibitionWorksBySize = {
  dataPathValue: string;
  databaseService : Database;
  passSelectedWorkToUpper: (workNumber:number, work:TypeOfWork) => void
  exhibitionWorksOnClickArray:  number[]
  exhibitionSerialNumberOnClickData:number

}

const WorkFixSelectionExhibitionWorksBySize = ({exhibitionSerialNumberOnClickData,dataPathValue,exhibitionWorksOnClickArray, databaseService, passSelectedWorkToUpper}:WorkFixSelectionExhibitionWorksBySize) => {
  const [works, setWorks] = useState<TypeOfWorks|null>(null)
  
  

  

  useEffect(() => {
    const yes = databaseService.getExhibitionData((data) => {
      setWorks(data[exhibitionSerialNumberOnClickData].exhibitionWorks)
    })
    return () => yes()
  }, [])

  
  
  


  const workSizeBigToSmall = myLogics.returnWorkSizeBigToSmallArray(works)




    
  
  return <div className={styles.work_size_container}>
      <div className={`${styles.work_bundle}`}>
      
      
      {<WorkFixSelectionBundleContainerSize exhibitionWorksOnClickArray={exhibitionWorksOnClickArray} passSelectedWorkToUpper={passSelectedWorkToUpper}works={workSizeBigToSmall!}/>}
      
      
      
      </div>
  </div>


}
export default WorkFixSelectionExhibitionWorksBySize;