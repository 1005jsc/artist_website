import React from "react"
import { useNavigate } from 'react-router-dom';
import { myFunctions } from '../../../../../common/project_functions';
import { TypeOfWork, TypeOfWorks } from '../../../../../common/project_types';
import styles from "./work_square.module.css";


type WorkSquareProps = {
  work: TypeOfWork;
  year: string|number;
  works: TypeOfWorks;
  worksYear?:TypeOfWork[]


}

const WorkSquare = ({work, year, works, worksYear}:WorkSquareProps) => {
  const navigate = useNavigate()
  
  let workUrl
  if(work.workImageUrl !==null){
    workUrl = myFunctions.imageUrlMakerByRequestedQuality
    (Object.values(work.workImageUrl)[0],'small', 216)
  }
  const handleNavigate:React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    navigate(`/main/works/work?work_id=${work.workSerialNumber}`, {
      state:[works, worksYear]
    })

  }




  return <div className={styles.work_container} onClick={handleNavigate}>
    <div className={styles.work_frame}>
      <div className={styles.image_frame}>
              
        <img className={styles.work_img} src={workUrl?workUrl:'/icons/image_not_avaliable_square.svg'} alt='' />

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
