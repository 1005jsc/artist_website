import React from "react"
import styles from "./exhibition_photo.module.css";

type ExhibitionPhotoProps = {
  datanumber: number
  url: string
}

const ExhibitionPhoto = ({datanumber, url}:ExhibitionPhotoProps) => {

  return <div className={styles.photo_container} data-number={datanumber}>
  <img className={styles.exhibition_img}src={url} alt="" />
</div>

}
export default ExhibitionPhoto;