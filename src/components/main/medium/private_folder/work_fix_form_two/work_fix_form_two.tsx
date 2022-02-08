import React from "react"
import PrivateWork from '../small/private_work/private_work';
import WorkFixForm from '../work_fix_form/work_fix_form';
import styles from "./work_fix_form_two.module.css";

const WorkFixFormTwo = () => {

  return <section className={styles.fix_from_sec}>
  <div className={styles.explanations_container}>
    <h2 className={styles.explanation}>- 수정할 작품을 클릭!</h2>
    <h2 className={styles.explanation}>- 동일한 수정내용을 여러작품에 동시에 입력하고 싶은 경우,<br/> 해당 작품들을 모두 클릭하고 진행하면 동시에 수정이 가능</h2>
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
    <WorkFixForm/>

  </div>
























</section>

}
export default WorkFixFormTwo;