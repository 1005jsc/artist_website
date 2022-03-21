import React from "react"
import { useNavigate } from 'react-router-dom';
import { myFunctions } from '../../../../../common/project_functions';
import { TypeOfWork, TypeOfWorks } from '../../../../../common/project_types';
import styles from "./work_vertical.module.css";


type WorkVerticalProps = {
  work: TypeOfWork;
  year: string|number;
  works: TypeOfWorks;
  worksYear?:TypeOfWork[]

}

const WorkVertical = ({work, year, works, worksYear}:WorkVerticalProps) => {

  
  const navigate = useNavigate()

  let workUrl
  if(work.workImageUrl !==null&& work.workImageUrl !==undefined){
    workUrl = myFunctions.imageUrlMakerByRequestedQuality
    (Object.values(work.workImageUrl)[0],'small', 216)
  }else{
    workUrl=undefined
  }

  const handleNavigate:React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    navigate(`/home/works/work?work_id=${work.workSerialNumber}`, {
      state:[works, worksYear]
    })

  }

  return <div className={styles.work_container} onClick={handleNavigate} >
    <div className={styles.work_frame}>
        <div className={styles.image_frame}>
                
          <img className={styles.work_img} src={workUrl?workUrl:'/icons/image_not_avaliable_vertical.svg'} alt='' />

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
export default WorkVertical;
