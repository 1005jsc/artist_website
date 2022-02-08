import React, { useEffect, useState } from "react"
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import { myFunctions } from '../../../../../common/project_functions';
import { LoginContextType } from '../../../../../common/project_types';
import AuthService from '../../../../../services/auth';
import styles from "./private.module.css";

type PrivateProps = {
  authService: AuthService;
}


const Private = ({authService}:PrivateProps) => {
  const navigateLogin = useNavigate()
  const {handleLogin, loginState} = useOutletContext<LoginContextType>()
  const [url, setUrl] = useState<string|null>()


  useEffect(() => {
    setUrl(window.location.href)
  })
  const handleLogout:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    authService.AuthGoogleLogout(() => {
      return navigateLogin('/main')})
  }
  
  
  const array1 = ['work_upload', 'work_upload_done', 'work_fix', "work_fix_form_two", "work_fix_done","exhibition_upload", "exhibition_upload_done", "suggestion_box" ]  
  const array2 = array1.map((word)=> {return myFunctions.checkWordFromUrl(word, url)})
  


  return <article className={styles.container}>
    <div className={styles.container2}>
    {!array2.includes(true)&& <>
  <div className={styles.title_container}>
  <span className={styles.title}>작가의 개인공간</span>
  </div>
  {loginState&&<button className={styles.logout} onClick={handleLogout}>로그아웃</button>}  
  </>}

    
  
  <Outlet  context={handleLogin}/>
  </div>
</article> 
}
export default Private;