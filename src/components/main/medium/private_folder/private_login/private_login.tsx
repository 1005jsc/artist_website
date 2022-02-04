import React, { useEffect, useRef, useState } from "react"
import styles from "./private_login.module.css";
import 'dotenv/config'
import { useNavigate, useOutletContext } from 'react-router-dom';
import AuthService from './../../../../../services/auth';
import { HandleLoginType, LoginContextType } from '../../../../../common/project_types';


type PrivateLoginProps = {
  authService : AuthService;  
}



const PrivateLogin = ({authService}:PrivateLoginProps) => {
  const [passwordCheck, setPasswordCheck] = useState<boolean>(true)
  const inputRef = useRef<HTMLInputElement|null>(null)
  const handleLogin = useOutletContext<HandleLoginType>()
  const navigateLogin = useNavigate()

  useEffect(() => {    
    authService.AuthUserCheck((result:any) => {
    if(result){
      navigateLogin('loggedin')
    }else{
      return 
    } 
  })
  })




  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    let inputValue
    if(inputRef.current){
      inputValue = inputRef.current.value
      let password:boolean = handleLogin(inputValue)
      setPasswordCheck(password)
    }else{
      inputValue = null
    }
    


    if(inputRef.current){
      inputRef.current.value=''
    }

  }



  return <section className={styles.login}>
  <div className={styles.private_login_container}>
  <span className={styles.notice}>이곳은 작가님 본인만 출입 할 수 있는 공간입니다.</span>

  <span className={styles.s1}>작가 인증 키</span>
  <form className={styles.for} action="" onSubmit={handleSubmit}>
  <input ref={inputRef}className={styles.login_input} type="password" placeholder='키를 입력하세요' />
  <input className={styles.submit_button}type="submit" value="제출" />
  </form>

  </div>
  
  {(!passwordCheck)&&<span className={styles.notice_wrong_password}>잘못된 인증 키 입니다</span>}
</section>

}
export default PrivateLogin;