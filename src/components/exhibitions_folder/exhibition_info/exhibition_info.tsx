import React from "react"
import styles from "./exhibition_info.module.css";

const ExhibitionInfo = () => {

  return <article className={styles.exhibition_info_container}>

    <div className={styles.exhibition_metadata_container}>
    <p>국윤미술관 기획초대전</p>
    <p>조용남 展 -시간을 담다-</p>
    <p>전시기간: 2021.5.7 ~ 6.6.</p>
    <p>전시작품 수: 총 36점</p>
    <button>전시작품 보러가기</button>
    </div>
    
    <div className={styles.exhibition_poster_container}>
      <img className={styles.exhibition_poster_img}src="/img/artist_img/poster.jpg" alt="no image of exhibition poster" />
    </div>
</article>

}
export default ExhibitionInfo;