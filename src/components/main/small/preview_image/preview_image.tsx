import React from "react"
import styles from "./preview_image.module.css";

type PreviewImageProps = {
  url: string
}

const PreviewImage = ({url}:PreviewImageProps) => {

  return <div className={styles.image_container}>
  <img className={styles.img_now}src={`${url}`} alt="" />
  </div>
}
export default PreviewImage;