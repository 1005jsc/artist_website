import React from "react"
import styles from "./exhibition_photo_left.module.css";

type ExhibitionPhotoLeftProps = {
  datanumber: number
  url: string
}

const ExhibitionPhotoLeft = ({datanumber, url}:ExhibitionPhotoLeftProps) => {

  return <div className={styles.photo_container} data-number={datanumber}>
  <img className={styles.exhibition_img}src={url} alt="" />
</div>

}
export default ExhibitionPhotoLeft;