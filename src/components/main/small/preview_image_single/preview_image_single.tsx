import React, { useState } from "react"
import DeleteButton from '../../../utility/delete_button/delete_button';
import styles from "./preview_image_single.module.css";

type PreviewImageSingleProps = {
  url: string;
}

const PreviewImageSingle = ({url}:PreviewImageSingleProps) => {



  





  return <div className={styles.image_container}  >
    
  <img className={styles.img_now}src={`${url}`} alt="" />
  </div>
}
export default PreviewImageSingle;