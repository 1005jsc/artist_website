import React from "react"
import { useNavigate } from 'react-router-dom';
import styles from "./exhibition_upload_done.module.css";

const ExhibitionUploadDone = () => {
  const navigate = useNavigate()



  const handleClickOne:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    navigate('/main/exhibitions', {replace:true})


  }

  const handleClickTwo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    navigate('/main/private/loggedin/', {replace:true})


  }




  return <section className={styles.work_upload_done}>
    <span className={styles.notion}>전시회 업로드가 완료됬네<br/> 전시에 가서 이상없는가 확인하소</span>

  <div className={styles.button_container}>
    <button className={styles.navigate_to_work_btn} onClick={handleClickOne}>전시 확인하러 가기</button>
    <button className={styles.navigate_to_work_btn} onClick={handleClickTwo}>로그인 메뉴로 가기</button>
  </div>


  </section>


}
export default ExhibitionUploadDone;