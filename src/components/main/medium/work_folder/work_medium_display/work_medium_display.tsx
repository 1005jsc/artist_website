import React from "react"
import styles from "./work_medium_display.module.css";

type WorkMediumDisplayProps = {
  imgClickModalOpen : () => void
}

const WorkMediumDisplay = ({imgClickModalOpen}:WorkMediumDisplayProps) => {

  const handleOpen:React.MouseEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault()
    imgClickModalOpen()
  }


  return<div className={styles.work_disp_cont_2}>
      
      <img className={styles.work}src="/img/works_img/work_sample.jpg" onClick={handleOpen} alt="" />


  </div>

}
export default WorkMediumDisplay;