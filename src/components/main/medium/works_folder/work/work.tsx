import React from "react"
import styles from "./work.module.css";


const Work = () => {

  return <div className={styles.work_container} >
    <div className={styles.work_frame}>
      <div className={styles.image_frame}>
          <img className={styles.work_img} src="/img/works_img/A_9528658.jpg" alt="" />
      </div>
    <div className={styles.work_metadata}>
      <p className={styles.p1}>시간을 담다 VIII</p>
      <p className={styles.p1}>162×112cm</p>
      <p className={styles.p1}>Acrylic on canvas</p>
      <p className={styles.p1}>2020</p>
    </div>


    </div>

</div>

}
export default Work;


