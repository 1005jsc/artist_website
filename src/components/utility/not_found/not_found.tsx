import React from "react"
import styles from "./not_found.module.css";
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const navigate = useNavigate()

  const handleNavigate:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.path
    if(path==='main'){
      navigate(`/`)
    }else if(path === 'home'){
      navigate(`/home`)

    }
    



  }

  return <section className={styles.not_found_section}>

  <h1 className={styles.h1}>존재하지 않는 페이지입니다</h1>
  <div className={styles.button_container}>
  <button className={styles.button} data-path='main'onClick={handleNavigate}>메인으로 돌아가기 </button>
  <button className={styles.button} data-path='home'onClick={handleNavigate}>홈으로 돌아가기 </button>

  </div>
  
</section>

}
export default NotFound;