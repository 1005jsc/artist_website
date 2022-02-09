import React from "react"
import { Outlet } from 'react-router-dom';
import Database from '../../../../../services/database';
import styles from "./exhibition_upload.module.css";

type ExhibitionUploadProps={
  databaseService:Database;
}

const ExhibitionUpload = ({databaseService}:ExhibitionUploadProps) => {

  return <article className={styles.containe}>
  <div className={styles.container_quaiquai}>
  <div className={styles.title_container}>
<span className={styles.title}>전시회 업로드하기</span>
</div>
  </div>

<Outlet context={databaseService}/>





</article>

}
export default ExhibitionUpload;