import React from "react"
import { myFunctions } from '../../../../../common/project_functions';
import { TypeOfWork } from '../../../../../common/project_types';
import styles from "./work_square.module.css";


type WorkSquareProps = {
  work: TypeOfWork;
  year: string|number;
}

const WorkSquare = ({work, year}:WorkSquareProps) => {

  
  let workUrl
  if(work.workImageUrl !==null){
    workUrl = myFunctions.imageUrlMakerByRequestedQuality
    (Object.values(work.workImageUrl)[0],'small', 216)
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
export default WorkSquare;
