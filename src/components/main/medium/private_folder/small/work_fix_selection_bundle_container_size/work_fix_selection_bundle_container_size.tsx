import React from "react"
import { TypeOfPhotoAssets, TypeOfWork } from '../../../../../../common/project_types';
import WorkFixSelectionWork from '../work_fix_selection_work/work_fix_selection_work';
import WorkFixSelectionWorkVertical from '../work_fix_selection_work_vertical/work_fix_selection_work_vertical';
import styles from "./work_fix_selection_bundle_container_size.module.css";
import WorkFixSelectionWorkSquare from './../work_fix_selection_work_square/work_fix_selection_work_square';

type WorkFixSelectionBundleContainerSize = {
  passSelectedWorkToUpper: (workNumber:number, work:TypeOfWork) => void
  works: TypeOfWork[]
  exhibitionWorksOnClickArray:  number[]
}

const WorkFixSelectionBundleContainerSize = ({works, exhibitionWorksOnClickArray, passSelectedWorkToUpper}:WorkFixSelectionBundleContainerSize) => {
  return <div className={styles.work_bundle_container}>
    <div className={`${styles.work_bundle}`}>
    {works&&works.map((object, index) => {
      
      const object2 = works[index]
      
      if(object2.workHorizontalOrVerticalOrSquare=='horizontal'){
          return <WorkFixSelectionWork exhibitionWorksOnClickArray={exhibitionWorksOnClickArray} passSelectedWorkToUpper={passSelectedWorkToUpper} key={index} work={object}/>
        }
        else{
          return <WorkFixSelectionWorkVertical exhibitionWorksOnClickArray={exhibitionWorksOnClickArray} passSelectedWorkToUpper={passSelectedWorkToUpper} key={index} work={object}/>
        }
  })}
    </div>
  </div>

}
export default WorkFixSelectionBundleContainerSize;