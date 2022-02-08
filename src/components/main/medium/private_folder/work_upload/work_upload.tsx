import styles from "./work_upload.module.css";
import WorkUploadForm from '../work_upload_form/work_upload_form';
import { Outlet } from 'react-router-dom';

const WorkUpload = () => {
 




  return <article className={styles.containe}>
    <div className={styles.container_quaiquai}>
    <div className={styles.title_container}>
  <span className={styles.title}>작품 업로드하기</span>
  </div>
    </div>

  <Outlet/>





</article>
}
export default WorkUpload;