import React from "react"
import styles from "./exhibition.module.css";

const Exhibition = () => {

  return <div className={styles.exhibition_container}>
  <div className={styles.image_container}>
  <img className={styles.exhibition_img}src="/img/asset_img/exhibitions/20210507guk_yoon/poster/guk_yoon_poster.jpg" alt="" />
  </div>  
  <div className={styles.exhibition_metadata}>
    <p className={styles.p1}>국윤미술관 기획초대전</p>
    <p className={styles.p1}>조용남 展 -시간을 담다-</p>
    <p className={styles.p1}>2021.5.7 ~ 6.6.</p>
    <p className={`${styles.p1} ${styles.total_count}`}>총 36점</p>

  </div>

</div>

}
export default Exhibition;