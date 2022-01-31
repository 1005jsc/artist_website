import React from "react"
import Work from '../work/work';
import styles from "./work_year.module.css";

type WorkYearProps ={

}

const WorkYear = () => {

  return <div className={styles.work_year_container}>
    <div className={styles.work_bundle_container}>
      <p className={styles.year}>2021</p>
      <div className={`${styles.work_bundle}`}>
        <Work/>
        <Work/>
        <Work/>
        <Work/>
        <Work/>
      </div>
    </div>


    <div className={styles.work_bundle_container}>
        <p className={styles.year}>2020</p>
        <div className={`${styles.work_bundle}`}>
          <Work/>
        </div>
    </div>


    <div className={styles.work_bundle_container}>
        <p className={styles.year}>2019</p>
        <div className={`${styles.work_bundle}`}></div>
    </div>


    <div className={styles.work_bundle_container}>
      <p className={styles.year}>1988</p>
      <div className={`${styles.work_bundle}`}></div>
    </div>
</div>

}
export default WorkYear;