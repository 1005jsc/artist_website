import React from "react"
import Work from '../work/work';
import WorkSize from '../work_size/work_size';
import styles from "./work_exhibition_works.module.css";

const WorkExhibitionWorks = () => {

  return <div className={styles.work_exhibition_works_container}>
      <p>국윤미술관 기획초대전</p>
      <p>조용남 展 -시간을 담다-</p>
      <p>2021.5.7 ~ 6.6.</p>
      <p>총 36점</p>
      
      <WorkSize/>
  </div>

}
export default WorkExhibitionWorks;