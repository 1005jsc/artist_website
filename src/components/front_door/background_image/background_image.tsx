import React from "react"
import styles from "./background_image.module.css";

const BackgroundImage = () => {

  return <div className={styles.background_image_container}>
      <div className={styles.img_container}>
      <video className={styles.video}src="/video/sample_03.mp4" muted loop autoPlay></video>
      </div>
      


</div>

}
export default BackgroundImage;