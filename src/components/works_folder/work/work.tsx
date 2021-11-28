import React from "react"
import styles from "./work.module.css";

const Work = () => {

  return <div className={styles.work_container}>
    <img className={styles.work_img}src="/img/artist_img/A_9528662.jpg" alt="" />
    <div className={styles.work_metadata}>
      <p>시간을 담다 VIII</p>
      <p>162×112cm</p>
      <p>Acrylic on canvas</p>
      <p>2020</p>
    </div>

</div>

}
export default Work;