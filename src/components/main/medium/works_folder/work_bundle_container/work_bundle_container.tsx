import React, { useState } from "react"
import Work from '../work/work';
import WorkVertical from '../work_vertical/work_vertical';
import styles from "./work_bundle_container.module.css";

type WorkBundleContainerProps = {
  arrayAboutWorkYearAndWork: any[]
}

const WorkBundleContainer = ({arrayAboutWorkYearAndWork}:WorkBundleContainerProps) => {
  const string1 = arrayAboutWorkYearAndWork[0]
  const array1 = arrayAboutWorkYearAndWork.slice(1)
  
  
    return <div className={styles.work_bundle_container}>
    <p className={styles.year}>{string1}</p>
    <div className={`${styles.work_bundle}`}>
    {array1.map((object, index) => {
      
      const object2 = array1[index]
      
      if(object2.workHorizontalOrVertical=='horizontal'){
          return <Work year={string1} key={index} work={object}/>
        }else{
          return <WorkVertical year={string1} key={index} work={object}/>
        }
  })}
    </div>
  </div>
  
  
  

}
export default WorkBundleContainer;