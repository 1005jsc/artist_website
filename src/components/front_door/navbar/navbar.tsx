import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from 'react-router-dom';
import styles from "./navbar.module.css";

const Navbar = () => {

  const [navbarVisible, setNavbarVisible ] = useState<boolean>(false)
  const navigate = useNavigate()
  const [onHover, setOnHover] = useState<boolean>(true)

  const navigateTo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.path
    if(path){
      navigate(`/${path}`)
    }
  }


  useEffect(() => {
    setTimeout(() => {setNavbarVisible(true)}, 3000)
  }, [])






  return <nav className={styles.navbar}>
    {navbarVisible&&<>
  <div  className={` ${styles.navbar_both} ` + 
    (onHover ? `${styles.navbar_top}` : `${styles.top_off_hover}`) } 
    >
    {onHover&&<button className={styles.button_top} data-path="main" onClick={navigateTo} >조용남 작가 웹사이트</button>}
  </div>


  <div className={`${styles.navbar_both} ` + 
    (onHover ? `${styles.navbar_bottom}` : `${styles.bottom_off_hover}`)} 
    onMouseEnter={() => setOnHover(true)}
  onMouseLeave={() => setOnHover(false)}>
    {onHover&&<>
    <button className={`${styles.button_bottom} `} data-path="introduction?page=1" onClick={navigateTo}>작가, 작품소개 보러가기</button>
    <button className={`${styles.button_bottom} `} data-path="main" onClick={navigateTo}>홈으로 바로가기</button></>}
    </div>
  </>}
    



</nav>

}
export default Navbar;