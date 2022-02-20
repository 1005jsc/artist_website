import React from "react"
import WorkImageUpload from '../../../../../services/work_image_uploads';
import WorkUploadForm from '../work_upload_form/work_upload_form';
import styles from "./work_fix_form_two.module.css";

type WorkFixFormTwo = {
  workImageUploadService:WorkImageUpload;

}

const WorkFixFormTwo = ({workImageUploadService: workImageUploadService}:WorkFixFormTwo) => {
  



  return <section className={styles.fix_from_sec}>
  <div className={styles.explanations_container}>
    <h2 className={styles.explanation}>- 수정할 작품을 하나씩 클릭하고 수정하면 됨 </h2>
  </div>

  <div className={styles.works_to_fix_container}>
    <span className={styles.s1}>수정할 작품들</span>

    <div className={styles.grey_container}>

    <div className={`${styles.work_bundle}`}>
      {/* <WorkFixSelectionWork/>
      <WorkFixSelectionWork/>
      <WorkFixSelectionWork/>
      <WorkFixSelectionWork/>
      <WorkFixSelectionWork/> */}
    </div>
    
    


    </div>
    <WorkUploadForm workImageUploadService={workImageUploadService}/>

  </div>
























</section>

}
export default WorkFixFormTwo;