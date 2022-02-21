import React, { useEffect, useState } from "react"
import { myFunctions } from '../../../../../common/project_functions';
import { TypeOfWork } from '../../../../../common/project_types';
import styles from "./work_fix_form_two_work_vertical.module.css";

type WorkFixFormTwoWorkVerticalProps = {
  work: TypeOfWork;
}

const WorkFixFormTwoWorkVertical = ({work}:WorkFixFormTwoWorkVerticalProps) => {

 



  let workUrl
  if(work.workImageUrl !==null){
    workUrl = myFunctions.imageUrlMakerByRequestedQuality
    (work.workImageUrl[work.workSerialNumber+1],'small', 216)
  }

 






  return <div className={styles.work_container} >
  <div className={`${styles.work_frame}`} >
    <div className={styles.image_frame}>
        <img className={styles.work_img} src={workUrl} alt="" />
    </div>
 


  </div>

</div>

}
export default WorkFixFormTwoWorkVertical;