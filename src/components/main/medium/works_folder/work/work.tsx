import React from "react"
import { myFunctions } from '../../../../../common/project_functions';
import { TypeOfWork } from '../../../../../common/project_types';
import styles from "./work.module.css";


type WorkProps = {
  work: TypeOfWork;
  year: string|number;
}

const Work = ({work, year}:WorkProps) => {

  
  
  let workUrl
  if(work.workImageUrl !==null){
    workUrl = myFunctions.imageUrlMakerByRequestedQuality
    (work.workImageUrl[work.workSerialNumber+1],'small', 216)
  }

  return <div className={styles.work_container} >
    <div className={styles.work_frame}>
      <div className={styles.image_frame}>
              
        <img className={styles.work_img} src={workUrl} alt='' />

      </div>
    <div className={styles.work_metadata}>
      <p className={styles.p1}>{work.workName}</p>
      <p className={styles.p1}>{work.workSize}</p>
      <p className={styles.p1}>{work.workMaterial}</p>
      <p className={styles.p1}>{year}</p>
    </div>


    </div>

</div>

}
export default Work;
