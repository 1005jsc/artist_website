import React from "react"
import {  TypeOfWork } from '../../../../../../common/project_types';
import WorkFixSelectionWork from '../work_fix_selection_work/work_fix_selection_work';
import WorkFixSelectionWorkVertical from '../work_fix_selection_work_vertical/work_fix_selection_work_vertical';
import styles from "./work_fix_selection_bundle_container_year.module.css";

type WorkFixSelectionBundleContainerProps = {
  arrayAboutWorkYearAndWork: any[]
  passSelectedWorkToUpper: (workNumber:number, work:TypeOfWork) => void
  exhibitionWorksOnClickArray:  number[]
}

const WorkFixSelectionBundleContainerYear = ({arrayAboutWorkYearAndWork, exhibitionWorksOnClickArray,passSelectedWorkToUpper}:WorkFixSelectionBundleContainerProps) => {

  

  const string1 = arrayAboutWorkYearAndWork[0]
  const array1 = arrayAboutWorkYearAndWork.slice(1)
  


  return <div className={styles.work_bundle_container}>
  <p className={styles.year}>{string1}</p>
  <div className={`${styles.work_bundle}`}>
  {array1.map((work, index) => {
      
      const object2 = array1[index] as TypeOfWork
      
      if(object2.workHorizontalOrVerticalOrSquare ==='horizontal'){
          return <WorkFixSelectionWork exhibitionWorksOnClickArray={exhibitionWorksOnClickArray} passSelectedWorkToUpper={passSelectedWorkToUpper} key={index} work={work}/>
        }else{
          return <WorkFixSelectionWorkVertical exhibitionWorksOnClickArray={exhibitionWorksOnClickArray} passSelectedWorkToUpper={passSelectedWorkToUpper} key={index} work={work} />
        }
  })}
  </div>
</div>
  
  
  

}
export default WorkFixSelectionBundleContainerYear;






