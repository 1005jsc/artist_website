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
    {works&&works.map((object, index) => {
      
      const object2 = works[index]
      let year1= object2.workCompletionDate!.toString().substring(0,4)
      
      if(object2.workHorizontalOrVertical=='horizontal'){
          return <Work year={year1!} key={index} work={object}/>
        }else{
          return <WorkVertical year={year1!} key={index} work={object}/>
        }
  })}
    </div>
  </div>
  
  
  

}
export default WorkBundleContainerSize;