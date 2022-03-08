import React from "react"
import styles from "./fullscreen.module.css";
import { useNavigate } from 'react-router-dom';
import  styled  from 'styled-components';

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
      <button className={styles.home_button} onClick={navigateTo}>홈으로 돌아가기 </button>
    </div>
    <div className=""></div>


  </Fullscreen>

}
export default Fullscreen;