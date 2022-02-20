import React from "react"
import { TypeOfWork } from '../../../../common/project_types';
import styles from "./work_fix_selection_bundle_container_size.module.css";
import WorkFixSelectionWork from './../../medium/private_folder/small/work_fix_selection_work/work_fix_selection_work';
import WorkFixSelectionWorkVertical from './../../medium/private_folder/small/work_fix_selection_work_vertical/work_fix_selection_work_vertical';

type WorkFixSelectionBundleContainerSize = {

  works: TypeOfWork[]
}

const WorkFixSelectionBundleContainerSize = ({works}:WorkFixSelectionBundleContainerSize) => {
  return <div className={styles.work_bundle_container}>
    <div className={`${styles.work_bundle}`}>
    {works&&works.map((object, index) => {
      
      const object2 = works[index]
      
      if(object2.workHorizontalOrVertical=='horizontal'){
          return <WorkFixSelectionWork  key={index} work={object}/>
        }else{
          return <WorkFixSelectionWorkVertical  key={index} work={object}/>
        }
  })}
    </div>
  </div>

}
export default WorkFixSelectionBundleContainerSize;