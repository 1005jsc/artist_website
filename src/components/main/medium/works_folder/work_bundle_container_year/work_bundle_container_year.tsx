import React, { useState } from "react"
import { TypeOfWork } from '../../../../../common/project_types';
import Work from '../work/work';
import WorkSquare from '../work_square/work_square';
import WorkVertical from '../work_vertical/work_vertical';
import styles from "./work_bundle_container_year.module.css";

type WorkBundleContainerYearProps = {
  arrayAboutWorkYearAndWork: any[]
}

const WorkBundleContainerYear = ({arrayAboutWorkYearAndWork}:WorkBundleContainerYearProps) => {
  const string1 = arrayAboutWorkYearAndWork[0]
  const array1 = arrayAboutWorkYearAndWork.slice(1)
  
  
    return <div className={styles.work_bundle_container}>
    <p className={styles.year}>{string1}</p>
    <div className={`${styles.work_bundle}`}>
    {array1.map((object, index) => {
      
      const object2 = array1[index] as TypeOfWork
      
      if(object2.workHorizontalOrVerticalOrSquare=='horizontal'){
          return <Work year={string1} key={index} work={object}/>
        }else if(object2.workHorizontalOrVerticalOrSquare=='square'){
          return <WorkSquare year={string1} key={index} work={object}/>
        }
        else{
          return <WorkVertical year={string1} key={index} work={object}/>
        }
  })}
    </div>
  </div>
  
  
  

}
export default WorkBundleContainerYear;