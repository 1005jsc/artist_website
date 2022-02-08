import React from "react"
import PrivateWork from '../private_work/private_work';
import styles from "./private_works_year.module.css";

const PrivateWorksYear = () => {

  return <div className={styles.container3}>
  <div className={styles.work_bundle_container}>
    <p className={styles.year}>2021</p>
    <div className={`${styles.work_bundle}`}>
      <PrivateWork/>
      <PrivateWork/>
      <PrivateWork/>
      <PrivateWork/>
      <PrivateWork/>
    </div>
  </div>


  <div className={styles.work_bundle_container}>
      <p className={styles.year}>2020</p>
      <div className={`${styles.work_bundle}`}>
      <PrivateWork/>
      <PrivateWork/>
      
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
export default PrivateWorksYear;