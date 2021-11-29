import React from "react"
import Work from '../work/work';
import styles from "./work_year.module.css";

const WorkYear = () => {

  return <div className={styles.work_year_container}>
<p className={styles.year}>2021</p>
    <div className={`${styles.work_bundle}`}>
      <Work/>
      <Work/>
      <Work/>
      <Work/>
      <Work/>
    </div>
    <p className={styles.year}>2020</p>
    <div className={`${styles.work_bundle}`}>
      <Work/>
    </div>

    <p className={styles.year}>2019</p>
    <div className={`${styles.work_bundle}`}></div>
    <p className={styles.year}>1988</p>
    <div className={`${styles.work_bundle}`}></div>
</div>

}
export default WorkYear;