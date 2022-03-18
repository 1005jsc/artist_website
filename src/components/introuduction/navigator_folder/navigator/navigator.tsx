import React, { useEffect, useRef, useState } from "react"
import styles from './navigator.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as Pamphlet from '../../intro_work_folder/pamphlet_template/pamphlet_designs';
import { NavigatorSection } from './navigator.style';

const Navigator = () => {

  const [searchParams, setSearchParmas] = useSearchParams()
  const page = searchParams.get('page')
  
  
  const navigate = useNavigate()
  const [onHover, setOnHover] = useState<boolean>(true)

  const navigateTo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.path
    if(path){
      navigate(`/${path}`)
    }
  }





  












  return <NavigatorSection >
    <div className={styles.navbar}>

      {page==='1'&& <Pamphlet.No1/>}
      {page==='2'&& <Pamphlet.No2/>}
      {page==='3'&& <Pamphlet.No3/>}
      {page==='4'&& <Pamphlet.No4/>}
      <div className={styles.check}></div>
      <div className={onHover?`${styles.navbar_top}`:`${styles.navbar_top} ${styles.navbar_top_off}`}>
        {onHover&&<button className={styles.button_top} data-path="main" onClick={navigateTo} >조용남 작가 웹사이트</button>}

      </div>
      <div className={onHover?`${styles.navbar_bottom}`:`${styles.navbar_bottom} ${styles.navbar_bottom_off}`} onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
    {onHover&&<>
    <button className={styles.button_bottom} data-path="introduction?page=1" onClick={navigateTo}>메인 화면으로 가기</button>
    
    
    <div className={styles.navigator_container}>
      <button className={styles.navigator_button}>
        <img src="/icons/sharp_left_arrow_carot.svg" alt="" className={styles.arrow} />
      </button>
      <button className={styles.navigator_button}>
        <img src="/icons/left_arrow_carot.svg" alt="" className={styles.arrow} />
      </button>

      <div className={styles.page_indicator_div}>
        <span className={styles.page_now}>24 / 28</span>
      </div>

      
      <button className={styles.navigator_button}>
        <img src="/icons/right_arrow_carot.svg" alt="" className={styles.arrow} />
      </button>
      <button className={styles.navigator_button}>
        <img src="/icons/sharp_right_arrow_carot.svg" alt="" className={styles.arrow} />
      </button>
    </div>
    
    
    
    
    <button className={styles.button_bottom} data-path="main" onClick={navigateTo}>홈으로 가기</button></>}

      </div>

    
    </div>
    
    
    
    
    
      
    </NavigatorSection> 
}
export default Navigator;




