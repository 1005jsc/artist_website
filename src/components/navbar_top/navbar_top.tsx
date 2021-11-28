import React from 'react';
import styles from './navbar_top.module.css'

type NavbarTopProps = {
  
}


const NavbarTop = () => {

  return <nav className={styles.navbar_top_container}>

  <div className={styles.button_container}>
    <button className={`${styles.introdution} ${styles.top_button}`}>작가소개</button>
    <button className={`${styles.work} ${styles.top_button}`}>작품</button>
    <button className={`${styles.exhibition} ${styles.top_button}`}>전시</button>
    <button className={`${styles.critics} ${styles.top_button}`}>평론가의 글</button>
    <button className={`${styles.contacts} ${styles.top_button}`}>연락처</button>
    <button className={`${styles.private_space} ${styles.top_button}`}>작가의 개인공간</button>
  </div>
  
  </nav>

}

export default NavbarTop;