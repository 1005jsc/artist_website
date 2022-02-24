import React, { useEffect, useState } from "react"
import { useOutletContext } from 'react-router-dom';
import { myFunctions } from '../../../../../common/project_functions';
import { myLogics } from '../../../../../common/project_logics';
import { TypeOfWorks } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import WorkBundleContainerSize from '../work_bundle_container_size/work_bundle_container_size';
import { ContextType } from '../work_exhibition/work_exhibition';
import styles from "./work_size.module.css";

const WorkSize = () => {
  // 결국 면적을 기준으로  크기가 큰순, 크기가 작은순으로 나눌것임 
  const [works, setWorks] = useState<TypeOfWorks|null>(null)
  
  const {databaseService}= useOutletContext<ContextType>();
  const [url, setUrl] = useState<string|null>()
  const [checkSmallerOrLarger, setCheckSmallerOrLarger] = useState<boolean|undefined>(undefined)
  useEffect(() => {
    setUrl(window.location.href)
    const bool = myFunctions.checkWordFromUrl('smaller', url)
    setCheckSmallerOrLarger(bool)
    
  })

  

  useEffect(() => {
    const yes = databaseService.getWorkData((data) => {
      setWorks(data)
      
    })
    return () => yes()
  }, [])

  
  
  
  // 크기가 큰순 로직
  const workSizeSmallToBig = myLogics.returnWorkSizeSmallToBigArray(works)
  const workSizeBigToSmall = myLogics.returnWorkSizeBigToSmallArray(works)










    
  
  return <div className={styles.work_size_container}>
      <div className={`${styles.work_bundle}`}>
      
      {checkSmallerOrLarger?<>
      {workSizeSmallToBig&&<WorkBundleContainerSize works={workSizeSmallToBig}/>}
      </> :<>
      {workSizeBigToSmall&& <WorkBundleContainerSize works={workSizeBigToSmall}/>}
      </>}
      
      
      
      </div>
  </div>

}
export default WorkSize;