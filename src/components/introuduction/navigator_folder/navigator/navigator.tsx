import React, { useEffect, useRef, useState } from "react"
import styles from './navigator.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as Pamphlet from '../../intro_work_folder/pamphlet_template/pamphlet_designs';
import { NavigatorSection } from './navigator.style';
import { totalIntroductionPageCount } from './../../../../index';

const Navigator = () => {

  const [searchParams, setSearchParmas] = useSearchParams()
  const page = searchParams.get('page')
  const totalPage = totalIntroductionPageCount
  
  const navigate = useNavigate()
  const [onHover, setOnHover] = useState<boolean>(true)

  const navigateTo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.path
    if(path === 'front') {
      navigate(`/`)

    }else if(path){
      navigate(`/${path}`)
    }
  }


  const [pageNow, setPageNow] = useState<number>(page?parseInt(page):1)



  const arrowButtonNavigateTo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.path
    if(path){
      const moveTo = parseInt(path)
      let pageYes = pageNow 
      if(1<=pageYes+ moveTo&&pageYes+ moveTo <= totalPage){
        pageYes = pageYes + moveTo
        navigate(`/introduction?page=${pageYes}`)
        setPageNow(pageYes)
      }else if(pageYes+ moveTo <= 0){
        pageYes = 1
        navigate(`/introduction?page=${pageYes}`)
        
        setPageNow(pageYes)
      }else if(pageYes+ moveTo > totalPage ){
        pageYes = totalPage
        navigate(`/introduction?page=${pageYes}`)

        setPageNow(pageYes)
      }

    }

  }
  












  return <NavigatorSection >
    <div className={styles.navbar}>

      {page==='1'&& <Pamphlet.No1/>}
      {page==='2'&& <Pamphlet.No2/>}
      {page==='3'&& <Pamphlet.No3/>}
      {page==='4'&& <Pamphlet.No4/>}
      {page==='5'&& <Pamphlet.No5/>}
      {page==='6'&& <Pamphlet.No6/>}
      {page==='7'&& <Pamphlet.No7/>}
      {page==='8'&& <Pamphlet.No8/>}
      {page==='9'&& <Pamphlet.No9/>}
      {page==='10'&& <Pamphlet.No10/>}
      {page==='11'&& <Pamphlet.No11/>}
      {page==='12'&& <Pamphlet.No12/>}
      {page==='13'&& <Pamphlet.No13/>}
      {page==='14'&& <Pamphlet.No14/>}
      {page==='15'&& <Pamphlet.No15/>}
      {page==='16'&& <Pamphlet.No16/>}
      {page==='17'&& <Pamphlet.No17/>}
      {page==='18'&& <Pamphlet.No18/>}
      {page==='19'&& <Pamphlet.No19/>}
      {page==='20'&& <Pamphlet.No20/>}
      {page==='21'&& <Pamphlet.No21/>}
      <div className={onHover?`${styles.navbar_top}`:`${styles.navbar_top} ${styles.navbar_top_off}`}>
        {onHover&&<button className={styles.button_top} >조용남 작가 웹사이트</button>}

      </div>
      <div className={onHover?`${styles.navbar_bottom}`:`${styles.navbar_bottom} ${styles.navbar_bottom_off}`} onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
    {onHover&&<>
    <button className={styles.button_bottom} data-path="front" onClick={navigateTo}>메인 화면으로 가기</button>
    
    
    <div className={styles.navigator_container}>
      <button className={styles.navigator_button}   data-path="-10" onClick={arrowButtonNavigateTo}>
        <img src="/icons/sharp_left_arrow_carot.svg" alt="" className={styles.arrow_left} />
      </button>
      <button className={styles.navigator_button}  data-path="-1"onClick={arrowButtonNavigateTo}>
        <img src="/icons/left_arrow_carot.svg" alt="" className={styles.arrow_left} />
      </button>

      <div className={styles.page_indicator_div}>
        <span className={styles.page_now}>{pageNow} / {totalPage}</span>
      </div>

      
      <button className={styles.navigator_button} data-path="1"onClick={arrowButtonNavigateTo}>
        <img src="/icons/right_arrow_carot.svg" alt="" className={styles.arrow_right} />
      </button>
      <button className={styles.navigator_button} data-path="10"onClick={arrowButtonNavigateTo}>
        <img src="/icons/sharp_right_arrow_carot.svg" alt="" className={styles.arrow_right} />
      </button>
    </div>
    
    
    
    
    <button className={styles.button_bottom} data-path="main" onClick={navigateTo}>홈으로 가기</button></>}

      </div>

    
    </div>
    
    
    
    
    
      
    </NavigatorSection> 
}
export default Navigator;




