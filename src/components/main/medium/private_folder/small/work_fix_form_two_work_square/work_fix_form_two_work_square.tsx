import React, { useEffect, useState } from "react"
import { myFunctions } from '../../../../../../common/project_functions';
import { TypeOfWork } from '../../../../../../common/project_types';
import styles from "./work_fix_form_two_work_square.module.css";

type WorkFixFormTwoWorkSquareProps = {
  work: TypeOfWork;
  passSelectedWorkToUpper:(work:TypeOfWork) => void
  workOnSelected: TypeOfWork|null;
}

const WorkFixFormTwoWorkSquare = ({workOnSelected, passSelectedWorkToUpper,work}:WorkFixFormTwoWorkSquareProps) => {

  const [selected, setSelected] = useState<boolean>(false)

  useEffect(() => {
    if(workOnSelected === work){
      setSelected(true)
    }else{
      setSelected(false)
    }
  }, [workOnSelected])


  let workUrl
  if(work.workImageUrl !==null){
    workUrl = myFunctions.imageUrlMakerByRequestedQuality
    (Object.values(work.workImageUrl)[0],'small', 216)
  }

  const handleClick:React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    if(work){

      passSelectedWorkToUpper(work)
    }
    
  }
  






  return <div className={styles.work_container} >
  <div className={selected?`${styles.work_frame} ${styles.work_frame_onclick}`:`${styles.work_frame}`} onClick={handleClick} >
    <div className={styles.image_frame}>
        <img className={styles.work_img} src={workUrl} alt="" />
    </div>
 


  </div>

</div>

}
export default WorkFixFormTwoWorkSquare;