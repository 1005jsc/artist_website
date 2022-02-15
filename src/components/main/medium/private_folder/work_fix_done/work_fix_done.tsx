import React from "react"
import styles from "./work_fix_done.module.css";
import { useNavigate } from 'react-router-dom';

const WorkFixDone = () => {

  const navigate = useNavigate()



  const handleClickOne:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    navigate('/main/works', {replace:true})


  }

  const handleClickTwo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    navigate('/main/private/loggedin/work_fix/', {replace:true})


  }




  return <section className={styles.work_upload_done}>
    <span className={styles.notion}>작품 수정이 완료됬네<br/> 작품에 가서 이상없는가 확인하소</span>

  <div className={styles.button_container}>
    <button className={styles.navigate_to_work_btn} onClick={handleClickOne}>수정된 작품 확인하러 가기</button>
    <button className={styles.navigate_to_work_btn} onClick={handleClickTwo}>다른 작품도 수정하러 가기</button>
  </div>


  </section>

}
export default WorkFixDone;