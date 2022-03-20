import React from "react"
import styles from "./work_medium_display.module.css";

type WorkMediumDisplayProps = {
  imgClickModalOpen : () => void
  workUrl: string
}

const WorkMediumDisplay = ({imgClickModalOpen, workUrl}:WorkMediumDisplayProps) => {

  const handleOpen:React.MouseEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault()
    imgClickModalOpen()
  }

  return<div className={styles.work_disp_cont_2}>
      
      <img className={styles.work}src={workUrl?workUrl:'/icons/image_not_avaliable_horizontal.svg'} onClick={handleOpen} alt="" />


  </div>

}
export default WorkMediumDisplay;