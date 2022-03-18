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
      <div className={onHover?`${styles.navbar_top}`:`${styles.navbar_top} ${styles.navbar_top_off}`}>
        {onHover&&<button className={styles.button_top} data-path="main" onClick={navigateTo} >조용남 작가 웹사이트</button>}

      </div>
      <div className={onHover?`${styles.navbar_bottom}`:`${styles.navbar_bottom} ${styles.navbar_bottom_off}`} 
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}>
{onHover&&<>
    <button className={`${styles.button_bottom} ${styles.nav_to_opening}`} data-path="introduction?page=1" onClick={navigateTo}>작가, 작품소개 보러가기</button>
    <button className={`${styles.button_bottom} ${styles.nav_to_main}`} data-path="main" onClick={navigateTo}>홈으로 바로가기</button></>}

      </div>

    
    </div>
    
    
    
    
   
      
    </NavigatorSection> 
}
export default Navigator;




