import React from "react"
import Work from '../work/work';
import WorkSize from '../work_size/work_size';
import styles from "./work_exhibition_works.module.css";

const WorkExhibitionWorks = () => {

  return <div className={styles.work_exhibition_works_container}>
    <div className={styles.metadata_container}>

      <div className={styles.img_container}>
        <img className={styles.exhibition_img}src="/img/asset_img/exhibitions/20210507guk_yoon/poster/guk_yoon_poster.jpg" alt="" />
      </div>

      <div className={styles.data_container}>
          <p className={styles.p1}>국윤미술관 기획초대전</p>
          <p className={styles.p1}>조용남 展 -시간을 담다-</p>
          <p className={styles.p1}>2021.5.7 ~ 6.6.</p>
          <p className={styles.p1}>장소 : 광주 동구 의재로 82</p>
          <p className={styles.p1}>총 36점</p>
      </div>
      
    </div>
      <div className={styles.exhibition_photo_cont}>

        <div className={styles.photo_container} data-number='1'>
          <img className={styles.exhibition_img}src="\img\asset_img\exhibitions\20210507guk_yoon\exhibition_photo\guk_yoon1.JPG" alt="" />
        </div>


        <div className={styles.photo_container}data-number='2'>
          <img className={styles.exhibition_img}src="\img\asset_img\exhibitions\20210507guk_yoon\exhibition_photo\guk_yoon2.JPG" alt="" />
        </div>
      </div>

    <WorkSize/>
  </div>

}
export default WorkExhibitionWorks;