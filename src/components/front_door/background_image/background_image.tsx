import React from "react"
import styles from "./background_image.module.css";

const BackgroundImage = () => {

  return <div className={styles.background_image_container}>
      <div className={styles.img_container}>
      {/* <img className={styles.background_image} src="/img/artist_img/DSC05012.jpg" alt="img not found" /> */}
      <video src="/video/sample_03.mp4" muted loop autoPlay></video>
      </div>
      <div className={styles.test}>
        <span className={styles.test_text}>hi</span>
      </div>


</div>

}
export default BackgroundImage;