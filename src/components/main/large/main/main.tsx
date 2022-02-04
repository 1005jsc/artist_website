import React, { useEffect, useState } from "react"
import AuthService from '../../../../services/auth';
import ContentBox from '../content_box/content_box';
import NabvarLeft from '../navbar_left/navbar_left';
import styles from "./main.module.css";

type MainProps = {
  authService:AuthService;
}


const Main = ({authService}:MainProps) => {

  const [login, setLogin] = useState<boolean>(false)

  useEffect(() => {
    authService.AuthUserCheck((result:any) => {
      if(result){
        
        setLogin(true)
      }else{
        setLogin(false)
      }
    })
    
  
}, [login])

  

const handleLogin = (password:string|number) => {
  
  if(password==process.env.REACT_APP_ART_WEBSITE_PRIVATE_ADMIN_PASSWORD){
    authService.AuthGooglePopupLogin()
    setLogin(true)
    return true
  }else{
    return false
  }
}



  return <section className={styles.main}>
    <div className={styles.left}><NabvarLeft loginState={login}/></div>
    <div className={styles.left_empty}></div>
    <div className={styles.content_box}><ContentBox loginState={login} handleLogin={handleLogin}/></div>

    
</section>

}
export default Main;