import React from "react"
import styles from "./fullscreen.module.css";
import { useNavigate } from 'react-router-dom';
import  styled  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'




const Fullscreen = () => {


  const Fullscreen = styled.div`
  display: flex;
	// justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 99;
	// max-width: 144rem;
	background-color: rgba(0, 0, 0);
  
  `


  const navigate = useNavigate()
  
  const navigateTo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    navigate(`/main/works`)
  }











  return <Fullscreen>
    <div className={styles.div_for_space}></div>
    <img className={styles.work_img} src="/img/works_img/work_sample4.jpg" alt="" />
    <div className={styles.div_for_space}>
      <div className={styles.remote_control}>
          <button className={styles.menu_button} onClick={navigateTo}>menu</button>
          <div className={styles.menu}>
              <button className={styles.menu_option}>자동재생</button>
                <div className={styles.black_line}></div>
              <button className={styles.menu_option}>홈 화면</button>
          </div>
          <div className={styles.arrows}>
              <button className={styles.arrow}><img className={styles.left}src="/icons/left_arrow_carot.svg" alt="" /> </button>
              <button className={styles.arrow}><img className={styles.right}src="/icons/right_arrow_carot.svg" alt="" /></button>
          </div>
      </div>

    </div>
    <div className=""></div>


  </Fullscreen>

}
export default Fullscreen;