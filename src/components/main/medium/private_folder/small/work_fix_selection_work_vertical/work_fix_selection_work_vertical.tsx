import React from "react"
import { myFunctions } from '../../../../../../common/project_functions';
import { TypeOfWork } from '../../../../../../common/project_types';
import styles from "./work_fix_selection_work_vertical.module.css";

type WorkFixSelectionWorkProps = {
  work: TypeOfWork;
}



const WorkFixSelectionWorkVertical = ({work}:WorkFixSelectionWorkProps) => {

  let workUrl
  if(work.workImageUrl !==null){
    workUrl = myFunctions.imageUrlMakerByRequestedQuality
    (work.workImageUrl[work.workSerialNumber+1],'small', 216)
  }

  return <div className={styles.work_container} >
  <div className={styles.work_frame}>
    <div className={styles.image_frame}>
        <img className={styles.work_img} src={workUrl} alt="" />
    </div>
 


  </div>

</div>

}
export default WorkFixSelectionWorkVertical;