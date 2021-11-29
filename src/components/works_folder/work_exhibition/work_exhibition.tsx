import React from "react"
import Exhibition from '../../exhibitions_folder/exhibition/exhibition';
import styles from "./work_exhibition.module.css";

const WorkExhibition = () => {

  // 포스터가 클릭되면 works로 다시 이동해서 work_exhibition_works를 보여주게하는 작업은
  // 라우터로 works로 돌아가게 해서 work_exhibiton_works를 보여주게끔 해야 될것 같은데
  // 아직 잘 플랜이 안선다  

  return <div className={styles.work_exhibition_container}>
  <p className={styles.year}>2021</p>
  <p>-포스터를 클릭하시면 전시된 작품들을 확인하실 수 있습니다 -</p>
      <div className={`${styles.work_bundle}`}>
        <Exhibition/>
        
      </div>
      
  </div>

}
export default WorkExhibition;