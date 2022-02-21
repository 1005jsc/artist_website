import React, { useEffect, useState } from "react"
import { useOutletContext } from 'react-router-dom';
import { myFunctions } from '../../../../../common/project_functions';
import { myLogics } from '../../../../../common/project_logics';
import { TypeOfExhibition, TypeOfWorks } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import WorkBundleContainerSize from '../work_bundle_container_size/work_bundle_container_size';
import styles from "./work_exhibition_works_by_size.module.css";

type WorkExhibitionWorksBySize = {
  exhibition: TypeOfExhibition
}

const WorkExhibitionWorksBySize = ({exhibition}:WorkExhibitionWorksBySize) => {
  // 결국 면적을 기준으로  크기가 큰순, 크기가 작은순으로 나눌것임 
  const [works, setWorks] = useState<TypeOfWorks|null>(null)
  
  const databaseService= useOutletContext<Database>();
  

  

  useEffect(() => {
    const yes = databaseService.getExhibitionData(data => {
      const thisExhibition = data[exhibition.exhibitionSerialNumber]
      setWorks(thisExhibition.exhibitionWorks)
    
    })
    return () => yes()
  }, [])

  
  
  
  // 크기가 큰순 로직
  const workSizeBigToSmall = myLogics.returnWorkSizeBigToSmallArray(works)










    
  
  return <div className={styles.work_size_container}>
      <div className={`${styles.work_bundle}`}>
      
      
      {workSizeBigToSmall&& <WorkBundleContainerSize works={workSizeBigToSmall}/>}
      
      </div>
  </div>

}
export default WorkExhibitionWorksBySize;