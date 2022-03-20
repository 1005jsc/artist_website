import React from "react"
import styles from "./work_upload_done.module.css";
import { useNavigate } from 'react-router-dom';

const WorkUploadDone = () => {
  const navigate = useNavigate()



  const handleClickOne:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    navigate('/home/works')


  }

  const handleClickTwo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    navigate('/home/private/loggedin/work_upload/')


  }




  return <section className={styles.work_upload_done}>
    <span className={styles.notion}>작품 업로드가 완료됬네<br/> 작품에 가서 이상없는가 확인하소</span>

  <div className={styles.button_container}>
    <button className={styles.navigate_to_work_btn} onClick={handleClickOne}>작품 확인하러 가기</button>
    <button className={styles.navigate_to_work_btn} onClick={handleClickTwo}>다른 작품도 업로드하러 가기</button>
  </div>


  </section>

}
export default WorkUploadDone;