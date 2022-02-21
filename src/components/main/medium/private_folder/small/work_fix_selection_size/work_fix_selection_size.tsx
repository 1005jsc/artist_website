import { faCropSimple } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from "react"
import { useOutletContext } from 'react-router-dom';
import { myFunctions } from '../../../../../../common/project_functions';
import { TypeOfPhotoAssets, TypeOfWork, TypeOfWorks } from '../../../../../../common/project_types';
import Database from '../../../../../../services/database';
import styles from "./work_fix_selection_size.module.css";
import WorkFixSelectionBundleContainerSize from '../work_fix_selection_bundle_container_size/work_fix_selection_bundle_container_size';
import { myLogics } from '../../../../../../common/project_logics';

type WorkFixSelectionSizeProps = {
  dataPathValue: string;
  databaseService : Database;
  passSelectedWorkToUpper: (workNumber:number, work:TypeOfWork) => void

}

const WorkFixSelectionSize = ({dataPathValue, databaseService, passSelectedWorkToUpper}:WorkFixSelectionSizeProps) => {
  const [works, setWorks] = useState<TypeOfWorks|null>(null)
  
  const [checkSmallerOrLarger, setCheckSmallerOrLarger] = useState<boolean|undefined>(undefined)
  useEffect(() => {
    if(dataPathValue=='smaller'){

      setCheckSmallerOrLarger(true)
    }else{
      setCheckSmallerOrLarger(false)

    }
    
  })

  

  useEffect(() => {
    const yes = databaseService.getWorkData((data) => {
      setWorks(data)
      
    })
    return () => yes()
  }, [])

  
  
  


  const workSizeBigToSmall = myLogics.returnWorkSizeBigToSmallArray(works)
  const workSizeSmallToBig = myLogics.returnWorkSizeSmallToBigArray(works)




    
  
  return <div className={styles.work_size_container}>
      <div className={`${styles.work_bundle}`}>
      
      {checkSmallerOrLarger?<>
      {checkSmallerOrLarger&&<WorkFixSelectionBundleContainerSize passSelectedWorkToUpper={passSelectedWorkToUpper} works={workSizeSmallToBig!}/>}
      </> :<>
      {!checkSmallerOrLarger&& <WorkFixSelectionBundleContainerSize  passSelectedWorkToUpper={passSelectedWorkToUpper}works={workSizeBigToSmall!}/>}
      </>}
      
      
      
      </div>
  </div>


}
export default WorkFixSelectionSize;