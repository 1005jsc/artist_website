import React from "react"
import { Outlet } from 'react-router-dom';
import Database from '../../../../../services/database';
import styles from "./work_fix.module.css";

type WorkFixProps = {
  databaseService:Database
}




const WorkFix = ({databaseService}:WorkFixProps) => {

  return <article className={styles.containe}>
  <div className={styles.container_quaiquai}>
  <div className={styles.title_container}>
<span className={styles.title}>작품정보 수정하기</span>
</div>
  </div>

<Outlet context={databaseService}/>





</article>

}
export default WorkFix;