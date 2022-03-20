import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './navbar_top.module.css'


const NavbarTop = () => {


  const navigate = useNavigate()

  

  const navigateTo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.path
    if(path){
      navigate(`/home/${path}`)
    }


  }
  

  return <nav className={styles.navbar_top_container}>

  <div className={styles.button_container} >
    <button className={`${styles.introdution} ${styles.top_button}`} data-path="biography" onClick={navigateTo}>작가노트</button>
    <button className={`${styles.work} ${styles.top_button}`} data-path="works" onClick={navigateTo} >작품</button>
    <button className={`${styles.exhibition} ${styles.top_button}`} data-path="exhibitions" onClick={navigateTo} >전시</button>
    <button className={`${styles.critics} ${styles.top_button}`} data-path="critics" onClick={navigateTo} >평론가의 글</button>
    <button className={`${styles.contacts} ${styles.top_button}`} data-path="contacts" onClick={navigateTo} >연락처</button>
    <button className={`${styles.private_space} ${styles.top_button}`} data-path="private" onClick={navigateTo} >작가의 개인공간</button>
  </div>
  
  </nav>

}

export default NavbarTop;