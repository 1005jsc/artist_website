import React from "react"
import styles from "./exhibition_photo_right.module.css";

type ExhibitionPhotoRightProps = {
  datanumber: number
  url: string
}

const ExhibitionPhotoRight = ({datanumber, url}:ExhibitionPhotoRightProps) => {

  return <div className={styles.photo_container} data-number={datanumber}>
  <img className={styles.exhibition_img}src={url} alt="" />
</div>

}
export default ExhibitionPhotoRight;