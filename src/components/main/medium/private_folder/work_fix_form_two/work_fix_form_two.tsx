import React from "react"
import { useOutletContext } from 'react-router-dom';
import Database from '../../../../../services/database';
import PrivateWork from '../small/private_work/private_work';
import WorkUploadForm from '../work_upload_form/work_upload_form';
import styles from "./work_fix_form_two.module.css";

const WorkFixFormTwo = () => {
  



  return <section className={styles.fix_from_sec}>
  <div className={styles.explanations_container}>
    <h2 className={styles.explanation}>- 수정할 작품을 하나씩 클릭하고 수정하면 됨 </h2>
  </div>

  <div className={styles.works_to_fix_container}>
    <span className={styles.s1}>수정할 작품들</span>

    <div className={styles.grey_container}>

    <div className={`${styles.work_bundle}`}>
      <PrivateWork/>
      <PrivateWork/>
      <PrivateWork/>
      <PrivateWork/>
      <PrivateWork/>
    </div>
    
    


    </div>
    <WorkUploadForm/>

  </div>
























</section>

}
export default WorkFixFormTwo;