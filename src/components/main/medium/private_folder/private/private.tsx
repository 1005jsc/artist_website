import React, { useEffect, useState } from "react"
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import { LoginContextType } from '../../../../../common/project_types';
import AuthService from '../../../../../services/auth';
import styles from "./private.module.css";

type PrivateProps = {
  authService: AuthService;
}


const Private = ({authService}:PrivateProps) => {
  const navigateLogin = useNavigate()
  const {handleLogin, loginState} = useOutletContext<LoginContextType>()

  const handleLogout:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    authService.AuthGoogleLogout(() => {
      return navigateLogin('/main')})
  }
  


  return <article className={styles.container}>
  <div className={styles.container2}>
  <div className={styles.title_container}>
<span className={styles.title}>작가의 개인공간</span>
</div>
  {loginState&&<button className={styles.logout} onClick={handleLogout}>로그아웃</button>}  
  <Outlet  context={handleLogin}/>
  </div>
</article> 

}
export default Private;