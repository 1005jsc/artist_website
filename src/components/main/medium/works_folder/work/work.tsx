import React from "react"
import {  useNavigate } from 'react-router-dom';
import { myFunctions } from '../../../../../common/project_functions';
import { TypeOfWork, TypeOfWorks } from '../../../../../common/project_types';
import styles from "./work.module.css";


type WorkProps = {
  work: TypeOfWork;
  year: string|number;
  works: TypeOfWorks;
  worksYear?:TypeOfWork[]
}

const Work = ({work, year, works, worksYear}:WorkProps) => {
  
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
              
        <img className={styles.work_img} src={workUrl?workUrl:'/icons/image_not_avaliable_horizontal.svg'} alt='' />

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
