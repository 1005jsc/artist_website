import React from "react"
import { useNavigate } from 'react-router-dom';
import styles from "./login_success.module.css";





const LoginSuccess = () => {

  const navigate = useNavigate()

  const navigateTo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.path
    if(path){
      navigate(`/main/private/loggedin/${path}`)
    }
  }


  return <section className={styles.login_success_container}>
    <span className={styles.login_success_banner}>작가 조용남 인증 완료!</span>
    
    <div className={styles.button_container}>
    <button className={styles.square_btn}data-path="work_upload" onClick={navigateTo}>작품 <br/> 업로드하기</button>
    <button className={styles.square_btn}data-path="work_fix" onClick={navigateTo}>작품정보<br/>수정하기</button>
    <button className={styles.square_btn}data-path="exhibition_upload" onClick={navigateTo}>전시회 <br/>업로드하기</button>
    <button className={styles.square_btn}data-path="suggestion_box" onClick={navigateTo}>건의함</button>
    </div>

</section>

}
export default LoginSuccess;