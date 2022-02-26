import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './navbar_left.module.css'
import { myFunctions } from './../../../../common/project_functions';

type NavbarLeftProps = {
  loginState:boolean;
}




const NabvarLeft = ({loginState}:NavbarLeftProps) => {

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
      navigate(`/main/${thisPath}`)
    }
    

  }

  useEffect(() => {
      setEmptyOnClick(myFunctions.checkVacantUrl(url))
      setBiographyOnClick(myFunctions.checkWordFromUrl('biography', url)) 
      setCriticsOnClick(myFunctions.checkWordFromUrl('critics', url))
    

  }, [url])
  


return <nav className={styles.navbar_left}>
  
  <div className={styles.logo_sample}>Logo</div>
  {login&&<span className={styles.loggedin_banner}>로그인 되었습니다 -작가 조용남-</span>
  } 
  <div className={styles.navbar_container}>
    
      <div className={` ${styles.c1} `}>
        <span className={` ${styles.s1} `}data-path="biography" onClick={navigateTo}>작가소개</span>
      
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
  

</nav>

}

export default NabvarLeft;
