import React from "react"
import styles from "./exhibition.module.css";

const Exhibition = () => {

  return <div className={styles.exhibition_container}>
  <img className={styles.exhibition_img}src="/img/artist_img/poster.jpg" alt="" />
  <div className={styles.exhibition_metadata}>
    <p>국윤미술관 기획초대전</p>
    <p>조용남 展 -시간을 담다-</p>
    <p>2021.5.7 ~ 6.6.</p>
    <p>총 36점</p>

  </div>

</div>

}
export default Exhibition;