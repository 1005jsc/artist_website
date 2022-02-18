import React, { useState } from "react"
import { TypeOfWork } from '../../../../../common/project_types';
import Work from '../work/work';
import WorkVertical from '../work_vertical/work_vertical';
import styles from "./work_bundle_container_size.module.css";

type WorkBundleContainerSizeProps = {
  works: TypeOfWork[]
}

const WorkBundleContainerSize = ({works}:WorkBundleContainerSizeProps) => {
  
  
    return <div className={styles.work_bundle_container}>
    <div className={`${styles.work_bundle}`}>
    {works.map((object, index) => {
      
      const object2 = works[index]
      
      if(object2.workHorizontalOrVertical=='horizontal'){
          // return <Work year={string1} key={index} work={object}/>
        }else{
          // return <WorkVertical year={string1} key={index} work={object}/>
        }
  })}
    </div>
  </div>
  
  
  

}
export default WorkBundleContainerSize;