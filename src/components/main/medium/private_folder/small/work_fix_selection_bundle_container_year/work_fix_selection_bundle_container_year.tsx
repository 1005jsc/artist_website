import React from "react"
import WorkFixSelectionWork from '../work_fix_selection_work/work_fix_selection_work';
import WorkFixSelectionWorkVertical from '../work_fix_selection_work_vertical/work_fix_selection_work_vertical';
import styles from "./work_fix_selection_bundle_container.module.css";

type WorkFixSelectionBundleContainerProps = {
  arrayAboutWorkYearAndWork: any[]
}

const WorkFixSelectionBundleContainerYear = ({arrayAboutWorkYearAndWork}:WorkFixSelectionBundleContainerProps) => {

  const string1 = arrayAboutWorkYearAndWork[0]
  const array1 = arrayAboutWorkYearAndWork.slice(1)
  


  return <div className={styles.work_bundle_container}>
  <p className={styles.year}>{string1}</p>
  <div className={`${styles.work_bundle}`}>
  {array1.map((work, index) => {
      
      const object2 = array1[index]
      
      if(object2.workHorizontalOrVertical=='horizontal'){
          return <WorkFixSelectionWork  key={index} work={work}/>
        }else{
          return <WorkFixSelectionWorkVertical  key={index} work={work} />
        }
  })}
  </div>
</div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

}
export default WorkFixSelectionBundleContainerYear;










 {/* <div className={styles.work_metadata}>
    <p className={styles.p1}>시간을 담다 VIII</p>
    <p className={styles.p1}>162×112cm</p>
    <p className={styles.p1}>Acrylic on canvas</p>
    <p className={styles.p1}>2020</p>
  </div> */}