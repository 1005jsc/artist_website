import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { myFunctions } from '../../../../common/project_functions';
import styles from "./navbar_left_inside.module.css";


type NavbarLeftInsideProps = {
  loginState:boolean
}



const NavbarLeftInside = ({loginState}:NavbarLeftInsideProps) => {

  const [emptyOnClick, setEmptyOnClick] = useState<boolean|undefined>(true)
  const [biographyOnClick, setBiographyOnClick]= useState<boolean|undefined>(true)
  const [criticsOnClick, setCriticsOnClick]= useState<boolean|undefined>(false)
  const [url, setUrl] = useState<string|null>()

  useEffect(() => {
    setUrl(window.location.href)
  })

 

  const navigate = useNavigate()

  const login = loginState

  const navigateTo:React.MouseEventHandler<HTMLSpanElement> = (e) => {
    e.preventDefault()
    const thisPath = e.currentTarget.dataset.path
    
    if(thisPath){
      navigate(`/home/${thisPath}`)
    }
    

  }

  useEffect(() => {
      setEmptyOnClick(myFunctions.checkVacantUrl(url))
      setBiographyOnClick(myFunctions.checkWordFromUrl('biography', url)) 
      setCriticsOnClick(myFunctions.checkWordFromUrl('critics', url))
    

  }, [url])

  const navigateToTwo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const thisPath = e.currentTarget.dataset.path
    
    if(thisPath === '/'){
      navigate(`/`)
    }else if(thisPath === 'introduction'){
      navigate(`/introduction?page=1`)
    }



  }
  

  return <>
  
  <div className={styles.logo_sample}>Logo</div>
  {login&&<span className={styles.loggedin_banner}>로그인 되었습니다 -작가 조용남-</span>}
 
<div className={styles.navbar_container}>
  
    <div className={` ${styles.c1} `}>
      <span className={` ${styles.s1} `}data-path="biography" onClick={navigateTo}>작가노트</span>
    
      {(emptyOnClick||biographyOnClick)&&<div className={styles.c2}>
        <span className={`${styles.s2}`}data-path="biography/note" onClick={navigateTo}>- 작가노트</span>
        <span className={`${styles.s2}`}data-path="biography/bio" onClick={navigateTo}>- 작가연혁</span>

      </div>

      }        

    </div>

    <div className={` ${styles.c1} `}>
    
      <span className={`${styles.s1} `} data-path="works" onClick={navigateTo}>작품</span>
    </div>
    <div className={` ${styles.c1} `}>
      <span className={`${styles.s1}`} data-path="exhibitions" onClick={navigateTo}>전시</span>
    </div>
    
    <div className={`${styles.critics} ${styles.c1} `}>
      <span className={`${styles.critics_left} ${styles.s1}`} data-path="critics" onClick={navigateTo}> 평론가의 글</span>
      
      {criticsOnClick&&<div className={styles.c2}>
        <span className={`${styles.s2}`} data-path="critics" onClick={navigateTo}>- 시간속에 담아낸 내면의 추상언어 &lt;조인호&gt;</span>
      </div>}

   
      

    </div>

    <div className={` ${styles.c1} `}>
      <span className={`${styles.contacts_left} ${styles.s1}`} data-path="contacts" onClick={navigateTo}>연락처</span>
    </div>

</div>


  <div className={styles.go_back_div}>
    <div className={` ${styles.b1} `}>
      <button className={`${styles.f1}`} data-path="/" onClick={navigateToTwo}>메인으로 돌아가기</button>
    </div>
    <div className={` ${styles.b1} `}>
      <button className={`${styles.f2}`} data-path="introduction" onClick={navigateToTwo}>작가, 작품소개 다시보기</button>
    </div>

</div>

</>
}
export default NavbarLeftInside;