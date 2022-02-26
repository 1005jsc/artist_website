import React, { useEffect, useState } from "react"
import { myFunctions } from '../../../../../../common/project_functions';
import {  TypeOfWork } from '../../../../../../common/project_types';
import styles from "./work_fix_selection_work.module.css";

type WorkFixSelectionWorkProps = {
  work: TypeOfWork;
  passSelectedWorkToUpper: (workNumber:number, work:TypeOfWork) => void
  exhibitionWorksOnClickArray:  number[]
}

const WorkFixSelectionWork = ({work, exhibitionWorksOnClickArray, passSelectedWorkToUpper}:WorkFixSelectionWorkProps) => {

  const [workOnClick, setWorkOnClick] = useState<boolean>(false)


  useEffect(() => {
    if(exhibitionWorksOnClickArray.find((value) => value === work.workSerialNumber)){
    setWorkOnClick(true)
  }else{
      setWorkOnClick(false)
    
    }
  

  }, [exhibitionWorksOnClickArray, work.workSerialNumber])



  let workUrl
  if(work.workImageUrl !==null){
    workUrl = myFunctions.imageUrlMakerByRequestedQuality
    (Object.values(work.workImageUrl)[0],'small', 216)
  }

  const handleClick:React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    if(work.workImageUrl){

      passSelectedWorkToUpper(work.workSerialNumber, work)
    }
    
  }
  
  
  







  return <div className={styles.work_container} >
  <div className={workOnClick?`${styles.work_frame} ${styles.work_frame_onclick}`:`${styles.work_frame}`} onClick={handleClick}>
    <div className={styles.image_frame}>
        <img className={styles.work_img} src={workUrl} alt="" />
    </div>
 


  </div>

</div>

}
export default WorkFixSelectionWork;