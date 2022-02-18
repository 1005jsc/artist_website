import React from "react"
import Work from '../work/work';
import styles from "./work_size.module.css";

const WorkSize = () => {
  // 결국 면적을 기준으로  크기가 큰순, 크기가 작은순으로 나눌것임 
  return <div className={styles.work_size_container}>
      <div className={`${styles.work_bundle}`}>
        {/* <Work/>
        <Work/>
        <Work/>
        <Work/>
        <Work/> */}
      </div>
  </div>

}
export default WorkSize;